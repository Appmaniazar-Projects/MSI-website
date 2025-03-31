'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { 
  Folder,
  FileText,
  Download,
  ChevronLeft,
  Search,
  Book
} from 'lucide-react'
import { useParams } from 'next/navigation'

// Constants for available grades and subjects
const GRADES = [10, 11, 12]
const SUBJECTS = ['mathematics', 'physical-science'] as const
const FOLDER_STRUCTURE = {
  'topics': [],
  'study-guides': [],
  'notes': [],
  'assessments': []
} as const

// Define TypeScript interfaces
interface CurriculumFile {
  name: string;
  path: string;
}

interface GradeContent {
  [key: string]: CurriculumFile[];
}

interface SubjectContent {
  [grade: number]: GradeContent;
}

interface CurriculumContent {
  [subject: string]: SubjectContent;
}

// Helper function to generate content for a grade
const generateGradeContent = (subject: string, grade: number): GradeContent => {
  const isPhysics = subject === 'physical-science'
  
  return {
    'topics': [
      { 
        name: isPhysics ? 'Mechanics' : 'Functions',
        path: `/resources/curriculum/${subject}/grade-${grade}/mechanics.pdf`
      },
      { 
        name: isPhysics ? 'Waves, Sound & Light' : 'Algebra',
        path: `/resources/curriculum/${subject}/grade-${grade}/waves.pdf`
      },
      {
        name: isPhysics ? 'Electricity & Magnetism' : 'Geometry',
        path: `/resources/curriculum/${subject}/grade-${grade}/electricity.pdf`
      },
      {
        name: isPhysics ? 'Matter & Materials' : 'Trigonometry',
        path: `/resources/curriculum/${subject}/grade-${grade}/matter.pdf`
      },
    ],
    'study-guides': [
      { 
        name: `Term 1-2 Study Guide`, 
        path: `/resources/curriculum/${subject}/grade-${grade}/term1-2-guide.pdf` 
      },
      { 
        name: `Term 3-4 Study Guide`, 
        path: `/resources/curriculum/${subject}/grade-${grade}/term3-4-guide.pdf` 
      }
    ],
    'notes': [
      { 
        name: isPhysics ? 'Physics Formulas' : 'Math Formulas', 
        path: `/resources/curriculum/${subject}/grade-${grade}/formulas.pdf` 
      },
      { 
        name: `Exam Tips & Tricks`, 
        path: `/resources/curriculum/${subject}/grade-${grade}/exam-tips.pdf` 
      }
    ],
    'assessments': [
      { 
        name: `Practice Test 1`, 
        path: `/resources/curriculum/${subject}/grade-${grade}/test1.pdf` 
      },
      { 
        name: `Practice Test 2`, 
        path: `/resources/curriculum/${subject}/grade-${grade}/test2.pdf` 
      },
      {
        name: 'Sample Papers',
        path: `/resources/curriculum/${subject}/grade-${grade}/sample-papers.pdf`
      }
    ]
  }
}

// Generate full curriculum content
const curriculumContent: CurriculumContent = SUBJECTS.reduce((subjects, subject) => ({
  ...subjects,
  [subject]: GRADES.reduce((grades, grade) => ({
    ...grades,
    [grade]: generateGradeContent(subject, grade)
  }), {})
}), {})

export default function GradeCurriculumPage() {
  const params = useParams()
  const subject = params?.subject?.toString() || ''
  const grade = parseInt(params?.grade?.toString() || '0')
  
  // Validate subject and grade
  const validSubject = SUBJECTS.includes(subject as any) ? subject : SUBJECTS[0]
  const validGrade = GRADES.includes(grade) ? grade : GRADES[0]
  
  const [searchTerm, setSearchTerm] = useState('')
  const [activeFolder, setActiveFolder] = useState('topics')
  
  const content = curriculumContent[validSubject]?.[validGrade] || {}
  
  const formatTitle = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Navigation */}
          <div className="mb-8">
            <Link 
              href="/resources/curriculum"
              className="inline-flex items-center text-gray-600 hover:text-red-600"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back to Curriculum
            </Link>
          </div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-3xl font-bold text-navy-blue">
              Grade {validGrade} {formatTitle(validSubject)}
            </h1>
          </motion.div>

          {/* Search */}
          <div className="mb-8">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search content..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Folder Navigation */}
          <div className="flex space-x-4 mb-8">
            {Object.keys(content).map((folder: string) => (
              <button
                key={folder}
                onClick={() => setActiveFolder(folder)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeFolder === folder
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {formatTitle(folder)}
              </button>
            ))}
          </div>

          {/* Content Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h2 className="text-xl font-semibold mb-6 text-gray-800">
              {formatTitle(activeFolder)}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {content[activeFolder as keyof typeof content]
                ?.filter(file => 
                  file.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((file, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 border border-gray-200 rounded-lg hover:border-red-500 transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <FileText className="w-6 h-6 text-red-600" />
                        <span className="text-gray-700">{file.name}</span>
                      </div>
                      <a
                        href={file.path}
                        download
                        className="p-2 text-red-600 hover:text-red-800 transition-colors"
                      >
                        <Download className="w-5 h-5" />
                      </a>
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}