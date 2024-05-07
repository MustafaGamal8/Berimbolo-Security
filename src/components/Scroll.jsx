import React, { useState, useEffect } from 'react';

const ScrollableComponent = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const percentage = (scrollTop / scrollHeight) * 100;
      setScrollPercentage(percentage);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      {/* Your scrollable content */}
      {/* Add your content here */}

      {/* Line next to scrollbar */}
      <div
        className="absolute top-0 right-0 bg-red-500 h-full w-1"
        style={{ height: `${scrollPercentage}%` }}
      ></div>
    </div>
  );
};

export default ScrollableComponent;
