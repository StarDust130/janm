"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mic, Play, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { BharatButton } from "@/components/ui/BharatButton";
import { VideoModal } from "@/components/ui/VideoModal";

// The Cool Grid Background
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

  return (
    <section className="relative pt-12 pb-20 px-4 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 overflow-hidden">
      <VideoModal isOpen={isVideoOpen} onClose={() => setVideoOpen(false)} />
      <GridPattern />

      {/* Cool Animated Blobs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-200/40 dark:bg-orange-900/20 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2"
      ></motion.div>
      <motion.div
        animate={{ scale: [1, 1.1, 1], rotate: [0, -45, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-200/40 dark:bg-green-900/20 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2"
      ></motion.div>

      {/* Left Content */}
      <div className="flex-1 text-center md:text-left z-10 order-1">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-1.5 rounded-full shadow-sm mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-xs font-bold text-slate-600 dark:text-slate-300 tracking-wide uppercase">
            AI Active in 12 States
          </span>
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] mb-6 text-slate-900 dark:text-white tracking-tight">
          Apka Haq. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-green-600">
            Directly in Bank.
          </span>
        </h1>

        <p className="text-lg md:text-xl font-medium text-slate-600 dark:text-slate-300 mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed">
          Don't fill long forms. Just{" "}
          <strong>speak in Hindi, Tamil or English</strong>. We find the
          "Sarkari Yojana" and help you apply in 2 minutes.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Link href="/dashboard" className="w-full sm:w-auto">
            <BharatButton
              variant="success"
              className="w-full text-lg px-8 py-5"
            >
              <Mic size={24} /> Speak Now (बोलें)
            </BharatButton>
          </Link>
          <BharatButton
            variant="secondary"
            className="w-full sm:w-auto px-8 py-5 text-slate-600"
            onClick={() => setVideoOpen(true)}
          >
            <Play size={20} className="fill-slate-900" /> Watch Demo
          </BharatButton>
        </div>
      </div>

      {/* Right Content - 3D Phone */}
      <div className="flex-1 w-full max-w-md relative flex justify-center order-2">
        <div className="relative w-full aspect-[4/5]">
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-white dark:bg-slate-900 border-[6px] border-white dark:border-slate-800 rounded-[2.5rem] shadow-2xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1595246140625-573b715d11dc?q=80&w=1000&auto=format&fit=crop"
              alt="Indian User"
              className="w-full h-full object-cover opacity-90"
            />

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-slate-800/95 backdrop-blur p-4 rounded-2xl shadow-xl border-t-4 border-green-500"
            >
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white">
                    <CheckCircle2 size={12} />
                  </div>
                  <span className="font-bold text-sm text-green-700 dark:text-green-400">
                    Approved
                  </span>
                </div>
                <span className="text-xs font-bold text-slate-400">Now</span>
              </div>
              <p className="text-2xl font-black text-slate-900 dark:text-white">
                ₹ 6,000
              </p>
              <p className="text-xs text-slate-500 font-medium">
                Credited to Bank Account
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
