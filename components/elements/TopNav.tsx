"use client";


export const TopNav = () => {
  return (
    // HIDDEN on Mobile (hidden), Visible on PC (md:flex)
    <header className="hidden md:flex sticky top-0 z-30 w-full items-center justify-between px-8 py-4 bg-transparent">
      {/* PC Page Title */}
      <h1 className="text-2xl font-bold tracking-tight text-black dark:text-white">
        Dashboard
      </h1>

      {/* PC Right Side (Optional: Notifications or User Button) */}
      <div className="flex items-center gap-4">
        {/* We can hide UserButton here if it's already in the sidebar, 
            OR keep it as a secondary quick access. Let's keep it clean. */}
      </div>
    </header>
  );
};
