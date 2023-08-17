import { useEffect } from 'react';

function ScrollToTop() {
  useEffect(() => {
    window.addEventListener('beforeunload', scrollToTop);
    return () => {
      window.removeEventListener('beforeunload', scrollToTop);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return null;
}

export default ScrollToTop;
