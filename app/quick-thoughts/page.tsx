import { getAllPosts } from "@/lib/s3-posts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

export default async function QuickThoughtsPage() {
  const posts = await getAllPosts();

  const categories = ["Tech", "Design", "Cars", "Thoughts"];

  return (
    <div className="container py-12 md:py-24">
      <div className="max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Quick Thoughts</h1>
        <p className="text-xl text-muted-foreground">
          Brief ideas, and occasional ramblings about tech, design, cars, and more.
        </p>
      </div>

      <Tabs defaultValue="all" className="mb-12">
        <TabsList className="mb-8">
          <TabsTrigger value="all">All</TabsTrigger>
          {categories.map((cat) => (
            <TabsTrigger key={cat.toLowerCase()} value={cat.toLowerCase()}>
              {cat}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="all">
          <div className="grid md:grid-cols-2 gap-8">
            <FeaturedPost post={posts[0]} />
            <div className="grid gap-8">
              {posts.slice(1, 3).map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {posts.slice(3).map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </TabsContent>

        {categories.map((cat) => (
          <TabsContent key={cat} value={cat.toLowerCase()}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts
                .filter((p) => p.meta.category.toLowerCase() === cat.toLowerCase())
                .map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

function FeaturedPost({ post }: { post: any }) {
  return (
    <Card className="overflow-hidden hover-lift">
      <div className="aspect-video relative">
        <Image src={post.coverImageUrl || "/placeholder.svg"} alt={post.meta.title} fill className="object-cover" />
      </div>
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <Badge>{post.meta.category}</Badge>
          <div className="text-sm text-muted-foreground flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            {post.meta.readTime}
          </div>
        </div>
        <CardTitle className="text-2xl">{post.meta.title}</CardTitle>
        <CardDescription>{post.meta.excerpt}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button asChild>
          <Link href={`/quick-thoughts/${post.slug}`}>
            Read More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

function PostCard({ post }: { post: any }) {
  return (
    <Card className="overflow-hidden hover-lift">
      <div className="aspect-video relative">
        <Image src={post.coverImageUrl || "/placeholder.svg"} alt={post.meta.title} fill className="object-cover" />
      </div>
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <Badge>{post.meta.category}</Badge>
          <div className="text-sm text-muted-foreground flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            {post.meta.readTime}
          </div>
        </div>
        <CardTitle>{post.meta.title}</CardTitle>
        <CardDescription>{post.meta.excerpt}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button asChild variant="outline">
          <Link href={`/quick-thoughts/${post.slug}`}>
            Read More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
