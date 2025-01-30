'use client'
import { useEffect, useRef, useState } from "react";

export const ZoomInOnScroll = ({ children }: { children: React.ReactNode }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false); // Optional: remove this if you want the animation to only trigger once.
          }
        },
        { threshold: 0.1 } // Adjust how much of the element needs to be visible
      );
  
      if (ref.current) {
        observer.observe(ref.current);
      }
  
      return () => {
        if (ref.current) observer.unobserve(ref.current);
      };
    }, []);
  
    return (
      <div
        ref={ref}
        className={`transition-all transform duration-700 ease-out ${
          isVisible
            ? "opacity-100 scale-100 translate-x-0"
            : "opacity-0 scale-90 translate-x-[-50px]"
        }`}
      >
        {children}
      </div>
    );
  };
  
  