"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CarouselItem {
  id: string | number;
  image: string;
  title?: string;
  subtitle?: string;
}

interface CarouselProps {
  items: CarouselItem[];
  autoPlay?: boolean;
  interval?: number;
}

export default function Carousel({
  items,
  autoPlay = false,
  interval = 5000,
}: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const isAutoPlayEnabled = autoPlay && items.length > 1;

  useEffect(() => {
    if (!isAutoPlayEnabled) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [isAutoPlayEnabled, interval, items.length]);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative h-[286px] w-full overflow-hidden rounded-2xl">
      {/* Slides wrapper */}
      <motion.div
        className="flex h-full"
        animate={{ x: `-${activeIndex * 100}%` }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
        }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="relative h-full w-full flex-shrink-0"
          >
            <img
              src={item.image}
              alt="carousel slide"
              className="h-full w-full object-cover"
            />

            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

            {/* Text */}
            <div className="absolute bottom-6 left-6 mb-3">
              {item.subtitle && (
                <p className="mb-1 text-xs uppercase tracking-wide font-[500] text-white">
                  {item.subtitle}
                </p>
              )}
              {item.title && (
                <h2 className="text-xl font-semibold text-white leading-tight">
                  {item.title}
                </h2>
              )}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
