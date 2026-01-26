"use client"

import { motion } from 'framer-motion'
import { Search, ChevronDown, Plus, MapPin, Home, Bed, Bath, Car, ChevronRight } from 'lucide-react'
import { useState } from 'react'

interface Property {
  id: string
  title: string
  location: string
  image: string
  type: 'For rent' | 'For sale'
  sqft: string
  bedrooms: number
  bathrooms: number
  parking: number
}

export default function PropertiesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('All locations')
  const [selectedProperty, setSelectedProperty] = useState('All types')
  const [selectedType, setSelectedType] = useState('All')

  const properties: Property[] = [
    {
      id: '1',
      title: 'Luxury Loft in San Francisco',
      location: '2238 Stradella Rd, SF',
      image: '/modern-luxury-property-architecture-bright-windows.jpg',
      type: 'For rent',
      sqft: '2,553',
      bedrooms: 3,
      bathrooms: 2,
      parking: 3,
    },
    {
      id: '2',
      title: 'Home in Los Angeles Heart',
      location: '2596 El Segundo, Los Angeles',
      image: '/modern-luxury-property-architecture-bright-windows.jpg',
      type: 'For sale',
      sqft: '4,821',
      bedrooms: 5,
      bathrooms: 6,
      parking: 5,
    },
    {
      id: '3',
      title: 'Modern Loft in San Francisco',
      location: '3335 21st, SF',
      image: '/modern-luxury-property-architecture-bright-windows.jpg',
      type: 'For rent',
      sqft: '1,334',
      bedrooms: 1,
      bathrooms: 2,
      parking: 1,
    },
    {
      id: '4',
      title: 'Executive Office, San Diego',
      location: '90071, South Grand Avenue, San Diego',
      image: '/modern-luxury-property-architecture-bright-windows.jpg',
      type: 'For rent',
      sqft: '8,392',
      bedrooms: 4,
      bathrooms: 6,
      parking: 4,
    },
    {
      id: '5',
      title: 'Luxury Penthouse Manhattan',
      location: '1 Central Park South, NYC',
      image: '/modern-luxury-property-architecture-bright-windows.jpg',
      type: 'For sale',
      sqft: '5,200',
      bedrooms: 4,
      bathrooms: 4,
      parking: 2,
    },
    {
      id: '6',
      title: 'Modern Beach House Miami',
      location: '123 Ocean Drive, Miami',
      image: '/modern-luxury-property-architecture-bright-windows.jpg',
      type: 'For rent',
      sqft: '3,800',
      bedrooms: 3,
      bathrooms: 3,
      parking: 2,
    },
    {
      id: '7',
      title: 'Contemporary Loft Chicago',
      location: '456 Michigan Ave, Chicago',
      image: '/modern-luxury-property-architecture-bright-windows.jpg',
      type: 'For sale',
      sqft: '2,100',
      bedrooms: 2,
      bathrooms: 2,
      parking: 1,
    },
    {
      id: '8',
      title: 'Historic Townhouse Boston',
      location: '789 Beacon St, Boston',
      image: '/modern-luxury-property-architecture-bright-windows.jpg',
      type: 'For rent',
      sqft: '3,200',
      bedrooms: 3,
      bathrooms: 2,
      parking: 2,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative h-[60vh] flex items-center justify-center bg-slate-950 rounded-2xl overflow-hidden m-4 md:m-6 lg:mt-0 lg:m-8 mb-0"
      >
        <div className="w-full h-full p-8 md:p-12 lg:p-16 flex flex-col items-center justify-center">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-slate-800/50 rounded-full px-4 py-2 mb-6">
              <span className="text-sm text-white font-medium">All properties</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Check on all properties
              <br />
              we have available
            </h1>

            <p className="text-slate-300 text-base md:text-lg max-w-2xl">
              Lorem ipsum dolor sit amet consectetur. Sit ut gravida aenean potenti. Metus in eu vel morbi dui nunc
              tellus. Non a massa maecenas massa.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Search and Filter Bar - Positioned to overlap both sections */}
      <div className="relative px-4 md:px-6 lg:px-8 -mt-16 mb-16 z-20">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl p-4 md:p-6 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
              {/* Search Input */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for properties"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pr-14 rounded-lg border border-slate-200 focus:outline-none focus:border-slate-400 text-slate-800"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-slate-900 rounded-lg p-2.5 hover:bg-slate-800 transition-colors">
                  <Search className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Location Dropdown with Hover */}
              <div className="relative group">
                <div className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-800 bg-white cursor-pointer flex items-center justify-between">
                  <span>{selectedLocation}</span>
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                </div>
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-30">
                  <div
                    onClick={() => setSelectedLocation('All locations')}
                    className="px-4 py-3 hover:bg-slate-50 cursor-pointer transition-colors"
                  >
                    All locations
                  </div>
                  <div
                    onClick={() => setSelectedLocation('San Francisco')}
                    className="px-4 py-3 hover:bg-slate-50 cursor-pointer transition-colors"
                  >
                    San Francisco
                  </div>
                  <div
                    onClick={() => setSelectedLocation('Los Angeles')}
                    className="px-4 py-3 hover:bg-slate-50 cursor-pointer transition-colors"
                  >
                    Los Angeles
                  </div>
                  <div
                    onClick={() => setSelectedLocation('New York')}
                    className="px-4 py-3 hover:bg-slate-50 cursor-pointer transition-colors"
                  >
                    New York
                  </div>
                  <div
                    onClick={() => setSelectedLocation('Miami')}
                    className="px-4 py-3 hover:bg-slate-50 cursor-pointer transition-colors rounded-b-lg"
                  >
                    Miami
                  </div>
                </div>
              </div>

              {/* Property Dropdown with Hover */}
              <div className="relative group">
                <div className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-800 bg-white cursor-pointer flex items-center justify-between">
                  <span>{selectedProperty}</span>
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                </div>
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-30">
                  <div
                    onClick={() => setSelectedProperty('All types')}
                    className="px-4 py-3 hover:bg-slate-50 cursor-pointer transition-colors"
                  >
                    All types
                  </div>
                  <div
                    onClick={() => setSelectedProperty('Apartment')}
                    className="px-4 py-3 hover:bg-slate-50 cursor-pointer transition-colors"
                  >
                    Apartment
                  </div>
                  <div
                    onClick={() => setSelectedProperty('House')}
                    className="px-4 py-3 hover:bg-slate-50 cursor-pointer transition-colors"
                  >
                    House
                  </div>
                  <div
                    onClick={() => setSelectedProperty('Commercial')}
                    className="px-4 py-3 hover:bg-slate-50 cursor-pointer transition-colors"
                  >
                    Commercial
                  </div>
                  <div
                    onClick={() => setSelectedProperty('Land')}
                    className="px-4 py-3 hover:bg-slate-50 cursor-pointer transition-colors rounded-b-lg"
                  >
                    Land
                  </div>
                </div>
              </div>

              {/* Types Dropdown with Hover */}
              <div className="relative group">
                <div className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-800 bg-white cursor-pointer flex items-center justify-between">
                  <span>{selectedType}</span>
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                </div>
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-30">
                  <div
                    onClick={() => setSelectedType('All')}
                    className="px-4 py-3 hover:bg-slate-50 cursor-pointer transition-colors"
                  >
                    All
                  </div>
                  <div
                    onClick={() => setSelectedType('For rent')}
                    className="px-4 py-3 hover:bg-slate-50 cursor-pointer transition-colors"
                  >
                    For rent
                  </div>
                  <div
                    onClick={() => setSelectedType('For sale')}
                    className="px-4 py-3 hover:bg-slate-50 cursor-pointer transition-colors rounded-b-lg"
                  >
                    For sale
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Properties Grid Section with Viewport Animation */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white py-12 md:py-16 lg:py-20"
      >
        <div className="w-full m-4 md:m-6 lg:m-8 p-8 md:p-12 lg:p-16 flex flex-col justify-between">
          {/* Properties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {properties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="flex flex-col"
              >
                {/* Property Card */}
                <div className="relative group cursor-pointer rounded-3xl overflow-hidden h-64 md:h-80 mb-4">
                  <img
                    src={property.image || "/placeholder.svg"}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient from-black/60 via-black/20 to-transparent" />

                  {/* Type Badge - Top Left */}
                  <div className="absolute top-4 left-4 z-10">
                    <div className="bg-slate-900 rounded-full px-4 py-2 flex items-center gap-2">
                      <span className="text-white text-sm font-semibold">🔍 {property.type}</span>
                    </div>
                  </div>

                  {/* Plus Button - Top Right */}
                  <button className="absolute top-4 right-4 z-10 flex items-center justify-center w-12 h-12 bg-white rounded-full hover:bg-slate-100 transition-all">
                    <Plus className="w-6 h-6 text-slate-800" />
                  </button>

                  {/* Property Info - Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <h3 className="text-xl md:text-lg lg:text-xl font-bold text-white mb-2">{property.title}</h3>

                    {/* Location */}
                    <div className="flex items-center gap-2 text-white text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>{property.location}</span>
                    </div>
                  </div>
                </div>

                {/* Property Details */}
                <div className="flex flex-wrap items-center justify-between gap-3 text-slate-600 text-sm">
                  <div className="flex items-center gap-3 flex-wrap">
                    <div className="flex items-center gap-1">
                      <Home className="w-4 h-4 text-slate-400" />
                      <span>{property.sqft} sqft</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bed className="w-4 h-4 text-slate-400" />
                      <span>{property.bedrooms}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath className="w-4 h-4 text-slate-400" />
                      <span>{property.bathrooms}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Car className="w-4 h-4 text-slate-400" />
                      <span>{property.parking}</span>
                    </div>
                  </div>

                  <button className="text-slate-800 font-semibold flex items-center gap-1 hover:text-slate-600 transition-colors">
                    Contact agent
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            <button className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white rounded-full px-6 py-3 font-semibold hover:bg-slate-800 transition-colors">
              Start exploring
              <ChevronRight className="w-5 h-5" />
            </button>
            <button className="inline-flex items-center justify-center gap-2 text-slate-900 font-semibold hover:text-slate-700 transition-colors">
              Browse all properties
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.section>
    </div>
  )
}