import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

export default async function EditPost(props: any) {
  const maybeParams = props?.params;
  const params = typeof maybeParams?.then === "function" ? await maybeParams : maybeParams;
  const slug: string | undefined = params?.slug;

  if (!slug) return notFound();

  const post = await prisma.post.findUnique({ where: { slug } });
  if (!post) return notFound();

  return (
    <div className="space-y-4 max-w-2xl">
      <h1 className="text-2xl font-bold">Edit Post</h1>
      <form action={`/api/posts/${post.id}`} method="post" className="space-y-3">
        <input defaultValue={post.title} name="title" className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-slate-800/70" required />
        <input defaultValue={post.slug} name="slug" className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-slate-800/70" required />
        <textarea defaultValue={post.content} name="content" rows={10} className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-slate-800/70" required/>
        <div className="flex gap-2">
          <button className="px-3 py-1.5 rounded-lg bg-blue-600 text-white">Update</button>
        </div>
      </form>
    </div>
  );
}
