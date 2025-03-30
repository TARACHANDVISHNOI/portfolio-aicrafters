
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { MessageSquare, Heart, Reply, ChevronDown, ChevronUp } from 'lucide-react';

interface Comment {
  id: string;
  content: string;
  date: string;
  username: string;
  avatar: string | null;
  likes: number;
  parent_id: string | null;
}

const commentSchema = z.object({
  content: z.string().min(1, 'Comment cannot be empty').max(1000, 'Comment is too long'),
});

type CommentFormValues = z.infer<typeof commentSchema>;

interface CommentSectionProps {
  postId: string;
}

const CommentSection: React.FC<CommentSectionProps> = ({ postId }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [parentComments, setParentComments] = useState<Comment[]>([]);
  const [childComments, setChildComments] = useState<Record<string, Comment[]>>({});
  const [replyTo, setReplyTo] = useState<string | null>(null);
  const [expandedComments, setExpandedComments] = useState<Record<string, boolean>>({});
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  const { user } = useAuth();

  const form = useForm<CommentFormValues>({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      content: '',
    },
  });

  useEffect(() => {
    const fetchComments = async () => {
      try {
        setIsLoading(true);
        const { data, error } = await supabase
          .from('comments')
          .select('*')
          .eq('post_id', postId)
          .order('date', { ascending: false });

        if (error) throw error;

        setComments(data || []);

        // Separate parent and child comments
        const parents: Comment[] = [];
        const children: Record<string, Comment[]> = {};

        data?.forEach((comment) => {
          if (!comment.parent_id) {
            parents.push(comment);
          } else {
            if (!children[comment.parent_id]) {
              children[comment.parent_id] = [];
            }
            children[comment.parent_id].push(comment);
          }
        });

        setParentComments(parents);
        setChildComments(children);
      } catch (error) {
        console.error('Error fetching comments:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchComments();
  }, [postId]);

  const onSubmit = async (values: CommentFormValues) => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please login to post a comment",
        variant: "destructive",
      });
      return;
    }

    try {
      const newComment = {
        content: values.content,
        post_id: postId,
        parent_id: replyTo,
        username: user.email || 'Anonymous',
        avatar: null,
      };

      const { data, error } = await supabase
        .from('comments')
        .insert(newComment)
        .select();

      if (error) throw error;

      toast({
        title: "Comment posted",
        description: "Your comment has been posted successfully",
      });

      form.reset();
      setReplyTo(null);

      // Refresh comments
      const { data: updatedComments, error: fetchError } = await supabase
        .from('comments')
        .select('*')
        .eq('post_id', postId)
        .order('date', { ascending: false });

      if (fetchError) throw fetchError;

      setComments(updatedComments || []);

      // Separate parent and child comments
      const parents: Comment[] = [];
      const children: Record<string, Comment[]> = {};

      updatedComments?.forEach((comment) => {
        if (!comment.parent_id) {
          parents.push(comment);
        } else {
          if (!children[comment.parent_id]) {
            children[comment.parent_id] = [];
          }
          children[comment.parent_id].push(comment);
        }
      });

      setParentComments(parents);
      setChildComments(children);

      // Update post comments count
      await supabase
        .from('posts')
        .update({ comments: (updatedComments?.length || 0) })
        .eq('id', postId);
    } catch (error) {
      console.error('Error posting comment:', error);
      toast({
        title: "Error",
        description: "Failed to post your comment. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleLike = async (commentId: string) => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please login to like a comment",
        variant: "destructive",
      });
      return;
    }

    try {
      const comment = comments.find(c => c.id === commentId);
      if (!comment) return;

      const { error } = await supabase
        .from('comments')
        .update({ likes: (comment.likes || 0) + 1 })
        .eq('id', commentId);

      if (error) throw error;

      // Update local state
      setComments(comments.map(c => 
        c.id === commentId ? { ...c, likes: (c.likes || 0) + 1 } : c
      ));

      // Update parent and child comments states
      setParentComments(parentComments.map(c => 
        c.id === commentId ? { ...c, likes: (c.likes || 0) + 1 } : c
      ));

      Object.keys(childComments).forEach(parentId => {
        childComments[parentId] = childComments[parentId].map(c => 
          c.id === commentId ? { ...c, likes: (c.likes || 0) + 1 } : c
        );
      });
      setChildComments({ ...childComments });
    } catch (error) {
      console.error('Error liking comment:', error);
      toast({
        title: "Error",
        description: "Failed to like the comment. Please try again.",
        variant: "destructive",
      });
    }
  };

  const toggleReplies = (commentId: string) => {
    setExpandedComments(prev => ({
      ...prev,
      [commentId]: !prev[commentId]
    }));
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div>
      <h3 className="text-2xl font-bold mb-6 text-white flex items-center">
        <MessageSquare className="mr-2 h-5 w-5" /> Comments ({comments.length})
      </h3>

      {user ? (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="mb-10">
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder={replyTo ? "Write your reply..." : "Share your thoughts..."}
                      className="resize-none bg-ai-dark/50 border-gray-700 text-white focus-visible:ring-ai-blue min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-between mt-4">
              {replyTo && (
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setReplyTo(null)}
                  className="border-gray-700 text-gray-400"
                >
                  Cancel Reply
                </Button>
              )}
              <Button type="submit" className="bg-ai-blue hover:bg-ai-blue/90 ml-auto">
                {replyTo ? "Post Reply" : "Post Comment"}
              </Button>
            </div>
          </form>
        </Form>
      ) : (
        <div className="bg-ai-dark/30 border border-gray-700 rounded-lg p-6 mb-10 text-center">
          <p className="text-gray-300 mb-4">Please login to join the conversation</p>
          <Button asChild className="bg-ai-blue hover:bg-ai-blue/90">
            <a href="/auth">Login to Comment</a>
          </Button>
        </div>
      )}

      {isLoading ? (
        <div className="space-y-6">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="animate-pulse">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-gray-700"></div>
                <div className="flex-1">
                  <div className="h-4 bg-gray-700 rounded w-1/4 mb-2"></div>
                  <div className="h-3 bg-gray-700 rounded w-1/5 mb-4"></div>
                  <div className="h-4 bg-gray-700 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-700 rounded w-5/6 mb-2"></div>
                  <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-8">
          {parentComments.length === 0 ? (
            <div className="text-center text-gray-400 py-8">
              <MessageSquare className="h-12 w-12 mx-auto mb-4 opacity-30" />
              <p>No comments yet. Be the first to share your thoughts!</p>
            </div>
          ) : (
            parentComments.map((comment) => (
              <div key={comment.id} className="border border-gray-700 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-ai-dark overflow-hidden flex-shrink-0">
                    {comment.avatar ? (
                      <img src={comment.avatar} alt={comment.username} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-ai-blue/20 flex items-center justify-center text-ai-blue">
                        {comment.username.charAt(0).toUpperCase()}
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-semibold text-white">{comment.username}</h4>
                      <span className="text-xs text-gray-400">{formatDate(comment.date)}</span>
                    </div>
                    <p className="text-gray-300 mb-4">{comment.content}</p>
                    <div className="flex gap-4">
                      <button 
                        onClick={() => handleLike(comment.id)}
                        className="text-xs text-gray-400 hover:text-ai-blue flex items-center"
                      >
                        <Heart className="h-3 w-3 mr-1" /> {comment.likes || 0} Likes
                      </button>
                      <button 
                        onClick={() => setReplyTo(comment.id)}
                        className="text-xs text-gray-400 hover:text-ai-blue flex items-center"
                      >
                        <Reply className="h-3 w-3 mr-1" /> Reply
                      </button>
                      {childComments[comment.id] && childComments[comment.id].length > 0 && (
                        <button 
                          onClick={() => toggleReplies(comment.id)}
                          className="text-xs text-gray-400 hover:text-ai-blue flex items-center"
                        >
                          {expandedComments[comment.id] ? (
                            <>
                              <ChevronUp className="h-3 w-3 mr-1" /> Hide Replies ({childComments[comment.id].length})
                            </>
                          ) : (
                            <>
                              <ChevronDown className="h-3 w-3 mr-1" /> Show Replies ({childComments[comment.id].length})
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {expandedComments[comment.id] && childComments[comment.id] && (
                  <div className="mt-6 ml-12 space-y-6">
                    {childComments[comment.id].map((reply) => (
                      <div key={reply.id} className="border-l-2 border-gray-700 pl-6">
                        <div className="flex items-start gap-4">
                          <div className="h-8 w-8 rounded-full bg-ai-dark overflow-hidden flex-shrink-0">
                            {reply.avatar ? (
                              <img src={reply.avatar} alt={reply.username} className="w-full h-full object-cover" />
                            ) : (
                              <div className="w-full h-full bg-ai-blue/20 flex items-center justify-center text-ai-blue">
                                {reply.username.charAt(0).toUpperCase()}
                              </div>
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-center mb-1">
                              <h4 className="font-semibold text-white">{reply.username}</h4>
                              <span className="text-xs text-gray-400">{formatDate(reply.date)}</span>
                            </div>
                            <p className="text-gray-300 mb-4">{reply.content}</p>
                            <button 
                              onClick={() => handleLike(reply.id)}
                              className="text-xs text-gray-400 hover:text-ai-blue flex items-center"
                            >
                              <Heart className="h-3 w-3 mr-1" /> {reply.likes || 0} Likes
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default CommentSection;
