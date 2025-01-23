import { getBlogPosts, getBlogPostBySlug } from '@/lib/blog';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type PageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({
  params,
}: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <article className="animate-fade-in bg-white p-8 rounded-lg shadow-md">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            {post.frontmatter.title}
          </h1>
          <div className="flex justify-center items-center space-x-4 text-gray-600 mb-6">
            <span>{post.frontmatter.author}</span>
            <span>•</span>
            <time>{post.frontmatter.date}</time>
            <span>•</span>
            <span>{post.readingTime} min read</span>
          </div>
        </header>

        {post.frontmatter.image && (
          <div className="mb-12 overflow-hidden rounded-lg shadow-lg">
            <Image
              src={post.frontmatter.image}
              alt={post.frontmatter.title}
              width={1200}
              height={600}
              className="w-full h-96 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        )}

        <div className="prose lg:prose-xl prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-red-600 prose-strong:text-gray-900 space-y-6">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h2: ({ node, ...props }) => (
                <h2
                  className="text-3xl font-bold mt-12 mb-6 text-gray-900 border-b pb-3"
                  {...props}
                />
              ),
              h3: ({ node, ...props }) => (
                <h3
                  className="text-2xl font-semibold mt-8 mb-4 text-gray-800"
                  {...props}
                />
              ),
              p: ({ node, ...props }) => (
                <p className="mb-6 leading-relaxed" {...props} />
              ),
              ul: ({ node, ...props }) => (
                <ul className="list-disc list-inside mb-6 space-y-2" {...props} />
              ),
              ol: ({ node, ...props }) => (
                <ol
                  className="list-decimal list-inside mb-6 space-y-2"
                  {...props}
                />
              ),
              blockquote: ({ node, ...props }) => (
                <blockquote
                  className="border-l-4 border-red-600 pl-4 italic text-gray-600 my-6"
                  {...props}
                />
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  );
}
