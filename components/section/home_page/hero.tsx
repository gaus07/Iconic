"use client"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion, useReducedMotion, TargetAndTransition, delay } from "framer-motion"
import { EASING } from "@/lib/animation-config"
import { useRef } from "react"
import Link from "next/link"

const statCardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 ,
  transition: { duration: 0.5, ease: EASING.smooth },
  },
}

const testimonialVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 ,
  transition: { duration: 0.6, ease: EASING.smooth, delay: 0.15 },
  },
}

interface HeroSectionProps {
  title: string
  description: string
  primaryCtaText?: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
  onPrimaryCtaClick?: () => void
  heroImage: string
  heroImageAlt?: string
  stats?: StatCard[]
  testimonial?: Testimonial
}

interface StatCard {
  label: string
  value: string
  description: string
}

interface Testimonial {
  quote: string
  description: string
  author: string
  location: string
  image: string
}

export function HeroSection({  
  title,
  description,
  primaryCtaText = "Start exploring",
  secondaryCtaText = "Post properties",
  secondaryCtaHref = "#",
  onPrimaryCtaClick,
  heroImage,
  heroImageAlt = "Hero property image",
  stats = [
    {
      label: "Homes purchased",
      value: "10k+",
      description: "Lorem ipsum dolor sit amet consectetur fermentum",
    },
    {
      label: "Published properties",
      value: "200k",
      description: "Lorem ipsum dolor sit amet consectetur fermentum",
    },
  ],
  testimonial = {
    quote: "If you wanna sell fast, call John Carter",
    description: "Lorem ipsum dolor sit amet consectetur ultrices rutrum fusce dui nisl neque placerat velit.",
    author: "Sophie Moore",
    location: "NY",
    image: "/professional-woman.png",
  },

}: HeroSectionProps) {
  // const { ref, isInView } = useInViewAnimation()
  const prefersReducedMotion = useReducedMotion()
  const containerRef = useRef<HTMLDivElement>(null)

  // If user prefers reduced motion, use instant animations
  const getAnimation = (animation: TargetAndTransition): TargetAndTransition => (prefersReducedMotion ? { opacity: 1 } : animation)

  return (
    <>
      {/* Hero Section */}
      <section ref={containerRef} className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Border Radius */}
        <motion.div
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          className="absolute inset-0 rounded-2xl overflow-hidden m-4 md:m-6 lg:mt-0 lg:m-8">
          <img src={heroImage || "/placeholder.svg"} alt={heroImageAlt} className="w-full h-full object-cover" />
          {/* Overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
        <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{opacity: 1, y: 0}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12">
            {/* Title - Left Side */}
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-pretty">{title}</h1>
            </div>
            {/* Description & Buttons - Right Side */}
            <div className="flex-1 space-y-6">
              <p className="text-base md:text-lg text-white/95 leading-relaxed">{description}</p>
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <motion.button
                  whileHover={{scale: 1.05, y: -2}}
                  whileTap={{scale: 0.9, y: 1}}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  onClick={onPrimaryCtaClick}
                  className="rounded-full text-[16px] px-6 py-2 bg-iconic-btns hover:bg-iconic-btns text-iconic-primary"
                >
                  <Link href="#">
                  {primaryCtaText}
                  </Link>
                  {/* <ArrowRight className="w-4 h-4" /> */}
                </motion.button>
                <a
                  href={secondaryCtaHref}
                  className="text-white font-medium flex items-center gap-2 hover:gap-3 transition-all"
                >
                  {secondaryCtaText}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Stats & Testimonial Section */}
      <section className="w-full bg-white py-12 md:py-20 lg:py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Stats Section */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={statCardVariants}
              className="flex flex-col sm:flex-row gap-8 md:gap-12">
              {stats.map((stat, index) => (
                <div key={index} className="flex-1">
                  <p className="text-gray-600 text-sm md:text-base font-medium mb-2">{stat.label}</p>
                  <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-4">{stat.value}</h3>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">{stat.description}</p>
                </div>
              ))}
            </motion.div>
            {/* Testimonial Section */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={testimonialVariants}
              className="flex flex-col gap-6 lg:pl-8">
              <div className="flex gap-4">
                {/* Profile Image */}
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.author}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover shrink-0"
                />
                {/* Quote and Author */}
                <div className="flex-1">
                  <blockquote className="text-lg md:text-xl font-semibold text-black mb-3 leading-snug">
                    "{testimonial.quote}"
                  </blockquote>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-3">{testimonial.description}</p>
                  <div className="font-semibold text-black">
                    {testimonial.author}, <span className="text-gray-600 font-medium">{testimonial.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}