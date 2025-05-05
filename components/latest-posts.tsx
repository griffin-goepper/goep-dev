import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"

export default function LatestPosts() {
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
        <Card className="overflow-hidden hover-lift">
          <div className="aspect-video relative">
            <Image src="/placeholder.svg?key=fnh4h" alt="Why Good Design Matters" fill className="object-cover" />
          </div>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <Badge>Design</Badge>
              <div className="text-sm text-muted-foreground flex items-center">
                <Clock className="h-3 w-3 mr-1" />5 min read
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Why Good Design Matters More Than You Think</h3>
            <p className="text-muted-foreground">
              Exploring the impact of thoughtful design on user experience and business outcomes.
            </p>
          </CardContent>
          <CardFooter className="px-6 pb-6 pt-0">
            <Button asChild variant="outline" size="sm">
              <Link href="/quick-thoughts/why-good-design-matters">
                Read Post
                <ArrowRight className="ml-2 h-3 w-3" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="overflow-hidden hover-lift">
          <div className="aspect-video relative">
            <Image src="/placeholder.svg?key=kxr3g" alt="Next.js vs React" fill className="object-cover" />
          </div>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <Badge>Tech</Badge>
              <div className="text-sm text-muted-foreground flex items-center">
                <Clock className="h-3 w-3 mr-1" />8 min read
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Next.js vs React: When to Use What</h3>
            <p className="text-muted-foreground">A practical guide to choosing the right framework for your project.</p>
          </CardContent>
          <CardFooter className="px-6 pb-6 pt-0">
            <Button asChild variant="outline" size="sm">
              <Link href="/quick-thoughts/next-js-vs-react">
                Read Post
                <ArrowRight className="ml-2 h-3 w-3" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="overflow-hidden hover-lift">
          <div className="aspect-video relative">
            <Image src="/placeholder.svg?key=9bdik" alt="Japanese Sports Cars" fill className="object-cover" />
          </div>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <Badge>Cars</Badge>
              <div className="text-sm text-muted-foreground flex items-center">
                <Clock className="h-3 w-3 mr-1" />6 min read
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">The Golden Era of Japanese Sports Cars</h3>
            <p className="text-muted-foreground">
              Looking back at the 90s: when Japan dominated the sports car market.
            </p>
          </CardContent>
          <CardFooter className="px-6 pb-6 pt-0">
            <Button asChild variant="outline" size="sm">
              <Link href="/quick-thoughts/japanese-cars-golden-era">
                Read Post
                <ArrowRight className="ml-2 h-3 w-3" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}
