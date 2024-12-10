import { Phone, Mail } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { getBlogPosts } from '@/lib/blog'

export default function Home() {
  // Get the latest 3 blog posts
  const latestPosts = getBlogPosts().slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="bg-red-900 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href="mailto:info@mathsandscienceinfinity.org.za" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              info@mathsandscienceinfinity.org.za
            </a>
            <a href="tel:+27437262171" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              +27 43 726 2171
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span>Follow Us:</span>
            <div className="flex gap-2">
              <Link href="#" className="hover:opacity-80">Login</Link>
              <span>/</span>
              <Link href="#" className="hover:opacity-80">Register</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-b py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <Image 
            src="/placeholder.svg" 
            alt="MSI Logo" 
            width={100} 
            height={50}
            className="h-12 w-auto"
          />
          <div className="flex gap-6">
            <Link href="/" className="font-medium text-red-900">HOME</Link>
            <Link href="/about" className="hover:text-red-900">ABOUT US</Link>
            <Link href="/services" className="hover:text-red-900">SERVICES</Link>
            <Link href="/gallery" className="hover:text-red-900">GALLERY</Link>
            <Link href="/blog" className="hover:text-red-900">BLOG</Link>
            <Link href="/contact" className="hover:text-red-900">CONTACT</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex-1 bg-slate-500 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-8">
              Black Founded & Youth Managed
              <br />
              Non Profit Organization
            </h1>
            <p className="text-xl mb-8">
              In the classroom to real life outside of the
              <br />
              classroom by application of Maths & Science.
              <br />
              To your day to day life.
            </p>
            <div className="flex gap-4">
              <button className="bg-red-900 text-white px-8 py-2 rounded hover:bg-red-800">
                Maths
              </button>
              <button className="bg-white text-red-900 px-8 py-2 rounded hover:bg-gray-100">
                Science
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Latest Blog Posts
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore insights, stories, and educational perspectives from MSI
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <div 
                key={post.slug} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {post.frontmatter.image && (
                  <Image 
                    src={post.frontmatter.image} 
                    alt={post.frontmatter.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {post.frontmatter.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {post.frontmatter.excerpt}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      {post.frontmatter.date}
                    </span>
                    <Link 
                      href={`/blog/${post.slug}`} 
                      className="text-red-600 hover:text-red-800 font-medium"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link 
              href="/blog" 
              className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
            >
              View All Blog Posts
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-6xl font-bold text-gray-700 mb-4">0</div>
            <p className="text-gray-600">
              The number of students impacted by the MSI in the Eastern Cape.
            </p>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <div className="fixed bottom-6 left-6">
        <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600">
          Contact Us For Enquiry
        </button>
      </div>
    </div>
  )
}
