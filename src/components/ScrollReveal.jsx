import React, { useEffect, useRef, useState } from 'react';

/**
 * ScrollReveal Component
 * Fades elements into view when scrolled into the viewport,
 * and can optionally fade out when leaving viewport.
 * 
 * @param {string} animation - 'fade-up', 'fade-in', 'fade-down', 'fade-left', 'fade-right', 'zoom-in'
 * @param {number} delay - delay in ms (for staggered effects)
 * @param {number} duration - duration in ms
 * @param {boolean} once - if false, will fade out when scrolled out of view and fade in when returning
 * @param {string} className - extra classes
 * @param {number} threshold - visibility threshold (0.1 to 1.0)
 */
export default function ScrollReveal({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 650,
  once = false, // if false, animates out/in on scroll!
  threshold = 0.15,
  className = '',
  as: Component = 'div',
  ...props
}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const node = elementRef.current;
    if (!node) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(node);
          }
        } else {
          if (!once) {
            // Fade out when scrolling out of viewport!
            setIsVisible(false);
          }
        }
      },
      {
        threshold: threshold,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, [once, threshold]);

  // Determine initial vs visible inline transform/opacity styles
  const getAnimationStyles = () => {
    const baseTransition = `opacity ${duration}ms cubic-bezier(0.2, 0.8, 0.2, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.2, 0.8, 0.2, 1) ${delay}ms`;

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    let hiddenTransform = 'translate3d(0, 24px, 0)';
    if (animation === 'fade-in') hiddenTransform = 'none';
    if (animation === 'fade-down') hiddenTransform = 'translate3d(0, -20px, 0)';
    // On mobile, keep translation purely vertical to prevent any horizontal overflow
    if (animation === 'fade-left') hiddenTransform = isMobile ? 'translate3d(0, 20px, 0)' : 'translate3d(-24px, 0, 0)';
    if (animation === 'fade-right') hiddenTransform = isMobile ? 'translate3d(0, 20px, 0)' : 'translate3d(24px, 0, 0)';
    if (animation === 'zoom-in') hiddenTransform = 'scale3d(0.94, 0.94, 1)';

    return {
      opacity: isVisible ? 1 : 0,
      transform: isVisible 
        ? (animation === 'zoom-in' ? 'scale3d(1, 1, 1)' : 'translate3d(0, 0, 0)') 
        : hiddenTransform,
      transition: baseTransition,
      willChange: 'opacity, transform'
    };
  };

  return (
    <Component
      ref={elementRef}
      style={getAnimationStyles()}
      className={`scroll-reveal-box ${className}`}
      data-visible={isVisible}
      {...props}
    >
      {children}
    </Component>
  );
}
