"use client";

import { Globe2, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-slate-50 dark:bg-[#080c17] pt-20 pb-10 px-4 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Image
                src="/logo-2.png"
                alt="JANM Logo"
                width={50}
                height={50}
                className="border bg-white rounded-xl"
              />
            </div>
            <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-sm">
              Building the digital bridge between Bharat&apos;s citizens and
              their rights. Made with ❤️ for India.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">
              Platform
            </h4>
            <ul className="space-y-4 text-sm font-medium text-slate-500 dark:text-slate-400">
              <li>
                <Link href="#schemes" className="hover:text-orange-500">
                  Schemes
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="hover:text-orange-500">
                  How it Works
                </Link>
              </li>
              <li>
                <Link href="#stories" className="hover:text-orange-500">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">
              Legal
            </h4>
            <ul className="space-y-4 text-sm font-medium text-slate-500 dark:text-slate-400">
              <li>
                <a href="#" className="hover:text-orange-500">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm font-bold text-slate-400">
            © 2026 JANM Technologies.
          </p>
          <div className="flex gap-4">
            <span className="w-8 h-8 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-blue-500 cursor-pointer">
              <Globe2 size={16} />
            </span>
            <span className="w-8 h-8 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-blue-500 cursor-pointer">
              <ShieldCheck size={16} />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
