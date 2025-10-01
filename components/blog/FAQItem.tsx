export function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <details className="group rounded-2xl border border-slate-200 bg-white p-5 open:shadow-sm">
      <summary className="cursor-pointer list-none flex items-center justify-between">
        <div className="text-base md:text-lg font-medium">{question}</div>
        <span className="ml-4 inline-flex size-6 items-center justify-center rounded-full border border-slate-300 text-slate-600 group-open:rotate-45 transition-transform">
          +
        </span>
      </summary>
      <p className="mt-3 text-slate-700">{answer}</p>
    </details>
  );
}
