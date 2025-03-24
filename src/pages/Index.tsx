
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import Hero3D from '@/components/Hero3D';
import BlogCard, { BlogPost } from '@/components/BlogCard';
import { cn } from '@/lib/utils';

// Mock data for blog posts
const MOCK_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Web Design: 3D Interactions and Beyond',
    excerpt: 'Exploring how three-dimensional elements and interactions are revolutionizing the way we design and experience websites.',
    category: 'design',
    imageUrl: 'https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    date: 'May 12, 2023',
    readTime: '5 min'
  },
  {
    id: '2',
    title: 'Building Performant Animations on the Web',
    excerpt: 'Learn how to create smooth, hardware-accelerated animations that don\'t compromise your site\'s performance.',
    category: 'tech',
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    date: 'Apr 28, 2023',
    readTime: '7 min'
  },
  {
    id: '3',
    title: 'Color Theory in UI: Creating Harmony and Contrast',
    excerpt: 'A deep dive into how color affects user experience and how to create balanced color palettes for different projects.',
    category: 'design',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    date: 'Apr 15, 2023',
    readTime: '6 min'
  },
  {
    id: '4',
    title: 'The State of Front-End Development in 2023',
    excerpt: 'Analyzing current trends, tools, and technologies that are shaping front-end development practices this year.',
    category: 'tech',
    imageUrl: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    date: 'Mar 23, 2023',
    readTime: '8 min'
  },
  {
    id: '5',
    title: 'How Minimalism Changed Product Design Forever',
    excerpt: 'The history and impact of minimalist design principles on modern product development and user experience.',
    category: 'design',
    imageUrl: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    date: 'Mar 10, 2023',
    readTime: '5 min'
  },
];

const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'tech', label: 'Technology' },
  { id: 'design', label: 'Design' },
  { id: 'business', label: 'Business' },
  { id: 'lifestyle', label: 'Lifestyle' },
];

const Index: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 pointer-events-none">
          <Hero3D />
        </div>
        <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Exploring Design <span className="bg-gradient-to-r from-vibrant-blue to-vibrant-purple bg-clip-text text-transparent">Through Dimension</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground text-balance animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Discover the intersection of art, technology, and creative thinking through our curated collection of articles and insights.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Link
                to="/blog"
                className="px-6 py-3 bg-black text-white hover:bg-black/90 rounded-full font-medium transition-colors shadow-soft"
              >
                Explore Articles
              </Link>
              <Link
                to="/about"
                className="px-6 py-3 bg-white border border-border hover:bg-gray-100 rounded-full font-medium transition-colors shadow-soft"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Post Section */}
      <section className="py-20 bg-gradient-radial from-white to-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="heading-lg text-center">Featured Post</h2>
          <div className="mt-12 max-w-5xl mx-auto glass-panel rounded-2xl overflow-hidden p-6 md:p-8">
            <BlogCard post={MOCK_POSTS[0]} variant="featured" />
          </div>
        </div>
      </section>
      
      {/* Recent Posts Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
            <h2 className="heading-lg">Recent Posts</h2>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((category) => (
                <Link
                  key={category.id}
                  to={category.id === 'all' ? '/blog' : `/blog?category=${category.id}`}
                  className={cn(
                    "category-pill",
                    category.id === 'all' 
                      ? 'bg-foreground/10 text-foreground hover:bg-foreground/20' 
                      : `category-pill-${category.id} hover:bg-opacity-20`
                  )}
                >
                  {category.label}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOCK_POSTS.slice(1, 4).map((post) => (
              <BlogCard key={post.id} post={post} className="glass-card rounded-xl p-4" />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link
              to="/blog"
              className="px-6 py-3 bg-white border border-border hover:bg-gray-100 rounded-full font-medium transition-colors shadow-soft"
            >
              View All Posts
            </Link>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg">Stay Updated</h2>
            <p className="mt-4 text-muted-foreground text-lg text-balance">
              Subscribe to our newsletter to receive the latest updates, articles, and insights directly in your inbox.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row max-w-md mx-auto gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 border border-border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-gray-300 w-full"
              />
              <button className="px-6 py-3 bg-black hover:bg-black/90 text-white rounded-md font-medium transition-colors shadow-soft whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
      
      {/* Quick Links Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card rounded-xl p-6 hover:translate-y-[-4px] transition-all">
              <h3 className="heading-sm">Trending Topics</h3>
              <p className="mt-2 text-muted-foreground">
                Discover the most discussed subjects in design and technology right now.
              </p>
              <Link 
                to="/blog"
                className="mt-4 inline-flex text-vibrant-blue hover:text-vibrant-blue/80 font-medium link-underline"
              >
                Explore Trends
              </Link>
            </div>
            
            <div className="glass-card rounded-xl p-6 hover:translate-y-[-4px] transition-all">
              <h3 className="heading-sm">About Our Team</h3>
              <p className="mt-2 text-muted-foreground">
                Meet the creative minds behind Vibrant 3D Blog and our mission.
              </p>
              <Link 
                to="/about"
                className="mt-4 inline-flex text-vibrant-purple hover:text-vibrant-purple/80 font-medium link-underline"
              >
                About Us
              </Link>
            </div>
            
            <div className="glass-card rounded-xl p-6 hover:translate-y-[-4px] transition-all">
              <h3 className="heading-sm">Get in Touch</h3>
              <p className="mt-2 text-muted-foreground">
                Have questions or feedback? We'd love to hear from you.
              </p>
              <Link 
                to="/contact"
                className="mt-4 inline-flex text-vibrant-green hover:text-vibrant-green/80 font-medium link-underline"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
