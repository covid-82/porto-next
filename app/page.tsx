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

  const services = [
    {title:"Landing/Company Profile", desc:"Modern, cepat, SEO, analytics."},
    {title:"PWA & Mini‑SaaS", desc:"Offline‑first, instalable, push."},
    {title:"Dashboard & Reports", desc:"Export PDF/Excel, scheduled report."},
    {title:"Design System", desc:"Tailwind components, theming, dark mode."}
  ];

  const steps = [
    {t:"Discover", d:"Ngobrol tujuan bisnis, scope, prioritas."},
    {t:"Design", d:"Wireframe cepat + UI komponen reusable."},
    {t:"Build", d:"Implement feature prioritas, iteration mingguan."},
    {t:"Ship", d:"Deploy + metrik + polish."}
  ];

  const testimonials = [
    {n:"Rizky — Founder UMKM", q:"Satu minggu langsung bisa dipakai toko. Laporan otomatis sangat ngebantu."},
    {n:"Tata — PM", q:"UI sederhana tapi niat, stakeholder cepat paham dan adopt."}
  ];

  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="card p-8">
        <h1 className="ag-gradient text-4xl md:text-6xl font-extrabold tracking-tight">
          Building sleek web apps for real businesses.
        </h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-3xl">
          I’m Adi Gusman — product‑minded frontend dev focused on UX, PWA, and automated business reports.
        </p>
        <div className="mt-6 flex gap-3">
          <a href="/blog" className="btn-primary">Read Blog</a>
          <a href="mailto:adi@example.com" className="btn-ghost">Contact</a>
        </div>
      </section>

      {/* About + Quick Stats */}
      <section className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 card p-6">
          <h2 className="text-xl font-bold">About</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Based in Tangerang, Banten, Indonesia. Minimalist “Design‑AG”:
            sticky headers, glass cards, smooth dark mode, and lightning‑fast load.
          </p>
        </div>
        <div className="card p-6">
          <h2 className="text-xl font-bold">Quick Stats</h2>
          <ul className="mt-2 text-sm text-slate-600 dark:text-slate-300 space-y-1">
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
            <div key={k} className="card p-4">
              <h3 className="font-semibold capitalize">{k}</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {arr.map((x) => <span key={x} className="chip">{x}</span>)}
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

      {/* ==== 4 Section baru ==== */}

      {/* Services */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">Services</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {services.map(s => (
            <div key={s.title} className="card p-5">
              <h3 className="font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">Process</h2>
        <ol className="grid md:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <li key={s.t} className="card p-5">
              <div className="text-xs text-slate-500">Step {i+1}</div>
              <div className="font-semibold">{s.t}</div>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">{s.d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Testimonials */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {testimonials.map(t => (
            <figure key={t.n} className="card p-5">
              <blockquote className="italic">“{t.q}”</blockquote>
              <figcaption className="mt-2 text-sm text-slate-500">— {t.n}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* From the Blog (fallback aman) */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">From the Blog</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {/* Client-side fetch is overkill; just link to /blog */}
          <a href="/blog" className="card p-5 hover:bg-slate-50 dark:hover:bg-slate-900">
            <div className="font-semibold">Go to Blog</div>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
              Read latest posts and development notes.
            </p>
          </a>
          <a href="/blog/new" className="card p-5">
            <div className="font-semibold">Write a Post</div>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
              Create your first article (requires DB).
            </p>
          </a>
          <div className="card p-5">
            <div className="font-semibold">Setup Database</div>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
              Set <code>DATABASE_URL</code> on Vercel to Neon/Supabase for full CRUD.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">Contact</h2>
        <p className="text-slate-600 dark:text-slate-300">Available for freelance/contract. Happy to discuss!</p>
        <a href="mailto:adi@example.com" className="btn-primary">Email me</a>
      </section>
    </div>
  );
}
