"use client";

import { motion } from "framer-motion";
import { Users, IndianRupee, Languages, TrendingUp } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const StatsStrip = () => {
  const { t } = useLanguage();

  const STATS = [
    {
      val: "1.2 Cr+",
      label: t.impact.citizens,
      icon: Users,
      gradient:
        "from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400",
      bgIcon: "bg-blue-50 dark:bg-blue-900/20",
      border: "border-blue-100 dark:border-blue-800",
      shadow: "shadow-blue-500/5",
      iconColor: "text-blue-600 dark:text-blue-400",
    },
    {
      val: "₹500 Cr",
      label: t.impact.money,
      icon: IndianRupee,
      gradient:
        "from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400",
      bgIcon: "bg-green-50 dark:bg-green-900/20",
      border: "border-green-100 dark:border-green-800",
      shadow: "shadow-green-500/5",
      iconColor: "text-green-600 dark:text-green-400",
    },
    {
      val: "12",
      label: t.impact.languages,
      icon: Languages,
      gradient:
        "from-orange-600 to-red-600 dark:from-orange-400 dark:to-red-400",
      bgIcon: "bg-orange-50 dark:bg-orange-900/20",
      border: "border-orange-100 dark:border-orange-800",
      shadow: "shadow-orange-500/5",
      iconColor: "text-orange-600 dark:text-orange-400",
    },
  ];

  return (
    <section className="relative z-20 -mt-10 px-4 pb-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {STATS.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className={`
                relative flex items-center gap-5 p-6 
                bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl 
                rounded-2xl border ${s.border}
                shadow-xl ${s.shadow}
                group overflow-hidden
              `}
            >
              {/* Subtle Gradient Background Blob */}
              <div
                className={`absolute -right-10 -top-10 w-32 h-32 rounded-full opacity-10 bg-gradient-to-br ${s.gradient} blur-2xl group-hover:opacity-20 transition-opacity`}
              />

              {/* Icon */}
              <div
                className={`relative w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center ${s.bgIcon} ${s.iconColor} group-hover:scale-110 transition-transform duration-300`}
              >
                <s.icon size={28} strokeWidth={2} />
              </div>

              {/* Text Content */}
              <div className="flex flex-col">
                <h3
                  className={`text-4xl font-black tracking-tight bg-gradient-to-r ${s.gradient} bg-clip-text text-transparent`}
                >
                  {s.val}
                </h3>
                <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                  {s.label}
                </p>
              </div>

              {/* Decorative Trending Arrow (Optional Visual Flair) */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-2 group-hover:translate-x-0">
                <TrendingUp size={16} className={`opacity-50 ${s.iconColor}`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsStrip;
