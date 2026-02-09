"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, Play, CheckCircle2, Sparkles, TrendingUp } from "lucide-react";
import Link from "next/link";
import { BharatButton } from "@/components/ui/BharatButton";
import { VideoModal } from "@/components/ui/VideoModal";
import { useLanguage } from "@/context/LanguageContext";

// --- HIGH QUALITY IMAGES ---
const CAROUSEL_IMAGES = [
  "https://www.pmindia.gov.in/wp-content/uploads/2026/02/H20260201203015.jpg", // Modi Ji
  "https://www.pmindia.gov.in/wp-content/uploads/2026/01/H20260123201822.jpg", // Farmer
  "https://www.pmindia.gov.in/wp-content/uploads/2025/11/H20251128197937.jpg", // Rural Digital
];

const GridPattern = () => (
  <svg
    className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 dark:stroke-slate-800 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
    aria-hidden="true"
  >
    <defs>
      <pattern
        id="grid-pattern"
        width="40"
        height="40"
        patternUnits="userSpaceOnUse"
      >
        <path d="M.5 40V.5H40" fill="none" />
      </pattern>
    </defs>
    <rect
      width="100%"
      height="100%"
      strokeWidth="0"
      fill="url(#grid-pattern)"
    />
  </svg>
);

export const HeroSection = () => {
  const [isVideoOpen, setVideoOpen] = useState(false);
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Smooth Auto-Rotation (5 Seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-12 pb-20 px-4 w-full mx-auto md:px-12 lg:px-24 flex flex-col md:flex-row items-center gap-12 overflow-hidden">
      <VideoModal isOpen={isVideoOpen} onClose={() => setVideoOpen(false)} />
      <GridPattern />

      {/* --- Ambient Background Lights --- */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-300/30 dark:bg-orange-600/20 rounded-full blur-[100px] -z-10"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-300/30 dark:bg-green-600/20 rounded-full blur-[100px] -z-10"
      />

      {/* --- LEFT: TEXT CONTENT --- */}
      <div className="flex-1 text-center md:text-left z-10 order-1">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full shadow-sm mb-6 border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          <span className="text-xs font-bold tracking-wide uppercase text-slate-700 dark:text-slate-300">
            {t.badge}
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6 text-slate-900 dark:text-white tracking-tight"
        >
          {t.titleMain} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-green-600">
            {t.titleSub}
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl font-medium text-slate-600 dark:text-slate-300 mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed"
        >
          {t.desc}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
        >
          <Link href="/dashboard" className="w-full sm:w-auto">
            <BharatButton
              variant="success"
              className="w-full text-lg px-8 py-4"
            >
              <Mic size={24} /> {t.btnSpeak}
            </BharatButton>
          </Link>
          <BharatButton
            variant="secondary"
            className="w-full sm:w-auto px-8 py-4 text-slate-600"
            onClick={() => setVideoOpen(true)}
          >
            <Play size={20} className="fill-slate-900" /> {t.btnWatch}
          </BharatButton>
        </motion.div>
      </div>

      {/* --- RIGHT: 3D FLOATING POSTER (NO PHONE FRAME) --- */}
      {/* --- RIGHT: PURE FLOATING GLASS FRAME (No Text) --- */}
      {/* --- RIGHT: PURE FLOATING GLASS FRAME --- */}
      <div className="flex-1 w-full max-w-md relative flex justify-center order-2 px-4 md:px-0">
        <div className="relative w-full aspect-[4/5] perspective-1000">
          {/* THE GLASS FRAME CONTAINER */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-[2.5rem] shadow-2xl overflow-hidden bg-slate-900 z-10"
          >
            {/* 1. Cool Glass Border (The "Frame") */}
            <div className="absolute inset-0 z-30 rounded-[2.5rem] border-[6px] border-white/10 pointer-events-none shadow-[inset_0_0_30px_rgba(255,255,255,0.15)] ring-1 ring-white/20" />

            {/* 2. Carousel Images with CINEMATIC ANIMATION */}
            <div className="relative w-full h-full bg-slate-900">
              <AnimatePresence mode="popLayout">
                <motion.img
                  key={currentImageIndex}
                  src={CAROUSEL_IMAGES[currentImageIndex]}
                  alt="Success Story"
                  className="absolute inset-0 w-full h-full object-cover"
                  // ✨ THE NEW ANIMATION ✨
                  // Start: Invisible, Zoomed In, Blurry
                  initial={{ opacity: 0, scale: 1.2, filter: "blur(10px)" }}
                  // End: Visible, Normal Scale, Sharp
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  // Exit: Fade out slowly
                  exit={{ opacity: 0, scale: 1, filter: "blur(0px)" }}
                  // Smooth Duration
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              </AnimatePresence>

              {/* 3. Aesthetic Overlays */}

              {/* Dark Gradient at bottom (Depth) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />

              {/* Glossy Reflection (Top Right) */}
              <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-b from-white/10 to-transparent rotate-45 blur-2xl z-20 pointer-events-none" />
            </div>
          </motion.div>

          {/* 4. Background Glow (Behind the frame) */}
          <div className="absolute top-10 left-4 right-4 bottom-0 bg-gradient-to-tr from-orange-500/40 to-green-500/40 rounded-[3rem] blur-3xl -z-10 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
