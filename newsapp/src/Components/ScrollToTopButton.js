import React, { useState, useEffect } from 'react';
import './ScrollToTopButton.css'; // Create a CSS file for styling

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the button when the user scrolls down
      const scrolled = document.documentElement.scrollTop;
      setIsVisible(scrolled > 300);
    };

    // Attach the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {isVisible && (
        <div className="scroll-to-top-button" onClick={scrollToTop}>
          <i className="fa-solid fa-chevron-up"></i>
        </div>
      )}
    </div>
  );
};

export default ScrollToTopButton;
