import { getAllPosts } from "@/lib/s3-posts";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

export default async function LatestPosts() {
  const posts = (await getAllPosts()).slice(0, 3); // Just latest 3

  return (
    <section className="container">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Latest Quick Thoughts</h2>
          <p className="text-muted-foreground">Ideas on design, development, and more</p>
        </div>
        <Button asChild variant="outline">
          <Link href="/quick-thoughts">
            View All Thoughts
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Card key={post.slug} className="overflow-hidden hover-lift">
            <div className="aspect-video relative">
              <Image
                src={post.coverImageUrl || "/placeholder.svg"}
                alt={post.meta.title}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <Badge>{post.meta.category}</Badge>
                <div className="text-sm text-muted-foreground flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  {post.meta.readTime}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{post.meta.title}</h3>
              <p className="text-muted-foreground">{post.meta.excerpt}</p>
            </CardContent>
            <CardFooter className="px-6 pb-6 pt-0">
              <Button asChild variant="outline" size="sm">
                <Link href={`/quick-thoughts/${post.slug}`}>
                  Read Post
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}