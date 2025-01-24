import { cache } from 'react';

export interface BlogPost {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    author: string;
    image?: string;
    tags: string[];
    excerpt: string;
  };
  content: string;
  readingTime: number;
}

// Hardcoded blog posts for development
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: '2024-stem-education-revolution',
    frontmatter: {
      title: 'The STEM Education Revolution',
      date: '2024-01-01',
      author: 'MSI Team',
      image: '/images/blog/The STEM Education Revolution.jpg',
      tags: ['STEM', 'Education', 'Innovation'],
      excerpt: 'Exploring how STEM education is transforming the future of learning.'
    },
    content: `## The Future of STEM Education

STEM education is undergoing a remarkable transformation. In this article, we explore how innovative approaches are reshaping learning.

### Key Highlights
- Interdisciplinary learning
- Technology integration
- Real-world problem solving

**Our mission** is to empower the next generation of innovators and critical thinkers.`,
    readingTime: 5
  },
  {
    "slug": "2022-transforming-education-holistic-student-development",
    "frontmatter": {
        "title": "Transforming Education for Holistic Student Development",
        "date": "2022-11-22",
        "author": "Maths and Science Infinity",
        "image": "/images/blog/msi-holistic-student-development-blog-2022.png",
        "tags": ["Holistic Education", "Student Development", "Emotional Learning"],
        "excerpt": "How holistic education supports the overall development of students, focusing on social, emotional, academic, and physical growth."
    },
    "content": `## Redefining Education for Holistic Growth

Transforming education for holistic student development means integrating academic, emotional, social, and physical growth. This shift goes beyond traditional schooling and aims to prepare students for all aspects of life.

## Acknowledging Individuality

Holistic education first and foremost acknowledges that each student is a person with a variety of interests, skills, and learning styles. It promotes individualized learning experiences that are tailored to each student’s unique requirements, enabling them to explore their passions and gain a better understanding of who they are.

## Social and Emotional Learning (SEL)

Social and emotional learning (SEL) is highly valued in holistic education. Under this approach, students actively participate in activities that foster emotional control, interpersonal skills development, and self-awareness. By including SEL into the curriculum, educators may help kids become more resilient, empathetic, and skilled communicators—all of which will help them deal with the challenges of the real world.

## Physical Well-Being

A vital element of holistic education is physical well-being. Schools are urged to encourage students to lead healthy lifestyles through physical education, sports, and wellness programs because it has been shown that physical health and academic success are related.

## Redefining Curriculum and Teaching Methods

Redefining the curriculum is just one aspect of changing education for holistic student development; another is a change in teaching approaches. Beyond rote memory, educators are urged to use interactive and immersive learning strategies. This change includes real-world application of information, cooperative learning, and project-based learning as essential elements.

## The Role of Technology

Technology is a major factor in the way that education is changing. By incorporating educational technology into the curriculum, kids can work with classmates worldwide, access a multitude of material, and acquire digital literacy skills. It is imperative to strike a balance between technology and human interaction to guarantee that pupils acquire robust social skills and a positive association with the digital realm.

## Creating a Supportive Environment

Holistic education goes beyond the classroom and entails creating a welcoming and inclusive school environment. Students’ general well-being is enhanced when a polite, welcoming environment is established where diversity is valued and individual variations are accepted.

## Parent Involvement

Involving parents is yet another essential component of holistic education. Parents are encouraged to participate actively in their children’s education since they are viewed as partners in the process. A collaborative approach to student development is fostered by regular communication between educators and parents.

## Evaluation Beyond Grades

In comprehensive education, evaluation and assessment go beyond tests and grades. In addition to recognizing academic accomplishments, the assessment encompasses a thorough analysis of the personal and social growth of the student. Presentations, portfolios, and reflective assessments all serve as useful instruments for documenting each student’s overall development.

**In Conclusion**  
Holistic education is about more than just academic performance. It's about embracing the individuality of every student, promoting emotional and social learning, and preparing them for life. By adopting this all-encompassing strategy, we can ensure that students are ready for both academic success and a fulfilling, balanced life.`,
    "readingTime": 6
},

  {
    "slug": "2022-how-to-turn-education-into-success",
    "frontmatter": {
        "title": "How to Turn Education into Success",
        "date": "2022-11-22",
        "author": "Maths and Science Infinity",
        "image": "/images/blog/msi-education-success-blog-2022.jpg",
        "tags": ["Education", "Success", "Growth Mindset"],
        "excerpt": "A guide to using education as a tool for personal and professional success, focusing on key skills, mindset, and goal setting."
    },
    "content": `## Establish Your Goals and Vision

A clear grasp of your goals and vision is the first step toward success. Think carefully about what success means to you on a personal and professional level. Establish both your short- and long-term goals, as well as your future vision. This clarity directs your decisions and behaviors, serving as a road map for your academic career and beyond.

## Adopt a Growth Mindset

This is the idea that intelligence and skills can be improved with commitment and effort. Adopting this mindset is essential for success because it promotes resiliency, persistence, and a readiness to grow from setbacks. Recognize that obstacles are chances for development and see learning as an ongoing process of advancement.

## Build Critical Thinking and Problem-Solving Skills

The capacity to think critically and resolve complicated issues is frequently the difference between success and failure. Beyond rote memory, education should promote the growth of analytical and problem-solving abilities. Take an active interest in your schoolwork, contribute to class debates, and look for chances to put your theoretical knowledge to use in practical settings.

## Develop Effective Communication Skills

The ability to communicate effectively is essential for success in a variety of spheres of life. In the business, in the classroom, or in interpersonal interactions, good communication is essential. Develop your ability to communicate both orally and in writing, engage in active listening, and discover effective ways to present ideas.

## Follow Your Passion and Purpose

While achieving academic success is important, your path will have more depth if your education is in line with your passions and purpose. Choose courses or fields of study that you are truly interested in and motivated by. Learning is more fun when it is driven by enthusiasm, and the drive to succeed comes easily as a result.

## Seek Diverse Learning Opportunities

A wide variety of experiences is frequently the foundation of success. Look for research opportunities, internships, extracurricular activities, and community involvement outside of the typical classroom. These experiences help you develop a well-rounded skill set, expose you to various viewpoints, and allow you to put your knowledge into practice.

## Create a Robust Network

One of the most effective tools for success is networking. Develop connections with colleagues, instructors, mentors, and experts in your area of interest. Join professional associations, go to networking events, and use internet resources to make connections with people who can provide opportunities, advice, and support.

## Always Improve Your Skills

Being able to adapt and pick up new abilities is often necessary for success in the quickly changing world of today. Make a commitment to lifelong learning by keeping abreast of developments in your profession, upcoming technology, and industry trends.

## Promote Emotional Intelligence

Emotional intelligence is an important factor that determines success in addition to technical proficiency. Gain empathy, self-awareness, and social skills. Develop the skills to successfully comprehend and regulate your emotions as well as the capacity to negotiate social dynamics.

## Establish and Track Your Progress Toward Milestones

A journey’s milestones are frequently what define success. Establish SMART goals—specific, measurable, achievable, relevant, and time-bound. Divide more ambitious objectives into more doable, smaller ones, and keep a close eye on your development.

## Adopt a Well-Being Work-Life Balance

Achieving a good work-life balance is just as important to success as achieving success in the workplace. Make self-care a priority, establish boundaries, and schedule time for relationships and hobbies.

## Be Flexible and Hardy

Unexpected obstacles will always arise, and a successful career is rarely a straight route. Develop resilience and adaptability to deal with adversity and uncertainty. Remain adaptable, see obstacles as chances for improvement, and learn from your mistakes.

**In Conclusion**  
Transforming education into success is a complex process that extends beyond marks on a test. It entails establishing specific objectives, adopting a growth mindset, acquiring necessary skills, pursuing a sense of purpose and passion, and actively participating in a variety of educational opportunities. Success is a journey of self-improvement, self-discovery, and service to the world rather than a destination.`,
    "readingTime": 7
}


];

export const getBlogPosts = cache(async () => {
  return BLOG_POSTS.sort((a, b) => 
    new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
  );
});

export const getBlogPostBySlug = cache(async (slug: string) => {
  return BLOG_POSTS.find(post => post.slug === slug) || null;
});
