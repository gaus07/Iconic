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
      image: "/home_featured-1.jpg?height=800&width=1000",
      step: "Our process",
    },
    {
      id: 2,
      title: "Search for your favorite house in your location",
      description:
        "Lorem ipsum dolor sit amet consectetur vitae purus quis metus sed semper diam iaculis duis vitae purus amet sagittis leo elit vitae dolor.",
      image: "/home_featured-2.jpg?height=800&width=1000",
      step: "Step 1",
    },
    {
      id: 3,
      title: "Schedule a viewing with our expert agents",
      description:
        "Lorem ipsum dolor sit amet consectetur vitae purus quis metus sed semper diam iaculis duis vitae purus amet sagittis leo elit vitae dolor.",
      image: "/home_featured-3.jpg?height=800&width=1000",
      step: "Step 2",
    },
    {
      id: 4,
      title: "Get the keys to your new home",
      description:
        "Lorem ipsum dolor sit amet consectetur vitae purus quis metus sed semper diam iaculis duis vitae purus amet sagittis leo elit vitae dolor.",
      image: "/home_featured-4.jpg?height=800&width=1000",
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
            if (index !== -1) setActiveIndex(index)
          }
        })
      },
      { threshold: 0.5 }
    )

    testimonialsRef.current.forEach((ref) => ref && observer.observe(ref))

    return () => {
      testimonialsRef.current.forEach((ref) => ref && observer.unobserve(ref))
    }
  }, [])

  return (
    <section ref={sectionRef} className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left column */}
          <div className="space-y-32">
            {testimonials.map((item, index) => (
              <div
                key={item.id}
                ref={(el) => {
                  testimonialsRef.current[index] = el
                }}
                className="min-h-[50vh] flex flex-col justify-center"
              >
                <div
                  className={`transition-opacity duration-500 ${
                    activeIndex === index ? "opacity-100" : "opacity-30"
                  }`}
                >
                  <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-1.5 text-sm mb-4">
                    <CircleDot className="h-4 w-4" />
                    <span>{item.step}</span>
                  </div>

                  <h2 className="text-3xl sm:text-5xl font-bold mb-6 leading-tight">
                    {item.title}
                  </h2>

                  {item.description && (
                    <p className="text-gray-500 md:text-lg max-w-xl">
                      {item.description}
                    </p>
                  )}

                  {index === 0 && (
                    <div className="mt-8">
                      <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
                      >
                        Start exploring
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right column – sticky image */}
          <div className="relative hidden lg:block">
            <div className="sticky top-32">
              <div className="relative rounded-3xl overflow-hidden">
                <Image
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].title}
                  width={1000}
                  height={800}
                  className="w-full h-auto object-cover rounded-3xl transition-opacity duration-500"
                />
              </div>
            </div>
          </div>

          {/* Mobile image */}
          <div className="lg:hidden">
            <div className="relative rounded-3xl overflow-hidden">
              <Image
                src={testimonials[activeIndex].image}
                alt={testimonials[activeIndex].title}
                width={1000}
                height={800}
                className="w-full h-auto object-cover rounded-3xl transition-opacity duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
