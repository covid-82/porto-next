import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function BlogList() {
  let posts: any[] = [];
  let errorMsg = "";

  try {
    posts = await prisma.post.findMany({ orderBy: { createdAt: "desc" } });
  } catch (e: any) {
    errorMsg = "Database not ready. Set DATABASE_URL in Vercel (Neon/Supabase recommended).";
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Blog</h1>
        <Link href="/blog/new" className="px-3 py-1.5 rounded-lg bg-blue-600 text-white text-sm">New Post</Link>
      </div>

      {errorMsg && (
        <div className="rounded-xl border border-amber-300 bg-amber-50 text-amber-900 p-3 text-sm">
          {errorMsg}
        </div>
      )}

      <ul className="space-y-3">
        {posts.map((p) => (
          <li key={p.id} className="rounded-xl border border-slate-200 dark:border-slate-800 p-4 bg-white/60 dark:bg-slate-900/60">
            <div className="flex items-center justify-between">
              <Link href={`/blog/${p.slug}`} className="font-semibold">{p.title}</Link>
              <div className="text-xs text-slate-500">{new Date(p.createdAt).toLocaleString()}</div>
            </div>
            <div className="mt-2 text-sm line-clamp-2">{p.content?.slice(0, 140)}...</div>
            <div className="mt-3 flex gap-2">
              <Link href={`/blog/${p.slug}/edit`} className="px-2 py-1 rounded border border-slate-300 dark:border-slate-700 text-sm">Edit</Link>
              <form action={`/api/posts/${p.id}`} method="post">
                <input type="hidden" name="_method" value="DELETE" />
                <button formAction={`/api/posts/${p.id}?_method=DELETE`} className="px-2 py-1 rounded border border-slate-300 dark:border-slate-700 text-sm">Delete</button>
              </form>
            </div>
          </li>
        ))}
        {!posts.length && !errorMsg && <li className="text-slate-500">No posts yet.</li>}
      </ul>
    </div>
  );
}
