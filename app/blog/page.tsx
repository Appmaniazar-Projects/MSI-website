import { getBlogPosts } from '@/lib/blog';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <>
    <div className="container mx-auto px-4 py-8">
      
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        MSI Blog: Insights & Stories
      </h1>

      {posts.length === 0 ? (
        <div className="text-center text-gray-500">
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
    </>
  );
}
