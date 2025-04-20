import Image from "next/image"
import { Quote } from "lucide-react"

import { Card, CardContent, CardFooter } from "@/components/ui/card"

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      quote:
        "We couldn't be happier with our new home at The Skyline Residences. The attention to detail and quality of construction is exceptional.",
      name: "Sarah Johnson",
      title: "Homeowner",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 2,
      quote:
        "As an investor, I've been impressed with the return on my properties. The team's market knowledge and project execution are top-notch.",
      name: "Michael Chen",
      title: "Property Investor",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 3,
      quote:
        "The Urban Lofts project perfectly captures the creative spirit of the arts district while providing all the modern amenities we wanted.",
      name: "Emma Rodriguez",
      title: "Resident",
      avatar: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Clients Say</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from homeowners and investors who have experienced the quality of our developments.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-background">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-muted-foreground mb-4" />
                <p className="text-muted-foreground">{testimonial.quote}</p>
              </CardContent>
              <CardFooter>
                <div className="flex items-center space-x-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
