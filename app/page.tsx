'use client';

import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Testimonials from '../components/Testimonials'
import Gallery from '../components/Gallery'
import { Button } from "@/components/ui/button"
import { getBlogPosts } from '@/lib/blog'
import { motion } from 'framer-motion'
import { GraduationCap, Microscope, Tent } from 'lucide-react'

export default function Home() {
  const latestPosts = getBlogPosts().slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-red-600 to-red-800 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/msi-hero.jpg"
            alt="Students learning"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 100, 
              damping: 10,
              duration: 0.5 
            }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Empowering Through Education
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 100, 
              damping: 10,
              duration: 0.5,
              delay: 0.2 
            }}
            className="text-xl md:text-2xl mb-8"
          >
            Black Founded & Youth Managed Non-Profit Organization
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-red-600 text-white hover:bg-red-700"
            >
              <Link href="#about">
                Learn More
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center"
          >
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image src="/images/Outdoor.jpg" alt="Students learning" width={600} height={400} className="rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">About Maths and Science Infinity</h2>
              <p className="text-gray-600 mb-6">
                We are dedicated to bridging the gap between classroom learning and real-life application of Maths and Science. Our mission is to inspire and empower the youth through innovative educational programs.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Hands-on learning experiences</li>
                <li>Mentorship programs</li>
                <li>STEM workshops and events</li>
                <li>Community outreach initiatives</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
  { 
    title: 'Tutoring', 
    icon: <GraduationCap className="text-4xl text-red-600" />, 
    description: 'One-on-one and group tutoring sessions in mathematics and science subjects.' 
  },
  { 
    title: 'Workshops', 
    icon: <Microscope className="text-4xl text-red-600" />, 
    description: 'Interactive workshops focusing on practical applications of STEM concepts.' 
  },
  { 
    title: 'STEM Camps', 
    icon: <Tent className="text-4xl text-red-600" />, 
    description: 'Immersive camps that combine learning with fun outdoor activities.' 
  }
].map((service, index) => (
  <motion.div 
    key={service.title}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
  >
    <div className="mb-4">{service.icon}</div>
    <h3 className="text-xl font-semibold mb-4 text-gray-800">{service.title}</h3>
    <p className="text-gray-600">{service.description}</p>
  </motion.div>
))}
          </div>
        </div>
      </section>

      {/* Impact Counter */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Impact</h2>
          <div className="flex flex-wrap justify-center">
            {[
              { number: '5000+', label: 'Students Reached' },
              { number: '50+', label: 'Schools Partnered' },
              { number: '100+', label: 'Workshops Conducted' },
              { number: '90%', label: 'Student Satisfaction' }
            ].map((stat, index) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full sm:w-1/2 md:w-1/4 mb-8"
              >
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Gallery Section */}
      <Gallery />

      {/* Blog Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            <h2 className="text-3xl font-bold text-center text-gray-800">
              Latest Blog Posts
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {latestPosts.map((post) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2 duration-300"
                >
                  <Link href={`/blog/${post.slug}`}>
                    {post.frontmatter.image && (
                      <Image
                        src={post.frontmatter.image}
                        alt={post.frontmatter.title}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover"
                      />
                    )}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {post.frontmatter.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.frontmatter.excerpt}
                      </p>
                      <div className="flex justify-between items-center text-sm text-gray-500">
                        <span>{post.frontmatter.author}</span>
                        <span>{post.frontmatter.date}</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Button
                asChild
                size="lg"
                className="bg-red-600 text-white hover:bg-red-700"
              >
                <Link href="/blog">
                  View All Blog Posts
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Ready to Make a Difference?</h2>
          <p className="text-xl text-gray-600 mb-8">Join us in our mission to empower the youth through Maths and Science education.</p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              asChild
              size="lg"
              className="bg-red-600 text-white hover:bg-red-700"
            >
              <Link href="#contact">
                Get Involved
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
