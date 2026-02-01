import React, { ReactNode } from 'react';

interface LazyLoadProps {
  children: ReactNode;
  id: string;
  forceVisible?: boolean;
  className?: string;
}

const LazyLoad: React.FC<LazyLoadProps> = ({ children, id, className = '' }) => {
  // Render content immediately to prevent layout shifts during scrolling
  return (
    <div id={id} className={`scroll-mt-20 ${className}`}>
      {children}
    </div>
  );
};

export default LazyLoad;