'use client';

import { getBlogPosts, type BlogPost } from '@/lib/blog';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await getBlogPosts();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-red-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container relative mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Our Blog
            </motion.h1>
            <motion.p 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl opacity-90"
            >
              Inspiring stories of innovation, growth, and success in STEM education.
            </motion.p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50"></div>
      </section>
      
      {/* Blog Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold text-center text-gray-800">
              MSI Blog: Insights & Stories
            </h1>

            {isLoading ? (
              <div className="text-center text-gray-600 py-12">
                Loading blog posts...
              </div>
            ) : posts.length === 0 ? (
              <div className="text-center text-gray-600 py-12">
                No blog posts available yet.
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post, index) => (
                  <div
                    key={post.slug}
                    className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2 duration-300"
                  >
                    <Link href={`/blog/${post.slug}`}>
                      <div>
                        {post.frontmatter.image && (
                          <Image
                            src={post.frontmatter.image}
                            alt={post.frontmatter.title}
                            width={400}
                            height={200}
                            className="w-full h-48 object-cover"
                          />
                        )}
                        <div className="p-6">
                          <h2 className="text-xl font-semibold text-gray-800 mb-2">
                            {post.frontmatter.title}
                          </h2>
                          <p className="text-gray-600 mb-4">
                            {post.frontmatter.excerpt}
                          </p>
                          <div className="flex justify-between items-center text-sm text-gray-500">
                            <span>{post.frontmatter.author}</span>
                            <span>{post.frontmatter.date}</span>
                            <span>{post.readingTime} min read</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
