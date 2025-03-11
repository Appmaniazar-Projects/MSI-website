'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import Modal from '@/components/Modal'
import { Construction, Upload, Users, GraduationCap, Handshake, CheckCircle } from 'lucide-react'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

type ApplicationType = 'tutor' | 'volunteer' | 'student' | 'sponsor';

interface FormData {
  name: string;
  email: string;
  phone: string;
  // Tutor specific fields
  mathGrade?: string;
  scienceGrade?: string;
  tertiaryQualification?: string;
  teachingQualification?: string;
  // Volunteer specific fields
  availability?: string;
  interests?: string;
  // Student specific fields
  grade?: string;
  subjects?: string;
  // Sponsor specific fields
  organization?: string;
  sponsorshipType?: string;
  message?: string;
}

export default function GetInvolved() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [applicationType, setApplicationType] = useState<ApplicationType>('tutor')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    // Initialize all optional fields to prevent uncontrolled/controlled warning
    mathGrade: '',
    scienceGrade: '',
    tertiaryQualification: '',
    teachingQualification: '',
    availability: '',
    interests: '',
    grade: '',
    subjects: '',
    organization: '',
    sponsorshipType: '',
    message: '',
  })
  const [files, setFiles] = useState<{ [key: string]: File | null }>({
    cv: null,
    id: null,
    workPermit: null,
    matric: null,
    transcript: null,
    sace: null,
  })
  const [fileErrors, setFileErrors] = useState<{ [key: string]: string | null }>({
    cv: null,
    id: null,
    workPermit: null,
    matric: null,
    transcript: null,
    sace: null,
  })
  const [qualificationError, setQualificationError] = useState<string | null>(null)
  const [submissionSuccess, setSubmissionSuccess] = useState(false)
  const [submissionError, setSubmissionError] = useState<string | null>(null)

  const validatePdfFile = (file: File | null): boolean => {
    if (!file) return true; // No file is valid (for optional fields)
    
    // Check if file extension is .pdf
    const fileExtension = file.name.split('.').pop()?.toLowerCase();
    const isPdf = fileExtension === 'pdf' || file.type === 'application/pdf';
    
    return isPdf;
  }

  const handleFileChange = (fieldName: string, file: File | null) => {
    if (file && !validatePdfFile(file)) {
      setFileErrors(prev => ({ ...prev, [fieldName]: 'Only PDF files are accepted' }));
      return;
    }
    
    setFiles(prev => ({ ...prev, [fieldName]: file }));
    setFileErrors(prev => ({ ...prev, [fieldName]: null }));
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const checkTutorQualifications = () => {
    const mathGrade = parseInt(formData.mathGrade || '0')
    const scienceGrade = parseInt(formData.scienceGrade || '0')
    
    if (applicationType === 'tutor') {
      if (mathGrade < 50 || scienceGrade < 50) {
        setQualificationError('You must have at least Level 4 (50%) in Grade 12 Mathematics and Physical Sciences.')
        return false
      }
      if (!formData.tertiaryQualification) {
        setQualificationError('You must have completed Mathematics 1 & 2 or Physics/Chemistry 1 & 2 at a tertiary institution.')
        return false
      }
    }
    setQualificationError(null)
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (applicationType === 'tutor' && !checkTutorQualifications()) {
      return
    }
    
    // Check for any file errors before submission
    const hasFileErrors = Object.values(fileErrors).some(error => error !== null);
    if (hasFileErrors) {
      setSubmissionError('Please fix the file errors before submitting.');
      return;
    }

    setIsSubmitting(true)
    setSubmissionError(null)
    
    try {
      // Prepare form data for submission
      const dataToSubmit = {
        ...formData,
        to: 'appmaniazar@gmail.co.za',
        applicationType
      }
      
      // Send data to API endpoint
      const response = await fetch('/api/applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSubmit),
      })
      
      if (!response.ok) {
        throw new Error('Failed to submit application')
      }
      
      setSubmissionSuccess(true)
      setShowModal(true)
    } catch (error) {
      console.error('Error submitting application:', error)
      setSubmissionError('There was a problem submitting your application. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-md">
        <Header />
      </div>
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-4xl mx-auto"
          >
            {/* Header Section */}
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Get Involved</h1>
            
            {/* Application Type Selector */}
            <div className="flex gap-4 justify-center mb-8">
              <Button
                variant={applicationType === 'tutor' ? 'default' : 'outline'}
                onClick={() => setApplicationType('tutor')}
                size="lg"
              >
                <GraduationCap className="w-5 h-5 mr-2" /> Tutor Application
              </Button>
              <Button
                variant={applicationType === 'volunteer' ? 'default' : 'outline'}
                onClick={() => setApplicationType('volunteer')}
                size="lg"
              >
                <Users className="w-5 h-5 mr-2" /> Volunteer Application
              </Button>
              <Button
                variant={applicationType === 'student' ? 'default' : 'outline'}
                onClick={() => setApplicationType('student')}
                size="lg"
              >
                <GraduationCap className="w-5 h-5 mr-2" /> Student Application
              </Button>
              <Button
                variant={applicationType === 'sponsor' ? 'default' : 'outline'}
                onClick={() => setApplicationType('sponsor')}
                size="lg"
              >
                <Handshake className="w-5 h-5 mr-2" /> Sponsorship Inquiry
              </Button>
            </div>

            {/* Application Forms */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Common Fields */}
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Tutor-specific Fields */}
                {applicationType === 'tutor' && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="mathGrade">Grade 12 Mathematics Level (%)</Label>
                      <Input
                        id="mathGrade"
                        type="number"
                        min="0"
                        max="100"
                        value={formData.mathGrade}
                        onChange={(e) => handleInputChange('mathGrade', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="scienceGrade">Grade 12 Physical Sciences Level (%)</Label>
                      <Input
                        id="scienceGrade"
                        type="number"
                        min="0"
                        max="100"
                        value={formData.scienceGrade}
                        onChange={(e) => handleInputChange('scienceGrade', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="tertiaryQualification">Tertiary Qualification</Label>
                      <Input
                        id="tertiaryQualification"
                        value={formData.tertiaryQualification}
                        onChange={(e) => handleInputChange('tertiaryQualification', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="teachingQualification">Teaching Qualification (if applicable)</Label>
                      <Input
                        id="teachingQualification"
                        value={formData.teachingQualification}
                        onChange={(e) => handleInputChange('teachingQualification', e.target.value)}
                      />
                    </div>
                    
                    {/* Document Upload Section */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold mb-4">Required Documents <span className="text-sm font-normal text-red-600">(PDF files only)</span></h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="cv">CV/Resume</Label>
                          <Input
                            id="cv"
                            type="file"
                            accept=".pdf,application/pdf"
                            onChange={(e) => handleFileChange('cv', e.target.files?.[0] || null)}
                            required
                          />
                          {fileErrors.cv && (
                            <p className="text-red-600 text-sm mt-1">{fileErrors.cv}</p>
                          )}
                        </div>
                        <div>
                          <Label htmlFor="id">ID Copy/Passport</Label>
                          <Input
                            id="id"
                            type="file"
                            accept=".pdf,application/pdf"
                            onChange={(e) => handleFileChange('id', e.target.files?.[0] || null)}
                            required
                          />
                          {fileErrors.id && (
                            <p className="text-red-600 text-sm mt-1">{fileErrors.id}</p>
                          )}
                        </div>
                        <div>
                          <Label htmlFor="workPermit">Work Permit (if applicable)</Label>
                          <Input
                            id="workPermit"
                            type="file"
                            accept=".pdf,application/pdf"
                            onChange={(e) => handleFileChange('workPermit', e.target.files?.[0] || null)}
                          />
                          {fileErrors.workPermit && (
                            <p className="text-red-600 text-sm mt-1">{fileErrors.workPermit}</p>
                          )}
                        </div>
                        <div>
                          <Label htmlFor="matric">Matric Certificate</Label>
                          <Input
                            id="matric"
                            type="file"
                            accept=".pdf,application/pdf"
                            onChange={(e) => handleFileChange('matric', e.target.files?.[0] || null)}
                            required
                          />
                          {fileErrors.matric && (
                            <p className="text-red-600 text-sm mt-1">{fileErrors.matric}</p>
                          )}
                        </div>
                        <div>
                          <Label htmlFor="transcript">Academic Transcript</Label>
                          <Input
                            id="transcript"
                            type="file"
                            accept=".pdf,application/pdf"
                            onChange={(e) => handleFileChange('transcript', e.target.files?.[0] || null)}
                            required
                          />
                          {fileErrors.transcript && (
                            <p className="text-red-600 text-sm mt-1">{fileErrors.transcript}</p>
                          )}
                        </div>
                        <div>
                          <Label htmlFor="sace">SACE Certificate (if applicable)</Label>
                          <Input
                            id="sace"
                            type="file"
                            accept=".pdf,application/pdf"
                            onChange={(e) => handleFileChange('sace', e.target.files?.[0] || null)}
                          />
                          {fileErrors.sace && (
                            <p className="text-red-600 text-sm mt-1">{fileErrors.sace}</p>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    {qualificationError && (
                      <p className="text-red-600 text-sm">{qualificationError}</p>
                    )}
                  </div>
                )}

                {/* Volunteer-specific Fields */}
                {applicationType === 'volunteer' && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="availability">Availability</Label>
                      <Input
                        id="availability"
                        value={formData.availability}
                        onChange={(e) => handleInputChange('availability', e.target.value)}
                        required
                        placeholder="e.g., Weekdays afternoons, Weekends"
                      />
                    </div>
                    <div>
                      <Label htmlFor="interests">Areas of Interest</Label>
                      <Textarea
                        id="interests"
                        value={formData.interests}
                        onChange={(e) => handleInputChange('interests', e.target.value)}
                        required
                        placeholder="What areas would you like to contribute to?"
                      />
                    </div>
                  </div>
                )}

                {/* Student-specific Fields */}
                {applicationType === 'student' && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="grade">Current Grade/Level</Label>
                      <Input
                        id="grade"
                        value={formData.grade}
                        onChange={(e) => handleInputChange('grade', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="subjects">Subjects Needing Assistance</Label>
                      <Textarea
                        id="subjects"
                        value={formData.subjects}
                        onChange={(e) => handleInputChange('subjects', e.target.value)}
                        required
                        placeholder="List the subjects you need help with"
                      />
                    </div>
                  </div>
                )}

                {/* Sponsor-specific Fields */}
                {applicationType === 'sponsor' && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="organization">Organization Name</Label>
                      <Input
                        id="organization"
                        value={formData.organization}
                        onChange={(e) => handleInputChange('organization', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="sponsorshipType">Sponsorship Type</Label>
                      <Input
                        id="sponsorshipType"
                        value={formData.sponsorshipType}
                        onChange={(e) => handleInputChange('sponsorshipType', e.target.value)}
                        required
                        placeholder="e.g., Monetary, Resources, Other"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Message/Inquiry</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        required
                        placeholder="Please provide details about your sponsorship inquiry"
                      />
                    </div>
                  </div>
                )}

                {/* Error message display */}
                {submissionError && (
                  <div className="p-4 bg-red-50 text-red-600 rounded-md">
                    {submissionError}
                  </div>
                )}

                <div className="space-y-4">
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </Button>
                  
                  <div className="text-sm text-gray-600">
                    <p>For inquiries, please contact:</p>
                    <p>073 230 5457 / 073 174 5664</p>
                    <p>Applications will be sent to: support@appmaniazar.co.za</p>
                    {applicationType === 'tutor' && (
                      <p className="mt-2">Note: Shortlisted tutor applicants will be invited for an induction and content workshop.</p>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </main>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <div className="text-center">
          <div className="text-4xl mb-4">
            {submissionSuccess ? (
              <CheckCircle className="w-16 h-16 mx-auto text-green-500" />
            ) : (
              <Construction className="w-16 h-16 mx-auto text-yellow-500" />
            )}
          </div>
          <h3 className="text-xl font-semibold mb-4">Application Submitted!</h3>
          <p className="text-gray-600">
            Thank you for your interest. We will review your application and contact you soon.
          </p>
        </div>
      </Modal>

      <Footer />
    </div>
  )
}
