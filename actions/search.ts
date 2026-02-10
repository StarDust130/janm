"use server";

import { Scheme, SCHEMES_DB } from "@/lib/schemes-db";



export async function searchSchemes(
  query: string,
): Promise<{ results: Scheme[]; summary: string }> {
  // Simulate AI Processing Delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  if (!query) return { results: [], summary: "" };

  const lowerQuery = query.toLowerCase();

  // 1. Filter Logic
  const results = SCHEMES_DB.filter((scheme) => {
    return (
      scheme.title.toLowerCase().includes(lowerQuery) ||
      scheme.category.toLowerCase().includes(lowerQuery) ||
      scheme.tags.some((tag) => tag.includes(lowerQuery)) ||
      scheme.description.toLowerCase().includes(lowerQuery)
    );
  }).map((s) => ({
    ...s,
    // Simulate a Match Score based on keywords
    matchScore: Math.floor(Math.random() * (99 - 85) + 85),
  }));

  // 2. Generate Summary
  const summary = `Found ${results.length} schemes relevant to "${query}".`;

  return { results, summary };
}
