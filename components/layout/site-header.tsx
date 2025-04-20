import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Building } from "lucide-react"
import { MainNav } from "@/components/layout/main-nav"
import { MobileNav } from "@/components/layout/mobile-nav"

export default function SiteHeader() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2 text-white">
          <Building className="h-6 w-6" />
          <span className="font-bold">Skyline Properties</span>
        </Link>
        <MainNav className="mx-6 hidden md:flex" />
        <MobileNav />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Button asChild variant="ghost" size="sm" className="text-white hover:bg-white/10">
              <Link href="/contact">Contact</Link>
            </Button>
            <Button asChild size="sm" className="bg-white text-black hover:bg-white/90">
              <Link href="/projects">View Projects</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
