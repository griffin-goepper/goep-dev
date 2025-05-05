import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function FeaturedProjects() {
  return (
    <section className="container">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
          <p className="text-muted-foreground">Some of my recent work</p>
        </div>
        <Button asChild variant="outline">
          <Link href="/projects">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="overflow-hidden hover-lift">
          <div className="aspect-video relative">
            <Image src="/dark-theme-website.png" alt="Portfolio Redesign" fill className="object-cover" />
          </div>
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold mb-2">Portfolio Redesign</h3>
            <p className="text-muted-foreground mb-4">
              A complete redesign of my personal portfolio with Next.js and Tailwind CSS.
            </p>
            <Button asChild>
              <Link href="/projects/1">
                View Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="overflow-hidden hover-lift">
          <div className="aspect-video relative">
            <Image src="/placeholder.svg?key=7mqyw" alt="Car Enthusiast Platform" fill className="object-cover" />
          </div>
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold mb-2">Car Enthusiast Platform</h3>
            <p className="text-muted-foreground mb-4">
              A community platform for car enthusiasts to share their builds and connect.
            </p>
            <Button asChild>
              <Link href="/projects/4">
                View Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
