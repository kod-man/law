import React from "react";

export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5">
      {children}
    </div>
  );
}
