'use client';

import { getBlogPostBySlug } from '@/lib/blog';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function BlogPostContent() {
  const searchParams = useSearchParams();
  const slug = searchParams.get('slug');
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPost() {
      if (!slug) {
        notFound();
        return;
      }
      
      try {
        const postData = await getBlogPostBySlug(slug);
        if (!postData) {
          notFound();
          return;
        }
        setPost(postData);
      } catch (error) {
        console.error('Error loading post:', error);
        notFound();
      } finally {
        setLoading(false);
      }
    }

    loadPost();
  }, [slug]);

  if (loading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  if (!post) {
    return notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <article className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-6">{post.frontmatter.title}</h1>
        <div className="flex items-center gap-4 text-gray-600 mb-8">
          <span>{post.frontmatter.date}</span>
          <span>•</span>
          <span>{post.frontmatter.author}</span>
          <span>•</span>
          <span>{post.readingTime} min read</span>
        </div>
        
        {post.frontmatter.image && (
          <div className="mb-8">
            <Image
              src={post.frontmatter.image}
              alt={post.frontmatter.title}
              width={800}
              height={400}
              className="rounded-lg"
            />
          </div>
        )}

        <div className="prose lg:prose-xl prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-red-600 prose-strong:text-gray-900">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  );
}

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
        <BlogPostContent />
      </Suspense>
      <Footer />
    </div>
  );
}
