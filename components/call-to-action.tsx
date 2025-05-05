import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CallToAction() {
  return (
    <section className="container">
      <div className="rounded-xl bg-muted p-8 md:p-12 lg:p-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Let's Work Together</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Have a project in mind or just want to chat? I'm always open to new opportunities and collaborations.
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </div>
    </section>
  )
}
