"use client"

import { useState } from "react"
import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
// import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
//   const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, interest: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // toast({
    //   title: "Form Submitted",
    //   description: "We'll get back to you as soon as possible.",
    // })
    setFormData({
      name: "",
      email: "",
      phone: "",
      interest: "",
      message: "",
    })
  }

  return (
    <main className="flex min-h-screen flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Us</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Have questions about our properties or services? We're here to help.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Get in Touch</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and our team will get back to you as soon as possible.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      placeholder="john@example.com"
                      required
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="(123) 456-7890"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="interest">I'm interested in</Label>
                    <Select value={formData.interest} onValueChange={handleSelectChange}>
                      <SelectTrigger id="interest">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="buying">Buying a property</SelectItem>
                        <SelectItem value="selling">Selling a property</SelectItem>
                        <SelectItem value="renting">Renting a property</SelectItem>
                        <SelectItem value="investing">Investment opportunities</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your requirements or questions..."
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Contact Information</h2>
                <p className="text-muted-foreground">
                  You can also reach out to us directly using the information below.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Main Office</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <MapPin className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground">
                        123 Business Avenue, Suite 500
                        <br />
                        Downtown District
                        <br />
                        New York, NY 10001
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-5 w-5 text-muted-foreground shrink-0" />
                      <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-5 w-5 text-muted-foreground shrink-0" />
                      <p className="text-sm text-muted-foreground">info@skylineproperties.com</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Sales Office</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <MapPin className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground">
                        456 Property Lane
                        <br />
                        Riverside District
                        <br />
                        New York, NY 10002
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-5 w-5 text-muted-foreground shrink-0" />
                      <p className="text-sm text-muted-foreground">+1 (555) 987-6543</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-5 w-5 text-muted-foreground shrink-0" />
                      <p className="text-sm text-muted-foreground">sales@skylineproperties.com</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Office Hours</CardTitle>
                  <CardDescription>Our team is available during the following hours</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-medium">Weekdays</h3>
                      <p className="text-sm text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    </div>
                    <div>
                      <h3 className="font-medium">Weekends</h3>
                      <p className="text-sm text-muted-foreground">Saturday: 10:00 AM - 4:00 PM</p>
                      <p className="text-sm text-muted-foreground">Sunday: Closed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="aspect-video overflow-hidden rounded-lg bg-muted">
                <div className="h-full w-full flex items-center justify-center text-muted-foreground">
                  Interactive Map Would Be Displayed Here
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
