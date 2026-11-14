const apiKey = 'AQ.Ab8RN6KV6CAEmaDBC_aWpYFevZj-d2g4Y2Xe6hsli42HhS0Bxw';
const models = ['gemini-3.5-flash-lite', 'gemini-3.1-flash-lite', 'gemini-3-flash-preview'];

async function callGemini(body) {
  let lastError = null;
  for (const model of models) {
    try {
      console.log(`Calling model: ${model}...`);
      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      if (res.ok) {
        const data = await res.json();
        return { model, data };
      }
      const errText = await res.text();
      lastError = new Error(`Model ${model} failed (${res.status}): ${errText}`);
      console.warn(`Model ${model} failed: ${res.status}`);
    } catch (e) {
      lastError = e;
      console.warn(`Model ${model} network error:`, e.message);
    }
  }
  throw lastError;
}

async function run() {
  const systemInstruction = `You are a professional legal drafting assistant for Philippine residential rental leases (Kasulatan sa Pag-abang) compliant with RA 386 (Civil Code of the Philippines) and the Rent Control Act.
Draft or revise the requested lease clause in clear, enforceable Philippine legal English.
Do NOT make unverified claims of enforceability under specific articles (e.g. do NOT say "this term is enforceable under Article 1356").
Respond with ONLY a single valid JSON object with NO markdown code fences or backticks:
{
  "title": "Short Descriptive Title",
  "text": "The complete legal clause text.",
  "toast": "Brief notification summary (3-5 words)",
  "action": "add"
}`;

  const res = await callGemini({
    contents: [
      { parts: [{ text: systemInstruction }, { text: 'Landlord request: "No smoking anywhere in the house or room"' }] }
    ],
    generationConfig: {
      responseMimeType: 'application/json',
      temperature: 0.2
    }
  });

  console.log(`Success with ${res.model}:`, res.data.candidates?.[0]?.content?.parts?.[0]?.text);
}

run();
