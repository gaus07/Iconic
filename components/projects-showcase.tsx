import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProjectsShowcase() {
  const projectCategories = [
    {
      id: "residential",
      label: "Residential",
      projects: [
        {
          id: 4,
          title: "Parkview Apartments",
          location: "Central Park District",
          image: "/placeholder.svg?height=300&width=500",
        },
        {
          id: 5,
          title: "Garden Terraces",
          location: "Greenfield Area",
          image: "/placeholder.svg?height=300&width=500",
        },
      ],
    },
    {
      id: "commercial",
      label: "Commercial",
      projects: [
        {
          id: 6,
          title: "Downtown Office Tower",
          location: "Business District",
          image: "/placeholder.svg?height=300&width=500",
        },
        {
          id: 7,
          title: "Retail Plaza",
          location: "Shopping District",
          image: "/placeholder.svg?height=300&width=500",
        },
      ],
    },
    {
      id: "mixed-use",
      label: "Mixed-Use",
      projects: [
        {
          id: 8,
          title: "City Center Complex",
          location: "Downtown",
          image: "/placeholder.svg?height=300&width=500",
        },
        {
          id: 9,
          title: "Harbor View Development",
          location: "Waterfront District",
          image: "/placeholder.svg?height=300&width=500",
        },
      ],
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Explore Our Projects</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover our diverse portfolio of residential, commercial, and mixed-use developments.
            </p>
          </div>
        </div>
        <Tabs defaultValue="residential" className="mt-8">
          <TabsList className="grid w-full grid-cols-3">
            {projectCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {projectCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.projects.map((project) => (
                  <div key={project.id} className="group relative overflow-hidden rounded-lg">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={500}
                      height={300}
                      className="w-full h-[250px] object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <p className="text-sm text-gray-200">{project.location}</p>
                      <Link
                        href={`/projects/${project.id}`}
                        className="mt-2 inline-flex items-center text-sm font-medium text-white hover:underline"
                      >
                        View Details
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        <div className="flex justify-center mt-8">
          <Button asChild>
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
