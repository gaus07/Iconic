import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Building, Clock, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "With over 20 years of experience in real estate development, Sarah founded Skyline Properties with a vision to create exceptional living spaces.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Michael Chen",
      role: "Chief Architect",
      bio: "Michael brings innovative design thinking and sustainable building practices to every Skyline project.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Emma Rodriguez",
      role: "Head of Sales",
      bio: "Emma's deep understanding of client needs has helped countless families find their perfect home.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "David Wilson",
      role: "Development Director",
      bio: "David oversees all aspects of project development, ensuring quality and timely delivery.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const milestones = [
    {
      year: "1998",
      title: "Company Founded",
      description: "Skyline Properties was established with a focus on quality residential developments.",
    },
    {
      year: "2005",
      title: "First Major Project",
      description: "Completed The Riverside Residences, our first award-winning development.",
    },
    {
      year: "2010",
      title: "International Expansion",
      description: "Expanded operations to three new countries with flagship projects in each.",
    },
    {
      year: "2015",
      title: "Sustainability Initiative",
      description: "Launched our green building program, committing to sustainable development practices.",
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Implemented cutting-edge technology in all aspects of our business and properties.",
    },
    {
      year: "2023",
      title: "25th Anniversary",
      description: "Celebrating 25 years of excellence in real estate development.",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  About Skyline Properties
                </h1>
                <p className="max-w-[600px] text-gray-300 md:text-xl">
                  We've been developing premium properties for modern living since 1998, with a commitment to quality,
                  innovation, and sustainability.
                </p>
              </div>
            </div>
            <Image
              alt="Skyline Properties headquarters"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              height={550}
              src="/placeholder.svg?height=550&width=800"
              width={800}
            />
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Story</h2>
              <p className="text-gray-500 md:text-xl">
                Skyline Properties was founded in 1998 with a simple mission: to create exceptional living spaces that
                enhance people's lives. What began as a small residential developer has grown into an international real
                estate company with projects across multiple countries.
              </p>
              <p className="text-gray-500 md:text-xl">
                Our founder, Sarah Johnson, started the company with a vision to combine innovative design, quality
                construction, and sustainable practices. This vision continues to guide us today as we develop
                residential, commercial, and mixed-use properties that stand the test of time.
              </p>
              <p className="text-gray-500 md:text-xl">
                Over the years, we've built a reputation for excellence, winning numerous industry awards and, more
                importantly, the trust of our clients and communities where we build.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Skyline Properties history"
                width={800}
                height={600}
                className="rounded-3xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Values</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                These core principles guide everything we do at Skyline Properties.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-8">
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-primary/10 p-4">
                  <Building className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Quality</h3>
                <p className="text-muted-foreground">
                  We never compromise on quality, using premium materials and working with the best contractors and
                  craftspeople to ensure every property meets our exacting standards.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-primary/10 p-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Community</h3>
                <p className="text-muted-foreground">
                  We believe in creating more than just buildings – we develop communities where people can thrive,
                  connect, and build their lives.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-primary/10 p-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Innovation</h3>
                <p className="text-muted-foreground">
                  We constantly seek new ideas, technologies, and approaches to improve our properties and the
                  experience of those who live and work in them.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Leadership Team</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Meet the experienced professionals who lead Skyline Properties.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center space-y-4">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="rounded-full w-40 h-40 object-cover"
                />
                <div className="text-center">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                  <p className="text-muted-foreground mt-2">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Journey</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Key milestones in the Skyline Properties story.
              </p>
            </div>
          </div>
          <div className="relative mt-12">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-border" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} md:gap-8`}
                >
                  <div className="flex w-full md:w-1/2" />
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="rounded-full bg-primary text-primary-foreground p-3">
                      <Clock className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <Card>
                      <CardContent className="p-6">
                        <div className="space-y-2">
                          <span className="text-sm font-medium text-primary">{milestone.year}</span>
                          <h3 className="text-xl font-bold">{milestone.title}</h3>
                          <p className="text-muted-foreground">{milestone.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Join Our Journey</h2>
              <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Whether you're looking for your dream home or an investment opportunity, we invite you to be part of the
                Skyline Properties story.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild className="bg-white text-black hover:bg-gray-200">
                <Link href="/projects">
                  View Our Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
