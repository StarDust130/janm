"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mic, Play, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { BharatButton } from "@/components/ui/BharatButton";
import { VideoModal } from "@/components/ui/VideoModal";
import { useLanguage } from "@/context/LanguageContext";

// --- Background Pattern ---
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

  return (
    <section className="relative pt-16 pb-24 px-4 w-full mx-auto md:px-12 lg:px-24 flex flex-col md:flex-row items-center gap-12 overflow-hidden">
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

      {/* --- RIGHT: 3D PHONE VISUAL --- */}
      <div className="flex-1 w-full max-w-md relative flex justify-center order-2">
        <div className="relative w-full aspect-[4/5] perspective-1000">
          <motion.div
            animate={{ y: [0, -15, 0], rotateX: [0, 5, 0], rotateY: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-white dark:bg-slate-900 border-[8px] border-white dark:border-slate-800 rounded-[2.5rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] overflow-hidden"
          >
            {/* Phone Image */}
            <img
              src="https://images.unsplash.com/photo-1595246140625-573b715d11dc?q=80&w=1000&auto=format&fit=crop"
              alt="Indian User"
              className="w-full h-full object-cover opacity-95 hover:scale-105 transition-transform duration-700"
            />

            {/* Success Card (Floating) */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
              className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-black/80 backdrop-blur-md p-5 rounded-2xl shadow-lg border-t-4 border-green-500"
            >
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center text-green-600 dark:text-green-400">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="font-bold text-sm text-green-700 dark:text-green-400">
                    {t.cardApproved}
                  </span>
                </div>
                <span className="text-xs font-bold text-slate-400">
                  Just Now
                </span>
              </div>

              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-3xl font-black text-slate-900 dark:text-white">
                  ₹6,000
                </span>
                <span className="text-lg">🎉</span>
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">
                {t.cardCredit}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
