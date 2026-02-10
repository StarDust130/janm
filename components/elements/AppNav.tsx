"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Home, Search, FileText, User } from "lucide-react";
import { useUser, UserButton } from "@clerk/nextjs";

const NAV_ITEMS = [
  { label: "Home", href: "/dashboard", icon: Home },
  { label: "Search", href: "/search", icon: Search },
  { label: "Status", href: "/applications", icon: FileText },
  { label: "Profile", href: "/profile", icon: User },
];

export const AppNavigation = () => {
  const pathname = usePathname();
  const { user, isLoaded } = useUser();

  return (
    <>
      {/* --- MOBILE BOTTOM NAV (YouTube Style: Avatar as Profile Icon) --- */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 dark:bg-black/95 backdrop-blur-xl border-t border-zinc-200 dark:border-zinc-800 pb-safe">
        <div className="flex justify-around items-center h-16 w-full px-2">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            const isProfile = item.label === "Profile";

            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex-1 flex flex-col items-center justify-center h-full gap-1 active:scale-95 transition-transform"
              >
                {/* LOGIC: Show User Image if loaded, otherwise show Icon (No spinner) */}
                {isProfile && user?.imageUrl ? (
                  <div
                    className={`relative w-7 h-7 rounded-full overflow-hidden transition-all ${
                      isActive
                        ? "border-2 border-black dark:border-white p-1px" // Active Ring
                        : "opacity-80"
                    }`}
                  >
                    <Image
                      src={user.imageUrl}
                      alt="Profile"
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                ) : (
                  <Icon
                    size={26}
                    strokeWidth={isActive ? 2.5 : 2}
                    className={`transition-colors duration-200 ${
                      isActive
                        ? "text-black dark:text-white"
                        : "text-zinc-400 dark:text-zinc-600"
                    }`}
                  />
                )}

                {/* Text Label */}
                <span
                  className={`text-[10px] font-medium tracking-tight ${
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

      {/* --- DESKTOP SIDEBAR (Premium Big Sidebar) --- */}
      <aside className="hidden md:flex fixed left-0 top-0 bottom-0 w-72 bg-white dark:bg-black border-r border-zinc-200 dark:border-zinc-800 flex-col py-8 px-6 z-40">
        {/* Custom Logo Area */}
        <div className="mb-10 pl-2">
          <Link href="/dashboard" className="flex items-center gap-4 group">
            <div className="relative">
              <Image
                src="/logo-2.png"
                alt="JANM Logo"
                width={48}
                height={48}
                className="bg-white rounded-xl shadow-sm border border-zinc-100 dark:border-zinc-800 group-hover:scale-105 transition-transform"
              />
            </div>
            <span className="text-2xl font-bold tracking-tight text-black dark:text-white">
              JANM
            </span>
          </Link>
        </div>

        {/* Navigation Links */}
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
                <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Bottom Profile (Desktop) */}
        <div className="mt-auto pt-6 border-t border-zinc-100 dark:border-zinc-800">
          <div className="flex items-center gap-4 px-3 py-3 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
            {/* Clerk User Button */}
            <div className="scale-110">
              <UserButton afterSignOutUrl="/" />
            </div>

            {/* User Info with Skeleton Loader (No text "Loading...") */}
            <div className="flex flex-col overflow-hidden w-full">
              {isLoaded && user ? (
                <>
                  <span className="text-sm font-bold text-black dark:text-white truncate">
                    {user.fullName || user.firstName}
                  </span>
                  <span className="text-xs text-zinc-500 truncate">
                    {user.primaryEmailAddress?.emailAddress}
                  </span>
                </>
              ) : (
                // SKELETON LOADER (Gray Pulse) instead of text
                <div className="flex flex-col gap-1.5 w-full">
                  <div className="h-4 w-24 bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse" />
                  <div className="h-3 w-32 bg-zinc-100 dark:bg-zinc-800/50 rounded animate-pulse" />
                </div>
              )}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
