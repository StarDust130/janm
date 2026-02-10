"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Mic,
  ArrowRight,
  Wallet,
  Sprout,
  Home as HomeIcon,
  Heart,
  ChevronRight,
  Bell,
} from "lucide-react";
import { useUser } from "@clerk/nextjs";
import { getDashboardData } from "@/actions/dashboard";

// --- ANIMATION ---
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

export default function Dashboard() {
  const { user } = useUser();
  const userName = user?.firstName || "Citizen";

  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const dashboardData = await getDashboardData();
      setData(dashboardData);
      setLoading(false);
    }
    load();
  }, []);

  return (
    <div className="min-h-screen pb-32 md:pb-12 relative">
      {/* 1. LANDING PAGE GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none -z-10" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-8 pt-6"
      >
        {/* 2. HEADER: Clean & Friendly */}
        <motion.div
          variants={item}
          className="flex justify-between items-center px-1"
        >
          <div>
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Namaste, <span className="text-orange-600">{userName}</span> 🙏
            </h1>
            <p className="text-slate-500 font-medium text-sm mt-1">
              You have{" "}
              <span className="text-slate-900 dark:text-white font-bold">
                2 new
              </span>{" "}
              scheme recommendations.
            </p>
          </div>
          <button className="p-3 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-full shadow-sm hover:shadow-md transition-all relative">
            <Bell size={20} className="text-slate-600 dark:text-slate-400" />
            <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 border-2 border-white rounded-full"></span>
          </button>
        </motion.div>

        {/* 3. HERO: "SPEAK NOW" (Green Theme like Landing Page) */}
        <motion.div
          variants={item}
          whileTap={{ scale: 0.98 }}
          className="relative w-full bg-[#00C068] rounded-[2.5rem] p-8 shadow-[0_20px_40px_-15px_rgba(0,192,104,0.4)] overflow-hidden cursor-pointer group"
        >
          {/* Background Patterns */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/5 rounded-full blur-2xl -ml-10 -mb-10" />

          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Mic className="text-white w-8 h-8" strokeWidth={3} />
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              Tap to Speak
            </h2>
            <p className="text-white/90 font-medium mt-2 max-w-xs mx-auto">
              "Mujhe kisan loan chahiye" or "Student scholarship"
            </p>
          </div>
        </motion.div>

        {/* 4. WALLET / STATUS CARD */}
        <motion.div
          variants={item}
          className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-[2rem] p-6 shadow-sm flex items-center justify-between"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1.5 bg-orange-100 rounded-lg">
                <Wallet size={16} className="text-orange-600" />
              </div>
              <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">
                Total Benefits
              </span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                ₹12,500
              </span>
            </div>
            <p className="text-xs text-green-600 font-bold mt-1 bg-green-50 w-fit px-2 py-0.5 rounded-full">
              ● Direct Bank Transfer
            </p>
          </div>
          <div className="h-16 w-16 rounded-full border-4 border-slate-100 flex items-center justify-center">
            <span className="text-xl font-bold text-slate-900">85%</span>
          </div>
        </motion.div>

        {/* 5. RECOMMENDED SCHEMES (Horizontal Scroll - EXACT UI MATCH) */}
        <div className="space-y-4">
          <div className="flex justify-between items-end px-1">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Recommended for You
            </h3>
            <span className="text-sm font-bold text-blue-600 cursor-pointer">
              View All
            </span>
          </div>

          {/* SCROLLABLE CONTAINER */}
          <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 snap-x hide-scrollbar">
            {/* CARD 1: FARMERS (Green) */}
            <motion.div
              variants={item}
              whileHover={{ y: -5 }}
              className="min-w-[280px] bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-[2rem] p-6 snap-center shadow-sm hover:shadow-xl hover:shadow-green-500/10 transition-all cursor-pointer"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="bg-green-100 text-green-700 text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-wide">
                  FARMERS
                </span>
                <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center">
                  <Sprout className="text-green-600" size={20} />
                </div>
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                PM Kisan Samman
              </h4>
              <p className="text-3xl font-black text-green-600 mt-2">
                ₹6,000{" "}
                <span className="text-sm text-slate-400 font-medium">
                  / year
                </span>
              </p>

              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm font-bold text-slate-500">
                  Check Eligibility
                </span>
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-colors">
                  <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>

            {/* CARD 2: HOUSING (Orange) */}
            <motion.div
              variants={item}
              whileHover={{ y: -5 }}
              className="min-w-[280px] bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-[2rem] p-6 snap-center shadow-sm hover:shadow-xl hover:shadow-orange-500/10 transition-all cursor-pointer"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="bg-orange-100 text-orange-700 text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-wide">
                  HOUSING
                </span>
                <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center">
                  <HomeIcon className="text-orange-600" size={20} />
                </div>
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                PM Awas Yojana
              </h4>
              <p className="text-3xl font-black text-orange-600 mt-2">
                ₹1.2 Lakh{" "}
                <span className="text-sm text-slate-400 font-medium">
                  Subsidy
                </span>
              </p>

              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm font-bold text-slate-500">
                  Check Eligibility
                </span>
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>

            {/* CARD 3: HEALTH (Blue) */}
            <motion.div
              variants={item}
              whileHover={{ y: -5 }}
              className="min-w-[280px] bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-[2rem] p-6 snap-center shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all cursor-pointer"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="bg-blue-100 text-blue-700 text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-wide">
                  HEALTH
                </span>
                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                  <Heart className="text-blue-600" size={20} />
                </div>
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                Ayushman Bharat
              </h4>
              <p className="text-3xl font-black text-blue-600 mt-2">
                ₹5 Lakh{" "}
                <span className="text-sm text-slate-400 font-medium">
                  Insurance
                </span>
              </p>

              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm font-bold text-slate-500">
                  Check Eligibility
                </span>
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
