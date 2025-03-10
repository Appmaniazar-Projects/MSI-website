import { 
  BookOpen, 
  Laptop, 
  Shirt, 
  Trophy, 
  Palette, 
  Apple 
} from 'lucide-react'

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  title: string;
  description: string;
}

export const categories = [
  { id: 'all', name: 'All' },
  { id: 'events', name: 'Events' },
  { id: 'classes', name: 'Classes' },
  { id: 'workshops', name: 'Workshops' },
  { id: 'achievements', name: 'Achievements' },
]

export const galleryImages: GalleryImage[] = [
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