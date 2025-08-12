import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";

export default function Page() {
  const projects = [
    {title: "Design AG Base", desc: "Clean sticky layout with action bar — minimal, fast, and ergonomic.", tags: ["Tailwind","Vite/Next","UX"]},
    {title: "MagicPOS PWA", desc: "Cashier & reports app with offline and PDF/Excel export.", tags: ["PWA","React","Reports"]},
    {title: "Kledo-like Prototype", desc: "Financial reporting prototype with modern UI.", tags: ["Prototype","HTML/JS","Finance"]}
  ];

  return (
    <div className="space-y-8">
      <Hero />
      <section className="space-y-3">
        <h2 className="text-xl font-bold">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map(p => <ProjectCard key={p.title} {...p} />)}
        </div>
      </section>
    </div>
  );
}
