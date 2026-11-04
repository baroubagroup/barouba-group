'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Sparkles, X, Send, Bot, User, ArrowRight, MessageSquare, Minimize2, ExternalLink } from 'lucide-react';
import { WHATSAPP_NUMBER } from '@/lib/data';
import styles from './BaroubaAssistant.module.css';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  ctaText?: string;
  ctaLink?: string;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: 'msg-welcome',
    role: 'assistant',
    text: "Bonjour ! Je suis **Barouba AI Advisor**, l'assistant d'ingénierie et de conseil stratégique de **BAROUBA GROUP SARL** (Siège Social à Bobo-Dioulasso, bureaux à Ouagadougou).\n\nJe suis entraîné sur les données officielles du groupe pour vous guider en toute transparence : nos pôles d'expertise digitale, nos formations professionnelles certifiantes ou nos devis sur mesure.\n\nComment puis-je vous orienter aujourd'hui ?",
  },
];

const SUGGESTED_PROMPTS = [
  "Quels sont vos services d'ingénierie digitale ?",
  "Comment fonctionne le Community Management ?",
  "Quels sont vos tarifs et devis en FCFA ?",
  "Proposez-vous des formations professionnelles ?",
  "Où se trouvent vos bureaux à Bobo et Ouaga ?",
];

export default function BaroubaAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const feedEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      feedEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isLoading]);

  const sendMessage = async (textToSend?: string) => {
    const text = (textToSend || input).trim();
    if (!text || isLoading) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      text,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const historyPayload = messages.map((m) => ({
        role: m.role,
        content: m.text,
      }));

      const res = await fetch('/api/assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, history: historyPayload }),
      });

      const data = await res.json();
      const botMsg: Message = {
        id: `bot-${Date.now()}`,
        role: 'assistant',
        text: data.reply || "Je suis à votre écoute pour toute question sur BAROUBA GROUP.",
        ctaText: data.ctaText,
        ctaLink: data.ctaLink,
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error("Erreur lors de l'échange avec l'assistant:", err);
      const errorMsg: Message = {
        id: `bot-err-${Date.now()}`,
        role: 'assistant',
        text: "Une brève interruption réseau est survenue. Vous pouvez échanger directement avec notre équipe sur WhatsApp pour une réponse immédiate.",
        ctaText: "Ouvrir WhatsApp",
        ctaLink: `https://wa.me/${WHATSAPP_NUMBER}`,
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className={styles.triggerBtn}
          aria-label="Discuter avec l'assistant IA Barouba"
        >
          <div className={styles.iconWrap}>
            <Image 
              src="/logo-or.svg" 
              alt="BAROUBA GROUP" 
              width={26} 
              height={26} 
              className={styles.assistantTriggerLogo}
            />
            <span className={styles.onlinePulse} />
          </div>
          <div className={styles.triggerText}>
            <span className={styles.triggerTitle}>Barouba AI Advisor</span>
            <span className={styles.triggerSubtitle}>Conseiller Virtuel • 24/7</span>
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className={styles.chatWindow} role="dialog" aria-modal="true" aria-label="Chat avec l'assistant IA">
          {/* Header */}
          <div className={styles.chatHeader}>
            <div className={styles.headerIdentity}>
              <div className={styles.headerEmblem}>
                <Image 
                  src="/logo-or.svg" 
                  alt="BAROUBA GROUP" 
                  width={32} 
                  height={32} 
                  className={styles.assistantHeaderLogo}
                />
              </div>
              <div>
                <h3 className={styles.headerTitle}>Barouba AI Advisor</h3>
                <div className={styles.headerStatus}>
                  <span className={styles.statusDot} />
                  <span>Données Officielles • Zéro Hallucination</span>
                </div>
              </div>
            </div>

            <div className={styles.headerActions}>
              <button
                onClick={() => setIsOpen(false)}
                className={styles.headerBtn}
                aria-label="Fermer l'assistant"
                title="Fermer"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Messages Feed */}
          <div className={styles.messagesFeed}>
            {messages.map((msg) => {
              const isUser = msg.role === 'user';
              return (
                <div key={msg.id} className={`${styles.messageRow} ${isUser ? styles.userRow : ''}`}>
                  {!isUser && (
                    <div className={styles.botAvatar}>
                      <Image 
                        src="/logo-or.svg" 
                        alt="BAROUBA" 
                        width={22} 
                        height={22} 
                        className={styles.botAvatarLogo}
                      />
                    </div>
                  )}

                  <div className={`${styles.messageBubble} ${isUser ? styles.userBubble : styles.botBubble}`}>
                    {renderFormattedText(msg.text)}

                    {msg.ctaLink && (
                      <div>
                        <a
                          href={msg.ctaLink}
                          target={msg.ctaLink.startsWith('http') ? '_blank' : '_self'}
                          rel={msg.ctaLink.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className={styles.bubbleCta}
                        >
                          <span>{msg.ctaText || 'En savoir plus'}</span>
                          <ArrowRight size={13} />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Quick Suggested Prompts when only welcome message */}
            {messages.length === 1 && (
              <div className={styles.quickPrompts}>
                <div className={styles.promptTitle}>Suggestions fréquentes :</div>
                {SUGGESTED_PROMPTS.map((prompt, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => sendMessage(prompt)}
                    className={styles.promptPill}
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            )}

            {/* Typing Loader */}
            {isLoading && (
              <div className={styles.messageRow}>
                <div className={styles.botAvatar}>
                  <Image 
                    src="/logo-or.svg" 
                    alt="BAROUBA" 
                    width={22} 
                    height={22} 
                    className={styles.botAvatarLogo}
                  />
                </div>
                <div className={styles.typingRow}>
                  <span className={styles.typingDot} />
                  <span className={styles.typingDot} />
                  <span className={styles.typingDot} />
                </div>
              </div>
            )}

            <div ref={feedEndRef} />
          </div>

          {/* Escalation to Human WhatsApp */}
          <div className={styles.escalationBar}>
            <span className={styles.escalationText}>Besoin d'un devis chiffré ?</span>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Bonjour BAROUBA GROUP, je souhaite échanger directement avec un consultant après avoir consulté votre assistant IA.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.escalationBtn}
            >
              <WhatsAppIcon size={14} />
              <span>Parler à un humain sur WhatsApp</span>
            </a>
          </div>

          {/* Input Box */}
          <div className={styles.inputArea}>
            <input
              type="text"
              placeholder="Posez votre question sur nos services..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isLoading}
              className={styles.chatInput}
            />
            <button
              onClick={() => sendMessage()}
              disabled={!input.trim() || isLoading}
              className={styles.sendBtn}
              aria-label="Envoyer"
            >
              <Send size={15} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

// Simple formatter for bold text and newlines
function renderFormattedText(text: string) {
  const lines = text.split('\n');
  return lines.map((line, lineIdx) => {
    const parts = line.split(/(\*\*.*?\*\*)/g);
    return (
      <span key={lineIdx}>
        {parts.map((part, partIdx) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={partIdx}>{part.slice(2, -2)}</strong>;
          }
          return part;
        })}
        {lineIdx < lines.length - 1 && <br />}
      </span>
    );
  });
}

function WhatsAppIcon({ size = 14 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}
