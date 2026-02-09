"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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
  showChatIcon?: boolean;
  onChatClick?: () => void;
}

export default function Carousel({
  items,
  autoPlay = false,
  interval = 5000,
  showChatIcon = false,
  onChatClick,
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

  return (
    <div className="relative w-full">
      {/* CLIPPED CAROUSEL */}
      <div className="h-[286px] w-full overflow-hidden rounded-2xl">
        <motion.div
          className="flex h-full"
          animate={{ x: `-${activeIndex * 100}%` }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {items.map((item) => (
            <div key={item.id} className="relative h-full w-full flex-shrink-0">
              <img
                src={item.image}
                alt="carousel slide"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              <div className="absolute bottom-6 left-6 mb-3">
                {item.subtitle && (
                  <p className="mb-1 text-xs uppercase font-medium text-white">
                    {item.subtitle}
                  </p>
                )}
                {item.title && (
                  <h2 className="text-xl font-semibold text-white">
                    {item.title}
                  </h2>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>


      {/* DOT INDICATORS */}
<div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
  {items.map((_, index) => (
    <button
      key={index}
      onClick={() => setActiveIndex(index)}
      className={`
        h-2 w-2 rounded-full transition-all duration-300
        ${
          activeIndex === index
            ? "bg-white w-2"
            : "bg-white/40 hover:bg-white/70"
        }
      `}
      aria-label={`Go to slide ${index + 1}`}
    />
  ))}
</div>


      {/* FLOATING CHAT ICON (NOT CLIPPED) */}
      {showChatIcon && (
        <button
          onClick={onChatClick}
          className="
        absolute 
        -right-3 top-8
        z-20
        flex h-[57px] w-[57px] 
        items-center justify-center 
        rounded-full 
        bg-[#1C1C1C] 
        text-white 
        shadow-xl
        hover:scale-105 
        transition
        cursor-pointer
      "
        >
          <Image
            src="/icons/messages-3.png"
            alt="Logo"
            width={24}
            height={24}
            priority
          />
        </button>
      )}
    </div>
  );
}
