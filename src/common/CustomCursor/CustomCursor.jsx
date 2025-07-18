"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const currentX = useRef(0);
  const currentY = useRef(0);

  useEffect(() => {
    const cursor = cursorRef.current;

    const handleMouseMove = (e) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
    };

    const animate = () => {
      // Smooth interpolation
      currentX.current += (mouseX.current - currentX.current) * 0.1;
      currentY.current += (mouseY.current - currentY.current) * 0.1;

      if (cursor) {
        cursor.style.left = `${currentX.current}px`;
        cursor.style.top = `${currentY.current}px`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate(); // Start animation loop

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed z-[9999] top-0 left-0 w-6 h-6 rounded-full pointer-events-none animate-pulse-custom"
      style={{
        background: "radial-gradient(circle, #fb7185 0%, #f43f5e 40%, transparent 70%)",
        boxShadow: "0 0 12px #f43f5e, 0 0 24px #f43f5e, 0 0 36px #fb7185",
        transform: "translate(-50%, -50%)",
      }}
    />
  );
}
