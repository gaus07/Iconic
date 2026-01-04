"use client"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface HeroSectionProps {
  title: string
  description: string
  primaryCtaText?: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
  onPrimaryCtaClick?: () => void
  heroImage: string
  heroImageAlt?: string
  stats?: StatCard[]
  testimonial?: Testimonial
}

interface StatCard {
  label: string
  value: string
  description: string
}

interface Testimonial {
  quote: string
  description: string
  author: string
  location: string
  image: string
}

export function HeroSection({
  title,
  description,
  primaryCtaText = "Start exploring",
  secondaryCtaText = "Post properties",
  secondaryCtaHref = "#",
  onPrimaryCtaClick,
  heroImage,
  heroImageAlt = "Hero property image",
  stats = [
    {
      label: "Homes purchased",
      value: "10k+",
      description: "Lorem ipsum dolor sit amet consectetur fermentum",
    },
    {
      label: "Published properties",
      value: "200k",
      description: "Lorem ipsum dolor sit amet consectetur fermentum",
    },
  ],
  testimonial = {
    quote: "If you wanna sell fast, call John Carter",
    description: "Lorem ipsum dolor sit amet consectetur ultrices rutrum fusce dui nisl neque placerat velit.",
    author: "Sophie Moore",
    location: "NY",
    image: "/professional-woman.png",
  },
}: HeroSectionProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Border Radius */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden m-4 md:m-6 lg:m-8">
          <img src={heroImage || "/placeholder.svg"} alt={heroImageAlt} className="w-full h-full object-cover" />
          {/* Overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12">
            {/* Title - Left Side */}
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-pretty">{title}</h1>
            </div>
            {/* Description & Buttons - Right Side */}
            <div className="flex-1 space-y-6">
              <p className="text-base md:text-lg text-white/95 leading-relaxed">{description}</p>
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Button
                  onClick={onPrimaryCtaClick}
                  variant="secondary"
                  size="default"
                  className="rounded-full bg-slate-800 hover:bg-slate-700 text-white"
                >
                  {primaryCtaText}
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <a
                  href={secondaryCtaHref}
                  className="text-white font-medium flex items-center gap-2 hover:gap-3 transition-all"
                >
                  {secondaryCtaText}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats & Testimonial Section */}
      <section className="w-full bg-white py-12 md:py-20 lg:py-24 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Stats Section */}
            <div className="flex flex-col sm:flex-row gap-8 md:gap-12">
              {stats.map((stat, index) => (
                <div key={index} className="flex-1">
                  <p className="text-gray-600 text-sm md:text-base font-medium mb-2">{stat.label}</p>
                  <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-4">{stat.value}</h3>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">{stat.description}</p>
                </div>
              ))}
            </div>
            {/* Testimonial Section */}
            <div className="flex flex-col gap-6 lg:pl-8">
              <div className="flex gap-4">
                {/* Profile Image */}
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.author}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover shrink-0"
                />
                {/* Quote and Author */}
                <div className="flex-1">
                  <blockquote className="text-lg md:text-xl font-semibold text-black mb-3 leading-snug">
                    "{testimonial.quote}"
                  </blockquote>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-3">{testimonial.description}</p>
                  <div className="font-semibold text-black">
                    {testimonial.author}, <span className="text-gray-600 font-medium">{testimonial.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}