import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Github } from "lucide-react"

export default function ProjectsPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">My Projects</h1>
        <p className="text-xl text-muted-foreground">
          A collection of work that showcases my skills in development and design.
        </p>
      </div>

      <Tabs defaultValue="all" className="mb-12">
        <TabsList className="mb-8">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="development">Development</TabsTrigger>
          <TabsTrigger value="design">UI/UX Design</TabsTrigger>
          <TabsTrigger value="fun">Fun Projects</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </TabsContent>

        <TabsContent value="development" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects
            .filter((p) => p.tags.includes("Development"))
            .map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </TabsContent>

        <TabsContent value="design" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects
            .filter((p) => p.tags.includes("UI/UX"))
            .map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </TabsContent>

        <TabsContent value="fun" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects
            .filter((p) => p.tags.includes("Fun"))
            .map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="overflow-hidden hover-lift">
      <div className="aspect-video relative">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
      </div>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        {project.liveUrl && (
          <Button asChild variant="default" size="sm">
            <Link href={project.liveUrl} target="_blank">
              View Live
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        )}
        {project.githubUrl && (
          <Button asChild variant="outline" size="sm">
            <Link href={project.githubUrl} target="_blank">
              <Github className="mr-1 h-4 w-4" />
              Code
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

const projects: Project[] = [
  {
    id: "1",
    title: "Portfolio Redesign",
    description: "A complete redesign of my personal portfolio with Next.js and Tailwind CSS.",
    image: "/dark-theme-website.png",
    tags: ["Development", "UI/UX", "Next.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "2",
    title: "E-commerce Dashboard",
    description: "A comprehensive dashboard for e-commerce store owners to track sales and inventory.",
    image: "/placeholder.svg?key=kdvc8",
    tags: ["Development", "UI/UX", "React"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "3",
    title: "Mobile App Design",
    description: "UI/UX design for a fitness tracking mobile application.",
    image: "/placeholder.svg?key=i5p4r",
    tags: ["UI/UX", "Figma"],
    liveUrl: "https://example.com",
  },
  {
    id: "4",
    title: "Car Enthusiast Platform",
    description: "A community platform for car enthusiasts to share their builds and connect.",
    image: "/placeholder.svg?key=uodhs",
    tags: ["Development", "UI/UX", "Fun"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "5",
    title: "Weather App",
    description: "A minimalist weather application with beautiful visualizations.",
    image: "/placeholder.svg?key=dwgdm",
    tags: ["Development", "UI/UX"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "6",
    title: "Smart Home Controller",
    description: "Interface design for a smart home control system.",
    image: "/placeholder.svg?height=300&width=600&query=smart home control interface",
    tags: ["UI/UX", "Fun"],
    liveUrl: "https://example.com",
  },
]
