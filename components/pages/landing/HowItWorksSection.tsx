"use client";

import { Mic, Zap, Wallet } from "lucide-react";

export const HowItWorksSection = () => {
  return (
    <section
      id="how-it-works"
      className="py-20 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-100 dark:border-slate-800"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-16">
          Get Money in <span className="text-orange-500">3 Steps</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Speak.",
              desc: "Press the button and tell us your problem.",
              icon: Mic,
              color: "bg-orange-100 text-orange-600",
            },
            {
              title: "Match.",
              desc: "AI checks 2,000+ schemes for your name.",
              icon: Zap,
              color: "bg-blue-100 text-blue-600",
            },
            {
              title: "Claim.",
              desc: "Get the money directly in your bank.",
              icon: Wallet,
              color: "bg-green-100 text-green-600",
            },
          ].map((step, i) => (
            <div
              key={i}
              className="bg-white dark:bg-slate-800 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-700 text-center relative shadow-sm"
            >
              <div className="absolute top-4 right-4 text-6xl font-black opacity-5 select-none">
                {i + 1}
              </div>
              <div
                className={`w-20 h-20 ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl shadow-sm`}
              >
                <step.icon size={36} />
              </div>
              <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 font-medium">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
