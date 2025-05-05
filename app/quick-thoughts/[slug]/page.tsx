import { notFound } from "next/navigation"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Clock, Calendar } from "lucide-react"
import type { Metadata } from "next"

interface PostPageProps {
  params: {
    slug: string
  }
}

// This would normally fetch from a database or CMS
const getPostBySlug = (slug: string) => {
  const post = posts.find((post) => post.id === slug)
  if (!post) return null
  return post
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Post Not Found | Griffin Goepper",
      description: "The requested post could not be found.",
    }
  }

  return {
    title: `${post.title} | Griffin Goepper`,
    description: post.excerpt,
  }
}

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.id,
  }))
}

export default function PostPage({ params }: PostPageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="container max-w-4xl py-12 md:py-24">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Badge>{post.category}</Badge>
          <div className="text-sm text-muted-foreground flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            {post.readTime}
          </div>
          <div className="text-sm text-muted-foreground flex items-center">
            <Calendar className="h-3 w-3 mr-1" />
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
        </div>

        <h1 className="text-4xl font-bold tracking-tight mb-6">{post.title}</h1>

        {post.image && (
          <div className="relative aspect-video mb-8 rounded-lg overflow-hidden">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
          </div>
        )}
      </div>

      <article className="prose dark:prose-invert max-w-none">
        <p className="text-lg">{post.excerpt}</p>

        <p>
          This is a placeholder for the full content of the post. In a real implementation, this would be the actual
          content of the post, which could be stored in a database, CMS, or as markdown files.
        </p>

        <h2>Section Title</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nisl
          nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Donec auctor, nisl eget ultricies tincidunt, nisl
          nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
        </p>

        <p>
          Donec auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
          Donec auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
        </p>
      </article>
    </div>
  )
}

// This would normally be imported from a database or CMS
const posts = [
  {
    id: "why-good-design-matters",
    title: "Why Good Design Matters More Than You Think",
    excerpt: "Exploring the impact of thoughtful design on user experience and business outcomes.",
    image: "/placeholder.svg?key=uqd3h",
    category: "Design",
    date: "2023-04-15",
    readTime: "5 min read",
  },
  {
    id: "next-js-vs-react",
    title: "Next.js vs React: When to Use What",
    excerpt: "A practical guide to choosing the right framework for your project.",
    image: "/placeholder.svg?key=ey3cc",
    category: "Tech",
    date: "2023-03-22",
    readTime: "8 min read",
  },
  {
    id: "japanese-cars-golden-era",
    title: "The Golden Era of Japanese Sports Cars",
    excerpt: "Looking back at the 90s: when Japan dominated the sports car market.",
    image: "/placeholder.svg?key=jfk10",
    category: "Cars",
    date: "2023-02-10",
    readTime: "6 min read",
  },
  {
    id: "minimalism-in-ui",
    title: "The Art of Minimalism in UI Design",
    excerpt: "Less is more: how to create impactful interfaces with fewer elements.",
    image: "/placeholder.svg?key=gcxh6",
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
    image: "/placeholder.svg?key=acoxa",
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
