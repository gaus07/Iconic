"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Bath, Bed, Car, MapPin, Maximize, Plus } from "lucide-react"

export default function PropertyListings() {
  const properties = [
    {
      id: 1,
      title: "Modern Loft in San Francisco",
      address: "3335 21 St, SF",
      image: "/placeholder.svg?height=600&width=800",
      type: "For rent",
      sqft: "1,334",
      bathrooms: 1,
      bedrooms: 2,
      parking: 1,
    },
    {
      id: 2,
      title: "Executive Office, San Diego",
      address: "90071, South Grand Avenue, San Diego",
      image: "/placeholder.svg?height=600&width=800",
      type: "For rent",
      sqft: "8,392",
      bathrooms: 4,
      bedrooms: 6,
      parking: 4,
    },
    {
      id: 3,
      title: "Luxury Loft in San Francisco",
      address: "2238 Stradella Rd, SF",
      image: "/placeholder.svg?height=600&width=800",
      type: "For rent",
      sqft: "2,553",
      bathrooms: 3,
      bedrooms: 2,
      parking: 3,
    },
    {
      id: 4,
      title: "Home in Los Angeles Heart",
      address: "2596 El Segundo, Los Angeles",
      image: "/placeholder.svg?height=600&width=800",
      type: "For sale",
      sqft: "4,821",
      bathrooms: 5,
      bedrooms: 6,
      parking: 5,
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <div className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm">
            <Maximize className="mr-1 h-3.5 w-3.5" />
            <span>All properties</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Check on all properties
            <br />
            we have available
          </h2>
          <p className="max-w-[600px] text-gray-500 md:text-lg">
            Lorem ipsum dolor sit amet consectetur. Sit ut gravida aenean potenti. Metus in eu vel morbi dui nunc
            tellus. Non a massa maecenas massa.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {properties.map((property) => (
            <div key={property.id} className="flex flex-col space-y-3">
              <div className="relative overflow-hidden rounded-3xl">
                <div className="absolute left-4 top-4 z-10">
                  <span className="inline-flex items-center rounded-full bg-black px-3 py-1 text-sm font-medium text-white">
                    {property.type}
                  </span>
                </div>
                <button className="absolute right-4 top-4 z-10 rounded-full bg-white p-2 text-black shadow-md">
                  <Plus className="h-4 w-4" />
                </button>
                <Image
                  src={property.image || "/placeholder.svg"}
                  alt={property.title}
                  width={800}
                  height={500}
                  className="h-[300px] w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              <h3 className="text-xl font-bold">{property.title}</h3>
              <div className="flex items-center text-gray-500">
                <MapPin className="mr-1 h-4 w-4" />
                <span>{property.address}</span>
              </div>

              <div className="flex items-center justify-between border-t border-gray-200 pt-3">
                <div className="flex space-x-4">
                  <div className="flex items-center text-gray-500">
                    <Maximize className="mr-1 h-4 w-4" />
                    <span>{property.sqft} sqft</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Bath className="mr-1 h-4 w-4" />
                    <span>{property.bathrooms}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Bed className="mr-1 h-4 w-4" />
                    <span>{property.bedrooms}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Car className="mr-1 h-4 w-4" />
                    <span>{property.parking}</span>
                  </div>
                </div>
                <Link
                  href={`/projects/${property.id}`}
                  className="text-black font-medium hover:underline flex items-center"
                >
                  Contact agent
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
          >
            Start exploring
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link href="/projects" className="inline-flex items-center text-black hover:underline">
            Browse all properties
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
