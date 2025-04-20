"use client"

import type React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname()

  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)} {...props}>
      <Link
        href="/"
        className={cn(
          "text-sm font-medium transition-all duration-300 hover:text-white relative group",
          pathname === "/" ? "text-white" : "text-white/70",
        )}
      >
        Home
        <span
          className={cn(
            "absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full",
            pathname === "/" ? "w-full" : "w-0",
          )}
        ></span>
      </Link>
      <Link
        href="/projects"
        className={cn(
          "text-sm font-medium transition-all duration-300 hover:text-white relative group",
          pathname === "/projects" || pathname.startsWith("/projects/") ? "text-white" : "text-white/70",
        )}
      >
        Projects
        <span
          className={cn(
            "absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full",
            pathname === "/projects" || pathname.startsWith("/projects/") ? "w-full" : "w-0",
          )}
        ></span>
      </Link>
      <Link
        href="/about"
        className={cn(
          "text-sm font-medium transition-all duration-300 hover:text-white relative group",
          pathname === "/about" ? "text-white" : "text-white/70",
        )}
      >
        About Us
        <span
          className={cn(
            "absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full",
            pathname === "/about" ? "w-full" : "w-0",
          )}
        ></span>
      </Link>
      <Link
        href="/contact"
        className={cn(
          "text-sm font-medium transition-all duration-300 hover:text-white relative group",
          pathname === "/contact" ? "text-white" : "text-white/70",
        )}
      >
        Contact
        <span
          className={cn(
            "absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full",
            pathname === "/contact" ? "w-full" : "w-0",
          )}
        ></span>
      </Link>
    </nav>
  )
}
