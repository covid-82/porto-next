"use client";
import { motion } from "framer-motion";

export default function ProjectCard({title, desc, tags}: {title:string, desc:string, tags:string[]}) {
  return (
    <motion.div whileHover={{y:-4}} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 p-5">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">{desc}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map(t => <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800">{t}</span>)}
      </div>
    </motion.div>
  );
}
