import Link from "next/link";

export default function NewPost() {
  return (
    <div className="space-y-4 max-w-2xl">
      <h1 className="text-2xl font-bold">New Post</h1>
      <form action="/api/posts" method="post" className="space-y-3">
        <input name="title" className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-slate-800/70" placeholder="Title" required />
        <input name="slug" className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-slate-800/70" placeholder="slug-unik" required />
        <textarea name="content" rows={10} className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-slate-800/70" placeholder="Write here..." required/>
        <div className="flex gap-2">
          <button className="px-3 py-1.5 rounded-lg bg-brand-500 text-white">Save</button>
          <Link href="/blog" className="px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700">Cancel</Link>
        </div>
      </form>
    </div>
  );
}
