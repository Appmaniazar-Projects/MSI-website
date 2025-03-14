export interface JobListing {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  employmentType: string;
  responseTime?: string;
  description: string[];
  datePosted: string;
}

export const jobListings: JobListing[] = [
  {
    id: 1,
    title: 'Mathematics Tutor',
    company: 'Maths and Science Infinity',
    location: 'East London, Eastern Cape',
    salary: 'From R1 500 a month',
    employmentType: 'Part-time',
    responseTime: 'Typically responds within 2 days',
    description: [
      'Provide specialized mathematics tutoring to high school students.',
      'Develop customized study plans and materials.',
      'Track and report student progress.',
      'Minimum Level 5 (60%) in Grade 12 Mathematics required.'
    ],
    datePosted: '3 days ago'
  },
  {
    id: 2,
    title: 'Science Education Coordinator',
    company: 'Maths and Science Infinity',
    location: 'East London, Eastern Cape',
    salary: 'From R1 000 a month',
    employmentType: 'Full-time',
    responseTime: 'Typically responds within 1 day',
    description: [
      'Coordinate science education programs across partner schools.',
      'Develop curriculum and teaching materials for Physical Sciences.',
      'Train and support tutors in effective teaching methodologies.',
      "Bachelor's degree in Science or Education required."
    ],
    datePosted: '1 week ago'
  },
  {
    id: 3,
    title: 'STEM Workshop Facilitator',
    company: 'Maths and Science Infinity',
    location: 'Remote with occasional travel',
    salary: 'From R1 000 a month',
    employmentType: 'Contract',
    description: [
      'Design and facilitate engaging STEM workshops for high school students.',
      'Create innovative activities that make complex concepts accessible.',
      'Collaborate with schools to schedule and organize workshops.',
      'Experience in education and passion for STEM required.'
    ],
    datePosted: '2 days ago'
  }
]; 