import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const posts = await prisma.post.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(posts);
}

export async function POST(req: Request) {
  const form = await req.formData();
  const title = String(form.get("title")||"");
  const slug = String(form.get("slug")||"");
  const content = String(form.get("content")||"");
  if (!title || !slug) return new Response("Missing fields", { status: 400 });
  const post = await prisma.post.create({ data: { title, slug, content, published: true } });
  return NextResponse.redirect(new URL(`/blog/${post.slug}`, req.url));
}
