
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: 'tech' | 'design' | 'business' | 'lifestyle';
  imageUrl: string;
  date: string;
  readTime: string;
}

interface BlogCardProps {
  post: BlogPost;
  variant?: 'default' | 'featured' | 'compact';
  className?: string;
}

const categoryLabels = {
  tech: 'Technology',
  design: 'Design',
  business: 'Business',
  lifestyle: 'Lifestyle'
};

const BlogCard: React.FC<BlogCardProps> = ({ 
  post, 
  variant = 'default',
  className
}) => {
  return (
    <Link
      to={`/blog/${post.id}`}
      className={cn(
        "group block overflow-hidden",
        variant === 'featured' ? 'md:grid md:grid-cols-2 gap-8 items-center' : '',
        variant === 'compact' ? 'flex gap-4 items-center' : '',
        className
      )}
    >
      <div 
        className={cn(
          "relative overflow-hidden rounded-xl",
          variant === 'default' ? 'aspect-[4/3]' : '',
          variant === 'featured' ? 'aspect-[16/9]' : '',
          variant === 'compact' ? 'w-24 h-24 shrink-0' : ''
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
        <img 
          src={post.imageUrl} 
          alt={post.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {variant !== 'compact' && (
          <div className={cn(
            "absolute bottom-4 left-4 z-20",
            variant === 'featured' ? 'bottom-6 left-6' : ''
          )}>
            <span className={cn(
              "category-pill",
              `category-pill-${post.category}`
            )}>
              {categoryLabels[post.category]}
            </span>
          </div>
        )}
      </div>
      
      <div className={cn(
        "mt-4",
        variant === 'featured' ? 'mt-0' : '',
        variant === 'compact' ? 'mt-0 flex-1 min-w-0' : ''
      )}>
        {variant === 'compact' && (
          <span className={cn(
            "category-pill mb-2",
            `category-pill-${post.category}`
          )}>
            {categoryLabels[post.category]}
          </span>
        )}
        
        <h3 className={cn(
          "font-bold transition-colors group-hover:text-vibrant-blue",
          variant === 'featured' ? 'text-2xl md:text-3xl' : '',
          variant === 'default' ? 'text-lg' : '',
          variant === 'compact' ? 'text-base truncate' : ''
        )}>
          {post.title}
        </h3>
        
        {variant !== 'compact' && (
          <p className={cn(
            "mt-2 text-muted-foreground line-clamp-2",
            variant === 'featured' ? 'mt-3 md:text-lg' : ''
          )}>
            {post.excerpt}
          </p>
        )}
        
        <div className={cn(
          "mt-3 flex items-center text-sm text-muted-foreground",
          variant === 'featured' ? 'mt-4' : '',
          variant === 'compact' ? 'mt-1' : ''
        )}>
          <time dateTime={post.date}>{post.date}</time>
          <span className="mx-2">•</span>
          <span>{post.readTime} read</span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
