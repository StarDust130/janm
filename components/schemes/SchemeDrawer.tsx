"use client";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SchemeDrawer({
  scheme,
  onClose,
}: {
  scheme: any;
  onClose: () => void;
}) {
  if (!scheme) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex justify-end">
      <div className="bg-background w-full max-w-md h-full p-6">
        <button onClick={onClose} className="mb-4">
          <X />
        </button>

        <h2 className="text-xl font-bold">{scheme.name}</h2>
        <p className="mt-2 text-muted-foreground">
          {scheme.description}
        </p>

        <Button variant="bharatGreen" className="mt-6 w-full">
          View Application Steps
        </Button>
      </div>
    </div>
  );
}
