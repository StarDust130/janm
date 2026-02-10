"use server";

import { Scheme, SCHEMES_DB } from "@/lib/schemes-db";
import Groq from "groq-sdk";


const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// --- 1. SMART SEARCH (Natural Language -> Schemes) ---
export async function searchSchemesWithAI(userQuery: string): Promise<{
  results: Scheme[];
  summary: string;
}> {
  if (!userQuery) return { results: [], summary: "" };

  try {
    // A. Ask Groq to extract keywords/intent from the user query
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `You are an expert Indian Government Scheme finder. 
          User will send a query. You must extract 3-5 distinct keywords/tags related to their persona (e.g., 'farmer', 'student', 'loan', 'women', 'health').
          Return ONLY a JSON array of strings. Example: ["farmer", "loan", "agriculture"]`
        },
        { role: "user", content: userQuery },
      ],
      model: "llama3-70b-8192", // Fast & Smart
      temperature: 0,
      response_format: { type: "json_object" },
    });

    const content = chatCompletion.choices[0]?.message?.content || '{"tags": []}';
    const aiData = JSON.parse(content);
    // Handle case where AI returns { tags: [...] } or just [...]
    const extractedTags: string[] = Array.isArray(aiData) ? aiData : (aiData.tags || []);

    // B. Filter DB based on tags (Fuzzy Match)
    const matchedSchemes = SCHEMES_DB.filter((scheme) => {
      // 1. Direct text match
      if (scheme.title.toLowerCase().includes(userQuery.toLowerCase())) return true;
      
      // 2. Tag match (if any AI tag matches the scheme tags)
      return extractedTags.some(aiTag => 
        scheme.tags.some(dbTag => dbTag.includes(aiTag.toLowerCase()) || aiTag.toLowerCase().includes(dbTag)) ||
        scheme.category.toLowerCase().includes(aiTag.toLowerCase())
      );
    }).slice(0, 5); // Top 5 results

    // C. Generate a polite summary
    const summaryCompletion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: "Write a 1-sentence helpful summary for the user based on the schemes found. Be professional and encouraging." },
        { role: "user", content: `Query: ${userQuery}. Found ${matchedSchemes.length} schemes: ${matchedSchemes.map(s => s.title).join(", ")}` }
      ],
      model: "llama3-8b-8192",
    });

    return {
      results: matchedSchemes,
      summary: summaryCompletion.choices[0]?.message?.content || `Found ${matchedSchemes.length} relevant schemes for you.`
    };

  } catch (error) {
    console.error("AI Error:", error);
    // Fallback: Simple text search
    const basicResults = SCHEMES_DB.filter(s => 
      s.title.toLowerCase().includes(userQuery.toLowerCase()) || 
      s.tags.some(t => t.includes(userQuery.toLowerCase()))
    ).slice(0, 5);
    
    return { results: basicResults, summary: "Here are the best matches I found based on your keywords." };
  }
}

// --- 2. VOICE TRANSCRIPTION (Groq Whisper) ---
export async function transcribeAudio(formData: FormData) {
  const file = formData.get("file") as File;
  if (!file) throw new Error("No file uploaded");

  try {
    const transcription = await groq.audio.transcriptions.create({
      file: file,
      model: "distil-whisper-large-v3-en", // Super fast
      response_format: "json",
      language: "en", // Or 'hi' for Hindi support if needed
      temperature: 0.0,
    });
    return transcription.text;
  } catch (error) {
    console.error("Transcription Error:", error);
    return null;
  }
}