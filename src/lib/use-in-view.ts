"use client";

import { useEffect, useRef, useState } from "react";

export interface UseInViewOptions {
  /**
   * Proportion of element that must be visible before triggering (0.0 to 1.0).
   * Default: 0.12 (12%)
   */
  threshold?: number | number[];
  /**
   * Margin around the root. E.g. '0px 0px -8% 0px' to trigger slightly before element reaches bottom of viewport.
   * Default: '0px 0px -8% 0px'
   */
  rootMargin?: string;
  /**
   * Whether to trigger only once. Default: true
   */
  once?: boolean;
  /**
   * Milliseconds to wait after the element enters the viewport before marking it in-view.
   * Use this to dial scroll-triggered animation delay per element (e.g. 1000–1500ms).
   * Default: 500
   */
  delay?: number;
}

export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: UseInViewOptions = {}
) {
  const {
    threshold = 0.12,
    rootMargin = "0px 0px -8% 0px",
    once = true,
    delay = 500,
  } = options;

  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);
  // Timer to delay activation of view state
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Fallback if IntersectionObserver is not supported
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      const timer = setTimeout(() => setIsInView(true), 0);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const isReducedMotion =
          window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
        const hash = window.location.hash ? window.location.hash.slice(1) : "";
        const matchesHash =
          Boolean(hash) &&
          (element.id === hash || Boolean(element.closest?.(`#${hash}`)));

        entries.forEach((entry) => {
          if (entry.isIntersecting || isReducedMotion || matchesHash) {
            // Clear any existing timer
            if (timerRef.current) {
              clearTimeout(timerRef.current);
              timerRef.current = null;
            }
            // Delay activation for staggered animation (1–2 s per caller)
            timerRef.current = setTimeout(() => {
              setIsInView(true);
              if (once) {
                observer.unobserve(entry.target);
              }
              timerRef.current = null;
            }, delay);
          } else if (!once) {
            // Cancel pending activation if element leaves before timer fires
            if (timerRef.current) {
              clearTimeout(timerRef.current);
              timerRef.current = null;
            }
            setIsInView(false);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, once, delay]);

  return [ref, isInView] as const;
}
