'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Book, FileText, Video, Download, Search, Filter, X, ChevronDown } from 'lucide-react'

export default function PastPapers() {
  // State for filtering and mobile view
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGrade, setSelectedGrade] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedTerm, setSelectedTerm] = useState<string | null>(null);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Existing data structure
  const gradesPapers = [
    {
      grade: 'Grade 12',
      years: [
        {
          year: 2023,
          terms: [
            {
              term: 'November',
              subjects: [
                {
                  title: 'Mathematics',
                  items: [
                    { name: 'Mathematics Paper 1', type: 'PDF', size: '2.3 MB' },
                    { name: 'Mathematics Paper 2', type: 'PDF', size: '1.8 MB' },
                  ]
                },
                {
                  title: 'Physical Sciences',
                  items: [
                    { name: 'Physical Sciences Paper 1', type: 'PDF', size: '2.5 MB' },
                    { name: 'Physical Sciences Paper 2', type: 'PDF', size: '1.9 MB' },
                  ]
                },
                {
                  title: 'Life Sciences',
                  items: [
                    { name: 'Life Sciences Paper 1', type: 'PDF', size: '2.2 MB' },
                    { name: 'Life Sciences Paper 2', type: 'PDF', size: '1.7 MB' },
                  ]
                }
              ]
            },
            {
              term: 'June',
              subjects: [
                {
                  title: 'Mathematics',
                  items: [
                    { name: 'Mathematics Midyear Exam', type: 'PDF', size: '2.1 MB' },
                  ]
                },
                {
                  title: 'Physical Sciences',
                  items: [
                    { name: 'Physical Sciences Midyear Exam', type: 'PDF', size: '2.3 MB' },
                  ]
                },
                {
                  title: 'Life Sciences',
                  items: [
                    { name: 'Life Sciences Midyear Exam', type: 'PDF', size: '1.9 MB' },
                  ]
                }
              ]
            }
          ]
        },
        {
          year: 2022,
          terms: [
            {
              term: 'November',
              subjects: [
                {
                  title: 'Mathematics',
                  items: [
                    { name: 'Mathematics Paper 1', type: 'PDF', size: '2.4 MB' },
                    { name: 'Mathematics Paper 2', type: 'PDF', size: '1.9 MB' },
                  ]
                },
                {
                  title: 'Physical Sciences',
                  items: [
                    { name: 'Physical Sciences Paper 1', type: 'PDF', size: '2.6 MB' },
                    { name: 'Physical Sciences Paper 2', type: 'PDF', size: '2.0 MB' },
                  ]
                },
                {
                  title: 'Life Sciences',
                  items: [
                    { name: 'Life Sciences Paper 1', type: 'PDF', size: '2.3 MB' },
                    { name: 'Life Sciences Paper 2', type: 'PDF', size: '1.8 MB' },
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      grade: 'Grade 11',
      years: [
        {
          year: 2023,
          terms: [
            {
              term: 'November',
              subjects: [
                {
                  title: 'Mathematics',
                  items: [
                    { name: 'Mathematics Exam', type: 'PDF', size: '3.1 MB' },
                  ]
                },
                {
                  title: 'Physical Sciences',
                  items: [
                    { name: 'Physical Sciences Exam', type: 'PDF', size: '2.7 MB' },
                  ]
                },
                {
                  title: 'Life Sciences',
                  items: [
                    { name: 'Life Sciences Exam', type: 'PDF', size: '3.4 MB' },
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]

  // Memoized filtering logic
  const filteredPapers = useMemo(() => {
    return gradesPapers.filter(gradeGroup => 
      (!selectedGrade || gradeGroup.grade === selectedGrade) &&
      gradeGroup.years.some(yearGroup => 
        (!selectedYear || yearGroup.year === selectedYear) &&
        yearGroup.terms.some(termGroup => 
          (!selectedTerm || termGroup.term === selectedTerm) &&
          termGroup.subjects.some(subject => 
            subject.items.some(item => 
              item.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
          )
        )
      )
    );
  }, [searchTerm, selectedGrade, selectedYear, selectedTerm]);

  // Download handler
  const handleDownload = (item: { name: string, type: string, size: string }) => {
    const link = document.createElement('a');
    link.href = `/downloads/past-papers/${encodeURIComponent(item.name)}.pdf`;
    link.download = `${item.name}.pdf`;
    link.click();
  };

  // Reset all filters
  const resetFilters = () => {
    setSearchTerm('');
    setSelectedGrade(null);
    setSelectedYear(null);
    setSelectedTerm(null);
    setIsMobileFiltersOpen(false);
  };

  // Collect unique values for dropdowns
  const uniqueGrades = Array.from(new Set(gradesPapers.map(g => g.grade)));
  const uniqueYears = Array.from(new Set(
    gradesPapers.flatMap(grade => grade.years.map(year => year.year))
  ));
  const uniqueTerms = Array.from(new Set(
    gradesPapers.flatMap(grade => 
      grade.years.flatMap(year => 
        year.terms.map(term => term.term)
      )
    )
  ));

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          {/* Page Header */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-0">
              Past Papers
            </h1>
            
            {/* Mobile Filter Toggle */}
            <div className="w-full sm:hidden">
              <button 
                onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
                className="w-full flex items-center justify-center py-3 bg-red-500 text-white rounded-lg"
              >
                <Filter className="w-5 h-5 mr-2" />
                {isMobileFiltersOpen ? 'Close Filters' : 'Open Filters'}
              </button>
            </div>
          </div>

          {/* Filters Container */}
          <div className={`
            ${isMobileFiltersOpen ? 'block' : 'hidden'}
            sm:block bg-white rounded-lg shadow-md mb-8 p-4
          `}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Search Input */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input 
                  type="search" 
                  value={searchTerm} 
                  onChange={(e) => setSearchTerm(e.target.value)} 
                  placeholder="Search papers" 
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500"
                />
              </div>

              {/* Grade Dropdown */}
              <div className="relative">
                <select 
                  value={selectedGrade || ''} 
                  onChange={(e) => setSelectedGrade(e.target.value || null)}
                  className="w-full appearance-none pl-4 pr-8 py-2 border rounded-lg focus:ring-2 focus:ring-red-500"
                >
                  <option value="">All Grades</option>
                  {uniqueGrades.map((grade) => (
                    <option key={grade} value={grade}>{grade}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>

              {/* Year Dropdown */}
              <div className="relative">
                <select 
                  value={selectedYear || ''} 
                  onChange={(e) => setSelectedYear(e.target.value ? Number(e.target.value) : null)}
                  className="w-full appearance-none pl-4 pr-8 py-2 border rounded-lg focus:ring-2 focus:ring-red-500"
                >
                  <option value="">All Years</option>
                  {uniqueYears.map((year) => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>

              {/* Term Dropdown */}
              <div className="relative">
                <select 
                  value={selectedTerm || ''} 
                  onChange={(e) => setSelectedTerm(e.target.value || null)}
                  className="w-full appearance-none pl-4 pr-8 py-2 border rounded-lg focus:ring-2 focus:ring-red-500"
                >
                  <option value="">All Terms</option>
                  {uniqueTerms.map((term) => (
                    <option key={term} value={term}>{term}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            {/* Reset Filters Button */}
            {(searchTerm || selectedGrade || selectedYear || selectedTerm) && (
              <div className="mt-4 flex justify-center">
                <button 
                  onClick={resetFilters}
                  className="flex items-center px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                >
                  <X className="w-5 h-5 mr-2" />
                  Reset Filters
                </button>
              </div>
            )}
          </div>

          {/* Active Filters Indicators */}
          {(searchTerm || selectedGrade || selectedYear || selectedTerm) && (
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                { label: 'Search', value: searchTerm, clear: () => setSearchTerm('') },
                { label: 'Grade', value: selectedGrade, clear: () => setSelectedGrade(null) },
                { label: 'Year', value: selectedYear, clear: () => setSelectedYear(null) },
                { label: 'Term', value: selectedTerm, clear: () => setSelectedTerm(null) }
              ].filter(filter => filter.value).map((filter) => (
                <div 
                  key={filter.label} 
                  className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs flex items-center"
                >
                  {filter.label}: {filter.value}
                  <button 
                    onClick={filter.clear}
                    className="ml-2 hover:text-red-600"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Empty State */}
          {filteredPapers.length === 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16 bg-white rounded-lg shadow-md"
            >
              <Search className="w-16 h-16 mx-auto text-gray-300 mb-4" />
              <h3 className="text-2xl text-gray-600 mb-4">
                No papers found
              </h3>
              <p className="text-gray-500 mb-6 px-4">
                Try adjusting your search or filters to find the papers you need
              </p>
              <button 
                onClick={resetFilters}
                className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex items-center mx-auto"
              >
                <X className="w-5 h-5 mr-2" />
                Reset Filters
              </button>
            </motion.div>
          )}

          {/* Papers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPapers.map((gradeGroup) => (
              gradeGroup.years.map((yearGroup) => (
                yearGroup.terms.map((termGroup) => (
                  termGroup.subjects.map((subject) => (
                    <motion.div
                      key={`${gradeGroup.grade}-${yearGroup.year}-${termGroup.term}-${subject.title}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="bg-white rounded-lg shadow-md overflow-hidden"
                    >
                      <div className="p-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                          <FileText className="w-5 h-5 mr-2 text-red-600" />
                          {subject.title}
                          <span className="ml-2 text-sm text-gray-500">
                            ({gradeGroup.grade}, {yearGroup.year} {termGroup.term})
                          </span>
                        </h2>
                        <div className="space-y-4">
                          {subject.items.map((item) => (
                            <div
                              key={item.name}
                              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                              <div className="flex items-center">
                                <FileText className="w-4 h-4 text-gray-500 mr-3" />
                                <div>
                                  <h3 className="text-sm font-medium text-gray-800">{item.name}</h3>
                                  <p className="text-xs text-gray-500">{item.type} • {item.size}</p>
                                </div>
                              </div>
                              <button
                                onClick={() => handleDownload(item)}
                                className="p-2 text-red-600 hover:text-red-700 transition-colors"
                                aria-label="Download"
                              >
                                <Download className="w-4 h-4" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))
                ))
              ))
            ))}
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
