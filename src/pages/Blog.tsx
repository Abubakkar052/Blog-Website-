
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import BlogCard, { BlogPost } from '@/components/BlogCard';
import { cn } from '@/lib/utils';

// Mock data for blog posts
const ALL_POSTS: BlogPost[] = [
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
  {
    id: '6',
    title: 'Sustainable Business Practices in the Digital Age',
    excerpt: 'How companies are integrating environmentally and socially responsible practices into their digital operations.',
    category: 'business',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    date: 'Feb 28, 2023',
    readTime: '6 min'
  },
  {
    id: '7',
    title: 'The Psychology of User Experience Design',
    excerpt: 'Understanding how cognitive principles influence user behavior and how to apply them in design.',
    category: 'design',
    imageUrl: 'https://images.unsplash.com/photo-1576153192396-180ecef2a715?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    date: 'Feb 15, 2023',
    readTime: '9 min'
  },
  {
    id: '8',
    title: 'Finding Work-Life Balance in a Remote World',
    excerpt: 'Strategies for maintaining boundaries and wellbeing when your home is also your office.',
    category: 'lifestyle',
    imageUrl: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    date: 'Feb 02, 2023',
    readTime: '5 min'
  },
  {
    id: '9',
    title: 'The Rise of AI in Content Creation',
    excerpt: 'Examining how artificial intelligence is transforming how we produce and consume content online.',
    category: 'tech',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad09f?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    date: 'Jan 20, 2023',
    readTime: '7 min'
  },
  {
    id: '10',
    title: 'Digital Marketing Strategies for 2023',
    excerpt: 'The most effective approaches to reach and engage audiences in an increasingly competitive digital landscape.',
    category: 'business',
    imageUrl: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    date: 'Jan 08, 2023',
    readTime: '8 min'
  },
  {
    id: '11',
    title: 'Mindfulness Practices for Creative Professionals',
    excerpt: 'How incorporating mindfulness techniques can boost creativity and reduce burnout in design and development.',
    category: 'lifestyle',
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    date: 'Dec 22, 2022',
    readTime: '6 min'
  },
  {
    id: '12',
    title: 'Responsive Design Beyond Breakpoints',
    excerpt: 'Advanced techniques for creating truly adaptive interfaces that respond to more than just screen size.',
    category: 'design',
    imageUrl: 'https://images.unsplash.com/photo-1616048056617-93b94a339009?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    date: 'Dec 10, 2022',
    readTime: '8 min'
  },
];

const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'tech', label: 'Technology' },
  { id: 'design', label: 'Design' },
  { id: 'business', label: 'Business' },
  { id: 'lifestyle', label: 'Lifestyle' },
];

const Blog: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(ALL_POSTS);
  
  // Parse query params on mount and when location changes
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get('category');
    const searchParam = params.get('search');
    
    if (categoryParam) {
      setActiveCategory(categoryParam);
    } else {
      setActiveCategory('all');
    }
    
    if (searchParam) {
      setSearchTerm(searchParam);
    } else {
      setSearchTerm('');
    }
  }, [location]);
  
  // Filter posts based on category and search term
  useEffect(() => {
    let filtered = [...ALL_POSTS];
    
    if (activeCategory !== 'all') {
      filtered = filtered.filter(post => post.category === activeCategory);
    }
    
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(term) || 
        post.excerpt.toLowerCase().includes(term)
      );
    }
    
    setFilteredPosts(filtered);
  }, [activeCategory, searchTerm]);
  
  // Handle category selection
  const handleCategoryChange = (categoryId: string) => {
    const params = new URLSearchParams(location.search);
    
    if (categoryId === 'all') {
      params.delete('category');
    } else {
      params.set('category', categoryId);
    }
    
    navigate({ search: params.toString() });
  };
  
  // Handle search submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    const params = new URLSearchParams(location.search);
    
    if (searchTerm) {
      params.set('search', searchTerm);
    } else {
      params.delete('search');
    }
    
    navigate({ search: params.toString() });
  };
  
  return (
    <Layout>
      <section className="pt-32 pb-16 bg-gradient-radial from-white to-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-lg animate-fade-in">Blog</h1>
            <p className="mt-4 text-lg text-muted-foreground text-balance animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Explore our collection of articles on design, technology, business, and lifestyle.
            </p>
          </div>
          
          <div className="mt-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 border border-border rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-vibrant-blue/20"
              />
              <button
                type="submit"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                aria-label="Search"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
          </div>
          
          <div className="mt-10 flex justify-center flex-wrap gap-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={cn(
                  "category-pill transition-all rounded-full px-4 py-1.5",
                  category.id === activeCategory
                    ? category.id === 'all'
                      ? 'bg-black text-white' // Changed to black background with white text
                      : `bg-black text-white` // All active categories now use black bg with white text
                    : category.id === 'all'
                      ? 'bg-foreground/10 text-foreground hover:bg-foreground/20'
                      : `category-pill-${category.id} hover:bg-opacity-20`
                )}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogCard 
                  key={post.id} 
                  post={post} 
                  className="glass-card rounded-xl p-4 animate-scale-in"
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="heading-md">No posts found</h3>
              <p className="mt-2 text-muted-foreground">
                Try changing your search criteria or explore a different category.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
