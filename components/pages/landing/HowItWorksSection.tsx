"use client";

import { Mic, Zap, Wallet } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext"; // 👈 IMPORT

export const HowItWorksSection = () => {
  const { t } = useLanguage();

  const ICONS = [Mic, Zap, Wallet];
  const STYLES = [
    {
      color: "bg-orange-100 dark:bg-orange-900/30 text-orange-600",
      border: "border-orange-200 dark:border-orange-800",
    },
    {
      color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600",
      border: "border-blue-200 dark:border-blue-800",
    },
    {
      color: "bg-green-100 dark:bg-green-900/30 text-green-600",
      border: "border-green-200 dark:border-green-800",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-20 border-y border-slate-100 dark:border-slate-800"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-4 bg-linear-to-r from-orange-500 via-orange-400 to-orange-600 bg-clip-text text-transparent">
          {t.steps.title}
        </h2>
        <p className="text-center mb-16 text-lg">{t.steps.sub}</p>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {t.steps.items.map((step, i) => {
            const Icon = ICONS[i];
            const Style = STYLES[i];

            return (
              <div
                key={i}
                className={`group p-8 rounded-2xl border ${Style.border} dark:border-slate-700 text-center relative shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 backdrop-blur overflow-hidden`}
              >
                <div className="absolute inset-0 bg-linear-to-br from-slate-50 to-transparent dark:from-slate-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="absolute top-4 right-4 text-6xl font-black opacity-10 group-hover:opacity-20 select-none transition-opacity">
                    {i + 1}
                  </div>
                  <div
                    className={`w-20 h-20 ${Style.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon size={36} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-orange-500 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 font-medium group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const HowItWorksFeatures = () => {
  const { t } = useLanguage();
  return (
    <section className="py-16 bg-linear-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: "⚡", label: t.stats.lightning, value: "< 2 mins" },
            { icon: "🛡️", label: t.stats.secure, value: "Bank Grade" },
            { icon: "✅", label: t.stats.success, value: "94%" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="backdrop-blur-sm bg-white/40 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded-xl p-6 text-center hover:bg-white/60 dark:hover:bg-slate-800/60 transition-all"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <p className="text-slate-600 dark:text-slate-400 mb-1">
                {stat.label}
              </p>
              <p className="text-2xl font-bold text-orange-600">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
