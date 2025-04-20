"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Bookmark, Building2, Home, MapPin, Ruler, Share2, ShowerHead } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ProjectDetailPageParams {
  id: string;
}

export default function ProjectDetailPage({ params }: { params: ProjectDetailPageParams }) {
  const projectId = Number.parseInt(params.id)

  // In a real application, you would fetch this data from an API
  const project = {
    id: projectId,
    title: "The Skyline Residences",
    description: "Luxury apartments with panoramic city views",
    fullDescription:
      "Experience the pinnacle of urban living at The Skyline Residences. Our meticulously designed luxury apartments offer breathtaking panoramic views of the city skyline. Each residence features premium finishes, state-of-the-art appliances, and thoughtful floor plans that maximize space and light. Residents enjoy exclusive access to world-class amenities including a rooftop infinity pool, fully-equipped fitness center, private lounges, and 24/7 concierge service. Located in the heart of downtown, you'll be steps away from fine dining, shopping, entertainment, and major transportation hubs.",
    location: "123 Skyline Avenue, Downtown",
    price: "$750,000 - $1.2M",
    type: "Apartment",
    bedrooms: "1-3",
    bathrooms: "1-2",
    area: "850-1,500 sq ft",
    yearBuilt: "2023",
    amenities: [
      "Rooftop Infinity Pool",
      "State-of-the-art Fitness Center",
      "Private Lounges",
      "24/7 Concierge Service",
      "Underground Parking",
      "Pet-friendly Spaces",
      "Business Center",
      "Package Receiving Service",
      "Electric Vehicle Charging Stations",
      "Bike Storage",
    ],
    features: [
      "Floor-to-ceiling Windows",
      "Premium Hardwood Flooring",
      "Quartz Countertops",
      "Stainless Steel Appliances",
      "Smart Home Technology",
      "Walk-in Closets",
      "Private Balconies",
      "Central Air Conditioning",
      "In-unit Washer and Dryer",
      "Sound Insulation",
    ],
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    floorPlans: [
      {
        name: "One Bedroom",
        size: "850 sq ft",
        bedrooms: 1,
        bathrooms: 1,
        image: "/placeholder.svg?height=500&width=700",
        price: "$750,000",
      },
      {
        name: "Two Bedroom",
        size: "1,200 sq ft",
        bedrooms: 2,
        bathrooms: 2,
        image: "/placeholder.svg?height=500&width=700",
        price: "$950,000",
      },
      {
        name: "Three Bedroom",
        size: "1,500 sq ft",
        bedrooms: 3,
        bathrooms: 2,
        image: "/placeholder.svg?height=500&width=700",
        price: "$1,200,000",
      },
    ],
    featured: true,
  }

  const [mainImage, setMainImage] = useState(project.images[0])

  return (
    <main className="flex min-h-screen flex-col">
      <div className="container px-4 py-8 md:px-6">
        <Link
          href="/projects"
          className="inline-flex items-center text-sm font-medium text-primary hover:underline mb-6"
        >
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to Projects
        </Link>

        <div className="grid gap-6 lg:grid-cols-[2fr_1fr] lg:gap-12">
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight">{project.title}</h1>
                <div className="flex space-x-2">
                  <Button variant="outline" size="icon">
                    <Bookmark className="h-4 w-4" />
                    <span className="sr-only">Save</span>
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="h-4 w-4" />
                    <span className="sr-only">Share</span>
                  </Button>
                </div>
              </div>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="mr-1 h-4 w-4" />
                <span>{project.location}</span>
              </div>
              {project.featured && <Badge className="bg-primary text-primary-foreground">Featured</Badge>}
            </div>

            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={mainImage || "/placeholder.svg"}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="w-full object-cover h-[400px]"
                />
              </div>
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {project.images.map((image, index) => (
                  <button
                    key={index}
                    className={`flex-shrink-0 rounded-md overflow-hidden border-2 ${
                      mainImage === image ? "border-primary" : "border-transparent"
                    }`}
                    onClick={() => setMainImage(image)}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`View ${index + 1}`}
                      width={100}
                      height={75}
                      className="w-20 h-16 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            <Tabs defaultValue="overview">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="floor-plans">Floor Plans</TabsTrigger>
                <TabsTrigger value="location">Location</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-4 pt-4">
                <div>
                  <h2 className="text-2xl font-bold">Description</h2>
                  <p className="mt-2 text-muted-foreground">{project.fullDescription}</p>
                </div>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center p-4">
                      <Building2 className="h-5 w-5 text-muted-foreground mb-2" />
                      <span className="text-sm font-medium">Type</span>
                      <span className="text-sm text-muted-foreground">{project.type}</span>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center p-4">
                      <Home className="h-5 w-5 text-muted-foreground mb-2" />
                      <span className="text-sm font-medium">Bedrooms</span>
                      <span className="text-sm text-muted-foreground">{project.bedrooms}</span>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center p-4">
                      <ShowerHead className="h-5 w-5 text-muted-foreground mb-2" />
                      <span className="text-sm font-medium">Bathrooms</span>
                      <span className="text-sm text-muted-foreground">{project.bathrooms}</span>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center p-4">
                      <Ruler className="h-5 w-5 text-muted-foreground mb-2" />
                      <span className="text-sm font-medium">Area</span>
                      <span className="text-sm text-muted-foreground">{project.area}</span>
                    </CardContent>
                  </Card>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Amenities</h3>
                  <ul className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {project.amenities.map((amenity, index) => (
                      <li key={index} className="flex items-center">
                        <div className="mr-2 h-2 w-2 rounded-full bg-primary" />
                        {amenity}
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="features" className="space-y-4 pt-4">
                <div>
                  <h2 className="text-2xl font-bold">Property Features</h2>
                  <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <div className="mr-2 h-2 w-2 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Property Details</h3>
                  <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-medium">Property Type:</span>
                      <span className="text-muted-foreground">{project.type}</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-medium">Year Built:</span>
                      <span className="text-muted-foreground">{project.yearBuilt}</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-medium">Bedrooms:</span>
                      <span className="text-muted-foreground">{project.bedrooms}</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-medium">Bathrooms:</span>
                      <span className="text-muted-foreground">{project.bathrooms}</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-medium">Area:</span>
                      <span className="text-muted-foreground">{project.area}</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-medium">Price Range:</span>
                      <span className="text-muted-foreground">{project.price}</span>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="floor-plans" className="space-y-6 pt-4">
                <h2 className="text-2xl font-bold">Available Floor Plans</h2>
                <div className="space-y-6">
                  {project.floorPlans.map((plan, index) => (
                    <div key={index} className="rounded-lg border p-4">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="mb-4 md:mb-0">
                          <h3 className="text-xl font-bold">{plan.name}</h3>
                          <div className="mt-1 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <Home className="mr-1 h-4 w-4" />
                              <span>{plan.bedrooms} Bedroom</span>
                            </div>
                            <div className="flex items-center">
                              <ShowerHead className="mr-1 h-4 w-4" />
                              <span>{plan.bathrooms} Bathroom</span>
                            </div>
                            <div className="flex items-center">
                              <Ruler className="mr-1 h-4 w-4" />
                              <span>{plan.size}</span>
                            </div>
                            <div className="flex items-center font-medium text-primary">{plan.price}</div>
                          </div>
                        </div>
                        <Button>Request Info</Button>
                      </div>
                      <div className="mt-4">
                        <Image
                          src={plan.image || "/placeholder.svg"}
                          alt={`${plan.name} Floor Plan`}
                          width={700}
                          height={500}
                          className="w-full rounded-md"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="location" className="space-y-4 pt-4">
                <h2 className="text-2xl font-bold">Location</h2>
                <p className="text-muted-foreground">{project.location}</p>
                <div className="aspect-video overflow-hidden rounded-lg bg-muted">
                  <div className="h-full w-full flex items-center justify-center text-muted-foreground">
                    Interactive Map Would Be Displayed Here
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Nearby Amenities</h3>
                  <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <h4 className="font-medium">Transportation</h4>
                      <ul className="mt-1 space-y-1 text-sm text-muted-foreground">
                        <li>Downtown Metro Station - 0.2 miles</li>
                        <li>Bus Stop - 0.1 miles</li>
                        <li>Main Highway Access - 0.5 miles</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium">Education</h4>
                      <ul className="mt-1 space-y-1 text-sm text-muted-foreground">
                        <li>City Elementary School - 0.7 miles</li>
                        <li>Downtown High School - 1.2 miles</li>
                        <li>State University - 2.5 miles</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium">Shopping & Dining</h4>
                      <ul className="mt-1 space-y-1 text-sm text-muted-foreground">
                        <li>Central Mall - 0.3 miles</li>
                        <li>Grocery Store - 0.2 miles</li>
                        <li>Restaurant District - 0.4 miles</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium">Recreation</h4>
                      <ul className="mt-1 space-y-1 text-sm text-muted-foreground">
                        <li>City Park - 0.6 miles</li>
                        <li>Fitness Center - 0.3 miles</li>
                        <li>Movie Theater - 0.5 miles</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h2 className="text-2xl font-bold">{project.price}</h2>
                    <p className="text-sm text-muted-foreground">Starting Price</p>
                  </div>
                  <div className="space-y-2">
                    <Button className="w-full">Schedule a Viewing</Button>
                    <Button variant="outline" className="w-full">
                      Request Information
                    </Button>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-background px-2 text-muted-foreground">Or</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Contact Agent</h3>
                    <div className="flex items-center space-x-4">
                      <div className="h-10 w-10 rounded-full bg-muted" />
                      <div>
                        <p className="text-sm font-medium">Sarah Johnson</p>
                        <p className="text-xs text-muted-foreground">Lead Sales Agent</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" className="w-full">
                        Call
                      </Button>
                      <Button variant="outline" className="w-full">
                        Email
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-4">Similar Properties</h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="flex space-x-4">
                      <Image
                        src="/placeholder.svg?height=80&width=120"
                        alt="Property thumbnail"
                        width={120}
                        height={80}
                        className="rounded-md object-cover h-20 w-28"
                      />
                      <div className="space-y-1">
                        <h4 className="font-medium line-clamp-1">Urban Loft {item}</h4>
                        <p className="text-sm text-muted-foreground line-clamp-1">Arts District</p>
                        <p className="text-sm font-medium">$550,000</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
