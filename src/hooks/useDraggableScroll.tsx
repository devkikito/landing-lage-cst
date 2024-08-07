"use client";
import { useRef, useEffect } from "react";

const useDraggableScroll = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let isDragging = false;
    let startX: number;
    let scrollLeft: number;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      startX = e.pageX - element.offsetLeft;
      scrollLeft = element.scrollLeft;
    };

    const onMouseLeave = () => {
      isDragging = false;
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - element.offsetLeft;
      const walk = (x - startX) * 3;
      element.scrollLeft = scrollLeft - walk;
    };

    element.addEventListener("mousedown", onMouseDown);
    element.addEventListener("mouseleave", onMouseLeave);
    element.addEventListener("mouseup", onMouseUp);
    element.addEventListener("mousemove", onMouseMove);

    return () => {
      element.removeEventListener("mousedown", onMouseDown);
      element.removeEventListener("mouseleave", onMouseLeave);
      element.removeEventListener("mouseup", onMouseUp);
      element.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return ref;
};

export default useDraggableScroll;
