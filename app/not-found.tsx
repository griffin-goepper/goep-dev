import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center px-4">
      <div className="space-y-4">
        <h1 className="text-6xl font-bold">404</h1>
        <h2 className="text-2xl font-medium">Page not found</h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Hmm, this page seems to have wandered off. Maybe it's taking a break.
        </p>
        <Button asChild>
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  )
}
