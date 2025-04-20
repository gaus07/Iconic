"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight, MapPin, Plus, Star } from "lucide-react"
import { useState } from "react"

export default function FeaturedProjects() {
  const featuredProjects = [
    {
      id: 1,
      title: "Luxury Loft in San Francisco",
      description: "Lorem ipsum dolor sit amet consectetur. Id eu mi ac ac aliquam etiam ultrices augue convallis.",
      location: "2238 Stradella Rd, SF",
      image: "/placeholder.svg?height=600&width=800",
      type: "For rent",
    },
    {
      id: 2,
      title: "Riverside Villas",
      description: "Lorem ipsum dolor sit amet consectetur. Id eu mi ac ac aliquam etiam ultrices augue convallis.",
      location: "1845 Riverside Dr, LA",
      image: "/placeholder.svg?height=600&width=800",
      type: "For sale",
    },
    {
      id: 3,
      title: "Urban Lofts",
      description: "Lorem ipsum dolor sit amet consectetur. Id eu mi ac ac aliquam etiam ultrices augue convallis.",
      location: "567 Arts District, NY",
      image: "/placeholder.svg?height=600&width=800",
      type: "For rent",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredProjects.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + featuredProjects.length) % featuredProjects.length)
  }

  return (
    <section className="mt-24 max-w-[90%] mx-auto rounded-2xl overflow-hidden bg-black text-white shadow-xl">
      <div className="px-4 py-16 md:px-8 md:py-20">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <div className="inline-flex items-center rounded-full bg-gray-800/60 px-3 py-1 text-sm">
            <Star className="mr-1 h-3.5 w-3.5" />
            <span>Featured properties</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured properties</h2>
          <p className="max-w-[600px] text-gray-400 md:text-lg">
            Lorem ipsum dolor sit amet consectetur fermentum eget fringilla egestas a aliquam arcu arcu nunc pretium id.
          </p>
        </div>

        <div className="relative">
          {/* Carousel Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-white p-2 text-black shadow-lg"
            aria-label="Previous property"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-white p-2 text-black shadow-lg"
            aria-label="Next property"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Carousel Content */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {featuredProjects.map((project) => (
                <div key={project.id} className="w-full flex-shrink-0 px-2 md:px-4">
                  <div className="relative overflow-hidden rounded-xl">
                    <div className="absolute left-4 top-4 z-10">
                      <span className="inline-flex items-center rounded-full bg-black/70 px-3 py-1 text-sm font-medium">
                        {project.type}
                      </span>
                    </div>
                    <button className="absolute right-4 top-4 z-10 rounded-full bg-white p-2 text-black">
                      <Plus className="h-4 w-4" />
                    </button>
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="h-[500px] w-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <p className="mt-2 text-gray-200">{project.description}</p>
                      <div className="mt-4 flex items-center">
                        <MapPin className="mr-1 h-4 w-4" />
                        <span className="text-sm">{project.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link href="/projects" className="inline-flex items-center text-white hover:underline">
            Browse all properties
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
