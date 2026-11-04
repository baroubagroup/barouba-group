import { NextResponse } from 'next/server';
import { getAnalyticsSummary } from '@/lib/analyticsStore';
import { getAllLeads } from '@/lib/leadsStore';

export async function GET() {
  try {
    const summary = getAnalyticsSummary();
    const leads = getAllLeads();

    // Dynamically calculate pipeline stats
    const totalPipelineFCFA = leads
      .filter((l) => l.status !== 'archive')
      .reduce((acc, curr) => acc + (curr.estimatedValueFCFA || 0), 0);

    const signedRevenueFCFA = leads
      .filter((l) => l.status === 'signe')
      .reduce((acc, curr) => acc + (curr.estimatedValueFCFA || 0), 0);

    const newLeadsCount = leads.filter((l) => l.status === 'nouveau').length;

    return NextResponse.json({
      success: true,
      summary: {
        ...summary,
        totalLeadsCount: leads.length,
        newLeadsCount,
        totalPipelineFCFA,
        signedRevenueFCFA,
      },
    });
  } catch (error) {
    console.error('Erreur API Analytics:', error);
    return NextResponse.json({ error: 'Impossible de charger les métriques.' }, { status: 500 });
  }
}
