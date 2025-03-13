'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { fadeInUp, fadeInDown } from '@/utils/animations'
import { cn } from '@/lib/utils'
import Modal from '@/components/Modal'
import { 
  BookOpen, 
  Laptop, 
  Shirt, 
  Trophy, 
  Palette, 
  Apple, 
  Mail, 
  Phone, 
  MessageCircle,
  Coins,
  Gift,
  GraduationCap,
  Boxes,
  Sparkles,
  Construction
} from 'lucide-react'

export default function DonatePage() {
  const [amount, setAmount] = useState('')
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedAmount, setSelectedAmount] = useState<string | null>(null)
  const [donationType, setDonationType] = useState<'money' | 'other'>('money')
  const [showFrequencyModal, setShowFrequencyModal] = useState(false)
  const [donationFrequency, setDonationFrequency] = useState<'monthly' | 'once-off' | null>(null)
  const [showFeatureModal, setShowFeatureModal] = useState(false)

  const donationTypes = [
    { icon: <BookOpen className="w-8 h-8" />, title: 'Educational Materials', description: 'Books, stationery, and learning resources' },
    { icon: <Laptop className="w-8 h-8" />, title: 'Technology', description: 'Computers, tablets, and educational software' },
    { icon: <Shirt className="w-8 h-8" />, title: 'School Uniforms', description: 'New or gently used uniforms' },
    { icon: <Trophy className="w-8 h-8" />, title: 'Sports Equipment', description: 'Sports gear and equipment' },
    { icon: <Palette className="w-8 h-8" />, title: 'Art Supplies', description: 'Art materials and creative resources' },
    { icon: <Apple className="w-8 h-8" />, title: 'Food & Nutrition', description: 'Non-perishable food items' }
  ]


  const handleCustomAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
  
    // Allow only numbers and prevent negative values
    if (/^\d*\.?\d*$/.test(value)) {
      if (value === '' || parseFloat(value) > 0) {
        setAmount(value);
        setErrorMessage('');
        setSelectedAmount(null);
      } else {
        setAmount(''); // Set to empty string instead of undefined
        setErrorMessage('Amount must be greater than 0');
      }
    } else {
      // Don't change the amount value for invalid input
      setErrorMessage('Only numbers are allowed');
    }
  };

  const handlePaymentClick = () => {
    setShowFrequencyModal(true)
  }

  const handleFrequencySelect = (frequency: 'monthly' | 'once-off') => {
    setDonationFrequency(frequency)
    setShowFrequencyModal(false)
    setShowFeatureModal(true)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-red-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container relative mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Support Our Mission
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl opacity-90"
            >
              Your contribution helps us empower the next generation through STEM education.
              Every donation makes a difference in a student's life.
            </motion.p>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        {/* Donation Type Selector */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex gap-4 justify-center mb-8">
            <Button
              variant={donationType === 'money' ? 'default' : 'outline'}
              onClick={() => setDonationType('money')}
              size="lg"
            >
              <Coins className="w-5 h-5 mr-2" /> Monetary Donation
            </Button>
            <Button
              variant={donationType === 'other' ? 'default' : 'outline'}
              onClick={() => setDonationType('other')}
              size="lg"
            >
              <Gift className="w-5 h-5 mr-2" /> Other Donations
            </Button>
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="space-y-8"
          >
            {donationType === 'money' ? (
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Make a Monetary Donation
                </h2>
                <div className="space-y-6">
                <div>
                <Label htmlFor="custom-amount" className="text-lg mb-2 block">
                  Custom Amount (R)
                </Label>
                <Input
                  id="custom-amount"
                  type="text" // Use type="text" to handle validation in JavaScript
                  placeholder="Enter custom amount"
                  value={amount}
                  onChange={handleCustomAmount}
                  className="text-lg h-12"
                />
                {errorMessage && (
                  <p className="text-red-600 text-sm mt-2">{errorMessage}</p>
                )}
              </div>
              <Button
                className="w-full h-14 text-lg"
                disabled={!amount || parseFloat(amount) <= 0}
                onClick={handlePaymentClick}
              >
                Continue to Payment
              </Button>
                  {/* Frequency Modal */}
                  <Modal isOpen={showFrequencyModal} onClose={() => setShowFrequencyModal(false)}>
                    <div className="text-center">
                      <h3 className="text-xl font-semibold mb-4">Choose Donation Frequency</h3>
                      <div className="flex gap-4 justify-center">
                        <Button onClick={() => handleFrequencySelect('monthly')} variant="default">
                          Monthly
                        </Button>
                        <Button onClick={() => handleFrequencySelect('once-off')} variant="default">
                          Once-Off
                        </Button>
                      </div>
                    </div>
                  </Modal>
                  {/* Feature Modal */}
                  <Modal isOpen={showFeatureModal} onClose={() => setShowFeatureModal(false)}>
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
                </div>
              </Card>
            ) : (
              <Card className="p-8">
                {/* Non-Monetary Donation Code*/}
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Make a Non-Monetary Donation
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {donationTypes.map((type) => (
                    <div 
                      key={type.title}
                      className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                    >
                      <div className="text-4xl mb-3">{type.icon}</div>
                      <h3 className="font-semibold text-lg mb-2">{type.title}</h3>
                      <p className="text-gray-600 text-sm">{type.description}</p>
                    </div>
                  ))}
                </div>
                <div className="text-center space-y-4">
                  <h3 className="text-xl font-semibold">How to Donate Items</h3>
                  <p className="text-gray-600">
                    To arrange a non-monetary donation, please contact us through any of these channels:
                  </p>
                  <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                    <Button variant="outline" size="lg" asChild>
                      <a href="mailto:info@mathsandscienceinfinity.org.za">
                        <Mail className="w-5 h-5 mr-2" /> Email Us
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <a href="tel:+27437262171">
                        <Phone className="w-5 h-5 mr-2" /> Call Us
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <a href="https://wa.me/27437262171">
                        <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp
                      </a>
                    </Button>
                  </div>
                  <p className="text-sm text-gray-500 mt-4">
                    Our team will assist you with the donation process and arrange collection or delivery.
                  </p>
                </div>
              </Card>
            )}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
