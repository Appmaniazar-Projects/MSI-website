'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from "@/components/ui/button"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const services = [
  {
    title: "Student Support",
    description: "Providing support to students, especially those struggling with mathematics and science, through customized learning programs and student development initiatives.",
    highlightTerms: ["student development"],
    features: [
      "Tailored support for struggling students",
      "Curriculum-aligned resources",
      "Focus on building confidence and understanding"
    ],
    image: "/images/msi-classroom-learners.jpg",
    //category: "Student Support"
  },
  {
    title: "Tutor Development",
    description: "Enhancing the skills and effectiveness of maths and science tutors through professional development and training programs.",
    features: [
      "Training in advanced teaching techniques",
      "Focused workshops for science and mathematics",
      "Ongoing mentorship and evaluation"
    ],
    image: "/images/msi-talks.jpg",
    //category: "Professional Development"
  },
  {
    title: "Teacher Development",
    description: "Supporting teachers in their professional growth, ensuring they have the necessary skills and resources to teach maths and science effectively.",
    features: [
      "Access to innovative teaching resources",
      "Workshops on effective classroom strategies",
      "Regular assessment and feedback"
    ],
    image: "/images/msi-tutor workshop.png",
    //category: "Professional Development"
  },
  {
    title: "Career Guidance & Role Modelling",
    description: "Offering guidance and role models in the fields of maths and science to inspire and inform students about potential career paths.",
    features: [
      "Career counseling sessions",
      "Exposure to STEM role models",
      "Workshops on future career opportunities"
    ],
    image: "/images/msi-councelling.jpg",
    //category: "Student Support"
  },
  {
    title: "Mobile Laboratories",
    description: "Bringing science education to underserved areas through mobile labs that provide hands-on learning experiences.",
    features: [
      "Fully equipped mobile labs",
      "Practical experiments for students",
      "Community outreach programs"
    ],
    image: "/images/msi-mobile-laboratories.jpg",
    //category: "Science Outreach"
  },
  {
    title: "Online Tutorial Sessions",
    description: "Providing flexible, structured online tutorials to support students in their studies.",
    features: [
      "Structured lesson plans",
      "Real-time virtual support",
      "Progress tracking and feedback"
    ],
    image: "/images/msi-tutor.jpg",
    //category: "Digital Learning"
  }
]

const categories = [
  {
    name: "Student Support",
    icon: <Image src="/images/icons/msi_students_service_page_icon.svg" alt="Student Support" width={100} height={100} />, 
    description: "Tailored programs to help students excel in mathematics and science."
  },
  {
    name: "Professional Development",
    icon: <Image src="/images/icons/msi_profess_ser_page_icon.svg" alt="Professional Development" width={100} height={100} />, 
    description: "Empowering tutors and teachers to achieve excellence in STEM education."
  },
  {
    name: "Science Outreach",
    icon: <Image src="/images/icons/msi_lab_icon.svg" alt="Science Outreach" width={100} height={100} />, 
    description: "Bringing hands-on science education to underserved areas."
  },
  {
    name: "Digital Learning",
    icon: <Image src="/images/icons/msi_digital_icon.svg" alt="Digital Learning" width={100} height={100} />, 
    description: "Flexible, online learning solutions to support education anywhere."
  }
]

const highlightText = (text: string, terms: string[] = []) => {
  if (!terms || terms.length === 0) return text;
  
  let result = text;
  terms.forEach(term => {
    const regex = new RegExp(`(${term})`, 'gi');
    result = result.replace(regex, '<strong>$1</strong>');
  });
  return <span dangerouslySetInnerHTML={{ __html: result }} />;
};

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20  text-navy-blue overflow-hidden">
        <div className="absolute inset-0 "></div>
        <div className="container relative mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Our Services
            </motion.h1>
            <motion.p 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl opacity-90"
            >
              Empowering students with tailored STEM education solutions to meet their unique needs.
            </motion.p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50"></div>
      </section>

      {/* Categories Overview */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600">
            Innovative educational services designed to inspire future leaders and help students excel.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{category.name}</h3>
                <p className="text-gray-600">{category.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-4xl font-bold text-center mb-16 text-gray-900"
          >
            Detailed Services
          </motion.h2>

          <div className="space-y-24 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-12 items-center`}
              >
                <div className="lg:w-1/2">
                  <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <h3 className="text-3xl font-bold mt-2 mb-6 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-xl text-gray-600 mb-8">
                    {highlightText(service.description, service.highlightTerms)}
                  </p>
                  <ul className="space-y-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-gray-700">
                        <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
