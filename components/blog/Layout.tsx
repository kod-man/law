import React from "react";

export default function Layout({
  title,
  icon,
  children,
}: {
  title: string;
  icon: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <header className="sticky top-0 z-10 backdrop-blur bg-white/90 border-b border-slate-200">
        <div className="mx-auto max-w-4xl px-4 py-3 flex items-center gap-3">
          <div className="size-9 rounded-xl bg-slate-900 text-white grid place-items-center font-bold">
            {icon}
          </div>
          <h1 className="text-lg md:text-xl font-semibold">{title}</h1>
        </div>
      </header>
      <main className="mx-auto max-w-4xl px-4 py-8 md:py-12 space-y-10">
        {children}
      </main>
      <footer className="border-t border-slate-200">
        <div className="mx-auto max-w-4xl px-4 py-8 text-sm text-slate-600">
          © {new Date().getFullYear()} — Bilgilendirme Notu
        </div>
      </footer>
    </div>
  );
}
