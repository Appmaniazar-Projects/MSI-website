'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

// Gallery categories and images
const categories = [
  { id: 'all', name: 'All' }, // Fixed typo from 'Alls' to 'All'
  { id: 'events', name: 'Events' },
  { id: 'classes', name: 'Classes' },
  { id: 'workshops', name: 'Workshops' },
  { id: 'achievements', name: 'Achievements' },
]

const galleryImages = [
  {
    id: 1,
    src: '/images/msi-classroom-1.jpg',
    alt: 'Students in study session',
    category: 'classes',
    title: 'Collaborative Learning',
    description: 'Students working together to solve complex problems',
  },
  {
    id: 2,
    src: '/images/msi-hero.jpg',
    alt: 'Science workshop',
    category: 'workshops',
    title: 'Science Workshop',
    description: 'Hands-on experience with laboratory equipment',
  },
  {
    id: 3,
    src: '/images/msi-Outdoor.jpg',
    alt: 'Students in outdoor session',
    category: 'classes',
    title: 'Outdoor Learning',
    description: 'Interactive outdoor learning experience',
  },
  {
    id: 4,
    src: '/images/msi-learners.jpg',
    alt: 'STEM camp activity',
    category: 'workshops',
    title: 'STEM Camp',
    description: 'Outdoor learning activities during our STEM summer camp',
  },
  {
    id: 5,
    src: '/images/msi-applicant.jpg',
    alt: 'Students studying together',
    category: 'classes',
    title: 'Group Study Session',
    description: 'Students collaborating and learning together in a classroom setting',
  },
  {
    id: 6,
    src: '/images/msi-talks.jpg',
    alt: 'Educational presentation',
    category: 'events',
    title: 'Educational Talk',
    description: 'Expert-led educational presentations',
  },
  {
    id: 7,
    src: '/images/msi-donations.jpg',
    alt: 'Community outreach program',
    category: 'events',
    title: 'Community Support',
    description: 'Making a difference in our community through education',
  },
  {
    id: 8,
    src: '/images/msi-giftbags.jpg',
    alt: 'School outreach program',
    category: 'events',
    title: 'School Visit',
    description: 'Engaging with students during our school outreach program',
  },
  {
    id: 9,
    src: '/images/msi-jongi1.jpg',
    alt: 'School outreach program',
    category: 'events',
    title: 'School Visit',
    description: 'Engaging with students during our school outreach program',
  },
  {
    id: 10,
    src: '/images/msi-jongi2.jpg',
    alt: 'School outreach program',
    category: 'events',
    title: 'School Visit',
    description: 'Engaging with students during our school outreach program',
  },
  {
    id: 11,
    src: '/images/msi-jongi3.jpg',
    alt: 'School outreach program',
    category: 'events',
    title: 'School Visit',
    description: 'Engaging with students during our school outreach program',
  },
  {
    id: 12,
    src: '/images/msi-jongi4.jpg',
    alt: 'School outreach program',
    category: 'events',
    title: 'School Visit',
    description: 'Engaging with students during our school outreach program',
  },
  {
    id: 13,
    src: '/images/msi-jongi6.jpg',
    alt: 'School outreach program',
    category: 'events',
    title: 'School Visit',
    description: 'Engaging with students during our school outreach program',
  },
  {
    id: 14,
    src: '/images/msi-learner.png',
    alt: 'Students in classroom',
    category: 'classes',
    title: 'Mathematics Class',
    description: 'Students engaged in advanced mathematics problem-solving',
  },
  {
    id: 15,
    src: '/images/msi-teaching.JPG',
    alt: 'Educator in action',
    category: 'classes',
    title: 'Inspiring Teaching Moment',
    description: 'A captivating image highlighting the passion of an educator delivering an interactive lesson to engaged students.',
  },
  {
    id: 16,
    src: '/images/msi-classroom-3.jpg',
    alt: 'Students in study session',
    category: 'classes',
    title: 'Collaborative Learning',
    description: 'Students working together to solve complex problems',
  },
  {
    id: 17,
    src: '/images/msi-tutor workshop.png',
    alt: 'Tutor workshop',
    category: 'workshops',
    title: 'Tutor Workshop',

    description: 'Interactive workshop focusing on science and technology',


  },
  {
    id: 18,
    src: '/images/msi-councelling.jpg',
    alt: 'Community event',
    category: 'events',
    title: 'Community Day',
    description: 'Bringing education to the heart of our communities',


  },
  {
    id: 19,
    src: '/images/msi-mobile-laboratories.jpg',
    alt: 'Science laboratory session',
    category: 'workshops',
    title: 'Science Lab',
    description: 'Practical science experiments and demonstrations',
  },
  {
    id: 20,
    src: '/images/msi-tutor.jpg',
    alt: 'One-on-one tutoring',
    category: 'classes',
    title: 'Individual Tutoring',
    description: 'Personalized attention and guidance for students',
  },
  {
    id: 21,
    src: '/images/msi-shawburry1.jpg',
    alt: 'Educational presentation',
    category: 'events',
    title: 'Educational Talk',
    description: 'Expert-led educational presentations',

  },
  {
    id: 22,
    src: '/images/msi-shawburry2.jpg',
    alt: 'Educational presentation',
    category: 'events',
    title: 'Educational Talk',
    description: 'Expert-led educational presentations',

  },
  {
    id: 23,
    src: '/images/msi-shawburry3.jpg',
    alt: 'Educational presentation',
    category: 'events',
    title: 'Educational Talk',
    description: 'Expert-led educational presentations',

  },
  {
    id: 24,
    src: '/images/msi-shawburry4.jpg',
    alt: 'Educational presentation',
    category: 'events',
    title: 'Educational Talk',
    description: 'Expert-led educational presentations',
  },
  {
    id: 25,
    src: '/images/msi-tutor-development.JPG',
    alt: 'Tutor development session',
    category: 'workshops',
    title: 'Tutor Development Workshop',
    description: 'An engaging session focused on enhancing tutoring skills and pedagogical strategies, fostering professional growth among educators.',
  },
  {
    id: 26,
    src: '/images/msi-classroom-2.jpg',
    alt: 'Students in study session',
    category: 'classes',
    title: 'Collaborative Learning',
    description: 'Students working together to solve complex problems',
  },
]




export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState<null | typeof galleryImages[0]>(null)

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 text-navy-blue overflow-hidden">
        <div className="absolute inset-0 "></div>
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

      {/* Gallery Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-red-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            <AnimatePresence>
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="relative h-80 overflow-hidden rounded-xl bg-gray-100">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => console.error(`Error loading image: ${image.src}`)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-xl font-bold text-white mb-2">
                          {image.title}
                        </h3>
                        <p className="text-gray-200 text-sm">
                          {image.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
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
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-5xl w-full aspect-video"
              onClick={e => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-200">
                  {selectedImage.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  )
}

