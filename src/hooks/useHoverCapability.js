import { useState, useEffect } from 'react';

/**
 * Hook to detect whether the user device supports hover (desktop cursor)
 * or is a touch-based device where hover has no equivalent.
 */
export function useHoverCapability() {
  const [hasHover, setHasHover] = useState(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return true;
    return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;

    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');

    const handleChange = (e) => {
      setHasHover(e.matches);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } else {
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, []);

  return hasHover;
}
