import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll to top or to specific hash target on route change
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  // Monitor scroll position for button visibility with rAF and passive listener
  useEffect(() => {
    let ticking = false;
    const checkScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 300;
          setShowScrollTop((prev) => (prev !== isScrolled ? isScrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-[#142F80] hover:bg-[#F36B16] text-white shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none ${
        showScrollTop 
          ? 'opacity-100 pointer-events-auto translate-y-0' 
          : 'opacity-0 pointer-events-none translate-y-3'
      }`}
      aria-label="Scroll back to top"
      tabIndex={showScrollTop ? 0 : -1}
    >
      <ArrowUp size={20} />
    </button>
  );
}

