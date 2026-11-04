import { NextRequest, NextResponse } from 'next/server';
import { getAllLeads, createLead, updateLead, deleteLead } from '@/lib/leadsStore';

export async function GET() {
  try {
    const leads = getAllLeads();
    return NextResponse.json({ success: true, leads });
  } catch (error) {
    console.error('Erreur API GET Leads:', error);
    return NextResponse.json({ error: 'Impossible de récupérer les leads.' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.name && !body.phone) {
      return NextResponse.json({ error: 'Le nom ou le numéro de téléphone est obligatoire.' }, { status: 400 });
    }

    const newLead = createLead({
      name: body.name || 'Prospect Anonyme',
      company: body.company || 'Entreprise Partenaire',
      phone: body.phone || 'Non renseigné',
      email: body.email || 'Non renseigné',
      service: body.service || 'Demande de Cadrage Digital',
      budget: body.budget || 'À cadrer avec le consultant',
      maturity: body.maturity || 'En réflexion',
      details: body.details || '',
      source: body.source || 'Formulaire Devis',
      country: body.country || 'Burkina Faso',
      city: body.city || 'Ouagadougou',
      estimatedValueFCFA: body.estimatedValueFCFA || 750000,
      internalNotes: body.internalNotes || '',
    });

    return NextResponse.json({ success: true, lead: newLead });
  } catch (error) {
    console.error('Erreur API POST Lead:', error);
    return NextResponse.json({ error: 'Erreur lors de l’enregistrement du devis.' }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, status, internalNotes } = body;

    if (!id) {
      return NextResponse.json({ error: 'Identifiant du lead manquant.' }, { status: 400 });
    }

    const updated = updateLead(id, {
      ...(status ? { status } : {}),
      ...(internalNotes !== undefined ? { internalNotes } : {}),
    });

    if (!updated) {
      return NextResponse.json({ error: 'Lead introuvable.' }, { status: 404 });
    }

    return NextResponse.json({ success: true, lead: updated });
  } catch (error) {
    console.error('Erreur API PATCH Lead:', error);
    return NextResponse.json({ error: 'Erreur lors de la mise à jour.' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Identifiant requis.' }, { status: 400 });
    }

    const ok = deleteLead(id);
    return NextResponse.json({ success: ok });
  } catch (error) {
    console.error('Erreur API DELETE Lead:', error);
    return NextResponse.json({ error: 'Erreur de suppression.' }, { status: 500 });
  }
}
