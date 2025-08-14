import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request, context: any) {
  const { id } = (context?.params || {}) as { id?: string };
  const numId = Number(id);
  if (!numId) return new Response("Invalid id", { status: 400 });

  const url = new URL(req.url);
  const m = url.searchParams.get("_method")?.toUpperCase();

  if (m === "DELETE") {
    await prisma.post.delete({ where: { id: numId } });
    return NextResponse.redirect(new URL("/blog", req.url));
  }

  const form = await req.formData();
  const title = String(form.get("title") || "");
  const slug = String(form.get("slug") || "");
  const content = String(form.get("content") || "");
  if (!title || !slug) return new Response("Missing fields", { status: 400 });

  const updated = await prisma.post.update({
    where: { id: numId },
    data: { title, slug, content }
  });

  return NextResponse.redirect(new URL(`/blog/${updated.slug}`, req.url));
}
