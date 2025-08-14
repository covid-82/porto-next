import ProjectCard from "@/components/ProjectCard";

export default function Page() {
  const projects = [
    {title: "Design AG Base", desc: "Clean sticky layout with action bar — minimal, fast, and ergonomic.", tags: ["Tailwind","Next","UX"]},
    {title: "MagicPOS PWA", desc: "Cashier & reports app with offline and PDF/Excel export.", tags: ["PWA","React","Reports"]},
    {title: "Kledo-like Prototype", desc: "Financial reporting prototype with modern UI.", tags: ["Prototype","Finance"]}
  ];

  const skills = {
    frontend: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Zustand"],
    backend: ["Node.js", "Prisma", "PostgreSQL/SQLite", "REST"],
    tools: ["Vercel", "GitHub Actions", "Figma", "Replit"]
  };

  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 p-8">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Building sleek web apps for real businesses.
        </h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-3xl">
          I’m Adi Gusman — product‑minded frontend dev focused on UX, PWA, and automated business reports.
        </p>
        <div className="mt-6 flex gap-3">
          <a href="/blog" className="px-4 py-2 rounded-xl bg-blue-600 text-white">Read Blog</a>
          <a href="mailto:adi@example.com" className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700">Contact</a>
        </div>
      </section>

      {/* About */}
      <section className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-3">
          <h2 className="text-xl font-bold">About</h2>
          <p className="text-slate-600 dark:text-slate-300">
            Based in Tangerang, Banten, Indonesia. I design and build pragmatic UIs with a minimalist “Design‑AG” taste:
            sticky headers, glass cards, smooth dark mode, and lightning‑fast load.
          </p>
        </div>
        <div className="space-y-3">
          <h2 className="text-xl font-bold">Quick Stats</h2>
          <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
            <li>✅ 10+ shipped mini‑apps</li>
            <li>⚡ PWA + offline first</li>
            <li>🧾 Auto PDF/Excel reporting</li>
          </ul>
        </div>
      </section>

      {/* Skills */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">Skills</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {Object.entries(skills).map(([k, arr]) => (
            <div key={k} className="rounded-2xl border border-slate-200 dark:border-slate-800 p-4 bg-white/60 dark:bg-slate-900/60">
              <h3 className="font-semibold capitalize">{k}</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {arr.map((x) => <span key={x} className="text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800">{x}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((p) => <ProjectCard key={p.title} {...p} />)}
        </div>
      </section>

      {/* Contact */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">Contact</h2>
        <p className="text-slate-600 dark:text-slate-300">Available for freelance/contract. Happy to discuss!</p>
        <a href="mailto:adi@example.com" className="inline-flex px-4 py-2 rounded-xl bg-blue-600 text-white">Email me</a>
      </section>
    </div>
  );
}
