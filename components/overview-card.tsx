"use client";

import { ChevronRight } from "lucide-react";

interface Stat {
  label: string;
  value: string;
}

interface OverviewCardProps {
  icon?: React.ReactNode;
  title: string;
  stats: Stat[];
  onViewAll?: () => void;
}

export default function OverviewCard({
  icon,
  title,
  stats,
  onViewAll,
}: OverviewCardProps) {
  return (
    <div className="rounded-[16px] bg-white border border-[#E4E4E4] h-[162px]">
      {/* Header */}
      <div className=" flex items-center justify-between bg-[#F9FAFB] h-[50px] border border-[#E4E4E4] rounded-t-[16px] p-4">
        <div className="flex items-center gap-1 ">
          {icon && (
            <div className="flex h-10 w-10 items-center justify-center rounded-full">
              {icon}
            </div>
          )}
          <h3 className="text-[14px] font-semibold text-[#292929]">
            {title}
          </h3>
        </div>

        <button
          onClick={onViewAll}
          className="flex items-center gap-1 text-sm font-medium text-[#4545FE] hover:underline"
        >
          View all
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-8 p-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-[14px] text-[#525252]">{stat.label}</p>
            <p className="mt-5 text-[24px] font-bold text-[#141414]">
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
