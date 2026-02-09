"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Tractor,
  Home,
  HeartPulse,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export const SchemesSection = () => {
  const { t } = useLanguage();

  // Styling Logic
  const SCHEME_STYLES = [
    {
      icon: Tractor,
      gradient: "from-green-500/20 to-emerald-500/5",
      border: "border-green-200 dark:border-green-800",
      text: "text-green-700 dark:text-green-400",
      bgIcon: "bg-green-100 dark:bg-green-900/40",
      shadow: "shadow-green-500/10",
    },
    {
      icon: Home,
      gradient: "from-orange-500/20 to-red-500/5",
      border: "border-orange-200 dark:border-orange-800",
      text: "text-orange-700 dark:text-orange-400",
      bgIcon: "bg-orange-100 dark:bg-orange-900/40",
      shadow: "shadow-orange-500/10",
    },
    {
      icon: HeartPulse,
      gradient: "from-blue-500/20 to-cyan-500/5",
      border: "border-blue-200 dark:border-blue-800",
      text: "text-blue-700 dark:text-blue-400",
      bgIcon: "bg-blue-100 dark:bg-blue-900/40",
      shadow: "shadow-blue-500/10",
    },
  ];

  return (
    <section
      id="schemes"
      className="relative py-16 md:py-24 px-4 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-slate-100/70 via-transparent to-transparent dark:from-slate-800/30 -z-10 blur-3xl" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16 space-y-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 text-orange-700 dark:text-orange-400 text-[10px] md:text-xs font-bold uppercase tracking-wider md:mb-10"
          >
            <Sparkles size={12} />
            <span>Most Popular</span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            {t.schemes.title}
          </h2>
          <p className="text-sm md:text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
            {t.schemes.sub}
          </p>
        </div>

        {/* --- BENTO GRID LAYOUT --- */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8">
          {t.schemes.items.map((scheme, i) => {
            const style = SCHEME_STYLES[i % SCHEME_STYLES.length];
            const Icon = style.icon;

            // Bento Logic: 3rd item spans full width on mobile
            const isLastItem = i === 2;
            const colSpanClass = isLastItem
              ? "col-span-2 md:col-span-1"
              : "col-span-1";

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className={`
                  ${colSpanClass}
                  relative flex flex-col justify-between
                  rounded-3xl 
                  p-5 md:p-8 
                  bg-white dark:bg-[#0B1121]
                  border ${style.border}
                  ${style.shadow} shadow-xl
                  group overflow-hidden cursor-pointer
                `}
              >
                <Link
                  href="/dashboard"
                  className="absolute inset-0 z-20"
                  aria-label={`View ${scheme.title}`}
                />

                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${style.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Top Section */}
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-md text-[10px] md:text-xs font-bold uppercase tracking-wide ${style.bgIcon} ${style.text}`}
                    >
                      {scheme.tag}
                    </span>
                    <div
                      className={`w-8 h-8 md:w-12 md:h-12 rounded-full md:rounded-2xl ${style.bgIcon} flex items-center justify-center ${style.text} group-hover:scale-110 transition-transform`}
                    >
                      <Icon size={16} className="md:hidden" />
                      <Icon size={24} className="hidden md:block" />
                    </div>
                  </div>

                  {/* Title & Amount */}
                  <div className="mb-4 md:mb-8">
                    <h3
                      className={`font-bold text-slate-900 dark:text-white mb-1 leading-tight ${
                        isLastItem
                          ? "text-lg md:text-2xl"
                          : "text-sm md:text-2xl"
                      }`}
                    >
                      {scheme.title}
                    </h3>

                    <div className="flex items-baseline gap-1">
                      <p
                        className={`font-black tracking-tight ${style.text} ${
                          isLastItem
                            ? "text-2xl md:text-4xl"
                            : "text-xl md:text-4xl"
                        }`}
                      >
                        {scheme.amt}
                      </p>
                      {isLastItem && (
                        <TrendingUp
                          size={16}
                          className="text-green-500 hidden md:block"
                        />
                      )}
                    </div>
                  </div>
                </div>

                {/* Bottom Section: Button */}
                <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800/50">
                  <div className="flex items-center justify-between group-hover:translate-x-1 transition-transform">
                    {/* 👇 FIXED: Shows Translated Button Text on ALL cards */}
                    <span className="text-xs md:text-sm font-bold text-slate-600 dark:text-slate-300">
                      {t.schemes.btnCheck}
                    </span>

                    <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-900 dark:text-white group-hover:bg-slate-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors">
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
