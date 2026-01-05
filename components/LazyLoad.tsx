import React, { ReactNode, useEffect, useRef, useState } from 'react';

interface LazyLoadProps {
  children: ReactNode;
  id: string;
  forceVisible?: boolean;
}

const LazyLoad: React.FC<LazyLoadProps> = ({ children, id, forceVisible = false }) => {
  const [isVisible, setIsVisible] = useState(forceVisible);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (forceVisible) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, {
      rootMargin: '100px',
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [forceVisible]);

  return (
    <div ref={ref} id={id} style={{ minHeight: isVisible ? 'auto' : '10px' }}>
      {isVisible ? children : null}
    </div>
  );
};

export default LazyLoad;
