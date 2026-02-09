import { AppNavigation } from "@/components/pages/AppNav";


export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black text-slate-900 dark:text-white">
      {/* Navigation (Sidebar on PC, Bottom Bar on Mobile) */}
      <AppNavigation />

      {/* Main Content Area */}
      {/* md:pl-64 pushes content right on PC to make room for Sidebar */}
      {/* pb-24 adds space at bottom on Mobile so Bottom Bar doesn't cover content */}
      <main className="md:pl-64 pb-24 md:pb-8 pt-4 px-4 md:px-8 max-w-7xl mx-auto">
        {children}
      </main>
    </div>
  );
}
