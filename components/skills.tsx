import { Card, CardContent } from "@/components/ui/card"
import { Code, Figma, Laptop, Palette, Server, Smartphone } from "lucide-react"

export default function Skills() {
  return (
    <section className="container">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight mb-2">Skills & Expertise</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          I specialize in creating beautiful, functional experiences across the entire development stack.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="hover-lift">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Code className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Frontend Development</h3>
            <p className="text-muted-foreground">
              Building responsive, accessible, and performant user interfaces with React, Next.js, and TypeScript.
            </p>
          </CardContent>
        </Card>

        <Card className="hover-lift">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Palette className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
            <p className="text-muted-foreground">
              Creating intuitive, delightful user experiences with a focus on usability and aesthetics.
            </p>
          </CardContent>
        </Card>

        <Card className="hover-lift">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Server className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">AWS</h3>
            <p className="text-muted-foreground">Making applications and websites scalable, hopefully serverless.</p>
          </CardContent>
        </Card>

        <Card className="hover-lift">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Figma className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Project Management</h3>
            <p className="text-muted-foreground">
              Leading teams and managing projects with efficient workflows and clear communication.
            </p>
          </CardContent>
        </Card>

        <Card className="hover-lift">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Smartphone className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">SEO</h3>
            <p className="text-muted-foreground">Ensuring seamless business's website and online content, with the goal of improving its search engine rankings.</p>
          </CardContent>
        </Card>

        <Card className="hover-lift">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Laptop className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Fullstack Dev</h3>
            <p className="text-muted-foreground">
              Building complete web applications from frontend interfaces to backend services and databases.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
