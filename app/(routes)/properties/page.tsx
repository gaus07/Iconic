"use client"
// 🚨 BLOCKER: Range filter is broken. SHOULD BE FIXED IN NEXT PUSH.
import { AllProperties } from '@/components/section/properties_page/all-properties'
import { motion } from 'framer-motion'
import { ChevronDown, X } from 'lucide-react'
import { useState } from 'react'
import { RangeSlider } from '@/components/section/properties_page/range-slider'

const MIN_PRICE = 100000
const MAX_PRICE = 5000000

export default function PropertiesPage() {
  const [selectedLocation, setSelectedLocation] = useState('All locations')
  const [selectedProperty, setSelectedProperty] = useState('All types')
  const [priceRange, setPriceRange] = useState<[number, number]>([MIN_PRICE, MAX_PRICE])
  const [filters, setFilters] = useState({
    location: 'All locations',
    property: 'All types',
    minPrice: MIN_PRICE.toString(),
    maxPrice: MAX_PRICE.toString(),
  })
  const [minPrice, setMinPrice] = useState(MIN_PRICE.toString())
  const [maxPrice, setMaxPrice] = useState(MAX_PRICE.toString())

  const handleApply = () => {
    setFilters({
      location: selectedLocation,
      property: selectedProperty,
      minPrice: minPrice,
      maxPrice: maxPrice,
    })
  }

  const handleClear = () => {
    setSelectedLocation('All locations')
    setSelectedProperty('All types')
    setPriceRange([MIN_PRICE, MAX_PRICE])
    setMinPrice(MIN_PRICE.toString())
    setMaxPrice(MAX_PRICE.toString())
    setFilters({
      location: 'All locations',
      property: 'All types',
      minPrice: MIN_PRICE.toString(),
      maxPrice: MAX_PRICE.toString(),
    })
  }

  return (
    <div className="min-h-screen bg-iconic-bg">
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

      {/* Filter Bar - Positioned to overlap both sections */}
      <div className="relative px-4 md:px-6 lg:px-8 -mt-20 mb-16 z-20">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl p-4 md:p-6 shadow-xs">
            {/* Top Row - Dropdowns and Buttons */}
            <div className="flex flex-col lg:flex-row gap-4 items-center mb-6">
              {/* Location Dropdown with Hover */}
              <div className="relative group w-full lg:w-1/4">
                <div className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-800 bg-white cursor-pointer flex items-center justify-between hover:border-slate-300 transition-colors">
                  <span className="text-sm">{selectedLocation}</span>
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                </div>
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-30">
                  {['All locations', 'Poladpur', 'Mumbai', 'Pune', 'Nagpur'].map((location, index) => (
                    <div
                      key={location}
                      onClick={() => setSelectedLocation(location)}
                      className={`px-4 py-3 hover:bg-slate-50 cursor-pointer transition-colors text-sm ${
                        index === 4 ? 'rounded-b-lg' : ''
                      }`}
                      role="option"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') setSelectedLocation(location)
                      }}
                    >
                      {location}
                    </div>
                  ))}
                </div>
              </div>

              {/* Property Dropdown with Hover */}
              <div className="relative group w-full lg:w-1/4">
                <div className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-800 bg-white cursor-pointer flex items-center justify-between hover:border-slate-300 transition-colors">
                  <span className="text-sm">{selectedProperty}</span>
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                </div>
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-30">
                  {['All types', 'Apartment', 'House', 'Commercial', 'Land'].map((property, index) => (
                    <div
                      key={property}
                      onClick={() => setSelectedProperty(property)}
                      className={`px-4 py-3 hover:bg-slate-50 cursor-pointer transition-colors text-sm ${
                        index === 4 ? 'rounded-b-lg' : ''
                      }`}
                      role="option"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') setSelectedProperty(property)
                      }}
                    >
                      {property}
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Range Slider */}
              <div className="w-full lg:w-1/2">
                <RangeSlider
                  min={MIN_PRICE}
                  max={MAX_PRICE}
                  step={50000}
                  value={priceRange}
                  onChange={setPriceRange}
                  currencyLabel="Cr"
                />
              </div>

              {/* Apply Button */}
              <button
                onClick={handleApply}
                className="w-full lg:w-auto px-6 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors whitespace-nowrap"
              >
                Apply
              </button>

              {/* Clear Button */}
              <button
                onClick={handleClear}
                className="w-full lg:w-auto px-6 py-3 bg-slate-100 text-slate-900 rounded-lg font-medium hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <X className="w-4 h-4" />
                Clear
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Properties Grid */}
      <AllProperties filters={filters} />
    </div>
  )
}
