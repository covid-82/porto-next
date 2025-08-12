import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

export default async function BlogDetail({ params }: { params: { slug: string } }) {
  const post = await prisma.post.findUnique({ where: { slug: params.slug } });
  if (!post) return notFound();
  return (
    <article className="prose prose-slate dark:prose-invert max-w-none">
      <h1>{post.title}</h1>
      <p className="text-sm text-slate-500">{new Date(post.createdAt).toLocaleString()}</p>
      <div className="whitespace-pre-wrap">{post.content}</div>
    </article>
  );
}
