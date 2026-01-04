"use client"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Plus, MapPin, Star } from "lucide-react"

interface PropertyCard {
  id: string
  title: string
  description: string
  location: string
  image: string
  type: "For rent" | "For sale"
}

interface FeaturedPropertiesProps {
  title?: string
  description?: string
  properties?: PropertyCard[]
  onBrowseClick?: () => void
}

export function FeaturedProperties({
  title = "Featured properties",
  description = "Lorem ipsum dolor sit amet consectetur fermentum eget fringilla egestas a aliquam arcu arcu nunc pretium id.",
  properties = [
    {
      id: "1",
      title: "Luxury Loft in San Francisco",
      description: "Lorem ipsum dolor sit amet consectetur. Id eu mi ac ac aliquam etiam ultrices augue convallis.",
      location: "2238 Stradella Rd, SF",
      image: "/luxury-property-1.jpg",
      type: "For rent",
    },
    {
      id: "2",
      title: "Modern Villa in Malibu",
      description: "A stunning coastal property with panoramic ocean views and contemporary design.",
      location: "3456 Pacific Coast Hwy, Malibu",
      image: "/modern-luxury-property-architecture-bright-windows.jpg",
      type: "For sale",
    },
    {
      id: "3",
      title: "Downtown Penthouse New York",
      description: "Luxury penthouse in the heart of Manhattan with floor-to-ceiling windows.",
      location: "1 Central Park South, NYC",
      image: "/luxury-property-1.jpg",
      type: "For rent",
    },
  ],
  onBrowseClick,
}: FeaturedPropertiesProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(1)

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1)
    }
    
    // Set initial value
    handleResize()
    
    // Add event listener
    window.addEventListener('resize', handleResize)
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const nextProperty = () => {
    setCurrentIndex((prev) => (prev + 1) % properties.length)
  }

  const prevProperty = () => {
    setCurrentIndex((prev) => (prev - 1 + properties.length) % properties.length)
  }

  const getVisibleProperties = () => {
    const visible = []

    for (let i = 0; i < itemsPerView; i++) {
      visible.push(properties[(currentIndex + i) % properties.length])
    }
    return visible
  }

  return (
    <>
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="w-full h-full bg-slate-950 rounded-3xl m-4 md:m-6 lg:m-8 p-8 md:p-12 lg:p-16 flex flex-col justify-between overflow-y-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 bg-slate-800/50 rounded-full px-4 py-2 mb-4">
            <Star className="w-4 h-4 text-white fill-white" />
            <span className="text-sm text-white font-medium">Featured properties</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">{title}</h2>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl">{description}</p>
        </div>

        {/* Carousel Container */}
        <div className="relative flex items-center justify-center gap-4 flex-1">
          <button
            onClick={prevProperty}
            className="absolute -left-4 md:left-0 z-20 flex items-center justify-center w-12 h-12 bg-white rounded-full hover:bg-slate-100 transition-all"
            aria-label="Previous property"
          >
            <ChevronLeft className="w-6 h-6 text-slate-800" />
          </button>

          <div className="w-full overflow-hidden px-12 md:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-transform duration-300">
              {getVisibleProperties().map((property) => (
                <div key={property.id} className="relative group cursor-pointer">
                  {/* Property Image with Border Radius */}
                  <div className="relative rounded-2xl overflow-hidden h-60 md:h-72 lg:h-64">
                    <img
                      src={property.image || "/placeholder.svg"}
                      alt={property.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to from-black/70 via-black/20 to-transparent" />

                    <div className="absolute top-4 left-4 z-10">
                      <div className="bg-slate-900 rounded-full px-4 py-2 flex items-center gap-2">
                        <span className="text-white text-sm font-semibold">🔍 {property.type}</span>
                      </div>
                    </div>

                    <button
                      className="absolute top-4 right-4 z-10 flex items-center justify-center w-10 h-10 bg-white rounded-full hover:bg-slate-100 transition-all"
                      aria-label="Add to favorites"
                    >
                      <Plus className="w-6 h-6 text-slate-800" />
                    </button>

                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{property.title}</h3>
                      <p className="text-sm text-slate-200 mb-4">{property.description}</p>

                      {/* Location */}
                      <div className="flex items-center gap-2 text-white text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>{property.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={nextProperty}
            className="absolute -right-4 md:right-0 z-20 flex items-center justify-center w-12 h-12 bg-white rounded-full hover:bg-slate-100 transition-all"
            aria-label="Next property"
          >
            <ChevronRight className="w-6 h-6 text-slate-800" />
          </button>
        </div>

        {/* Browse All Link */}
        <div className="flex justify-center">
          <button
            onClick={onBrowseClick}
            className="text-white font-semibold flex items-center gap-2 hover:gap-3 transition-all hover:opacity-80"
          >
            Browse all properties
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>

    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
        <div className="w-full h-full rounded-3xl m-4 md:m-6 lg:m-8 p-8 md:p-12 lg:p-16 flex items-center justify-between">
          {/* Left Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center pr-0 md:pr-8 lg:pr-12">
            {/* About Badge */}
            <div className="inline-flex items-center gap-2 bg-slate-200 rounded-full px-4 py-2 mb-6 w-fit">
              <div className="w-5 h-5 rounded-full bg-slate-400"></div>
              <span className="text-sm text-slate-700 font-medium">About us</span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
              The best way to find
              <br className="hidden md:block" /> your perfect home
            </h2>

            {/* Description */}
            <p className="text-slate-600 text-base md:text-lg mb-8 leading-relaxed max-w-md">
              Lorem ipsum dolor sit amet consectetur. Gravida elementum dolor semper felis pulvinar feugiat risus
              adipiscing dictum. Ultricies nec elementum nisl ut. Cras diam odio sed auctor pellentesque. Sit nisl ipsum
              id convallis tristique. Malesuada.
            </p>

            {/* CTA Button */}
            <button className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white rounded-full px-6 py-3 w-fit font-semibold hover:bg-slate-800 transition-colors">
              Start exploring
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right Image Section */}
          <div className="hidden md:flex w-1/2 items-center justify-center relative">
            <div className="relative w-full max-w-lg">
              {/* Main Property Image with Border Radius */}
              <img
                src="/modern-luxury-property-architecture-bright-windows.jpg"
                alt="Luxury home with pool"
                className="w-full rounded-3xl object-cover h-96 lg:h-125 shadow-lg"
              />

              {/* Info Badges - Positioned absolutely around the image */}
              {/* Top Right Badge */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full px-4 py-2 shadow-lg flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-slate-300"></div>
                <span className="text-sm font-semibold text-slate-800">4,821 sqft</span>
              </div>

              {/* Middle Left Badge */}
              <div className="absolute top-1/3 -left-4 bg-white rounded-full px-4 py-2 shadow-lg flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-slate-300"></div>
                <span className="text-sm font-semibold text-slate-800">3 bathrooms</span>
              </div>

              {/* Middle Right Badge */}
              <div className="absolute top-1/2 -right-4 bg-white rounded-full px-4 py-2 shadow-lg flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-slate-300"></div>
                <span className="text-sm font-semibold text-slate-800">3 bedrooms</span>
              </div>

              {/* Bottom Left Badge */}
              <div className="absolute -bottom-4 left-1/4 bg-white rounded-full px-4 py-2 shadow-lg flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-slate-300"></div>
                <span className="text-sm font-semibold text-slate-800">6 parking zones</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}