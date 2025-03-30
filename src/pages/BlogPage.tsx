
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import BlogList from '@/components/BlogList';

const BlogPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Blog - Tarachand';
  }, []);

  return (
    <Layout>
      <div className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Blog</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Insights, tutorials, and thoughts on AI, automation, and technology.
          </p>
        </div>
        <BlogList />
      </div>
    </Layout>
  );
};

export default BlogPage;
