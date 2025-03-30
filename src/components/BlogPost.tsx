
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Calendar, Tag, User, Eye, MessageSquare, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import CommentSection from './CommentSection';

interface Post {
  id: string;
  title: string;
  content: string;
  slug: string;
  date: string;
  author: string;
  author_image: string;
  category: string;
  cover_image: string;
  views: number;
  comments: number;
  tags: string[];
}

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setIsLoading(true);
        
        // Fetch the post by slug
        const { data, error } = await supabase
          .from('posts')
          .select('*')
          .eq('slug', slug)
          .single();

        if (error) throw error;
        
        if (data) {
          setPost(data);
          
          // Increment view count
          const { error: updateError } = await supabase
            .from('posts')
            .update({ views: (data.views || 0) + 1 })
            .eq('id', data.id);
            
          if (updateError) console.error('Error updating view count:', updateError);
        }
      } catch (error) {
        console.error('Error fetching post:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="h-8 bg-gray-700 rounded w-1/4 mb-6 animate-pulse"></div>
          <div className="h-12 bg-gray-700 rounded w-3/4 mb-6 animate-pulse"></div>
          <div className="h-64 bg-gray-700 rounded mb-6 animate-pulse"></div>
          <div className="space-y-4">
            <div className="h-4 bg-gray-700 rounded w-full animate-pulse"></div>
            <div className="h-4 bg-gray-700 rounded w-full animate-pulse"></div>
            <div className="h-4 bg-gray-700 rounded w-3/4 animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Post Not Found</h2>
          <p className="text-gray-400 mb-6">The post you're looking for does not exist or has been removed.</p>
          <Button asChild>
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Link to="/blog" className="inline-flex items-center text-ai-blue hover:text-ai-blue/80 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Articles
        </Link>
        
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">{post.title}</h1>
        
        <div className="flex flex-wrap gap-4 mb-8">
          <span className="bg-ai-blue/20 text-ai-blue px-3 py-1 rounded-full text-sm flex items-center">
            <Tag className="h-3 w-3 mr-1" /> {post.category}
          </span>
          <span className="text-gray-400 text-sm flex items-center">
            <Calendar className="h-3 w-3 mr-1" /> {formatDate(post.date)}
          </span>
          <span className="text-gray-400 text-sm flex items-center">
            <User className="h-3 w-3 mr-1" /> {post.author}
          </span>
          <span className="text-gray-400 text-sm flex items-center">
            <Eye className="h-3 w-3 mr-1" /> {(post.views || 0) + 1} views
          </span>
          <span className="text-gray-400 text-sm flex items-center">
            <MessageSquare className="h-3 w-3 mr-1" /> {post.comments || 0} comments
          </span>
        </div>
        
        <div className="mb-10 rounded-lg overflow-hidden">
          <img
            src={post.cover_image || '/placeholder.svg'}
            alt={post.title}
            className="w-full h-auto"
          />
        </div>
        
        <div 
          className="prose prose-lg max-w-none text-gray-300 prose-headings:text-white prose-a:text-ai-blue mb-12"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-10">
            {post.tags.map((tag) => (
              <span key={tag} className="bg-ai-dark border border-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                #{tag}
              </span>
            ))}
          </div>
        )}
        
        <div className="border-t border-gray-700 pt-10">
          <CommentSection postId={post.id} />
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
