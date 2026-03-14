export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { password } = req.body;
  
  // Mot de passe — changez cette valeur pour renouveler l'accès
  const MOT_DE_PASSE = 'demo2026';
  
  if (password === MOT_DE_PASSE) {
    // Cookie valable 24h
    res.setHeader('Set-Cookie', 
      'ss_access=granted; Path=/; Max-Age=86400; HttpOnly; SameSite=Strict; Secure'
    );
    return res.status(200).json({ ok: true });
  } else {
    return res.status(401).json({ ok: false });
  }
}
