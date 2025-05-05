import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"

export default function QuickThoughtsPage() {
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
          <TabsTrigger value="tech">Tech</TabsTrigger>
          <TabsTrigger value="design">Design</TabsTrigger>
          <TabsTrigger value="cars">Cars</TabsTrigger>
          <TabsTrigger value="thoughts">Thoughts</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="grid md:grid-cols-2 gap-8">
            <FeaturedPost post={posts[0]} />
            <div className="grid gap-8">
              {posts.slice(1, 3).map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {posts.slice(3).map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="tech">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts
              .filter((p) => p.category === "Tech")
              .map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="design">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts
              .filter((p) => p.category === "Design")
              .map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="cars">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts
              .filter((p) => p.category === "Cars")
              .map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="thoughts">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts
              .filter((p) => p.category === "Thoughts")
              .map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface Post {
  id: string
  title: string
  excerpt: string
  image: string
  category: string
  date: string
  readTime: string
}

function FeaturedPost({ post }: { post: Post }) {
  return (
    <Card className="overflow-hidden hover-lift">
      <div className="aspect-video relative">
        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
      </div>
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <Badge>{post.category}</Badge>
          <div className="text-sm text-muted-foreground flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            {post.readTime}
          </div>
        </div>
        <CardTitle className="text-2xl">{post.title}</CardTitle>
        <CardDescription>{post.excerpt}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button asChild>
          <Link href={`/quick-thoughts/${post.id}`}>
            Read More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

function PostCard({ post }: { post: Post }) {
  return (
    <Card className="overflow-hidden hover-lift">
      <div className="aspect-video relative">
        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
      </div>
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <Badge>{post.category}</Badge>
          <div className="text-sm text-muted-foreground flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            {post.readTime}
          </div>
        </div>
        <CardTitle>{post.title}</CardTitle>
        <CardDescription>{post.excerpt}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button asChild variant="outline">
          <Link href={`/quick-thoughts/${post.id}`}>
            Read More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

const posts: Post[] = [
  {
    id: "why-good-design-matters",
    title: "Why Good Design Matters More Than You Think",
    excerpt: "Exploring the impact of thoughtful design on user experience and business outcomes.",
    image: "/placeholder.svg?key=wo0np",
    category: "Design",
    date: "2023-04-15",
    readTime: "5 min read",
  },
  {
    id: "next-js-vs-react",
    title: "Next.js vs React: When to Use What",
    excerpt: "A practical guide to choosing the right framework for your project.",
    image: "/placeholder.svg?key=y1gkm",
    category: "Tech",
    date: "2023-03-22",
    readTime: "8 min read",
  },
  {
    id: "japanese-cars-golden-era",
    title: "The Golden Era of Japanese Sports Cars",
    excerpt: "Looking back at the 90s: when Japan dominated the sports car market.",
    image: "/placeholder.svg?key=g0rhv",
    category: "Cars",
    date: "2023-02-10",
    readTime: "6 min read",
  },
  {
    id: "minimalism-in-ui",
    title: "The Art of Minimalism in UI Design",
    excerpt: "Less is more: how to create impactful interfaces with fewer elements.",
    image: "/placeholder.svg?key=r3ja8",
    category: "Design",
    date: "2023-01-18",
    readTime: "4 min read",
  },
  {
    id: "typescript-tips",
    title: "5 TypeScript Tips That Changed My Development Workflow",
    excerpt: "Practical TypeScript techniques to improve your code quality and productivity.",
    image: "/typescript-code-on-screen.png",
    category: "Tech",
    date: "2022-12-05",
    readTime: "7 min read",
  },
  {
    id: "ev-future",
    title: "Are EVs Really the Future of Automotive Enthusiasm?",
    excerpt: "Exploring the impact of electric vehicles on car culture and enthusiasm.",
    image: "/placeholder.svg?key=agqsx",
    category: "Cars",
    date: "2022-11-20",
    readTime: "9 min read",
  },
  {
    id: "digital-minimalism",
    title: "Digital Minimalism: Reclaiming Focus in a Distracted World",
    excerpt: "How I simplified my digital life and improved my productivity and wellbeing.",
    image: "/placeholder.svg?height=300&width=600&query=minimal desk setup with notebook",
    category: "Thoughts",
    date: "2022-10-12",
    readTime: "5 min read",
  },
]
