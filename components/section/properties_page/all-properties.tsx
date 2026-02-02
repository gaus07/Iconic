"use client";

import {
  ChevronRight,
  Plus,
  MapPin,
  Home,
  Bed,
  Bath,
  Car,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { HERO_ANIMATION } from "@/lib/animation-config";
import Link from "next/link";

interface FilterProps {
  location: string;
  property: string;
  minPrice: string;
  maxPrice: string;
}

const featureCardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: HERO_ANIMATION.easeOut },
  },
};

export function AllProperties( {filters = {location: 'All location', property: 'All types', minPrice: '', maxPrice: ''}}: {filters?: FilterProps} ) {
  const allProperties = [
    {
      id: "1",
      title: "Luxury Loft in Poladpur",
      description: "",
      location: "Poladpur, Maharashtra",
      image: "/home_featured-1.jpg",
      type: "For sale" as const,
      propertyType: "Apartment",
      price: 1800000,
    },
    {
      id: "2",
      title: "Home in Poladpur",
      description: "",
      location: "Poladpur, Maharashtra",
      image: "/home_featured-2.jpg",
      type: "For sale" as const,
      propertyType: "House",
      price: 1800000,
    },
    {
      id: "3",
      title: "Modern Loft in Poladpur",
      description: "",
      location: "Poladpur, Maharashtra",
      image: "/home_featured-3.jpg",
      type: "For sale" as const,
      propertyType: "Apartment",
      price: 2400000,
    },
    {
      id: "4",
      title: "Executive Office, Poladpur",
      description: "",
      location: "Poladpur, Maharashtra",
      image: "/home_featured-4.jpg",
      type: "For sale" as const,
      propertyType: "Commercial",
      price: 2500000,
    },
  ];

  const propertyDetails = [
    { sqft: "2,553", bedrooms: 3, bathrooms: 2, parking: 3 },
    { sqft: "4,821", bedrooms: 5, bathrooms: 6, parking: 5 },
    { sqft: "1,334", bedrooms: 1, bathrooms: 2, parking: 1 },
    { sqft: "8,392", bedrooms: 4, bathrooms: 6, parking: 4 },
  ];

  // Filter properties based on all criteria
  const filteredProperties = allProperties.filter((property) => {
    // Location filter
    if (filters.location !== 'All locations') {
      const propertyLocation = property.location.toLowerCase();
      if (!propertyLocation.includes(filters.location.toLowerCase())) return false;
    }

    // Property type filter
    if (filters.property !== 'All types') {
      if (property.propertyType !== filters.property) return false;
    }

    // Price range filter
    if (filters.minPrice) {
      const minPrice = parseInt(filters.minPrice);
      if (property.price < minPrice) return false;
    }

    if (filters.maxPrice) {
      const maxPrice = parseInt(filters.maxPrice);
      if (property.price > maxPrice) return false;
    }

    return true;
  });

  return (
    <>
      {/* Featured Properties Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-iconic-bg">
        <div className="w-full h-full rounded-3xl m-4 md:m-6 lg:m-8 px-8 md:px-12 lg:px-16 flex flex-col justify-between">
          {/* Properties Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={featureCardVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16"
          >
            {filteredProperties.length > 0 ? (
              filteredProperties.map((property, index) => (
              <div key={property.id} className="flex flex-col">
                {/* Property Card */}
                <div className="relative group cursor-pointer rounded-3xl overflow-hidden h-64 md:h-80 lg:h-96 mb-4">
                  <img
                    src={property.image || "/placeholder.svg"}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to from-black/60 via-black/20 to-transparent" />

                  {/* Type Badge - Top Left */}
                  {/* Type Badge - Top Left */}
                  <div className="absolute top-4 left-4 z-10">
                    <div className="bg-iconic-secondary rounded-full px-3 py-1 flex items-center gap-2">
                      <img src="/icons/sale.svg" alt="" className="w-4 h-4" />
                      <span className="text-white text-lg font-medium">
                        {property.type}
                      </span>
                    </div>
                  </div>

                  {/* Plus Button - Top Right */}
                  <button
                    className="absolute top-4 right-4 z-10 flex items-center justify-center w-12 h-12 bg-white rounded-full hover:bg-slate-100 transition-all"
                    aria-label="Add to favorites"
                  >
                    <Plus className="w-6 h-6 text-slate-800" />
                  </button>

                  {/* Property Info - Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <h3 className="text-2xl md:text-xl lg:text-2xl font-bold text-white mb-2">
                      {property.title}
                    </h3>

                    {/* Location */}
                    <div className="flex items-center gap-2 text-white text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>{property.location}</span>
                    </div>
                  </div>
                </div>

                {/* Property Details */}
                <div className="flex flex-wrap items-center justify-between gap-4 text-slate-600 text-sm md:text-xs lg:text-sm">
                  <div className="flex items-center gap-4 flex-wrap">
                    <div className="flex items-center gap-1">
                      <Home className="w-4 h-4 text-slate-400" />
                      <span>{propertyDetails[index].sqft} sqft</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bed className="w-4 h-4 text-slate-400" />
                      <span>{propertyDetails[index].bedrooms}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath className="w-4 h-4 text-slate-400" />
                      <span>{propertyDetails[index].bathrooms}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Car className="w-4 h-4 text-slate-400" />
                      <span>{propertyDetails[index].parking}</span>
                    </div>
                  </div>

                  <button className="text-slate-800 font-semibold flex items-center gap-1 hover:text-slate-600 transition-colors">
                    Contact agent
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
            ) : (
              <div className="col-span-1 md:col-span-2 text-center py-12">
                <p className="text-slate-600 text-lg font-medium">No properties found matching your filters</p>
              </div>
            )}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={featureCardVariants}
            className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6"
          >
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
                <Link
                  href="#"
                  className="text-iconic-secondary font-medium flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Browse all properties
                  <ArrowRight className="w-4 h-4" />
                </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
