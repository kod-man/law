import React from "react";

// components/Section.tsx
export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
        {title}
      </h2>
      <div className="space-y-3 text-slate-700 leading-relaxed">{children}</div>
    </section>
  );
}
