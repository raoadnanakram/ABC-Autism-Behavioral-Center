import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const BlogDetails = () => {
  // URL se blog ki ID nikalne ke liye
  const { id } = useParams();
  
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Admin panel/backend API se specific blog data fetch karne ka function
    const fetchBlogDetails = async () => {
      try {
        setLoading(true);
        // Aapke local backend ka API endpoint
        const response = await axios.get(`http://localhost:5000/api/blogs/${id}`);
        
        const data = response.data;
        
        setBlog({
          title: data.title,
          date: data.date ? new Date(data.date).toLocaleDateString() : 'August 28, 2026',
          author: 'Admin Panel',
          category: data.category || 'General',
          content: data.description || data.content,
          imagePath: data.imagePath ? `http://localhost:5000/${data.imagePath}` : null,
        });
        setLoading(false);
      } catch (err) {
        setError('Blog data fetch karne mein masla aa raha hai ya yeh blog mojood nahi hai!');
        setLoading(false);
      }
    };

    fetchBlogDetails();
  }, [id]);

  if (loading) {
    return <div className="text-center py-20 text-gray-300 font-medium">Loading blog content from admin panel...</div>;
  }

  if (error) {
    return <div className="text-center py-20 text-red-400 font-semibold">{error}</div>;
  }

  if (!blog) {
    return <div className="text-center py-20 text-gray-300">Blog post nahi mili!</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 animate-fadeIn">
      {/* Back Button */}
      <Link
        to="/"
        className="inline-flex items-center text-teal-400 hover:text-teal-300 mb-6 font-medium transition-colors"
      >
        ← Back to Home
      </Link>

      {/* Blog Header */}
      <div className="mb-8 animate-slideDown">
        <span className="text-sm bg-teal-900/60 text-teal-300 px-3 py-1 rounded-full font-semibold border border-teal-700/50">
          {blog.category}
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mt-4 mb-3">
          {blog.title}
        </h1>
        <div className="flex items-center text-gray-400 text-sm space-x-4">
          <span>By {blog.author}</span>
          <span>•</span>
          <span>{blog.date}</span>
        </div>
      </div>

      {/* Featured Image */}
      {blog.imagePath ? (
        <div className="w-full h-72 sm:h-96 bg-gray-800 rounded-xl mb-8 overflow-hidden shadow-lg animate-fadeIn">
          <img src={blog.imagePath} alt={blog.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>
      ) : (
        <div className="w-full h-72 bg-gray-800 rounded-xl mb-8 flex items-center justify-center text-gray-500">
          Blog Featured Image
        </div>
      )}

      {/* Blog Content (Text White & Animated) */}
      <div className="prose max-w-none text-white leading-relaxed space-y-4 animate-fadeInUp">
        <p className="whitespace-pre-line text-white text-base sm:text-lg opacity-90">
          {blog.content}
        </p>
      </div>

      {/* Inline Animation Styles (Tailwind CSS custom extensions ke baghair kaam karne ke liye) */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-slideDown {
          animation: slideDown 0.6s ease-out forwards;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default BlogDetails;