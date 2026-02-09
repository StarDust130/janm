"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Home, Search, FileText, User } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "/dashboard", icon: Home },
  { label: "Search", href: "/search", icon: Search },
  { label: "Status", href: "/applications", icon: FileText },
  { label: "Profile", href: "/profile", icon: User },
];

export const AppNavigation = () => {
  const pathname = usePathname();

  return (
    <>
      {/* --- MOBILE BOTTOM NAV (Big, Clean, No Dots) --- */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 dark:bg-black/95 backdrop-blur-xl border-t border-zinc-200 dark:border-zinc-800 pb-safe">
        {/* Increased Height to h-20 (80px) for "Big" feel */}
        <div className="flex justify-around items-center h-20 w-full px-4">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex-1 flex flex-col items-center justify-center h-full gap-1 active:scale-95 transition-transform"
              >
                <Icon
                  size={28} // Big Icon
                  strokeWidth={isActive ? 2.5 : 2}
                  className={`transition-colors duration-200 ${
                    isActive
                      ? "text-black dark:text-white" // Active: Pitch Black
                      : "text-zinc-400 dark:text-zinc-600" // Inactive: Muted
                  }`}
                />

                {/* Text Label */}
                <span
                  className={`text-xs font-medium tracking-tight ${
                    isActive
                      ? "text-black dark:text-white font-bold"
                      : "text-zinc-400 dark:text-zinc-600"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* --- DESKTOP SIDEBAR (Wide, Premium, Custom Logo) --- */}
      {/* Increased Width to w-72 (288px) for "Big PC" feel */}
      <aside className="hidden md:flex fixed left-0 top-0 bottom-0 w-72 bg-white dark:bg-black border-r border-zinc-200 dark:border-zinc-800 flex-col py-8 px-6 z-40">
        {/* Custom Logo Area */}
        <div className="mb-12 pl-2">
          <div className="flex items-center gap-4">
            <Image
              src="/logo-2.png"
              alt="JANM Logo"
              width={50}
              height={50}
              className="border border-zinc-100 dark:border-zinc-800 bg-white rounded-xl shadow-sm"
            />
            <span className="text-2xl font-bold tracking-tight text-black dark:text-white">
              JANM
            </span>
          </div>
        </div>

        {/* Navigation Links (Bigger Text & Padding) */}
        <div className="flex flex-col gap-2">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname.startsWith(item.href);
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-4 px-5 py-4 rounded-xl text-base transition-all duration-200 ${
                  isActive
                    ? "bg-zinc-100 dark:bg-zinc-900 text-black dark:text-white font-bold"
                    : "text-zinc-500 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 hover:text-black dark:hover:text-white font-medium"
                }`}
              >
                <Icon
                  size={24} // Bigger Desktop Icons
                  strokeWidth={isActive ? 2.5 : 2}
                />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Bottom Profile */}
        <div className="mt-auto pt-6 border-t border-zinc-100 dark:border-zinc-800">
          <div className="flex items-center gap-4 px-3 py-3 cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-900 rounded-xl transition-colors">
            <div className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800" />
            <div className="flex flex-col">
              <span className="text-sm font-bold text-black dark:text-white">
                Rahul Kumar
              </span>
              <span className="text-xs text-zinc-500">View Profile</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
