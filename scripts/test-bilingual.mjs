const apiKey = 'AQ.Ab8RN6KV6CAEmaDBC_aWpYFevZj-d2g4Y2Xe6hsli42HhS0Bxw';
const models = ['gemini-3.5-flash-lite', 'gemini-3.1-flash-lite', 'gemini-3-flash-preview'];

async function testBilingualClause() {
  const systemInstruction = `You are a helpful drafting assistant for residential rental leases (Kasulatan sa Pag-abang) in the Philippines.
The landlord wants to draft a custom lease clause.
Generate a clear, respectful, and balanced clause in both English and Bisaya (Cebuano).

CRITICAL CONSTRAINTS:
1. Do NOT claim that any clause is "legally enforceable" or "guaranteed under the law".
2. Do NOT cite laws, statutes, or civil code articles as proof of legal enforceability.
3. You may use standard placeholders where appropriate: {{tenant_name}}, {{landlord_name}}, {{unit}}, {{rent}}, {{deposit}}, {{advance}}, {{property_address}}, {{due_day}}, {{lease_duration}}.
4. Return ONLY a single raw JSON object with no markdown fences, matching this exact schema:
{
  "title": "Short descriptive clause title (e.g. Quiet Hours & Visitors)",
  "english": "The clause text in clear professional English.",
  "bisaya": "The accurate translation of the clause text in conversational Bisaya (Cebuano)."
}`;

  for (const model of models) {
    console.log(`Testing bilingual generation on ${model}...`);
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          { parts: [{ text: systemInstruction }, { text: 'Landlord request: "Keep the bathroom clean after every use."' }] }
        ],
        generationConfig: {
          responseMimeType: 'application/json',
          temperature: 0.2
        }
      })
    });
    if (res.ok) {
      const data = await res.json();
      console.log(`✅ Success for ${model}:`, data.candidates?.[0]?.content?.parts?.[0]?.text);
    } else {
      console.error(`❌ Error for ${model}:`, await res.text());
    }
  }
}

testBilingualClause();
