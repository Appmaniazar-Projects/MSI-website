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
  Play,
  Clock,
  Bookmark,
  Search,
  Filter
} from 'lucide-react'

// First, add an interface for the video data structure
interface VideoItem {
  id: string;
  title: string;
  duration: string;
  grade: number;
  subject: string;
  youtubeUrl: string;
  thumbnail: string;
}

// Add sample video data (replace with your actual YouTube videos)
const featuredVideos: VideoItem[] = [
  {
    id: '1',
    title: 'Introduction to Algebra',
    duration: '15:30',
    grade: 12,
    subject: 'Mathematics',
    youtubeUrl: 'https://youtube.com/watch?v=your-video-id',
    thumbnail: 'https://img.youtube.com/vi/your-video-id/maxresdefault.jpg'
  },
  // Add more videos...
];

// Define constants for subjects and grades
const SUBJECTS = ['mathematics', 'physical-science'];
const GRADES = [10, 11, 12];

export default function VideosPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-navy-blue mb-6">Educational Videos</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch our comprehensive collection of educational videos covering various topics in mathematics and physical science.
            </p>
          </motion.div>

          {/* Search and Filter Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-xl shadow-md p-6 mb-8"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search videos..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                  <option value="">Select Subject</option>
                  <option value="mathematics">Mathematics</option>
                  <option value="physical-science">Physical Science</option>
                </select>
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                  <option value="">Select Grade</option>
                  <option value="10">Grade 10</option>
                  <option value="11">Grade 11</option>
                  <option value="12">Grade 12</option>
                </select>
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                  <option value="">Select Topic</option>
                  <option value="algebra">Algebra</option>
                  <option value="calculus">Calculus</option>
                  <option value="mechanics">Mechanics</option>
                  <option value="electricity">Electricity</option>
                </select>
              </div>
            </div>
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
                <p className="text-white/90">Video tutorials for mathematics topics</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {[10, 11, 12].map((grade) => (
                    <div key={grade} className="border-b border-gray-200 pb-4 last:border-0">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Grade {grade}</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center text-gray-600">
                          <Play className="w-4 h-4 mr-2 text-red-600" />
                          <Link href={`/resources/videos/mathematics/grade-${grade}/algebra`} className="hover:text-red-600 transition-colors">
                            Algebra Tutorials
                          </Link>
                        </li>
                        <li className="flex items-center text-gray-600">
                          <Play className="w-4 h-4 mr-2 text-red-600" />
                          <Link href={`/resources/videos/mathematics/grade-${grade}/geometry`} className="hover:text-red-600 transition-colors">
                            Geometry Tutorials
                          </Link>
                        </li>
                        <li className="flex items-center text-gray-600">
                          <Play className="w-4 h-4 mr-2 text-red-600" />
                          <Link href={`/resources/videos/mathematics/grade-${grade}/calculus`} className="hover:text-red-600 transition-colors">
                            Calculus Tutorials
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
                <p className="text-white/90">Video tutorials for physical science topics</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {[10, 11, 12].map((grade) => (
                    <div key={grade} className="border-b border-gray-200 pb-4 last:border-0">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Grade {grade}</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center text-gray-600">
                          <Play className="w-4 h-4 mr-2 text-red-600" />
                          <Link href={`/resources/videos/physical-science/grade-${grade}/mechanics`} className="hover:text-red-600 transition-colors">
                            Mechanics Tutorials
                          </Link>
                        </li>
                        <li className="flex items-center text-gray-600">
                          <Play className="w-4 h-4 mr-2 text-red-600" />
                          <Link href={`/resources/videos/physical-science/grade-${grade}/electricity`} className="hover:text-red-600 transition-colors">
                            Electricity Tutorials
                          </Link>
                        </li>
                        <li className="flex items-center text-gray-600">
                          <Play className="w-4 h-4 mr-2 text-red-600" />
                          <Link href={`/resources/videos/physical-science/grade-${grade}/chemistry`} className="hover:text-red-600 transition-colors">
                            Chemistry Tutorials
                          </Link>
                        </li>
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Featured Videos Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-xl shadow-md p-8"
          >
            <h2 className="text-2xl font-bold text-navy-blue mb-6">Featured Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredVideos.map((video) => (
                <a 
                  key={video.id}
                  href={video.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative aspect-video bg-gray-200">
                    <img 
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity">
                      <Play className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">{video.title}</h3>
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{video.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        Grade {video.grade} • {video.subject}
                      </span>
                      <button className="text-gray-400 hover:text-red-600 transition-colors">
                        <Bookmark className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Additional Resources Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-xl shadow-md p-8 mt-8"
          >
            <h2 className="text-2xl font-bold text-navy-blue mb-6">Additional Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Video Playlists</h3>
                <p className="text-gray-600 mb-4">
                  Access curated playlists of videos organized by topic and difficulty level.
                </p>
                <Link 
                  href="/resources/videos/playlists" 
                  className="inline-flex items-center text-red-600 hover:text-red-800 transition-colors font-medium"
                >
                  View Playlists
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Interactive Quizzes</h3>
                <p className="text-gray-600 mb-4">
                  Test your understanding with interactive quizzes after watching the videos.
                </p>
                <Link 
                  href="/resources/videos/quizzes" 
                  className="inline-flex items-center text-red-600 hover:text-red-800 transition-colors font-medium"
                >
                  Take Quizzes
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}