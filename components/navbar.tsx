"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [active, setActive] = useState("Dashboard");
  const [open, setOpen] = useState(false);

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

  return (
    <>
      {/* TOP NAVBAR */}
      <header className="w-full bg-[#105B48] text-white h-[82px] flex items-center">
        <div className="max-w-[1440px] mx-auto w-full flex items-center justify-between px-4">
          {/* Logo */}
          <Image
            src="/icons/expertlisting.png"
            alt="Logo"
            width={200}
            height={26}
            priority
            className="cursor-pointer"
          />

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-5 cursor-pointer">
            {[
              "Budgeting",
              "calendar",
              "document-text",
              "Payout Center",
              "Marketplace",
            ].map((icon) => (
              <button key={icon} className="hover:opacity-80 cursor-pointer">
                <Image
                  src={`/icons/${icon}.png`}
                  alt={icon}
                  width={32}
                  height={32}
                />
              </button>
            ))}

            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#105B48] cursor-pointer font-bold">
              D
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden cursor-pointer"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* DESKTOP SUB NAV */}
      <header className="hidden md:flex w-full bg-white border-b border-[#F4F4F5] shadow-sm h-[67px] items-center">
        <nav className="flex justify-between px-6 py-3 max-w-[1440px] mx-auto w-full">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.label;

            return (
              <button
                key={item.label}
                onClick={() => setActive(item.label)}
                className={clsx(
                  "flex items-center gap-1.5 h-[38px] px-4 rounded-[8px] text-sm font-[600] transition-all cursor-pointer",
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
                />
                {item.label}
              </button>
            );
          })}
        </nav>
      </header>

      {/* MOBILE SIDEBAR */}
      <div
        className={clsx(
          "fixed inset-0 z-50 bg-black/40 transition-opacity",
          open ? "opacity-100 visible" : "opacity-0 invisible"
        )}
        onClick={() => setOpen(false)}
      />

      <aside
        className={clsx(
          "fixed right-0 top-0 z-50 h-full w-[280px] bg-white shadow-lg transform transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <Image
            src="/icons/expertlisting.png"
            alt="Logo"
            width={150}
            priority
            height={20}
              className="dark:invert"
          />
          <button onClick={() => setOpen(false)}>
            <X size={24} className="text-red-500" />
          </button>
        </div>

        {/* Nav Items */}
        <div className="flex flex-col p-4 gap-2">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.label;

            return (
              <button
                key={item.label}
                onClick={() => {
                  setActive(item.label);
                  setOpen(false);
                }}
                className={clsx(
                  "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-[600]",
                  isActive
                    ? "bg-[#176D5826] text-[#176D58]"
                    : "text-gray-700"
                )}
              >
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={20}
                  height={20}
                />
                {item.label}
              </button>
            );
          })}
        </div>
      </aside>
    </>
  );
}
