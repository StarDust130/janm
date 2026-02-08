"use client";

import { X } from "lucide-react";

export default function VideoModal({
  open,
  onClose,
  videoId,
}: {
  open: boolean;
  onClose: () => void;
  videoId: string;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
      <div className="relative w-full max-w-3xl aspect-video bg-black rounded-xl">
        <button onClick={onClose} className="absolute top-3 right-3 text-white">
          <X />
        </button>
        <iframe
          className="w-full h-full rounded-xl"
          src={`https://www.youtube.com/embed/${videoId}`}
          allowFullScreen
        />
      </div>
    </div>
  );
}
