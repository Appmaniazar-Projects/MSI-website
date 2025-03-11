'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { galleryImages, categories } from '@/lib/gallery-data'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<null | typeof galleryImages[0]>(null)
  const rowRefs = useRef<Record<string, HTMLDivElement | null>>({})

  // Group images by category
  const imagesByCategory = categories.reduce((acc, category) => {
    if (category.id === 'all') return acc
    
    acc[category.id] = galleryImages.filter(img => img.category === category.id)
    return acc
  }, {} as Record<string, typeof galleryImages>)

  // Scroll row left or right
  const scrollRow = (categoryId: string, direction: 'left' | 'right') => {
    const row = rowRefs.current[categoryId]
    if (!row) return
    
    const scrollAmount = 400 // Adjust scroll amount as needed
    const newScrollPosition = direction === 'left' 
      ? row.scrollLeft - scrollAmount 
      : row.scrollLeft + scrollAmount
      
    row.scrollTo({
      left: newScrollPosition,
      behavior: 'smooth'
    })
  }

  // Handle image click
  const handleImageClick = (image: typeof galleryImages[0], e: React.MouseEvent) => {
    e.stopPropagation() // Prevent event bubbling
    setSelectedImage(image)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 text-navy-blue overflow-hidden">
        <div className="absolute inset-0"></div>
        <div className="container relative mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Our Gallery
            </motion.h1>
            <motion.p 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl opacity-90"
            >
              Capturing moments of learning, growth, and achievement
            </motion.p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50"></div>
      </section>

      {/* Netflix-Style Gallery Section */}
      <section className="py-12">
        <div className="container mx-auto">
          {Object.entries(imagesByCategory).map(([categoryId, images]) => {
            if (images.length === 0) return null
            
            const categoryName = categories.find(c => c.id === categoryId)?.name || ''
            
            return (
              <div key={categoryId} className="mb-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 px-4 md:px-8">
                  {categoryName}
                </h2>
                
                <div className="relative group">
                  {/* Left Scroll Button */}
                  <button 
                    onClick={() => scrollRow(categoryId, 'left')}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    aria-label="Scroll left"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  
                  {/* Scrollable Row */}
                  <div 
                    ref={el => rowRefs.current[categoryId] = el}
                    className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory py-8 px-4 md:px-8 -mx-4 md:-mx-8 scroll-smooth"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                  >
                    {images.map((image) => (
                      <div 
                        key={image.id}
                        className="flex-none w-64 md:w-80 mr-4 snap-start group/card relative"
                      >
                        <div 
                          className="relative h-44 md:h-52 overflow-hidden rounded-lg cursor-pointer transition-all duration-300 group-hover/card:scale-125 group-hover/card:z-10 group-hover/card:shadow-xl" 
                          style={{ transformOrigin: 'center center' }}
                          onClick={(e) => handleImageClick(image, e)}
                        >
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            sizes="(max-width: 768px) 16rem, 20rem"
                            className="object-cover w-full h-full transform transition-transform duration-300"
                            placeholder="blur"
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88P/BfwAJhAPYe9tsaAAAAABJRU5ErkJggg=="
                            priority={image.id <= 4} // Prioritize loading for the first 4 images
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-0 left-0 right-0 p-4 transform transition-transform duration-300 group-hover/card:translate-y-0 translate-y-2">
                              <h3 className="text-lg font-semibold text-white truncate">
                                {image.title}
                              </h3>
                              <p className="text-gray-200 text-sm opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 line-clamp-2">
                                {image.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Right Scroll Button */}
                  <button 
                    onClick={() => scrollRow(categoryId, 'right')}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    aria-label="Scroll right"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Enhanced Image Modal with Pop Effect */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                transition: { 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 30 
                } 
              }}
              exit={{ 
                scale: 0.5, 
                opacity: 0,
                transition: { duration: 0.3 } 
              }}
              className="relative max-w-5xl w-full max-h-[85vh] rounded-lg overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative w-full" style={{ height: "70vh" }}>
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 80vw"
                  priority
                  quality={95}
                />
              </div>
              <motion.button
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, transition: { delay: 0.2 } }}
                exit={{ scale: 0.8, opacity: 0 }}
                whileHover={{ scale: 1.1 }}
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-black/60 hover:bg-red-600 text-white rounded-full p-2 transition-colors duration-300"
                aria-label="Close modal"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { delay: 0.1 } }}
                exit={{ y: 20, opacity: 0 }}
                className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-black/40"
              >
                <h3 className="text-2xl font-bold text-white mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-200">
                  {selectedImage.description}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  )
}

