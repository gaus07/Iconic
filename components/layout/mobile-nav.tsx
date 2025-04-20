"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { Building } from "lucide-react"
import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MobileNav({ scrolled = false }: { scrolled?: boolean }) {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-white/10 focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden text-white"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0 bg-black/80 backdrop-blur-xl border-r border-white/20">
        <div className="flex h-16 items-center border-b border-white/10">
          <Link href="/" className="flex items-center space-x-2 text-white" onClick={() => setOpen(false)}>
            <Building className="h-6 w-6" />
            <span className="font-bold">Skyline Properties</span>
          </Link>
        </div>
        <nav className="grid gap-6 text-lg font-medium pt-6">
          <Link
            href="/"
            className={cn(
              "hover:text-white transition-colors duration-200",
              pathname === "/" ? "text-white" : "text-white/70",
            )}
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/projects"
            className={cn(
              "hover:text-white transition-colors duration-200",
              pathname === "/projects" || pathname.startsWith("/projects/") ? "text-white" : "text-white/70",
            )}
            onClick={() => setOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/about"
            className={cn(
              "hover:text-white transition-colors duration-200",
              pathname === "/about" ? "text-white" : "text-white/70",
            )}
            onClick={() => setOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className={cn(
              "hover:text-white transition-colors duration-200",
              pathname === "/contact" ? "text-white" : "text-white/70",
            )}
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
