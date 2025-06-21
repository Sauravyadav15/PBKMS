// src/components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, key } = useLocation();

  useEffect(() => {
   window.scrollTo({
  top: 0,
  behavior: 'smooth' // Adds animation
}); // Scrolls to top when path changes
  }, [pathname, key]);

  return null; // This component doesn't render anything
}