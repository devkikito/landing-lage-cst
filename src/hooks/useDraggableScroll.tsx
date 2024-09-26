"use client";
import { useRef, useEffect, useCallback } from "react";

const useDraggableScroll = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let isDragging = false;
    let startX: number;
    let scrollLeft: number;

    const onMouseDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      const pageX = (e as MouseEvent).pageX || (e as TouchEvent).touches[0].pageX;
      startX = pageX - element.offsetLeft;
      scrollLeft = element.scrollLeft;

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    };

    const onMouseMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      const pageX = (e as MouseEvent).pageX || (e as TouchEvent).touches[0].pageX;
      const x = pageX - element.offsetLeft;
      const walk = (x - startX) * 3; 
      element.scrollLeft = scrollLeft - walk;
    };

    const onMouseUp = () => {
      isDragging = false;
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    const onTouchStart = (e: TouchEvent) => onMouseDown(e);
    const onTouchMove = (e: TouchEvent) => onMouseMove(e);
    const onTouchEnd = () => onMouseUp();

    element.addEventListener("mousedown", onMouseDown);
    element.addEventListener("touchstart", onTouchStart);
    element.addEventListener("touchmove", onTouchMove);
    element.addEventListener("touchend", onTouchEnd);

    return () => {
      element.removeEventListener("mousedown", onMouseDown);
      element.removeEventListener("touchstart", onTouchStart);
      element.removeEventListener("touchmove", onTouchMove);
      element.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return ref;
};

export default useDraggableScroll;
