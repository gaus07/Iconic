import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Car, Maximize, User, Bath, Bed } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm">
              <User className="mr-1 h-3.5 w-3.5" />
              <span>About us</span>
            </div>

            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">The best way to find your perfect home</h2>

            <p className="text-gray-500 md:text-lg max-w-[600px]">
              Lorem ipsum dolor sit amet consectetur. Gravida elementum dolor semper felis pulvinar feugiat risus
              adipiscing dictum. Ultricies nec elementum nisi ut. Cras diam odio sed auctor pellentesque. Sit nisi ipsum
              id convallis tristique. Malesuada.
            </p>

            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
            >
              Start exploring
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="relative">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Modern luxury home"
              width={800}
              height={600}
              className="rounded-3xl w-full h-auto object-cover"
            />

            {/* Property Features Badges */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center shadow-md">
              <Maximize className="mr-1 h-4 w-4 text-gray-500" />
              <span className="font-medium">4,821 sqft</span>
            </div>

            <div className="absolute top-1/3 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center shadow-md">
              <Bath className="mr-1 h-4 w-4 text-gray-500" />
              <span className="font-medium">3 bathrooms</span>
            </div>

            <div className="absolute top-1/2 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center shadow-md">
              <Bed className="mr-1 h-4 w-4 text-gray-500" />
              <span className="font-medium">3 bedrooms</span>
            </div>

            <div className="absolute bottom-1/4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center shadow-md">
              <Car className="mr-1 h-4 w-4 text-gray-500" />
              <span className="font-medium">6 parking zones</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
