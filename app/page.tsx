import Link from "next/link"

import AboutSection from "@/components/about-section"
import FeaturedProjects from "@/components/featured-projects"
import Hero from "@/components/hero"
import ProcessTestimonial from "@/components/process-testimonial"
import PropertyListings from "@/components/property-listings"
import TestimonialsSection from "@/components/testimonials-section"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Hero />
      <div className="px-2 md:px-4 py-8 md:py-12">
        <FeaturedProjects />
        <AboutSection />
        <PropertyListings />
        <ProcessTestimonial />
        <TestimonialsSection />
        <section className="w-full py-12 md:py-24 lg:py-32 rounded-2xl mt-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Find Your Dream Property?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Browse our exclusive collection of premium properties or contact our team for personalized assistance.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="/projects"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  View All Projects
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
