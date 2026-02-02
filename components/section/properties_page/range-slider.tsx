'use client'

import React, { useRef, useState, useCallback } from 'react'

interface RangeSliderProps {
  min: number
  max: number
  step: number
  value: [number, number]
  onChange: (value: [number, number]) => void
  currencyLabel?: string
}

export function RangeSlider({
  min,
  max,
  step,
  value,
  onChange,
  currencyLabel = 'Cr',
}: RangeSliderProps) {
  const [activeThumb, setActiveThumb] = useState<'min' | 'max' | null>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  const formatPrice = (price: number): string => {
    return (price / 1000000).toFixed(2)
  }

  const handleMouseDown = (thumb: 'min' | 'max') => {
    setActiveThumb(thumb)
  }

  const handleMouseUp = () => {
    setActiveThumb(null)
  }

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!activeThumb || !trackRef.current) return

      const rect = trackRef.current.getBoundingClientRect()
      const percentage = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1)
      const newValue = Math.round((min + percentage * (max - min)) / step) * step

      const [minValue, maxValue] = value

      if (activeThumb === 'min') {
        const constrainedValue = Math.min(newValue, maxValue - step)
        onChange([constrainedValue, maxValue])
      } else {
        const constrainedValue = Math.max(newValue, minValue + step)
        onChange([minValue, constrainedValue])
      }
    },
    [activeThumb, min, max, step, value, onChange]
  )

  const handleKeyDown = (thumb: 'min' | 'max', e: React.KeyboardEvent) => {
    const [minValue, maxValue] = value
    const currentValue = thumb === 'min' ? minValue : maxValue

    let newValue = currentValue

    switch (e.key) {
      case 'ArrowLeft':
      case 'ArrowDown':
        newValue = currentValue - step
        e.preventDefault()
        break
      case 'ArrowRight':
      case 'ArrowUp':
        newValue = currentValue + step
        e.preventDefault()
        break
      case 'PageDown':
        newValue = currentValue - step * 10
        e.preventDefault()
        break
      case 'PageUp':
        newValue = currentValue + step * 10
        e.preventDefault()
        break
      case 'Home':
        newValue = thumb === 'min' ? min : minValue
        e.preventDefault()
        break
      case 'End':
        newValue = thumb === 'max' ? max : maxValue
        e.preventDefault()
        break
      default:
        return
    }

    newValue = Math.max(min, Math.min(max, newValue))

    if (thumb === 'min') {
      onChange([Math.min(newValue, maxValue - step), maxValue])
    } else {
      onChange([minValue, Math.max(newValue, minValue + step)])
    }
  }

  const minPercentage = ((value[0] - min) / (max - min)) * 100
  const maxPercentage = ((value[1] - min) / (max - min)) * 100

  React.useEffect(() => {
    if (activeThumb) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [activeThumb, handleMouseMove])

  return (
    <div className="w-full space-y-4">
      {/* Price Display */}
      <div className="flex justify-between items-center">
        <span className="text-sm font-semibold text-slate-900">
          {formatPrice(value[0])} {currencyLabel} — {formatPrice(value[1])} {currencyLabel}
        </span>
      </div>

      {/* Track */}
      <div
        ref={trackRef}
        className="relative h-2 bg-slate-200 rounded-full cursor-pointer"
        onClick={(e) => {
          const rect = trackRef.current?.getBoundingClientRect()
          if (!rect) return
          const percentage = (e.clientX - rect.left) / rect.width
          const newValue = Math.round((min + percentage * (max - min)) / step) * step
          const [minValue, maxValue] = value

          if (Math.abs(newValue - minValue) < Math.abs(newValue - maxValue)) {
            onChange([Math.min(newValue, maxValue - step), maxValue])
          } else {
            onChange([minValue, Math.max(newValue, minValue + step)])
          }
        }}
      >
        {/* Fill */}
        <div
          className="absolute h-full bg-slate-900 rounded-full"
          style={{
            left: `${minPercentage}%`,
            right: `${100 - maxPercentage}%`,
          }}
        />

        {/* Min Thumb */}
        <div
          role="slider"
          aria-label="Minimum price"
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={value[0]}
          tabIndex={0}
          onMouseDown={() => handleMouseDown('min')}
          onKeyDown={(e) => handleKeyDown('min', e)}
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 bg-white border-2 border-slate-900 rounded-full cursor-grab active:cursor-grabbing shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 transition-shadow"
          style={{ left: `${minPercentage}%` }}
        />

        {/* Max Thumb */}
        <div
          role="slider"
          aria-label="Maximum price"
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={value[1]}
          tabIndex={0}
          onMouseDown={() => handleMouseDown('max')}
          onKeyDown={(e) => handleKeyDown('max', e)}
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 bg-white border-2 border-slate-900 rounded-full cursor-grab active:cursor-grabbing shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 transition-shadow"
          style={{ left: `${maxPercentage}%` }}
        />
      </div>
    </div>
  )
}
