"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Menu, X } from "lucide-react"
import { useState } from "react"

interface NavbarProps {
  logoText?: string
  navItems?: {
    label: string
    href: string
  }[]
  onCtaClick?: () => void
  ctaText?: string
}

export function Navbar({
  logoText = "Property X",
  navItems = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Pages", href: "#" },
    { label: "Cart (0)", href: "#" },
  ],
  onCtaClick,
  ctaText = "Start exploring",
}: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full">
    <nav className="w-full bg-white px-6 md:px-12 pt-6 lg:pt-6 pb-0 lg:pb-6 relative z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-slate-800 rounded-sm flex items-center justify-center">
            <span className="text-white font-bold text-sm">⌂</span>
          </div>
          <span className="text-slate-800 font-semibold text-lg md:text-xl">{logoText}</span>
        </div>

        {/* Navigation Items - Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-slate-800 font-medium hover:opacity-70 transition-opacity"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA Button - Desktop */}
        <Button
          onClick={onCtaClick}
          variant="secondary"
          size="default"
          className="hidden md:inline-flex rounded-full bg-slate-800 hover:bg-slate-700 text-white"
        >
          {ctaText}
          <ArrowRight className="w-4 h-4" />
        </Button>

        <button
          className="md:hidden flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6 text-slate-800" /> : <Menu className="w-6 h-6 text-slate-800" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-200 shadow-lg">
          <div className="flex flex-col p-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-slate-800 font-medium hover:opacity-70 transition-opacity py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button
              onClick={() => {
                onCtaClick?.()
                setIsOpen(false)
              }}
              variant="secondary"
              size="default"
              className="rounded-full bg-slate-800 hover:bg-slate-700 text-white w-full mt-4"
            >
              {ctaText}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </nav>
    </header>
  )
}
