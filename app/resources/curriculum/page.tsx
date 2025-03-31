'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { 
  Calculator, 
  Atom, 
  ChevronRight,
  Book,
  FileText,
  Download
} from 'lucide-react'

export default function CurriculumPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1 
      } 
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-navy-blue mb-6">MSI Curriculum Materials</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access our comprehensive collection of curriculum materials designed to support your learning journey in mathematics and physical science.
            </p>
          </motion.div>

          {/* Subject Selection */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            {/* Mathematics Section */}
            <motion.div 
              variants={itemVariants}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-gradient-to-r from-red-600 to-red-700 p-6 text-white">
                <Calculator className="w-12 h-12 mb-4" />
                <h2 className="text-2xl font-bold mb-2">Mathematics</h2>
                <p className="text-white/90">Comprehensive mathematics curriculum materials</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {[10, 11, 12].map((grade) => (
                    <div key={grade} className="border-b border-gray-200 pb-4 last:border-0">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Grade {grade}</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center text-gray-600">
                          <FileText className="w-4 h-4 mr-2 text-red-600" />
                          <Link href={`/resources/curriculum/mathematics/grade-${grade}/syllabus`} className="hover:text-red-600 transition-colors">
                            Topics
                          </Link>
                        </li>
                        <li className="flex items-center text-gray-600">
                          <Book className="w-4 h-4 mr-2 text-red-600" />
                          <Link href={`/resources/curriculum/mathematics/grade-${grade}/textbooks`} className="hover:text-red-600 transition-colors">
                            Study Guides
                          </Link>
                        </li>
                        <li className="flex items-center text-gray-600">
                          <Download className="w-4 h-4 mr-2 text-red-600" />
                          <Link href={`/resources/curriculum/mathematics/grade-${grade}/worksheets`} className="hover:text-red-600 transition-colors">
                            Notes 
                          </Link>
                        </li>
                        <li className="flex items-center text-gray-600">
                          <Download className="w-4 h-4 mr-2 text-red-600" />
                          <Link href={`/resources/curriculum/mathematics/grade-${grade}/worksheets`} className="hover:text-red-600 transition-colors">
                            Assesments
                          </Link>
                        </li>
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Physical Science Section */}
            <motion.div 
              variants={itemVariants}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-gradient-to-r from-red-600 to-red-700 p-6 text-white">
                <Atom className="w-12 h-12 mb-4" />
                <h2 className="text-2xl font-bold mb-2">Physical Science</h2>
                <p className="text-white/90">Essential physical science curriculum resources</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {[10, 11, 12].map((grade) => (
                    <div key={grade} className="border-b border-gray-200 pb-4 last:border-0">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Grade {grade}</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center text-gray-600">
                          <FileText className="w-4 h-4 mr-2 text-red-600" />
                          <Link href={`/resources/curriculum/physical-science/grade-${grade}/topics`} className="hover:text-red-600 transition-colors">
                            Topics
                          </Link>
                        </li>
                        <li className="flex items-center text-gray-600">
                          <Book className="w-4 h-4 mr-2 text-red-600" />
                          <Link href={`/resources/curriculum/physical-science/grade-${grade}/guides`} className="hover:text-red-600 transition-colors">
                            Study Guides
                          </Link>
                        </li>
                        <li className="flex items-center text-gray-600">
                          <Download className="w-4 h-4 mr-2 text-red-600" />
                          <Link href={`/resources/curriculum/physical-science/grade-${grade}/notes`} className="hover:text-red-600 transition-colors">
                            Notes 
                          </Link>
                        </li>
                        <li className="flex items-center text-gray-600">
                          <Download className="w-4 h-4 mr-2 text-red-600" />
                          <Link href={`/resources/curriculum/physical-science/grade-${grade}/assesments`} className="hover:text-red-600 transition-colors">
                            Assesments
                          </Link>
                        </li>
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Additional Resources Section */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-xl shadow-md p-8"
          >
            <h2 className="text-2xl font-bold text-navy-blue mb-6">Additional Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Study Guides</h3>
                <p className="text-gray-600 mb-4">
                  Access comprehensive study guides for both subjects, including topic summaries and practice questions.
                </p>
                <Link 
                  href="/resources/curriculum/study-guides" 
                  className="inline-flex items-center text-red-600 hover:text-red-800 transition-colors font-medium"
                >
                  View Study Guides
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Teacher Resources</h3>
                <p className="text-gray-600 mb-4">
                  Find lesson plans, teaching materials, and assessment tools for educators.
                </p>
                <Link 
                  href="/resources/curriculum/teacher-resources" 
                  className="inline-flex items-center text-red-600 hover:text-red-800 transition-colors font-medium"
                >
                  Access Teacher Resources
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </motion.div> */}
        </div>
      </main>

      <Footer />
    </div>
  )
} 