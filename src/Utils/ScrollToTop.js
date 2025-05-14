// src/components/ScrollToTop.js (or your preferred path)
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation(); // Gets the current URL path

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the window
  }, [pathname]); // This effect runs every time the pathname changes

  return null; // This component doesn't render any UI
}

export default ScrollToTop;