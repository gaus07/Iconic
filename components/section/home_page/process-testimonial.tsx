import { useEffect, useRef, useState } from "react"
import { ArrowRight, CircleDot } from "lucide-react"
import { useScroll, useMotionValueEvent, motion } from "framer-motion"
import { HERO_ANIMATION } from "@/lib/animation-config"
import Link from "next/link"

const scrrollHeaderVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 ,
  transition: { duration: 0.5, ease: HERO_ANIMATION.easeOut },
  },
}

const scrrollImgVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 ,
  transition: { duration: 0.6, ease: HERO_ANIMATION.easeOut, delay: 0.15 },
  },
}

export default function ProcessTestimonial() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  const testimonials = [
    {
      id: 1,
      title: "Find your dream house as easy as 1, 2, 3",
      description: "",
      image: "/home_featured-1.jpg?height=800&width=1000",
      step: "Our process",
    },
    {
      id: 2,
      title: "Search for your favorite house in your location",
      description:
        "Lorem ipsum dolor sit amet consectetur vitae purus quis metus sed semper diam iaculis duis vitae purus amet sagittis leo elit vitae dolor.",
      image: "/home_featured-2.jpg?height=800&width=1000",
      step: "Step 1",
    },
    {
      id: 3,
      title: "Schedule a viewing with our expert agents",
      description:
        "Lorem ipsum dolor sit amet consectetur vitae purus quis metus sed semper diam iaculis duis vitae purus amet sagittis leo elit vitae dolor.",
      image: "/home_featured-3.jpg?height=800&width=1000",
      step: "Step 2",
    },
    {
      id: 4,
      title: "Get the keys to your new home",
      description:
        "Lorem ipsum dolor sit amet consectetur vitae purus quis metus sed semper diam iaculis duis vitae purus amet sagittis leo elit vitae dolor.",
      image: "/home_featured-4.jpg?height=800&width=1000",
      step: "Step 3",
    },
  ]

  // ===== CHANGED: Replaced IntersectionObserver with Framer Motion scroll tracking =====
  // This provides smoother, more reliable scroll-based active section detection
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const cardLength = testimonials.length

  // Track scroll progress and calculate which card should be active
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = testimonials.map((_, index) => index / cardLength)
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint)
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index
        }
        return acc
      },
      0
    )
    setActiveIndex(closestBreakpointIndex)
  })
  // ===== END OF CHANGES =====

  return (
    <section ref={sectionRef} className="w-full bg-iconic-bg py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left column */}
          <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrrollHeaderVariants}
          className="space-y-32">
            {testimonials.map((item, index) => (
              <div
                key={item.id}
                className="min-h-[50vh] flex flex-col justify-center"
              >
                {/* CHANGED: Wrapped in motion.div for smoother opacity transitions */}
                <motion.div
                  initial={{ opacity: 0.3 }}
                  animate={{
                    opacity: activeIndex === index ? 1 : 0.3,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {/* <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-1.5 text-sm mb-4">
                    <CircleDot className="h-4 w-4" />
                    <span>{item.step}</span>
                  </div> */}
                  <div className="inline-flex items-center gap-2 bg-iconic-badge rounded-full px-3 py-2 mb-6 w-fit">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-iconic-badge-probg overflow-hidden">
                <img
                  src="/icons/process.svg"
                  alt="User"
                  className="w-3.5 h-3.5 object-contain"
                />
              </span>
              <span className="text-sm text-iconic-secondary font-medium">
                {item.step}
              </span>
            </div>

                  <h2 className="text-3xl sm:text-5xl font-medium mb-6">
                    {item.title}
                  </h2>

                  {item.description && (
                    <p className="text-iconic-para md:text-lg max-w-xl">
                      {item.description}
                    </p>
                  )}

                  {index === 0 && (
                    // <div className="mt-8">
                    //   <a
                    //     href="/projects"
                    //     className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
                    //   >
                    //     Start exploring
                    //     <ArrowRight className="h-4 w-4" />
                    //   </a>
                    // </div>
                    <motion.button
                  whileHover={{scale: 1.05, y: -2}}
                  whileTap={{scale: 0.9, y: 1}}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="rounded-full text-[16px] px-6 py-2 bg-iconic-btns hover:bg-iconic-btns text-iconic-primary"
                >
                  <Link href="#">
                  Start Exploring
                  </Link>
                </motion.button>
                  )}
                </motion.div>
                {/* ===== END OF CHANGES ===== */}
              </div>
            ))}
          </motion.div>

          {/* Right column – sticky image */}
          <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrrollImgVariants}
          className="relative hidden lg:block">
            <div className="sticky top-32">
              {/* ===== CHANGED: Added motion.div for smoother image transitions ===== */}
              <motion.div
                className="relative rounded-3xl overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].title}
                  className="w-full h-auto object-cover rounded-3xl"
                />
              </motion.div>
              {/* ===== END OF CHANGES ===== */}
            </div>
          </motion.div>

          {/* Mobile image */}
          <div className="lg:hidden">
            {/* ===== CHANGED: Added motion.div for smoother image transitions on mobile ===== */}
            <motion.div
              className="relative rounded-3xl overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={testimonials[activeIndex].image}
                alt={testimonials[activeIndex].title}
                className="w-full h-auto object-cover rounded-3xl"
              />
            </motion.div>
            {/* ===== END OF CHANGES ===== */}
          </div>
        </div>
      </div>
    </section>
  )
}