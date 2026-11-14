const key = 'AQ.Ab8RN6KV6CAEmaDBC_aWpYFevZj-d2g4Y2Xe6hsli42HhS0Bxw';
const testModels = [
  'gemini-3.5-flash-lite',
  'gemini-3.1-flash-lite',
  'gemini-3-flash-preview',
  'gemini-3-flash'
];

async function testGeneration() {
  for (const m of testModels) {
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${m}:generateContent?key=${key}`;
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: 'Draft a short one-sentence boarding house rule regarding visitors.' }] }]
        })
      });
      const data = await res.json();
      if (res.ok) {
        console.log(`✅ SUCCESS for ${m}:`, data.candidates?.[0]?.content?.parts?.[0]?.text?.trim());
      } else {
        console.log(`❌ FAILED for ${m} (${res.status}):`, data.error?.message);
      }
    } catch (e) {
      console.log(`❌ ERROR for ${m}:`, e.message);
    }
  }
}
testGeneration();
