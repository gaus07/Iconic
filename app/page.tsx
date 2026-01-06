"use client"

import { Navbar } from "@/components/section/navbar"
import { HeroSection } from "@/components/section/home_page/hero"
import { FeaturedProperties } from "@/components/section/home_page/featuredProperties"
import ProcessTestimonial from "@/components/section/home_page/process-testimonial"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar
        logoText="Property X"
        navItems={[
          { label: "Home", href: "#" },
          { label: "About", href: "#" },
          { label: "Pages", href: "#" },
          { label: "Cart (0)", href: "#" },
        ]}
        ctaText="Start exploring"
      />
      <HeroSection
        title="Discover your dream home now"
        description="Lorem ipsum dolor sit amet consectetur fermentum eget fringilla egestas a aliquam arcu arcu nunc pretium id semper ut volutpat. Id gravida aenean."
        primaryCtaText="Start exploring"
        secondaryCtaText="Post properties"
        heroImage="/main.jpeg"
      />
        <FeaturedProperties />
        <ProcessTestimonial />
    </main>
  )
}
