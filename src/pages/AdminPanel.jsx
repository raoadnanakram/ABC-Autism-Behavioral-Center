import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const API_BASE = 'https://mvm8qwe9os.c37.airoapp.ai/?preview=1';

const AdminPanel = () => {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
  const [careers, setCareers] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [mediaList, setMediaList] = useState([]);
  const [eventsList, setEventsList] = useState([]);
  const [testimonialsList, setTestimonialsList] = useState([]);
  const [activeTab, setActiveTab] = useState('contacts');

  // Blog Form States
  const [blogData, setBlogData] = useState({ title: '', description: '', category: '' });
  const [blogImage, setBlogImage] = useState(null);
  const [loadingBlog, setLoadingBlog] = useState(false);

  // Media Form States
  const [mediaTitle, setMediaTitle] = useState('');
  const [mediaDate, setMediaDate] = useState('');
  const [mediaThumbnail, setMediaThumbnail] = useState(null);
  const [mediaPdf, setMediaPdf] = useState(null);
  const [loadingMedia, setLoadingMedia] = useState(false);

  // Event Form States
  const [eventTitle, setEventTitle] = useState('');
  const [eventCategory, setEventCategory] = useState('upcoming');
  const [eventDesc, setEventDesc] = useState('');
  const [eventImage, setEventImage] = useState(null);
  const [loadingEvent, setLoadingEvent] = useState(false);

  // Testimonial Form States
  const [tParentName, setTParentName] = useState('');
  const [tType, setTType] = useState('video');
  const [tYoutubeUrl, setTYoutubeUrl] = useState('');
  const [tMessage, setTMessage] = useState('');
  const [loadingT, setLoadingT] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('adminLoggedIn');
    const expiryTime = localStorage.getItem('adminExpiry');
    const currentTime = new Date().getTime();

    if (!isLoggedIn || !expiryTime || currentTime > expiryTime) {
      localStorage.removeItem('adminLoggedIn');
      localStorage.removeItem('adminExpiry');
      navigate('/admin-login');
      return;
    }

    axios.get(`${API_BASE}/api/admin/contacts`).then(res => setContacts(res.data)).catch(err => console.error(err));
    axios.get(`${API_BASE}/api/admin/careers`).then(res => setCareers(res.data)).catch(err => console.error(err));
    axios.get(`${API_BASE}/api/blogs`).then(res => setBlogs(res.data)).catch(err => console.error(err));
    axios.get(`${API_BASE}/api/media`).then(res => setMediaList(res.data)).catch(err => console.error(err));
    axios.get(`${API_BASE}/api/events`).then(res => setEventsList(res.data)).catch(err => console.error(err));
    axios.get(`${API_BASE}/api/testimonials`).then(res => setTestimonialsList(res.data)).catch(err => console.error(err));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    localStorage.removeItem('adminExpiry');
    navigate('/admin-login');
  };

  const handleBlogSubmit = async (e) => {
    e.preventDefault();
    setLoadingBlog(true);
    const data = new FormData();
    data.append('title', blogData.title);
    data.append('description', blogData.description);
    data.append('category', blogData.category);
    if (blogImage) data.append('image', blogImage);

    try {
      const res = await axios.post(`${API_BASE}/api/blogs`, data);
      if (res.data.success) {
        toast.success('🚀 Blog published successfully!');
        window.location.reload();
      }
    } catch (err) {
      toast.error('❌ Failed to publish blog.');
    } finally {
      setLoadingBlog(false);
    }
  };

  const handleDeleteBlog = async (id) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      try {
        await axios.delete(`${API_BASE}/api/blogs/${id}`);
        toast.info('🗑️ Blog deleted.');
        setBlogs(blogs.filter(b => b._id !== id));
      } catch (err) { toast.error('Error deleting blog.'); }
    }
  };

  const handleMediaSubmit = async (e) => {
    e.preventDefault();
    setLoadingMedia(true);
    const formData = new FormData();
    formData.append('title', mediaTitle);
    formData.append('date', mediaDate);
    if (mediaThumbnail) formData.append('thumbnail', mediaThumbnail);
    if (mediaPdf) formData.append('pdf', mediaPdf);

    try {
      const res = await axios.post(`${API_BASE}/api/media`, formData);
      if (res.data.success) {
        toast.success('✨ Media uploaded successfully!');
        window.location.reload();
      }
    } catch (err) {
      toast.error('❌ Failed to upload media.');
    } finally {
      setLoadingMedia(false);
    }
  };

  const handleDeleteMedia = async (id) => {
    if (window.confirm('Are you sure you want to delete this?')) {
      try {
        await axios.delete(`${API_BASE}/api/media/${id}`);
        toast.info('🗑️ Media deleted.');
        setMediaList(mediaList.filter(m => m._id !== id));
      } catch (err) { toast.error('Error deleting media.'); }
    }
  };

  const handleEventSubmit = async (e) => {
    e.preventDefault();
    setLoadingEvent(true);
    const formData = new FormData();
    formData.append('title', eventTitle);
    formData.append('category', eventCategory);
    formData.append('description', eventDesc);
    if (eventImage) formData.append('image', eventImage);

    try {
      const res = await axios.post(`${API_BASE}/api/events`, formData);
      if (res.data.success) {
        toast.success('🎉 Event uploaded successfully!');
        window.location.reload();
      }
    } catch (err) {
      toast.error('❌ Failed to upload event.');
    } finally {
      setLoadingEvent(false);
    }
  };

  const handleDeleteEvent = async (id) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      try {
        await axios.delete(`${API_BASE}/api/events/${id}`);
        toast.info('🗑️ Event deleted.');
        setEventsList(eventsList.filter(ev => ev._id !== id));
      } catch (err) { toast.error('Error deleting event.'); }
    }
  };

  const handleTestimonialSubmit = async (e) => {
    e.preventDefault();
    setLoadingT(true);
    try {
      const res = await axios.post(`${API_BASE}/api/testimonials`, {
        parentName: tParentName,
        type: tType,
        youtubeUrl: tYoutubeUrl,
        message: tMessage
      });
      if (res.data.success) {
        toast.success('✅ Testimonial added successfully!');
        window.location.reload();
      }
    } catch (err) {
      toast.error('❌ Failed to add testimonial.');
    } finally {
      setLoadingT(false);
    }
  };

  const handleDeleteTestimonial = async (id) => {
    if (window.confirm('Are you sure you want to delete this testimonial?')) {
      try {
        await axios.delete(`${API_BASE}/api/testimonials/${id}`);
        toast.info('🗑️ Testimonial deleted.');
        setTestimonialsList(testimonialsList.filter(t => t._id !== id));
      } catch (err) { toast.error('Error deleting testimonial.'); }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans flex flex-col md:flex-row">
      
      {/* SIDEBAR NAVIGATION */}
      <aside className="w-full md:w-64 bg-[#122329] text-white flex flex-col justify-between p-6 shadow-xl">
        <div>
          <div className="mb-8">
            <h2 className="text-xl font-bold tracking-wider text-teal-300 uppercase">Admin Panel</h2>
            <p className="text-xs text-gray-400 mt-1">Management Portal</p>
          </div>

          <nav className="space-y-2">
            <button 
              onClick={() => setActiveTab('contacts')}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold transition flex justify-between items-center ${activeTab === 'contacts' ? 'bg-[#2d545e] text-white shadow' : 'text-gray-300 hover:bg-[#1a333d]'}`}
            >
              <span>Enquiries</span>
              <span className="bg-black/30 px-2 py-0.5 rounded text-xs">{contacts.length}</span>
            </button>
            <button 
              onClick={() => setActiveTab('careers')}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold transition flex justify-between items-center ${activeTab === 'careers' ? 'bg-[#2d545e] text-white shadow' : 'text-gray-300 hover:bg-[#1a333d]'}`}
            >
              <span>Career Apps</span>
              <span className="bg-black/30 px-2 py-0.5 rounded text-xs">{careers.length}</span>
            </button>
            <button 
              onClick={() => setActiveTab('blogs')}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold transition flex justify-between items-center ${activeTab === 'blogs' ? 'bg-[#2d545e] text-white shadow' : 'text-gray-300 hover:bg-[#1a333d]'}`}
            >
              <span>Manage Blogs</span>
              <span className="bg-black/30 px-2 py-0.5 rounded text-xs">{blogs.length}</span>
            </button>
            <button 
              onClick={() => setActiveTab('media')}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold transition flex justify-between items-center ${activeTab === 'media' ? 'bg-[#2d545e] text-white shadow' : 'text-gray-300 hover:bg-[#1a333d]'}`}
            >
              <span>Manage Media</span>
              <span className="bg-black/30 px-2 py-0.5 rounded text-xs">{mediaList.length}</span>
            </button>
            <button 
              onClick={() => setActiveTab('events')}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold transition flex justify-between items-center ${activeTab === 'events' ? 'bg-[#2d545e] text-white shadow' : 'text-gray-300 hover:bg-[#1a333d]'}`}
            >
              <span>Manage Events</span>
              <span className="bg-black/30 px-2 py-0.5 rounded text-xs">{eventsList.length}</span>
            </button>
            <button 
              onClick={() => setActiveTab('testimonials')}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold transition flex justify-between items-center ${activeTab === 'testimonials' ? 'bg-[#2d545e] text-white shadow' : 'text-gray-300 hover:bg-[#1a333d]'}`}
            >
              <span>Testimonials</span>
              <span className="bg-black/30 px-2 py-0.5 rounded text-xs">{testimonialsList.length}</span>
            </button>
          </nav>
        </div>

        <div className="pt-6 border-t border-[#2d545e] space-y-3">
          <Link to="/" className="block text-center w-full py-2.5 bg-gray-200 hover:bg-white text-gray-800 rounded-lg text-xs font-bold transition">
            Back to Website
          </Link>
          <button onClick={handleLogout} className="w-full py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-bold transition shadow">
            Logout
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        
        {/* Top Header */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-200 mb-6 sm:mb-8">
          <div className="w-full sm:w-auto">
            <h1 className="text-lg sm:text-xl md:text-2xl font-extrabold uppercase tracking-wide text-[#2d545e]">
              {activeTab === 'contacts' && 'Parent Enquiries'}
              {activeTab === 'careers' && 'Job Applications'}
              {activeTab === 'blogs' && 'Manage Blogs'}
              {activeTab === 'media' && 'Manage Media'}
              {activeTab === 'events' && 'Manage Events'}
              {activeTab === 'testimonials' && 'Manage Testimonials'}
            </h1>
            <p className="text-xs text-gray-500 mt-0.5">Welcome back, Admin</p>
          </div>
          <div className="flex gap-4">
            <div className="text-right hidden sm:block">
              <span className="block text-xs text-gray-400 font-semibold uppercase">Total Records</span>
              <span className="text-lg font-bold text-gray-800">
                {activeTab === 'contacts' && contacts.length}
                {activeTab === 'careers' && careers.length}
                {activeTab === 'blogs' && blogs.length}
                {activeTab === 'media' && mediaList.length}
                {activeTab === 'events' && eventsList.length}
                {activeTab === 'testimonials' && testimonialsList.length}
              </span>
            </div>
          </div>
        </header>

        {/* TAB 1: CONTACTS */}
        {activeTab === 'contacts' && (
          <div className="bg-white shadow-sm rounded-xl overflow-hidden border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-50 text-gray-700 border-b border-gray-200 text-xs uppercase tracking-wider">
                    <th className="p-4 font-bold">Parent Name</th>
                    <th className="p-4 font-bold">Child Age</th>
                    <th className="p-4 font-bold">Contact</th>
                    <th className="p-4 font-bold">Email</th>
                    <th className="p-4 font-bold">Service</th>
                    <th className="p-4 font-bold">Branch</th>
                    <th className="p-4 font-bold">Message</th>
                    <th className="p-4 font-bold">Attachment</th>
                    <th className="p-4 font-bold">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-600">
                  {contacts.length === 0 ? (
                    <tr><td colSpan="9" className="p-8 text-center text-gray-400 font-medium">No parent enquiries found.</td></tr>
                  ) : (
                    contacts.map((item) => (
                      <tr key={item._id} className="hover:bg-gray-50/80 transition">
                        <td className="p-4 font-bold text-gray-900">{item.parentName}</td>
                        <td className="p-4">{item.childAge}</td>
                        <td className="p-4 font-medium">{item.contactNumber}</td>
                        <td className="p-4">{item.email}</td>
                        <td className="p-4"><span className="px-2.5 py-1 bg-teal-50 text-teal-700 rounded-full font-semibold text-xs">{item.serviceType}</span></td>
                        <td className="p-4 font-medium">{item.branch}</td>
                        <td className="p-4 max-w-xs truncate">{item.message || 'N/A'}</td>
                        <td className="p-4">
                          {item.attachment ? (
                            <a href={`${API_BASE}/${item.attachment}`} target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline font-bold">View File</a>
                          ) : 'None'}
                        </td>
                        <td className="p-4 text-xs text-gray-400">{new Date(item.date).toLocaleDateString()}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 2: CAREERS */}
        {activeTab === 'careers' && (
          <div className="bg-white shadow-sm rounded-xl overflow-hidden border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-50 text-gray-700 border-b border-gray-200 text-xs uppercase tracking-wider">
                    <th className="p-4 font-bold">Name</th>
                    <th className="p-4 font-bold">Gender</th>
                    <th className="p-4 font-bold">Age</th>
                    <th className="p-4 font-bold">Contact</th>
                    <th className="p-4 font-bold">Email</th>
                    <th className="p-4 font-bold">Qualification</th>
                    <th className="p-4 font-bold">Position</th>
                    <th className="p-4 font-bold">Branch</th>
                    <th className="p-4 font-bold">CV / Resume</th>
                    <th className="p-4 font-bold">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-600">
                  {careers.length === 0 ? (
                    <tr><td colSpan="10" className="p-8 text-center text-gray-400 font-medium">No career applications found.</td></tr>
                  ) : (
                    careers.map((item) => (
                      <tr key={item._id} className="hover:bg-gray-50/80 transition">
                        <td className="p-4 font-bold text-gray-900">{item.name}</td>
                        <td className="p-4">{item.gender}</td>
                        <td className="p-4">{item.age}</td>
                        <td className="p-4 font-medium">{item.contactNumber}</td>
                        <td className="p-4">{item.email}</td>
                        <td className="p-4">{item.academyQualification}</td>
                        <td className="p-4"><span className="px-2.5 py-1 bg-sky-50 text-sky-700 rounded-full font-semibold text-xs">{item.position}</span></td>
                        <td className="p-4 font-medium">{item.branch}</td>
                        <td className="p-4">
                          {item.cvPath ? (
                            <a href={`${API_BASE}/${item.cvPath}`} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline font-bold">View CV</a>
                          ) : 'No CV'}
                        </td>
                        <td className="p-4 text-xs text-gray-400">{new Date(item.date).toLocaleDateString()}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: BLOGS */}
        {activeTab === 'blogs' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-sm rounded-xl p-6 border border-gray-200 h-fit">
              <h2 className="text-base font-bold mb-4 border-b pb-3 uppercase tracking-wider text-[#2d545e]">
                Publish New Blog
              </h2>
              <form onSubmit={handleBlogSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1">Blog Title</label>
                  <input 
                    type="text" 
                    placeholder="Enter blog title" 
                    required
                    value={blogData.title}
                    onChange={(e) => setBlogData({...blogData, title: e.target.value})}
                    className="w-full border border-gray-300 p-3 rounded-lg text-sm focus:outline-teal-600 font-medium bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1">Category</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Autism Tips" 
                    required
                    value={blogData.category}
                    onChange={(e) => setBlogData({...blogData, category: e.target.value})}
                    className="w-full border border-gray-300 p-3 rounded-lg text-sm focus:outline-teal-600 font-medium bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1">Description / Content</label>
                  <textarea 
                    rows="4" 
                    placeholder="Write content..." 
                    required
                    value={blogData.description}
                    onChange={(e) => setBlogData({...blogData, description: e.target.value})}
                    className="w-full border border-gray-300 p-3 rounded-lg text-sm focus:outline-teal-600 resize-none font-medium bg-gray-50"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1">Feature Image</label>
                  <input 
                    type="file" 
                    onChange={(e) => setBlogImage(e.target.files[0])}
                    className="w-full border border-gray-300 p-2 rounded-lg text-xs bg-white file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-xs file:font-semibold file:bg-[#2d545e] file:text-white cursor-pointer"
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={loadingBlog}
                  className="w-full bg-[#2d545e] hover:bg-[#23424a] text-white font-bold py-3 rounded-lg text-xs uppercase tracking-widest transition shadow"
                >
                  {loadingBlog ? 'PUBLISHING...' : 'PUBLISH BLOG'}
                </button>
              </form>
            </div>

            <div className="lg:col-span-2 bg-white shadow-sm rounded-xl p-6 border border-gray-200">
              <h2 className="text-base font-bold mb-4 border-b pb-3 uppercase tracking-wider text-[#2d545e]">
                All Published Blogs ({blogs.length})
              </h2>
              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                {blogs.length === 0 ? (
                  <p className="text-gray-400 text-sm py-8 text-center font-medium">No blogs posted yet.</p>
                ) : (
                  blogs.map(blog => (
                    <div key={blog._id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center border border-gray-100 p-4 rounded-xl hover:bg-gray-50 transition gap-4">
                      <div className="flex items-center gap-4">
                        {blog.imagePath && (
                          <img src={`${API_BASE}/${blog.imagePath}`} alt="" className="w-16 h-16 object-cover rounded-lg border border-gray-200 shrink-0" />
                        )}
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full">{blog.category}</span>
                          <h3 className="font-bold text-gray-900 mt-1">{blog.title}</h3>
                          <p className="text-xs text-gray-400 mt-0.5">Date: {new Date(blog.date).toLocaleDateString()}</p>
                        </div>
                      </div>
                      <button 
                        onClick={() => handleDeleteBlog(blog._id)}
                        className="bg-red-50 hover:bg-red-600 text-red-600 hover:text-white border border-red-200 px-4 py-2 rounded-lg text-xs font-bold transition self-end sm:self-center"
                      >
                        Delete
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: MEDIA MANAGEMENT */}
        {activeTab === 'media' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-sm rounded-xl p-6 border border-gray-200 h-fit">
              <h2 className="text-base font-bold mb-4 border-b pb-3 uppercase tracking-wider text-[#2d545e]">
                Upload Media / Certificate
              </h2>
              <form onSubmit={handleMediaSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1">Title</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Golden Bull Award 2026" 
                    required
                    value={mediaTitle}
                    onChange={(e) => setMediaTitle(e.target.value)}
                    className="w-full border border-gray-300 p-3 rounded-lg text-sm focus:outline-teal-600 font-medium bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1">Date</label>
                  <input 
                    type="text" 
                    placeholder="e.g. August 18, 2026" 
                    required
                    value={mediaDate}
                    onChange={(e) => setMediaDate(e.target.value)}
                    className="w-full border border-gray-300 p-3 rounded-lg text-sm focus:outline-teal-600 font-medium bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1">Thumbnail Image</label>
                  <input 
                    type="file" 
                    accept="image/*"
                    required
                    onChange={(e) => setMediaThumbnail(e.target.files[0])}
                    className="w-full border border-gray-300 p-2 rounded-lg text-xs bg-white file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-xs file:font-semibold file:bg-[#2d545e] file:text-white cursor-pointer"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1">PDF Document</label>
                  <input 
                    type="file" 
                    accept="application/pdf"
                    required
                    onChange={(e) => setMediaPdf(e.target.files[0])}
                    className="w-full border border-gray-300 p-2 rounded-lg text-xs bg-white file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-xs file:font-semibold file:bg-[#2d545e] file:text-white cursor-pointer"
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={loadingMedia}
                  className="w-full bg-[#2d545e] hover:bg-[#23424a] text-white font-bold py-3 rounded-lg text-xs uppercase tracking-widest transition shadow"
                >
                  {loadingMedia ? 'UPLOADING...' : 'UPLOAD MEDIA'}
                </button>
              </form>
            </div>

            <div className="lg:col-span-2 bg-white shadow-sm rounded-xl p-6 border border-gray-200">
              <h2 className="text-base font-bold mb-4 border-b pb-3 uppercase tracking-wider text-[#2d545e]">
                All Uploaded Media ({mediaList.length})
              </h2>
              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                {mediaList.length === 0 ? (
                  <p className="text-gray-400 text-sm py-8 text-center font-medium">No media uploaded yet.</p>
                ) : (
                  mediaList.map(item => (
                    <div key={item._id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center border border-gray-100 p-4 rounded-xl hover:bg-gray-50 transition gap-4">
                      <div className="flex items-center gap-4">
                        {item.thumbnailImage && (
                          <img src={`${API_BASE}/${item.thumbnailImage}`} alt="" className="w-16 h-16 object-cover rounded-lg border border-gray-200 shrink-0" />
                        )}
                        <div>
                          <h3 className="font-bold text-gray-900">{item.title}</h3>
                          <p className="text-xs text-gray-500 mt-0.5">{item.date}</p>
                          {item.pdfFile && (
                            <a href={`${API_BASE}/${item.pdfFile}`} target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline text-xs font-bold mt-1 inline-block">
                              View PDF Document
                            </a>
                          )}
                        </div>
                      </div>
                      <button 
                        onClick={() => handleDeleteMedia(item._id)}
                        className="bg-red-50 hover:bg-red-600 text-red-600 hover:text-white border border-red-200 px-4 py-2 rounded-lg text-xs font-bold transition self-end sm:self-center"
                      >
                        Delete
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: EVENTS MANAGEMENT */}
        {activeTab === 'events' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-sm rounded-xl p-6 border border-gray-200 h-fit">
              <h2 className="text-base font-bold mb-4 border-b pb-3 uppercase tracking-wider text-[#2d545e]">
                Upload New Event
              </h2>
              <form onSubmit={handleEventSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1">Event Title</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Aquathlon on 30th October 2026" 
                    required
                    value={eventTitle}
                    onChange={(e) => setEventTitle(e.target.value)}
                    className="w-full border border-gray-300 p-3 rounded-lg text-sm focus:outline-teal-600 font-medium bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1">Category</label>
                  <select
                    value={eventCategory}
                    onChange={(e) => setEventCategory(e.target.value)}
                    className="w-full border border-gray-300 p-3 rounded-lg text-sm focus:outline-teal-600 font-medium bg-gray-50"
                  >
                    <option value="upcoming">Upcoming Event</option>
                    <option value="past">Past Event</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1">Description / Content</label>
                  <textarea 
                    rows="4" 
                    placeholder="Write event description..." 
                    required
                    value={eventDesc}
                    onChange={(e) => setEventDesc(e.target.value)}
                    className="w-full border border-gray-300 p-3 rounded-lg text-sm focus:outline-teal-600 resize-none font-medium bg-gray-50"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1">Event Poster / Image</label>
                  <input 
                    type="file" 
                    accept="image/*"
                    onChange={(e) => setEventImage(e.target.files[0])}
                    className="w-full border border-gray-300 p-2 rounded-lg text-xs bg-white file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-xs file:font-semibold file:bg-[#2d545e] file:text-white cursor-pointer"
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={loadingEvent}
                  className="w-full bg-[#2d545e] hover:bg-[#23424a] text-white font-bold py-3 rounded-lg text-xs uppercase tracking-widest transition shadow"
                >
                  {loadingEvent ? 'UPLOADING...' : 'UPLOAD EVENT'}
                </button>
              </form>
            </div>

            <div className="lg:col-span-2 bg-white shadow-sm rounded-xl p-6 border border-gray-200">
              <h2 className="text-base font-bold mb-4 border-b pb-3 uppercase tracking-wider text-[#2d545e]">
                All Published Events ({eventsList.length})
              </h2>
              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                {eventsList.length === 0 ? (
                  <p className="text-gray-400 text-sm py-8 text-center font-medium">No events uploaded yet.</p>
                ) : (
                  eventsList.map(item => (
                    <div key={item._id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center border border-gray-100 p-4 rounded-xl hover:bg-gray-50 transition gap-4">
                      <div className="flex items-center gap-4">
                        {item.imagePath && (
                          <img src={`${API_BASE}/${item.imagePath}`} alt="" className="w-16 h-16 object-cover rounded-lg border border-gray-200 shrink-0" />
                        )}
                        <div>
                          <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${item.category === 'upcoming' ? 'bg-teal-50 text-teal-700' : 'bg-gray-100 text-gray-700'}`}>
                            {item.category}
                          </span>
                          <h3 className="font-bold text-gray-900 mt-1">{item.title}</h3>
                          <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">{item.description}</p>
                        </div>
                      </div>
                      <button 
                        onClick={() => handleDeleteEvent(item._id)}
                        className="bg-red-50 hover:bg-red-600 text-red-600 hover:text-white border border-red-200 px-4 py-2 rounded-lg text-xs font-bold transition self-end sm:self-center"
                      >
                        Delete
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: TESTIMONIALS MANAGEMENT */}
        {activeTab === 'testimonials' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-sm rounded-xl p-6 border border-gray-200 h-fit">
              <h2 className="text-base font-bold mb-4 border-b pb-3 uppercase tracking-wider text-[#2d545e]">
                Add New Testimonial
              </h2>
              <form onSubmit={handleTestimonialSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1">Parent Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Krithika Chandrashekar" 
                    required
                    value={tParentName}
                    onChange={(e) => setTParentName(e.target.value)}
                    className="w-full border border-gray-300 p-3 rounded-lg text-sm focus:outline-teal-600 font-medium bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1">Testimonial Type</label>
                  <select
                    value={tType}
                    onChange={(e) => setTType(e.target.value)}
                    className="w-full border border-gray-300 p-3 rounded-lg text-sm focus:outline-teal-600 font-medium bg-gray-50"
                  >
                    <option value="video">YouTube Video</option>
                    <option value="text">Text / Letter</option>
                  </select>
                </div>

                {tType === 'video' ? (
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1">YouTube Video URL</label>
                    <input 
                      type="text" 
                      placeholder="https://www.youtube.com/watch?v=..." 
                      required
                      value={tYoutubeUrl}
                      onChange={(e) => setTYoutubeUrl(e.target.value)}
                      className="w-full border border-gray-300 p-3 rounded-lg text-sm focus:outline-teal-600 font-medium bg-gray-50"
                    />
                  </div>
                ) : (
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1">Message / Letter Content</label>
                    <textarea 
                      rows="5" 
                      placeholder="Write parent's message here..." 
                      required
                      value={tMessage}
                      onChange={(e) => setTMessage(e.target.value)}
                      className="w-full border border-gray-300 p-3 rounded-lg text-sm focus:outline-teal-600 resize-none font-medium bg-gray-50"
                    ></textarea>
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={loadingT}
                  className="w-full bg-[#2d545e] hover:bg-[#23424a] text-white font-bold py-3 rounded-lg text-xs uppercase tracking-widest transition shadow"
                >
                  {loadingT ? 'SAVING...' : 'ADD TESTIMONIAL'}
                </button>
              </form>
            </div>

            <div className="lg:col-span-2 bg-white shadow-sm rounded-xl p-6 border border-gray-200">
              <h2 className="text-base font-bold mb-4 border-b pb-3 uppercase tracking-wider text-[#2d545e]">
                All Testimonials ({testimonialsList.length})
              </h2>
              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                {testimonialsList.length === 0 ? (
                  <p className="text-gray-400 text-sm py-8 text-center font-medium">No testimonials added yet.</p>
                ) : (
                  testimonialsList.map(item => (
                    <div key={item._id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center border border-gray-100 p-4 rounded-xl hover:bg-gray-50 transition gap-4">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-700">
                          {item.type}
                        </span>
                        <h3 className="font-bold text-gray-900 mt-1">Parent's Name : {item.parentName}</h3>
                        <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">
                          {item.type === 'video' ? item.youtubeUrl : item.message}
                        </p>
                      </div>
                      <button 
                        onClick={() => handleDeleteTestimonial(item._id)}
                        className="bg-red-50 hover:bg-red-600 text-red-600 hover:text-white border border-red-200 px-4 py-2 rounded-lg text-xs font-bold transition self-end sm:self-center"
                      >
                        Delete
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}

      </main>

    </div>
  );
};

export default AdminPanel;