"use client";
import { motion } from "framer-motion";

export default function ProjectCard({title, desc, tags}: {title:string, desc:string, tags:string[]}) {
  return (
    <motion.article whileHover={{y:-4, scale:1.01}} transition={{type:"spring", stiffness:300, damping:20}}
      className="card p-5">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">{desc}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map(t => <span key={t} className="chip">{t}</span>)}
      </div>
      <div className="mt-4 flex gap-2">
        <a className="btn-primary" href="#">Live</a>
        <a className="btn-ghost" href="#">Code</a>
      </div>
    </motion.article>
  );
}
