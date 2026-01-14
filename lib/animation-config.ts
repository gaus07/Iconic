// animation-config.ts
export const EASING = {
  smooth: [0.22, 1, 0.36, 1] as const,
  easeIn: [0.42, 0, 1, 1] as const,
  easeOut: [0, 0, 0.58, 1] as const,
  easeInOut: [0.42, 0, 0.58, 1] as const,
} as const

// Timing constants for hero entrance animations - easy to tweak
export const HERO_ANIMATION = {
  // Easing - smooth ease-out curve
  easing: EASING.smooth,
  easeIn: EASING.easeIn,
  easeOut: EASING.easeOut,
  easeInOut: EASING.easeInOut,  

  // Left content timing
  headline: {
    duration: 0.8,
    delay: 0.1,
  },
  subtext: {
    duration: 0.6,
    delay: 0.3,
  },
  cta: {
    duration: 0.5,
    stagger: 0.12,
    delay: 0.5,
  },

  // Right content timing
  backgroundCard: {
    duration: 0.9,
    delay: 0.2,
  },
  specialistCard: {
    duration: 0.85,
    delay: 0.35,
  },

  // Hover effects
  hover: {
    scale: 1.02,
    duration: 0.3,
  },
} as const
