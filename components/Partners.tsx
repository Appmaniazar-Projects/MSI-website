'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Partners = () => {
  const logos = [
    {
      src: '/images/msi-partners/msi-partners-barloworld.png',
      alt: 'Barloworld',
      width: 200
    },
    {
      src: '/images/msi-partners/msi-partners-eastern_cape_edu.png',
      alt: 'Eastern Cape Education',
      width: 240
    },
    {
      src: '/images/msi-partners/msi-partners-standard_bank.png',
      alt: 'Standard Bank',
      width: 200
    }
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Our Partners
          </h2>
          <p className="text-xl text-gray-600">
            Working together with leading organizations to transform STEM education
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            {logos.map((logo, index) => (
              <motion.div
                key={logo.alt}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative h-24 filter grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                  sizes={`${logo.width}px`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners
