"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Sun, Moon, Mail } from "lucide-react";
import { useEffect, useState } from "react";

export default function Nav() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <header className="sticky top-0 z-40 bg-white/70 dark:bg-slate-900/70 backdrop-blur border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-brand-500 text-white flex items-center justify-center font-bold drop-shadow-glow">AG</div>
          <div className="leading-tight">
            <div className="font-bold">Adi Gusman</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Tangerang, Banten, Indonesia</div>
          </div>
        </Link>
        <div className="flex items-center gap-2">
          <Link href="/blog" className="px-3 py-1.5 rounded-lg border text-sm border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800">Blog</Link>
          <a href="mailto:adi@example.com" className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-brand-500 text-white text-sm"><Mail className="h-4 w-4"/>Contact</a>
          {mounted && (
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="h-9 w-9 rounded-full border border-slate-300 dark:border-slate-700 grid place-items-center hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Toggle theme"
            >
              {resolvedTheme === "dark" ? <Sun className="h-4 w-4"/> : <Moon className="h-4 w-4"/>}
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
