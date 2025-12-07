"use client"

import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="w-full h-screen relative overflow-hidden pt-0">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/main.jpeg"
          alt="Luxury real estate"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
      </div>

      {/* Content container positioned at the bottom center */}
      <div className="absolute bottom-16 left-0 right-0 z-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
              Discover Your Perfect Space
            </h1>
            <p className="max-w-[600px] mx-auto text-gray-300 md:text-xl">
              Explore our curated collection of premium properties designed for modern living.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row justify-center">
              <Link
                href="/projects"
                className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-black shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Browse Projects
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-md border border-gray-600 bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
