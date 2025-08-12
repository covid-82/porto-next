"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 p-10 mesh">
      <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Building sleek web apps for real businesses.
        </h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
          I’m Adi Gusman — product‑minded frontend dev focused on UX, PWA, and automated business reports.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {links.map(({Icon, href, label}) => (
            <a key={label} href={href} target="_blank" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900">
              <Icon className="h-4 w-4"/>{label}
            </a>
          ))}
        </div>
      </motion.div>
      {/* floating blobs for 2025 vibe */}
      <motion.div className="absolute -top-10 -right-10 h-56 w-56 rounded-full bg-pink-500/20 blur-3xl" animate={{x:[0,10,-8,0], y:[0,-6,8,0]}} transition={{repeat:Infinity, duration:8}}/>
      <motion.div className="absolute -bottom-10 -left-10 h-56 w-56 rounded-full bg-brand-500/20 blur-3xl" animate={{x:[0,-8,6,0], y:[0,6,-8,0]}} transition={{repeat:Infinity, duration:10}}/>
    </section>
  );
}

const links = [
  {Icon: Github, href: "https://github.com/", label: "GitHub"},
  {Icon: Linkedin, href: "https://www.linkedin.com/", label: "LinkedIn"},
  {Icon: Twitter, href: "https://twitter.com/", label: "Twitter"},
  {Icon: Mail, href: "mailto:adi@example.com", label: "Email"}
];
