import { useEffect, useState } from 'react';

export const useScrollDetector = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY || document.documentElement.scrollTop;
      if (currentScrollTop === 0) {
        setHasScrolled(false);
      } else {
        setHasScrolled(true);
      }
      setLastScrollTop(currentScrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  return { hasScrolled };
};
