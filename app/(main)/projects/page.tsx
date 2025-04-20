"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Search } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"

export default function ProjectsPage() {
  const allProjects = [
    {
      id: 1,
      title: "The Skyline Residences",
      description: "Luxury apartments with panoramic city views",
      location: "Downtown",
      price: 750000,
      maxPrice: 1200000,
      type: "Apartment",
      bedrooms: "1-3",
      bathrooms: "1-2",
      area: "850-1,500 sq ft",
      image: "/placeholder.svg?height=400&width=600",
      featured: true,
    },
    {
      id: 2,
      title: "Riverside Villas",
      description: "Elegant waterfront homes with private gardens",
      location: "Riverside District",
      price: 1500000,
      maxPrice: 2800000,
      type: "Villa",
      bedrooms: "3-5",
      bathrooms: "3-4",
      area: "2,200-3,800 sq ft",
      image: "/placeholder.svg?height=400&width=600",
      featured: true,
    },
    {
      id: 3,
      title: "Urban Lofts",
      description: "Modern industrial-style lofts in the arts district",
      location: "Arts District",
      price: 550000,
      maxPrice: 950000,
      type: "Loft",
      bedrooms: "1-2",
      bathrooms: "1-2",
      area: "950-1,800 sq ft",
      image: "/placeholder.svg?height=400&width=600",
      featured: true,
    },
    {
      id: 4,
      title: "Parkview Apartments",
      description: "Contemporary apartments overlooking the central park",
      location: "Central Park District",
      price: 450000,
      maxPrice: 850000,
      type: "Apartment",
      bedrooms: "1-3",
      bathrooms: "1-2",
      area: "750-1,400 sq ft",
      image: "/placeholder.svg?height=400&width=600",
      featured: false,
    },
    {
      id: 5,
      title: "Garden Terraces",
      description: "Spacious townhomes with private garden terraces",
      location: "Greenfield Area",
      price: 850000,
      maxPrice: 1100000,
      type: "Townhouse",
      bedrooms: "2-3",
      bathrooms: "2-3",
      area: "1,500-2,200 sq ft",
      image: "/placeholder.svg?height=400&width=600",
      featured: false,
    },
    {
      id: 6,
      title: "Downtown Office Tower",
      description: "Premium office spaces in the heart of the business district",
      location: "Business District",
      price: 2000000,
      maxPrice: 15000000,
      type: "Commercial",
      bedrooms: "N/A",
      bathrooms: "N/A",
      area: "1,000-10,000 sq ft",
      image: "/placeholder.svg?height=400&width=600",
      featured: false,
    },
  ]

  const locations = [...new Set(allProjects.map((project) => project.location))]
  const propertyTypes = [...new Set(allProjects.map((project) => project.type))]
  const maxPrice = Math.max(...allProjects.map((project) => project.maxPrice))

  const [searchTerm, setSearchTerm] = useState("")
  const [selectedLocation, setSelectedLocation] = useState("")
  const [selectedType, setSelectedType] = useState("")
  const [priceRange, setPriceRange] = useState([0, maxPrice])
  const [sortOption, setSortOption] = useState("featured")

  const filteredProjects = allProjects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.location.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesLocation =
      selectedLocation === "all" || selectedLocation === "" || project.location === selectedLocation
    const matchesType = selectedType === "all" || selectedType === "" || project.type === selectedType
    const matchesPrice = project.price >= priceRange[0] && project.maxPrice <= priceRange[1]

    return matchesSearch && matchesLocation && matchesType && matchesPrice
  })

  // Sort projects based on selected option
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    switch (sortOption) {
      case "featured":
        return a.featured === b.featured ? 0 : a.featured ? -1 : 1
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "newest":
        return b.id - a.id
      default:
        return 0
    }
  })

  const formatPrice = (price : any) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <main className="flex min-h-screen flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Projects</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our complete portfolio of residential, commercial, and mixed-use developments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[300px_1fr] lg:gap-12">
            {/* Filters Sidebar */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Search</h3>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search projects..."
                    className="pl-8"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Location</h3>
                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Locations" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    {locations.map((location) => (
                      <SelectItem key={location} value={location}>
                        {location}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Property Type</h3>
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    {propertyTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Price Range</h3>
                <div className="space-y-4">
                  <Slider
                    defaultValue={[0, maxPrice]}
                    max={maxPrice}
                    step={50000}
                    value={priceRange}
                    onValueChange={setPriceRange}
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{formatPrice(priceRange[0])}</span>
                    <span>{formatPrice(priceRange[1])}</span>
                  </div>
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedLocation("all")
                  setSelectedType("all")
                  setPriceRange([0, maxPrice])
                }}
              >
                Reset Filters
              </Button>
            </div>

            {/* Projects Grid */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">{sortedProjects.length} Properties</h2>
                <Select value={sortOption} onValueChange={setSortOption}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedProjects.map((project) => (
                  <Card key={project.id} className="overflow-hidden">
                    <div className="relative">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="object-cover w-full h-[200px]"
                      />
                      {project.featured && (
                        <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">Featured</Badge>
                      )}
                    </div>
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex flex-col">
                          <span className="text-muted-foreground">Location</span>
                          <span className="font-medium">{project.location}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-muted-foreground">Price</span>
                          <span className="font-medium">
                            {formatPrice(project.price)} - {formatPrice(project.maxPrice)}
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-muted-foreground">Type</span>
                          <span className="font-medium">{project.type}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-muted-foreground">Bedrooms</span>
                          <span className="font-medium">{project.bedrooms}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-muted-foreground">Bathrooms</span>
                          <span className="font-medium">{project.bathrooms}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-muted-foreground">Area</span>
                          <span className="font-medium">{project.area}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full">
                        <Link href={`/projects/${project.id}`}>
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              {sortedProjects.length === 0 && (
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium mb-2">No properties found</h3>
                  <p className="text-muted-foreground mb-4">Try adjusting your search filters</p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchTerm("")
                      setSelectedLocation("all")
                      setSelectedType("all")
                      setPriceRange([0, maxPrice])
                    }}
                  >
                    Reset Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
