"use client";

import { motion } from "framer-motion";
import { Landmark, ArrowRight } from "lucide-react";
import Link from "next/link";

const SCHEMES = [
  {
    title: "PM Kisan Samman",
    amt: "₹6,000 / year",
    tag: "Farmers",
    color: "bg-green-100 text-green-700",
  },
  {
    title: "PM Awas Yojana",
    amt: "₹1.2 Lakh Subsidy",
    tag: "Housing",
    color: "bg-orange-100 text-orange-700",
  },
  {
    title: "Ayushman Bharat",
    amt: "₹5 Lakh Insurance",
    tag: "Health",
    color: "bg-blue-100 text-blue-700",
  },
];

export const SchemesSection = () => {
  return (
    <section id="schemes" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
          Top Government Schemes
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          We help you apply for 2,000+ schemes instantly.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {SCHEMES.map((scheme, i) => (
          <motion.div
            whileHover={{ y: -5 }}
            key={i}
            className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-100 dark:border-slate-700 shadow-lg relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
              <Landmark size={100} />
            </div>
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 ${scheme.color}`}
            >
              {scheme.tag}
            </span>
            <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">
              {scheme.title}
            </h3>
            <p className="text-3xl font-black text-slate-900 dark:text-white mb-6">
              {scheme.amt}
            </p>

            <Link href="/dashboard">
              <button className="w-full py-3 rounded-xl border-2 border-slate-200 dark:border-slate-600 font-bold hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center justify-center gap-2">
                Check Eligibility <ArrowRight size={16} />
              </button>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
