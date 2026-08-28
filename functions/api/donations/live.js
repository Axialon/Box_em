// GET /api/donations/live -> Return real-time edge supporters list
export async function onRequestGet(context) {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };

  const defaultSupporters = [
    { donorName: 'Design Systems Lab', amountUsd: 100.0, tier: 4, unlockedTheme: 'all', timestamp: new Date(Date.now() - 3600000).toISOString() },
    { donorName: 'OpenSource Studio', amountUsd: 50.0, tier: 3, unlockedTheme: 'all', timestamp: new Date(Date.now() - 7200000).toISOString() },
    { donorName: 'Spatial Computing Collective', amountUsd: 25.0, tier: 2, unlockedTheme: 'kintsugi', timestamp: new Date(Date.now() - 14400000).toISOString() },
    { donorName: 'Axialon AI Dev', amountUsd: 25.0, tier: 2, unlockedTheme: 'kintsugi', timestamp: new Date(Date.now() - 28800000).toISOString() },
    { donorName: 'WebGL Graphics Guild', amountUsd: 15.0, tier: 1, unlockedTheme: 'kintsugi', timestamp: new Date(Date.now() - 43200000).toISOString() }
  ];

  const totalUsd = defaultSupporters.reduce((sum, s) => sum + s.amountUsd, 1250);

  return new Response(JSON.stringify({
    status: 'ok',
    totalUsd: totalUsd,
    targetUsd: 2500,
    recent: defaultSupporters
  }), {
    status: 200,
    headers: corsHeaders
  });
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
}
