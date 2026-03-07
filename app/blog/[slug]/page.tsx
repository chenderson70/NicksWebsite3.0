import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Badge from "@/components/ui/Badge";
import { BLOG_POSTS, getBlogPost } from "@/lib/blog-posts";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Article | Nick Parks",
};

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="page-hero pb-20">
      <div className="site-container max-w-4xl">
        <nav className="text-sm text-muted">
          <Link href="/blog" className="transition-colors hover:text-primary">
            Blog
          </Link>
          <span className="mx-2">/</span>
          <span>{post.title}</span>
        </nav>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Badge variant="primary">{post.category}</Badge>
          <span className="text-xs uppercase tracking-[0.18em] text-muted">
            {formatDate(post.date)}
          </span>
          <span className="text-xs uppercase tracking-[0.18em] text-muted">
            {post.readTime}
          </span>
        </div>

        <h1 className="mt-6 font-heading text-4xl uppercase tracking-[-0.05em] text-foreground md:text-6xl">
          {post.title}
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-muted md:text-lg">
          {post.excerpt}
        </p>

        <div className="mt-10 relative aspect-[16/9] overflow-hidden rounded-[32px] shadow-card">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 72vw, 92vw"
          />
        </div>

        <div className="prose-dark mt-10">
          {post.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-black/10 pt-8 md:flex-row md:items-center md:justify-between">
          <Link href="/blog" className="btn-ghost">
            Back to blog
          </Link>
          <div className="flex gap-4 text-xs uppercase tracking-[0.18em] text-muted">
            <span>Share</span>
            <span>LinkedIn</span>
            <span>Instagram</span>
          </div>
        </div>
      </div>
    </article>
  );
}

