"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="font-bold text-xl mr-6">
          goep<span className="text-primary">.dev</span>
        </Link>

        <nav className="hidden md:flex gap-6 mr-6">
          <Link
            href="/"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/" ? "text-foreground" : "text-muted-foreground",
            )}
          >
            Home
          </Link>
          <Link
            href="/projects"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/projects" ? "text-foreground" : "text-muted-foreground",
            )}
          >
            Projects
          </Link>
          <Link
            href="/quick-thoughts"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/quick-thoughts" ? "text-foreground" : "text-muted-foreground",
            )}
          >
            Quick Thoughts
          </Link>
          <Link
            href="/contact"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/contact" ? "text-foreground" : "text-muted-foreground",
            )}
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center ml-auto gap-2">
          <ModeToggle />

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col gap-4 mt-8">
                  <Link
                    href="/"
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary",
                      pathname === "/" ? "text-foreground" : "text-muted-foreground",
                    )}
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary",
                      pathname === "/about" ? "text-foreground" : "text-muted-foreground",
                    )}
                  >
                    About
                  </Link>
                  <Link
                    href="/projects"
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary",
                      pathname === "/projects" ? "text-foreground" : "text-muted-foreground",
                    )}
                  >
                    Projects
                  </Link>
                  <Link
                    href="/quick-thoughts"
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary",
                      pathname === "/quick-thoughts" ? "text-foreground" : "text-muted-foreground",
                    )}
                  >
                    Quick Thoughts
                  </Link>
                  <Link
                    href="/contact"
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary",
                      pathname === "/contact" ? "text-foreground" : "text-muted-foreground",
                    )}
                  >
                    Contact
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
