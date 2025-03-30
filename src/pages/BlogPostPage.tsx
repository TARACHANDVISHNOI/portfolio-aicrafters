
import React from 'react';
import Layout from '@/components/Layout';
import BlogPost from '@/components/BlogPost';

const BlogPostPage: React.FC = () => {
  return (
    <Layout>
      <div className="pt-20">
        <BlogPost />
      </div>
    </Layout>
  );
};

export default BlogPostPage;
