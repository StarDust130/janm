"use client";

import { motion } from "framer-motion";
import { Mic, Zap, Wallet, Sparkles, ShieldCheck, Clock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const HowItWorksSection = () => {
  const { t } = useLanguage();

  const STEPS = [
    {
      icon: Mic,
      bg: "bg-orange-100 dark:bg-orange-900/40",
      text: "text-orange-600 dark:text-orange-400",
      border: "border-orange-200 dark:border-orange-800",
      shadow: "shadow-orange-500/10",
    },
    {
      icon: Zap,
      bg: "bg-blue-100 dark:bg-blue-900/40",
      text: "text-blue-600 dark:text-blue-400",
      border: "border-blue-200 dark:border-blue-800",
      shadow: "shadow-blue-500/10",
    },
    {
      icon: Wallet,
      bg: "bg-green-100 dark:bg-green-900/40",
      text: "text-green-600 dark:text-green-400",
      border: "border-green-200 dark:border-green-800",
      shadow: "shadow-green-500/10",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative py-16 md:py-24 px-4 overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100 via-transparent to-transparent dark:from-slate-800/20 -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[10px] md:text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Sparkles size={12} /> Simple Process
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-black mb-4 md:mb-6 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent">
            {t.steps.title}
          </h2>
          <p className="text-sm md:text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto px-4">
            {t.steps.sub}
          </p>
        </div>

        {/* --- STEPS GRID --- */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
          {/* Connector Line (Desktop Horizontal) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 border-t-2 border-dashed border-slate-200 dark:border-slate-800 -z-10" />

          {/* Connector Line (Mobile Vertical) */}
          <div className="md:hidden absolute top-12 bottom-12 left-1/2 w-0.5 border-l-2 border-dashed border-slate-200 dark:border-slate-800 -z-10 -translate-x-1/2" />

          {t.steps.items.map((step, i) => {
            const Style = STEPS[i];
            const Icon = Style.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className={`
                  relative flex flex-col items-center text-center 
                  p-6 md:p-8 
                  rounded-3xl border ${Style.border} 
                  bg-white/90 dark:bg-[#0B1121]/90 backdrop-blur-xl 
                  shadow-xl ${Style.shadow}
                  group
                `}
              >
                {/* Step Number Badge */}
                <div className="absolute top-4 right-4 text-[10px] md:text-xs font-black text-slate-300 dark:text-slate-700 bg-white dark:bg-slate-900 px-2 py-1 rounded-md">
                  STEP 0{i + 1}
                </div>

                {/* Icon Circle */}
                <div
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl ${Style.bg} flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-sm ring-4 ring-white dark:ring-[#0B1121]`}
                >
                  <Icon size={28} className={`${Style.text} md:w-8 md:h-8`} />
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2 md:mb-3">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* --- FEATURES GRID --- */}
        <HowItWorksFeatures t={t} />
      </div>
    </section>
  );
};

// Extracted for cleanliness
const HowItWorksFeatures = ({ t }: { t: any }) => {
  const FEATURES = [
    {
      label: t.stats.lightning,
      value: "< 2 mins",
      icon: Clock,
      color: "text-purple-500",
      bg: "bg-purple-50 dark:bg-purple-900/20",
      border: "border-purple-100 dark:border-purple-800",
    },
    {
      label: t.stats.secure,
      value: "Bank Grade",
      icon: ShieldCheck,
      color: "text-blue-500",
      bg: "bg-blue-50 dark:bg-blue-900/20",
      border: "border-blue-100 dark:border-blue-800",
    },
    {
      label: t.stats.success,
      value: "94%",
      icon: Zap,
      color: "text-yellow-500",
      bg: "bg-yellow-50 dark:bg-yellow-900/20",
      border: "border-yellow-100 dark:border-yellow-800",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
      {FEATURES.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 + i * 0.1 }}
          whileHover={{ scale: 1.02 }}
          className={`
            flex items-center gap-4 md:gap-5 p-4 md:p-5 rounded-2xl 
            bg-slate-50 dark:bg-slate-800/50 
            border border-slate-200 dark:border-slate-700
            hover:bg-white dark:hover:bg-slate-800 hover:shadow-lg hover:border-slate-300 dark:hover:border-slate-600
            transition-all duration-300
          `}
        >
          <div
            className={`w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center shrink-0 ${stat.bg} ${stat.color} border ${stat.border}`}
          >
            <stat.icon size={24} strokeWidth={2} />
          </div>
          <div>
            <p className="text-xs md:text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
              {stat.label}
            </p>
            <p className="text-xl md:text-2xl font-black text-slate-900 dark:text-white">
              {stat.value}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
