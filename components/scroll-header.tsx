"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Building } from "lucide-react"

import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/layout/main-nav"
import { MobileNav } from "@/components/layout/mobile-nav"
import { cn } from "@/lib/utils"

export default function ScrollHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500",
        scrolled
          ? "bg-white/10 backdrop-blur-md border-b border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)]"
          : "bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2 text-white">
          <Building className="h-6 w-6" />
          <span className="font-bold">Skyline Properties</span>
        </Link>
        <MainNav className="mx-6 hidden md:flex text-white" />
        <MobileNav scrolled={scrolled} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20 hover:text-white transition-all duration-300"
            >
              <Link href="/contact">Contact</Link>
            </Button>
            <Button
              asChild
              size="sm"
              className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 hover:border-white/50 transition-all duration-300"
            >
              <Link href="/projects">View Projects</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
