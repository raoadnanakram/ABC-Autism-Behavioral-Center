import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // MongoDB se blogs fetch karne ke liye
  useEffect(() => {
    fetch('http://localhost:5000/api/blogs')
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center py-20 text-xl font-bold text-white bg-gray-900 min-h-screen">Loading blogs...</div>;
  }

  return (
    <div className="w-full font-sans bg-gray-900 text-white min-h-screen py-16 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* PAGE TITLE */}
        <div className="text-center mb-14">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-wider uppercase mb-3">
            Our Blogs &amp; Articles
          </h1>
          <div className="w-20 h-1 bg-teal-500 mx-auto rounded-full"></div>
        </div>

        {blogs.length === 0 ? (
          <p className="text-center text-gray-400 py-10">No blogs available right now.</p>
        ) : (
          /* MAIN LAYOUT: BALANCED GRID (Horizontal Blog Cards left side, Recent News right side) */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* LEFT / MAIN: HORIZONTAL BLOG CARDS (Takes 2 Columns out of 3) */}
            <div className="lg:col-span-2 space-y-6">
              {blogs.map((blog) => (
                <div 
                  key={blog._id} 
                  className="bg-white text-gray-800 rounded-xl overflow-hidden shadow-xl flex flex-col sm:flex-row border border-gray-200 transition-transform duration-300 hover:scale-[1.01]"
                >
                  {/* Blog Image (Left side in horizontal layout) */}
                  {(blog.imagePath || blog.image) && (
                    <div className="sm:w-2/5 sm:flex-shrink-0">
                      <img 
                        src={blog.imagePath ? `http://localhost:5000/${blog.imagePath}` : blog.image} 
                        alt={blog.title} 
                        className="w-full h-48 sm:h-full object-cover"
                      />
                    </div>
                  )}

                  {/* Blog Content (Right side in horizontal layout) */}
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      {blog.category && (
                        <span className="text-xs font-bold text-teal-700 uppercase tracking-wider mb-1 block">
                          {blog.category}
                        </span>
                      )}

                      <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                        {blog.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                        {blog.description}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-[11px] text-gray-400">
                        {blog.date ? new Date(blog.date).toLocaleDateString() : (blog.createdAt ? new Date(blog.createdAt).toLocaleDateString() : '')}
                      </span>

                      {/* Read More Button */}
                      <Link 
                        to={`/blog/${blog._id}`} 
                        className="inline-block bg-[#38959c] hover:bg-[#2f7d83] text-white py-2 px-4 rounded text-xs font-bold uppercase tracking-wider transition shadow-sm"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT SIDEBAR: RECENT NEWS & ARTICLES (Takes 1 Column out of 3) */}
            <div className="lg:col-span-1">
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-md sticky top-6">
                <h3 className="text-lg font-bold uppercase tracking-wider mb-5 border-b border-gray-700 pb-3 text-teal-400">
                  Recent News &amp; Articles
                </h3>

                <div className="space-y-4">
                  {blogs.slice(-4).reverse().map((recent) => (
                    <div key={recent._id} className="flex items-center gap-3 group">
                      {(recent.imagePath || recent.image) && (
                        <img 
                          src={recent.imagePath ? `http://localhost:5000/${recent.imagePath}` : recent.image} 
                          alt="" 
                          className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                        />
                      )}
                      <div>
                        <Link 
                          to={`/blog/${recent._id}`} 
                          className="text-xs font-bold text-gray-200 group-hover:text-teal-300 transition line-clamp-2 leading-snug"
                        >
                          {recent.title}
                        </Link>
                        <span className="text-[10px] text-gray-400 mt-1 block">
                          {recent.date ? new Date(recent.date).toLocaleDateString() : (recent.createdAt ? new Date(recent.createdAt).toLocaleDateString() : '')}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default Blog;