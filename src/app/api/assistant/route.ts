import { NextRequest, NextResponse } from 'next/server';
import { BAROUBA_KNOWLEDGE, SYSTEM_PROMPT_BAROUBA } from '@/lib/ai/baroubaKnowledge';
import { WHATSAPP_NUMBER } from '@/lib/data';

interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const userMessage: string = (body.message || '').trim();
    const history: ChatMessage[] = Array.isArray(body.history) ? body.history : [];

    if (!userMessage) {
      return NextResponse.json(
        { error: 'Le message ne peut pas être vide.' },
        { status: 400 }
      );
    }

    // 1. Check for API Keys in order of priority: OpenAI -> Gemini -> Anthropic
    const openaiKey = process.env.OPENAI_API_KEY;
    const geminiKey = process.env.GEMINI_API_KEY;
    const anthropicKey = process.env.ANTHROPIC_API_KEY;

    // --- Provider 1: OpenAI ---
    if (openaiKey) {
      try {
        const messages = [
          { role: 'system', content: SYSTEM_PROMPT_BAROUBA },
          ...history.slice(-6).map((h) => ({ role: h.role, content: h.content })),
          { role: 'user', content: userMessage },
        ];

        const res = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${openaiKey}`,
          },
          body: JSON.stringify({
            model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
            messages,
            temperature: 0.2,
            max_tokens: 650,
          }),
        });

        if (res.ok) {
          const data = await res.json();
          const reply = data.choices?.[0]?.message?.content;
          if (reply) {
            return NextResponse.json({ reply, provider: 'openai', source: 'llm' });
          }
        }
      } catch (err) {
        console.warn('OpenAI API call failed, falling back to local knowledge engine:', err);
      }
    }

    // --- Provider 2: Gemini ---
    if (geminiKey) {
      try {
        const contents = [
          {
            role: 'user',
            parts: [{ text: `${SYSTEM_PROMPT_BAROUBA}\n\nQuestion de l'utilisateur: ${userMessage}` }],
          },
        ];

        const res = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contents }),
          }
        );

        if (res.ok) {
          const data = await res.json();
          const reply = data.candidates?.[0]?.content?.parts?.[0]?.text;
          if (reply) {
            return NextResponse.json({ reply, provider: 'gemini', source: 'llm' });
          }
        }
      } catch (err) {
        console.warn('Gemini API call failed, falling back:', err);
      }
    }

    // --- Provider 3: Anthropic Claude ---
    if (anthropicKey) {
      try {
        const res = await fetch('https://api.anthropic.com/v1/messages', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': anthropicKey,
            'anthropic-version': '2023-06-01',
          },
          body: JSON.stringify({
            model: 'claude-3-5-sonnet-20241022',
            max_tokens: 650,
            system: SYSTEM_PROMPT_BAROUBA,
            messages: [{ role: 'user', content: userMessage }],
          }),
        });

        if (res.ok) {
          const data = await res.json();
          const reply = data.content?.[0]?.text;
          if (reply) {
            return NextResponse.json({ reply, provider: 'anthropic', source: 'llm' });
          }
        }
      } catch (err) {
        console.warn('Anthropic API call failed, falling back:', err);
      }
    }

    // --- Fallback Déterministe Zéro-Hallucination (Base de Connaissances Locale) ---
    const localReply = searchLocalKnowledge(userMessage);
    return NextResponse.json({
      reply: localReply.text,
      ctaText: localReply.ctaText,
      ctaLink: localReply.ctaLink,
      provider: 'barouba-deterministic-rag',
      source: 'knowledge_base',
    });
  } catch (error) {
    console.error('Erreur API Assistant:', error);
    return NextResponse.json(
      {
        reply:
          "Bonjour ! Notre assistant rencontre une brève difficulté de connexion. Vous pouvez échanger directement avec notre direction technique sur WhatsApp pour une réponse immédiate sous 15 minutes.",
        provider: 'fallback',
        source: 'error',
      },
      { status: 500 }
    );
  }
}

// Moteur de recherche sémantique déterministe local
function searchLocalKnowledge(query: string): { text: string; ctaText?: string; ctaLink?: string } {
  const q = query.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const words = q.split(/\s+/).filter((w) => w.length > 2);

  // Intentions salutations
  if (/^(bonjour|salut|bonsoir|coucou|hello|hi|hey|bienvenue)/.test(q)) {
    return {
      text: "Bonjour et bienvenue chez **BAROUBA GROUP** ! Je suis votre conseiller digital virtuel, entraîné sur les données officielles de l'agence à Ouagadougou. Je peux vous renseigner sur nos 8 services (Web Next.js, Community Management, Ads, WhatsApp, IA), notre approche tarifaire sur-mesure ou nos formations certifiantes. Que souhaitez-vous savoir ?",
      ctaText: "Découvrir nos services",
      ctaLink: "/services",
    };
  }

  // Scoring par mots-clés
  let bestMatch: (typeof BAROUBA_KNOWLEDGE)[0] | null = null;
  let highestScore = 0;

  for (const item of BAROUBA_KNOWLEDGE) {
    let score = 0;
    for (const kw of item.keywords) {
      const cleanKw = kw.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      if (q.includes(cleanKw)) {
        score += 3;
      }
      for (const w of words) {
        if (cleanKw === w) score += 2;
        else if (cleanKw.includes(w) || w.includes(cleanKw)) score += 1;
      }
    }

    if (score > highestScore) {
      highestScore = score;
      bestMatch = item;
    }
  }

  if (bestMatch && highestScore >= 2) {
    return {
      text: bestMatch.answer,
      ctaText: bestMatch.ctaText,
      ctaLink: bestMatch.ctaLink,
    };
  }

  // Réponse de repli guidée et sécurisée (Zéro Hallucination)
  return {
    text: `Chez **BAROUBA GROUP**, nous accompagnons les entreprises à Ouagadougou et en Afrique de l'Ouest dans leur croissance numérique : conception web Next.js, gestion de pages et Community Management, publicité Meta & TikTok Ads, tunnels WhatsApp et intégration d'IA métier.\n\nToutes nos interventions sont **100% sur-mesure**. Pour vous apporter une réponse personnalisée et chiffrée selon vos besoins spécifiques, je vous invite à échanger directement avec nos consultants seniors sur WhatsApp.`,
    ctaText: "Discuter avec un consultant sur WhatsApp",
    ctaLink: `https://wa.me/${WHATSAPP_NUMBER}?text=Bonjour%20BAROUBA%20GROUP,%20je%20souhaite%20des%20renseignements%20sur%20mesure.`,
  };
}
