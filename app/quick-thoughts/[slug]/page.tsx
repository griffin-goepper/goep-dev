import { notFound } from "next/navigation";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar } from "lucide-react";
import { getPostBySlug } from "@/lib/s3-posts";
import { renderMarkdownToHtml } from "@/lib/markdown";

interface PostPageProps {
  params: {
    slug: string;
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  const html = await renderMarkdownToHtml(post.content);

  return (
    <div className="container max-w-4xl py-12 md:py-24">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Badge>{post.meta.category}</Badge>
          <div className="text-sm text-muted-foreground flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            {post.meta.readTime}
          </div>
          <div className="text-sm text-muted-foreground flex items-center">
            <Calendar className="h-3 w-3 mr-1" />
            {new Date(post.meta.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
        </div>

        <h1 className="text-4xl font-bold tracking-tight mb-6">{post.meta.title}</h1>

        {post.coverImageUrl && (
          <div className="relative aspect-video mb-8 rounded-lg overflow-hidden">
            <Image
              src={post.coverImageUrl}
              alt={post.meta.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
      </div>

      <article
        className="prose dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
