'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from './ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const images = [
  { src: '/images/msi-Outdoor.jpg', alt: 'MSI outdoor signup booth' },
  { src: '/images/msi-learner.png', alt: 'Student engaged in individual learning' },
  { src: '/images/msi-learners.jpg', alt: 'STEM camp outdoor activity' },
  { src: '/images/msi-talks.jpg', alt: 'School outreach program' },
  { src: '/images/msi-classroom-1.jpg', alt: 'Group of students learning together' },
  { src: '/images/msi-donations.jpg', alt: 'Community outreach program' },
]

const Gallery = () => {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [selectedImage, setSelectedImage] = useState(null)

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = 400
      const newScrollPosition = direction === 'left' 
        ? sliderRef.current.scrollLeft - scrollAmount
        : sliderRef.current.scrollLeft + scrollAmount
      
      sliderRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Work in Action</h2>
        
        <div className="relative group">
          <div 
            ref={sliderRef}
            className="flex overflow-x-hidden scroll-smooth gap-4 no-scrollbar"
            style={{
              WebkitTextSizeAdjust: '100%',
              WebkitFontSmoothing: 'antialiased',
            }}
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-none w-[400px] relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-300 transform hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-center p-4">{image.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 h-[7.5rem] w-[1.5rem] rounded-lg border-none flex items-center justify-center p-0 m-0 text-white bg-white/70 transition-opacity duration-400 opacity-0 group-hover:opacity-100"
            style={{
              WebkitTextSizeAdjust: '100%',
              WebkitFontSmoothing: 'antialiased',
              WebkitAppearance: 'button',
            }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 h-[7.5rem] w-[1.5rem] rounded-lg border-none flex items-center justify-center p-0 m-0 text-white bg-white/70 transition-opacity duration-400 opacity-0 group-hover:opacity-100"
            style={{
              WebkitTextSizeAdjust: '100%',
              WebkitFontSmoothing: 'antialiased',
              WebkitAppearance: 'button',
            }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-red-600 text-white hover:bg-red-700"
          >
            <Link href="/gallery">
              See More
            </Link>
          </Button>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={800}
              height={600}
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery