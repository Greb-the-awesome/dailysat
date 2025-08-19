'use client';

import React, { useEffect, useState } from 'react';

const shapeTypes = ['circle', 'square', 'triangle'];
const colors = ['bg-blue-300', 'bg-indigo-300', 'bg-pink-300', 'bg-purple-300'];

interface Shape {
  type: string;
  size: number;
  top: number;
  left: number;
  color: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  duration: number;
  delay: number;
}

const Background = () => {
  const [shapes, setShapes] = useState<Shape[]>([]);

  useEffect(() => {
    const generated: Shape[] = Array.from({ length: 12 }).map(() => {
      const type = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
      const size = Math.floor(Math.random() * 80) + 40; // 40-120px
      return {
        type,
        size,
        top: Math.random() * 80,
        left: Math.random() * 80,
        color: colors[Math.floor(Math.random() * colors.length)],
        x1: Math.random() * 200 - 100,
        y1: Math.random() * 200 - 100,
        x2: Math.random() * 200 - 100,
        y2: Math.random() * 200 - 100,
        duration: Math.random() * 20 + 20, // 20-40s
        delay: Math.random() * 10,
      };
    });
    setShapes(generated);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {shapes.map((shape, idx) => (
        <div
          key={idx}
          className={`absolute opacity-30 filter blur-3xl animate-wander ${shape.color} ${
            shape.type === 'circle' ? 'rounded-full' : ''
          } ${shape.type === 'triangle' ? 'triangle' : ''}`}
          style={{
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            top: `${shape.top}%`,
            left: `${shape.left}%`,
            animationDuration: `${shape.duration}s`,
            animationDelay: `${shape.delay}s`,
            '--x1': `${shape.x1}px`,
            '--y1': `${shape.y1}px`,
            '--x2': `${shape.x2}px`,
            '--y2': `${shape.y2}px`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

export default Background;
