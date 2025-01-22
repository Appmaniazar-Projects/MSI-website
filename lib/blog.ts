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
    slug: '2024-ai-education',
    frontmatter: {
      title: 'AI in Education',
      date: '2024-01-02',
      author: 'MSI Team',
      image: '/images/blog/A New Frontier in Learning.jpg',
      tags: ['AI', 'Education', 'Technology'],
      excerpt: 'How artificial intelligence is reshaping educational practices.'
    },
    content: `## Artificial Intelligence: A New Frontier in Learning

Artificial Intelligence is revolutionizing education in unprecedented ways.

### Transformative Applications
1. Personalized learning paths
2. Intelligent tutoring systems
3. Automated assessment

> "AI is not about replacing teachers, but empowering them with intelligent tools." - MSI Research Team`,
    readingTime: 4
  },
  {
    slug: '2024-empowering-youth-through-stem-education',
    frontmatter: {
        title: 'Empowering Youth Through STEM Education',
        date: '2024-01-09',
        author: 'MSI Team',
        image: '/images/blog/stem-education.jpg',
        tags: ['STEM', 'Education', 'Youth Empowerment'],
        excerpt: 'Exploring how innovative educational approaches can transform young minds.'
    },
    content: `## Our Vision for STEM Education

At MSI, we believe that education is the most powerful catalyst for social change. Our commitment to STEM education goes beyond traditional classroom learning, focusing on creating transformative experiences that inspire and empower young minds.

### Key Highlights
- Innovative curriculum design
- Hands-on learning experiences
- Mentorship and community engagement

Stay tuned for more insights into our educational journey!`,
    readingTime: 3
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
