import React from 'react';
import { Link } from 'react-router-dom';
import { NotebookTabs } from 'lucide-react';
import './Blog.css';

const Blog = () => {
  return (
    <div className="coming-soon-container">
      <NotebookTabs size={48} className="coming-soon-icon" />
      <h1 className="coming-soon-title">Blog</h1>
      <p className="coming-soon-text">We're working hard to bring this page to life. Stay tuned!</p>
      <Link to="/PBKMS" className="coming-soon-link">← Back to Home</Link>
    </div>
  );
};

export default Blog;
