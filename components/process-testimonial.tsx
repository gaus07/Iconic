"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CircleDot } from "lucide-react"

export default function ProcessTestimonial() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const testimonialsRef = useRef<(HTMLDivElement | null)[]>([])

  const testimonials = [
    {
      id: 1,
      title: "Find your dream house as easy as 1, 2, 3",
      description: "",
      image: "/placeholder.svg?height=800&width=1000",
      step: "Our process",
    },
    {
      id: 2,
      title: "Search for your favorite house in your location",
      description:
        "Lorem ipsum dolor sit amet consectetur vitae purus quis metus sed semper diam iaculis duis vitae purus amet sagittis leo elit vitae dolor.",
      image: "/placeholder.svg?height=800&width=1000",
      mockup: {
        title: "Choose your location",
        properties: [
          {
            title: "Luxury Loft in San Francisco",
            address: "2238 Stradella Rd, SF",
            image: "/placeholder.svg?height=200&width=300",
            type: "For rent",
          },
          {
            title: "Home in Los Angeles heart",
            address: "2596 El Segundo, Los Angeles",
            image: "/placeholder.svg?height=200&width=300",
            type: "For sale",
          },
        ],
      },
      step: "Step 1",
    },
    {
      id: 3,
      title: "Schedule a viewing with our expert agents",
      description:
        "Lorem ipsum dolor sit amet consectetur vitae purus quis metus sed semper diam iaculis duis vitae purus amet sagittis leo elit vitae dolor.",
      image: "/placeholder.svg?height=800&width=1000",
      mockup: {
        title: "Choose a date",
        calendar: true,
      },
      step: "Step 2",
    },
    {
      id: 4,
      title: "Get the keys to your new home",
      description:
        "Lorem ipsum dolor sit amet consectetur vitae purus quis metus sed semper diam iaculis duis vitae purus amet sagittis leo elit vitae dolor.",
      image: "/placeholder.svg?height=800&width=1000",
      mockup: {
        title: "Congratulations!",
        success: true,
      },
      step: "Step 3",
    },
  ]

  useEffect(() => {
    if (!sectionRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = testimonialsRef.current.findIndex((ref) => ref === entry.target)
            if (index !== -1) {
              setActiveIndex(index)
            }
          }
        })
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      },
    )

    testimonialsRef.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      testimonialsRef.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  return (
    <section className="w-full bg-white" ref={sectionRef}>
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left column - scrolling testimonials */}
          <div className="space-y-32 py-16 md:py-24 lg:py-32">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                ref={(el: any) => (testimonialsRef.current[index] = el)}
                className="min-h-[50vh] flex flex-col justify-center"
              >
                <div
                  className={`transition-opacity duration-500 ${activeIndex === index ? "opacity-100" : "opacity-30"}`}
                >
                  <div className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm mb-4">
                    <CircleDot className="mr-1 h-3.5 w-3.5" />
                    <span>{testimonial.step}</span>
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-6">{testimonial.title}</h2>
                  {testimonial.description && <p className="text-gray-500 md:text-lg">{testimonial.description}</p>}
                  {index === 0 && (
                    <div className="mt-8">
                      <Link
                        href="/projects"
                        className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
                      >
                        Start exploring
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right column - sticky image that changes */}
          <div className="relative hidden lg:block">
            <div className="sticky top-32">
              <div className="relative rounded-3xl overflow-hidden">
                <Image
                  src={testimonials[activeIndex].image || "/placeholder.svg"}
                  alt={testimonials[activeIndex].title}
                  width={1000}
                  height={800}
                  className="w-full h-auto object-cover rounded-3xl transition-opacity duration-500"
                />

                {/* Mockup UI overlay */}
                {testimonials[activeIndex].mockup && (
                  <div
                    className={`absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-xl shadow-lg p-4 w-72 transition-opacity duration-500 ${
                      activeIndex > 0 ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-medium">{testimonials[activeIndex].mockup.title}</h4>
                      {testimonials[activeIndex].mockup.calendar && (
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">April 2023</span>
                      )}
                      {testimonials[activeIndex].mockup.success && (
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Complete</span>
                      )}
                    </div>

                    {testimonials[activeIndex].mockup.properties && (
                      <div className="space-y-3">
                        {testimonials[activeIndex].mockup.properties.map((property, idx) => (
                          <div key={idx} className="bg-gray-50 rounded-lg p-2">
                            <div className="relative mb-2">
                              <div className="absolute left-1 top-1 z-10">
                                <span className="inline-flex items-center rounded-full bg-black/70 px-2 py-0.5 text-xs font-medium text-white">
                                  {property.type}
                                </span>
                              </div>
                              <Image
                                src={property.image || "/placeholder.svg"}
                                alt={property.title}
                                width={300}
                                height={150}
                                className="h-24 w-full object-cover rounded-md"
                              />
                            </div>
                            <h5 className="font-medium text-sm">{property.title}</h5>
                            <p className="text-xs text-gray-500">{property.address}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {testimonials[activeIndex].mockup.calendar && (
                      <div className="grid grid-cols-7 gap-1 mt-2">
                        {Array.from({ length: 31 }).map((_, idx) => (
                          <div
                            key={idx}
                            className={`h-8 w-8 flex items-center justify-center text-xs rounded-full ${
                              idx === 15
                                ? "bg-black text-white"
                                : idx > 7 && idx < 22
                                  ? "hover:bg-gray-100 cursor-pointer"
                                  : "text-gray-300"
                            }`}
                          >
                            {idx + 1}
                          </div>
                        ))}
                      </div>
                    )}

                    {testimonials[activeIndex].mockup.success && (
                      <div className="text-center py-6">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 text-green-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="text-sm">Your appointment is confirmed!</p>
                        <p className="text-xs text-gray-500 mt-1">April 16, 2023 at 10:00 AM</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile version of images */}
          <div className="lg:hidden">
            <div className="relative rounded-3xl overflow-hidden">
              <Image
                src={testimonials[activeIndex].image || "/placeholder.svg"}
                alt={testimonials[activeIndex].title}
                width={1000}
                height={800}
                className="w-full h-auto object-cover rounded-3xl transition-opacity duration-500"
              />

              {/* Mockup UI overlay for mobile */}
              {testimonials[activeIndex].mockup && activeIndex > 0 && (
                <div className="absolute bottom-4 right-4 left-4 bg-white rounded-xl shadow-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-sm">{testimonials[activeIndex].mockup.title}</h4>
                  </div>

                  {testimonials[activeIndex].mockup.properties && testimonials[activeIndex].mockup.properties[0] && (
                    <div className="bg-gray-50 rounded-lg p-2">
                      <div className="relative mb-2">
                        <div className="absolute left-1 top-1 z-10">
                          <span className="inline-flex items-center rounded-full bg-black/70 px-2 py-0.5 text-xs font-medium text-white">
                            {testimonials[activeIndex].mockup.properties[0].type}
                          </span>
                        </div>
                        <Image
                          src={testimonials[activeIndex].mockup.properties[0].image || "/placeholder.svg"}
                          alt={testimonials[activeIndex].mockup.properties[0].title}
                          width={300}
                          height={150}
                          className="h-20 w-full object-cover rounded-md"
                        />
                      </div>
                      <h5 className="font-medium text-xs">{testimonials[activeIndex].mockup.properties[0].title}</h5>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
