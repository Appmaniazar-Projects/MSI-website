'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Partners = () => {
  // Duplicate logos to create seamless loop
  const logos = Array(8).fill('/images/msi_logo.png')
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
                x: {
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
              onHoverStart={() => setShouldAnimate(false)}
              onHoverEnd={() => setShouldAnimate(true)}
            >
              {/* Original set of logos */}
              {logos.map((logo, index) => (
                <div
                  key={`logo-1-${index}`}
                  className="flex-none w-32 h-32 relative grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <Image
                    src={logo}
                    alt={`Partner ${index + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
              {/* Duplicated set for seamless loop */}
              {logos.map((logo, index) => (
                <div
                  key={`logo-2-${index}`}
                  className="flex-none w-32 h-32 relative grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <Image
                    src={logo}
                    alt={`Partner ${index + 1}`}
                    fill
                    className="object-contain"
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
