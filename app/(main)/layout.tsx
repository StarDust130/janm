import { AppNavigation } from "@/components/elements/AppNav";
import { TopNav } from "@/components/elements/TopNav";


export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      {/* 1. Navigation (Sidebar for PC, Bottom Bar for Mobile) */}
      <AppNavigation />

      {/* 2. Main Area */}
      {/* md:pl-72 pushes content to the right on PC to make room for the 72px Sidebar */}
      <div className="md:pl-72 flex flex-col min-h-screen">
        {/* Top Header (Logo on Mobile, User Button on Both) */}
        <TopNav />

        {/* Page Content */}
        {/* pb-24 adds padding at bottom so Mobile Bottom Nav doesn't cover content */}
        <main className="flex-1 px-4 md:px-8 pb-24 md:pb-8 pt-2 max-w-7xl mx-auto w-full">
          {children}
        </main>
      </div>
    </div>
  );
}
