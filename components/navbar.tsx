"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import clsx from "clsx";
import { Menu, X, Lock, MessageCircleMore, Users, MenuSquare, LucidePaintBucket, LogIn } from "lucide-react";

export default function Navbar() {
    const userName = "Dylan Frank"
    const userEmail ="dylanfrank96@gmail.com"
  const [active, setActive] = useState("Dashboard");
  const [open, setOpen] = useState(false);
  const [activeAction, setActiveAction] = useState<null | "Budgeting">(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [hoverUserDropdown, setHoverUserDropdown] = useState(false);
  const userDropdownRef = useRef<HTMLDivElement>(null);



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
              <button
                key={icon}
                onClick={() => {
                  if (icon === "Budgeting") {
                    setActiveAction("Budgeting");
                  }
                  if (icon === "calendar") setShowCalendar(true);
                }}
                className="hover:opacity-80 cursor-pointer"
              >
                <Image
                  src={`/icons/${icon}.png`}
                  alt={icon}
                  width={32}
                  height={32}
                />
              </button>
            ))}

            {/* User Dropdown */}
            <div className="relative" ref={userDropdownRef}>
              <div
                onMouseEnter={() => setHoverUserDropdown(true)}
                onMouseLeave={() =>
                  !showUserDropdown && setHoverUserDropdown(false)
                }
                onClick={() => setShowUserDropdown(!showUserDropdown)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#105B48] cursor-pointer font-bold hover:shadow-md transition-shadow"
              >
               {userName?.[0]}
              </div>

              {/* Hover Tooltip - Show Only Name */}
              {hoverUserDropdown && !showUserDropdown && (
                <div className="absolute right-0 mt-2 whitespace-nowrap bg-white p-4  rounded-md text-sm font-medium shadow-lg z-40">
                  <h3 className="text-[16px] font-semibold text-[#191919] mb-2 leading-snug">
                    {userName}
                  </h3>
                  <p className="text-[#606060]">{userEmail}</p>
                </div>
              )}

              {/* Click Dropdown - Show All Options */}
              {showUserDropdown && (
                <>
                  <div
                    className="fixed inset-0 z-30"
                    onClick={() => setShowUserDropdown(false)}
                  />
                  <div
                    onMouseLeave={() => setHoverUserDropdown(false)}
                    className="absolute right-0 mt-2 w-[340px] bg-white rounded-lg shadow-xl z-40 overflow-hidden"
                  >
                    {/* User Info */}
                    <div className="px-4 py-3 ">
                      <div className="flex items-center gap-3 p-5 border border-gray-300 rounded-lg mt-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full text-white bg-[#105B48] font-bold text-sm">
                        {userName?.[0]}

                        </div>
                        <div>
                          <p className="font-semibold text-[#191919]">
                          {userName}
                          </p>
                          <p className="text-xs text-[#606060]">
                            {userEmail}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Menu Items */}
                    <div className="p-2 font-semibold text-[#191919]">
                      <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition font-semibold text-[#191919] border-b border-gray-300 pb-6 pt-4 cursor-pointer">
                        <Users size={24} />
                        Teams
                      </button>
                      <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition font-semibold text-[#191919] border-b border-gray-300 pb-6 pt-4 cursor-pointer">
                        <MenuSquare size={24} />
                        Snagging
                      </button>
                      <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition font-semibold text-[#191919] border-b border-gray-300 pb-6 pt-4 cursor-pointer">
                        <MessageCircleMore size={24} />
                        Feedback
                      </button>
                      <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition font-semibold text-[#191919] border-b border-gray-300 pb-6 pt-4 cursor-pointer">
                        <LucidePaintBucket size={24} />
                        Geo-Bucket
                      </button>
                      <div className="my-1 border-t border-gray-100" />
                      <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition font-semibold text-[#191919] border-b border-gray-300 pb-6 pt-4 cursor-pointer">
                        <Lock size={24} />
                        Change password
                      </button>
                      <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition font-semibold text-[#191919] pb-6 pt-4 cursor-pointer">
                        <LogIn size={24} />
                        Logout
                      </button>
                    </div>
                  </div>
                </>
              )}
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
                  src={item.icon || "/placeholder.svg"}
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
                  isActive ? "bg-[#176D5826] text-[#176D58]" : "text-gray-700"
                )}
              >
                <Image
                  src={item.icon || "/placeholder.svg"}
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

      {/* Calendar */}
      <aside
        className={clsx(
          "fixed right-0 top-0 z-50 h-full w-[400px] bg-black text-white shadow-xl transform transition-transform duration-300",
          showCalendar ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10 bg-[#171717]">
          <div className="flex items-center gap-2 text-[16px] font-semibold ">
            <Image
              src="/icons/Arrow - Right.png"
              alt="Logo"
              width={24}
              height={24}
              priority
              className="cursor-pointer"
            />
            Calendar
          </div>

          <button onClick={() => setShowCalendar(false)}>
            <X size={20} />
          </button>
        </div>

        {/* Month Header */}
        <div className="flex items-center justify-center gap-8 px-6 py-4">
          <button>
            <Image
              src="/icons/arrow-left.png"
              alt="Logo"
              width={24}
              height={24}
              priority
              className="cursor-pointer"
            />
          </button>
          <span className="font-semibold text-[16px] ">November 2023</span>
          <button>
            <Image
              src="/icons/arrow-right.png"
              alt="Logo"
              width={24}
              height={24}
              priority
              className="cursor-pointer"
            />
          </button>
        </div>

        {/* Calendar Grid */}
        {/* Weekdays */}
        <div className="grid grid-cols-7 border-b border-white/10 text-[11px] uppercase text-white/50">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div
              key={day}
              className="py-3 text-center border-r border-white/10 last:border-r-0"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Dates */}
        <div className="grid grid-cols-7">
          {Array.from({ length: 35 }).map((_, i) => {
            const day = i - 2; // shift to start month correctly
            const isCurrentMonth = day > 0 && day <= 30;
            const isActive = day === 16;

            return (
              <div
                key={i}
                className={clsx(
                  "h-[92px] w-[50px] p-2 border-r border-b border-white/10 text-sm cursor-pointer flex items-start",
                  !isCurrentMonth && "text-white/30"
                )}
              >
                {isCurrentMonth && (
                  <span
                    className={clsx(
                      "flex h-[16px] w-[28px] items-center rounded-[200px] text-xs",
                      isActive
                        ? "bg-[#2525E6] text-white font-semibold justify-center"
                        : "text-white"
                    )}
                  >
                    {day}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </aside>

      {activeAction === "Budgeting" && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/40"
            onClick={() => setActiveAction(null)}
          />

          {/* Modal */}
          <div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            onClick={() => setActiveAction(null)}
          >
            <div
              className="w-full max-w-[440px] overflow-hidden rounded-2xl bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Section */}

              <Image
                src="/icons/media.png"
                alt="Budgeting"
                width={440}
                height={216}
              />

              {/* Content */}
              <div className="p-6 space-y-5">
                {/* Features */}
                <div className="space-y-4 text-sm text-gray-600">
                  <div className="flex gap-3 h-[74px] w-[344px]">
                    <div className="mt-8">
                      {" "}
                      <Image
                        src="/icons/setting-4.png"
                        alt=""
                        width={24}
                        height={24}
                      />
                    </div>
                    <div>
                      <h3 className="text-[16px] font-semibold text-[#191919] leading-snug">
                        Set up annual budgets by account category
                      </h3>
                      <p className="text-[#606060]">
                        Allocate funds across income and expense lines with full
                        visibility.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 ">
                    <div className="mt-8">
                      {" "}
                      <Image
                        src="/icons/trend-up.png"
                        alt=""
                        width={32}
                        height={32}
                      />
                    </div>
                    <div className="mt-6">
                      <h3 className="text-[16px] font-semibold text-[#191919] leading-snug">
                        Track actuals vs budget in real time
                      </h3>
                      <p className="text-[#606060]">
                        See how your community is performing against plan, month
                        by month.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="mt-10">
                      {" "}
                      <Image
                        src="/icons/align-bottom.png"
                        alt=""
                        width={38}
                        height={38}
                      />
                    </div>

                    <div className="mt-6">
                      <h3 className="text-[14px] font-semibold text-[#191919] leading-snug">
                        {" "}
                        Adjust figures and forecast with ease across periods.
                      </h3>
                      <p className="text-[#606060]">
                        Edit amounts, apply percentage changes, or roll forward
                        last year’s data—all in one place.
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <button className="mt-4 w-full rounded-full bg-[#18181B] py-3 text-white font-semibold hover:opacity-90 transition">
                  Create Budget
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
