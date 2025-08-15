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
          <div className="h-9 w-9 rounded-xl bg-blue-600 grid place-items-center font-bold text-slate-900 dark:text-white">
            AG
          </div>
          <div className="leading-tight">
            <div className="font-bold text-slate-900 dark:text-white">Adi Gusman</div>
            <div className="text-xs text-slate-600 dark:text-slate-400">Tangerang, Banten, Indonesia</div>
          </div>
        </Link>
        <div className="flex items-center gap-2">
          <Link href="/blog" className="btn-ghost">Blog</Link>
          <a href="mailto:adi@example.com" className="btn-primary hidden sm:inline-flex gap-2">
            <Mail className="h-4 w-4"/>Contact
          </a>
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
