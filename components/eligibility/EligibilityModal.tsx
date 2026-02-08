"use client";

import { useState } from "react";
import schemes from "@/data/schemes.json";
import { Button } from "@/components/ui/button";

export default function EligibilityModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [age, setAge] = useState("");
  const [income, setIncome] = useState("");
  const [results, setResults] = useState<any[]>([]);

  if (!open) return null;

  const check = () => {
    const filtered = schemes
      .map((s: any) => {
        let score = 0;
        if (s.minAge && +age >= s.minAge) score += 50;
        if (s.maxIncome && +income <= s.maxIncome) score += 50;
        return { ...s, score };
      })
      .filter((s) => s.score > 0)
      .sort((a, b) => b.score - a.score);

    setResults(filtered);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
      <div className="bg-background p-6 rounded-xl w-full max-w-md">
        <h2 className="font-bold text-lg mb-4">Check Eligibility</h2>

        <input
          placeholder="Age"
          type="number"
          className="w-full border p-2 rounded mb-3"
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          placeholder="Income"
          type="number"
          className="w-full border p-2 rounded mb-4"
          onChange={(e) => setIncome(e.target.value)}
        />

        <Button variant="bharatOrange" className="w-full" onClick={check}>
          Check
        </Button>

        <ul className="mt-4 space-y-2">
          {results.map((r) => (
            <li key={r.name} className="border rounded p-2">
              {r.name} — {r.score}%
            </li>
          ))}
        </ul>

        <button onClick={onClose} className="mt-4 text-sm">
          Close
        </button>
      </div>
    </div>
  );
}
