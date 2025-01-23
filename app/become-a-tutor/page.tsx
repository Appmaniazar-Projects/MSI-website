'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import Modal from '@/components/Modal'
import { Construction } from 'lucide-react'

export default function BecomeATutor() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50) // Header becomes solid after 50px scroll
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-md">
        <Header />
      </div>
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            {/* Header Section */}
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Become a Tutor</h1>
            
            {/* Login Section */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Login to Manage Your Tutor Profile</h2>
              
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setShowModal(true); }}>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                    placeholder="Enter your password"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="remember"
                      className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                      Remember me
                    </label>
                  </div>

                  <a href="#" className="text-sm text-red-600 hover:text-red-700">
                    Forgot your password?
                  </a>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-red-600 text-white hover:bg-red-700"
                >
                  Sign In
                </Button>
              </form>
            </div>

            {/* Join Section */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Join Our Tutor Network</h2>
              <p className="text-gray-600 mb-6">
                Become a tutor and help students achieve their goals while earning an income. As a tutor, you'll gain access to:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Flexible schedules to fit your lifestyle</li>
                <li>Opportunities to work with motivated students</li>
                <li>Tools and resources to enhance your teaching</li>
                <li>Support from our dedicated tutor community</li>
              </ul>
              <Button
                variant="outline"
                className="w-full border-red-600 text-red-600 hover:bg-red-50"
                onClick={() => setShowModal(true)}
              >
                Apply Now
              </Button>
            </div>
          </motion.div>
        </div>
      </main>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <div className="text-center">
          <div className="text-4xl mb-4">
            <Construction className="w-16 h-16 mx-auto text-yellow-500" />
          </div>
          <h3 className="text-xl font-semibold mb-4">Feature Coming Soon!</h3>
          <p className="text-gray-600">
            We're currently working on integrating our payment system. 
            This feature will be available soon. Thank you for your patience!
          </p>
        </div>
      </Modal>

      <Footer />
    </div>
  )
}
