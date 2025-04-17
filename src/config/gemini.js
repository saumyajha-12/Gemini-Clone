
 const API_KEY = "AIzaSyADZeSLXkRq0F4-cAahRkChWHLRy2ypjpU";  

const MODEL_ID = "gemini-1.5-pro";
 
 async function callGemini(promptText) {
   const requestBody = {
     contents: [
       {
         role: 'user',
         parts: [
           {
             text: promptText
           }
         ],
       },
     ],
     generationConfig: {
     
      temperature: 0.7,
      topK: 1,
      topP: 1,
      maxOutputTokens: 1024,
     },
   };
 
   try{
   const response = await fetch(
     `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_ID}:generateContent?key=${API_KEY}`,
     {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify(requestBody),
     }
   );
 
   const data = await response.json();
   if (response.ok) {
    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text;
    return reply || "No response from model.";
  } else {
    console.error("API Error:", data);
    return `Error: ${data.error?.message || "Unknown error"}`;
  }
} catch (err) {
  console.error("Fetch failed:", err);
  return "Fetch error occurred.";
}
}

export default callGemini;
 













