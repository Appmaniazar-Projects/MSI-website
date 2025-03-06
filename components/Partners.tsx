'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Partners = () => {
  // Partner logos
  const logos = [
    '/images/partners/msi-partners-barloworld.png',
    '/images/partners/msi-partners-eastern_cape_edu.png',
    '/images/partners/msi-partners-standard_bank.png',
    // Duplicate a few to make the animation smoother
    '/images/partners/msi-partners-barloworld.png',
    '/images/partners/msi-partners-eastern_cape_edu.png',
    '/images/partners/msi-partners-standard_bank.png',
  ]
  const [shouldAnimate, setShouldAnimate] = useState(true)

  useEffect(() => {
    // Pause animation on hover
    const handleVisibilityChange = () => {
      setShouldAnimate(!document.hidden)
    }
    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Partners</h2>
        
        <div className="relative w-full">
          {/* First row of logos */}
          <div className="flex items-center">
            <motion.div
              className="flex gap-16 items-center"
              animate={shouldAnimate ? {
                x: [0, -1920],
              } : {}}
              transition={{
                duration: 30,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {logos.map((logo, index) => (
                <div key={index} className="flex-shrink-0 w-48 h-24 relative">
                  <Image
                    src={logo}
                    alt={`Partner logo ${index + 1}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 192px"
                  />
                </div>
              ))}
              {/* Repeat logos for seamless loop */}
              {logos.map((logo, index) => (
                <div key={`repeat-${index}`} className="flex-shrink-0 w-48 h-24 relative">
                  <Image
                    src={logo}
                    alt={`Partner logo ${index + 1}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 192px"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners
