"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";

const NAV_ITEMS = [
  {
    label: "Dashboard",
    icon: "/icons/Home 1.png",
  },
  {
    label: "Listings",
    icon: "/icons/Toolbox.png",
  },
  {
    label: "Users",
    icon: "/icons/Profile 1.png",
  },
  {
    label: "Request",
    icon: "/icons/Article.png",
  },
  {
    label: "Applications",
    icon: "/icons/Scroll.png",
  },
  {
    label: "Tasks",
    icon: "/icons/task-square.png",
  },
];

export default function SubNavbar() {
  const [active, setActive] = useState("Dashboard");

  return (
    <header className="w-full bg-white border-b border-[#F4F4F5] shadow-sm h-[67px] flex items-center">
      <nav className="flex justify-between px-6 py-3 max-w-[1440px] mx-auto w-full">
        {NAV_ITEMS.map((item) => {
          const isActive = active === item.label;

          return (
            <button
              key={item.label}
              onClick={() => setActive(item.label)}
              className={clsx(
                "flex items-center cusor:pointer justify-center gap-1.5 h-[38px] px-4 rounded-[8px] text-sm font-[600] transition-all",
                isActive
                  ? "bg-[#176D5826] text-[#176D58]"
                  : "text-gray-700 hover:opacity-80"
              )}
            >
              <Image
                src={item.icon}
                alt={item.label}
                width={24}
                height={24}
                priority
              />
              {item.label}
            </button>
          );
        })}
      </nav>
    </header>
  );
}
