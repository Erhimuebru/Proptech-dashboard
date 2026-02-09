"use client";
import Image from "next/image";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const chartData = [
  { month: "Jan", inflow: 32000000, outflow: 18000000, profit: 14000000 },
  { month: "Feb", inflow: 28000000, outflow: 15000000, profit: 13000000 },
  { month: "Mar", inflow: 35000000, outflow: 20000000, profit: 15000000 },
  { month: "Apr", inflow: 30000000, outflow: 17000000, profit: 13000000 },
  { month: "May", inflow: 40000000, outflow: 22000000, profit: 18000000 },
  { month: "Jun", inflow: 48000000, outflow: 26000000, profit: 22000000 },
  { month: "Jul", inflow: 36000000, outflow: 21000000, profit: 15000000 },
  { month: "Aug", inflow: 42000000, outflow: 24000000, profit: 18000000 },
  { month: "Sep", inflow: 38000000, outflow: 23000000, profit: 15000000 },
];

type Trend = "positive" | "negative" | "neutral";

const trendIconMap = {
  positive: "/icons/Vector (4).png",
  negative: "/icons/Vector (3).png",
  neutral: "/icons/Vector (2).png",
};

function MetricCard({
  label,
  value,
  change,
  trend = "neutral",
  color,
}: {
  label: string;
  value: string;
  change: string;
  trend?: Trend;
  color: string;
}) {
  return (
    <div className="rounded-xl border border-[#E4E4E4] bg-white min-h-[80px] p-3 sm:pr-4 sm:pt-5">
      <p className={`text-[16px] sm:text-[19px] font-bold ${color}`}>
        {value}
      </p>

      <div className="mt-2 flex items-center gap-1 text-[10px] sm:text-[11px] whitespace-nowrap">
        <p className="text-[#3D3D3D] font-semibold">{label}</p>

        <Image
          src={trendIconMap[trend]}
          alt={`${trend} trend`}
          width={14}
          height={14}
        />

        <span
          className={
            trend === "positive"
              ? "text-[#12B76A]"
              : trend === "negative"
              ? "text-[#F04438]"
              : "text-[#98A2B3]"
          }
        >
          {change}
        </span>
      </div>
    </div>
  );
}

export default function SalesOverview() {
  return (
    <div className="rounded-2xl border border-[#E4E4E4] bg-white min-h-[350px] w-full">

      {/* Header */}
      <div className="mb-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between px-4 sm:px-6 pt-4 sm:pt-6">
        <div>
          <h2 className="text-[18px] sm:text-[20px] font-semibold text-[#191919]">
            Sales Overview
          </h2>
          <p className="text-xs sm:text-sm text-[#606060]">
            Showing overview Jan 2022 – Sep 2022
          </p>
        </div>

        <button className="rounded-full border border-[#D6D6D6] text-[#191919] h-[40px] cursor-pointer sm:h-[46px] px-4 text-xs sm:text-sm font-medium hover:bg-muted">
          View Transactions
        </button>
      </div>

      {/* Filters */}
      <div className="mb-2 flex flex-wrap gap-2 justify-start sm:justify-end px-4 sm:pr-6">
        {["1 Week", "1 Month", "1 Year"].map((item, i) => (
          <button
            key={item}
            className={`rounded-sm px-3 py-1.5 text-xs sm:text-sm text-[#191919] cursor-pointer ${
              i === 2
                ? "bg-[#F5F5F5] hover:bg-[#E4E4E7] font-semibold"
                : ""
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="border border-[#E4E4E4]" />

      {/* Chart + Metrics */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 p-3 sm:p-4">

        {/* Chart */}
        <div className="relative h-[180px] sm:h-[220px] w-full">
              {/* Prev */}
              <div className="sm:block hidden">
          <button className="absolute -left-2 top-1/2 -translate-y-1/2 z-10 h-7 w-7 flex items-center justify-center rounded-full border bg-[#F5F5F5]">
            <Image src="/icons/Vector (6).png" alt="" width={6} height={6} />
          </button></div>

          {/* Next */}
          <div className="sm:block hidden">
          <button className="absolute   -right-4 top-1/2 -translate-y-1/2 z-10 h-7 w-7 flex items-center justify-center rounded-full border bg-[#E4E4E4]">
            <Image src="/icons/Vector (5).png" alt="" width={6} height={6} />
          </button></div>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} barGap={4} barCategoryGap={12}>
              <XAxis dataKey="month" tickLine={false} axisLine={false} />
              <YAxis
                domain={[0, 50_000_000]}
                ticks={[
                  0,
                  10_000_000,
                  20_000_000,
                  30_000_000,
                  40_000_000,
                  50_000_000,
                ]}
                tickFormatter={(v) => `${v / 1_000_000}m`}
                tickLine={false}
                axisLine={{ stroke: "#E4E4E4" }}
              />
              <Tooltip
                formatter={(v) =>
                  `₦${(v as number).toLocaleString()}`
                }
              />

              <Bar dataKey="inflow" barSize={6} fill="#4545FE" />
              <Bar dataKey="outflow" barSize={6} fill="#12B76A" />
              <Bar dataKey="profit" barSize={6} fill="#F04438" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <MetricCard
            label="Total Inflow"
            value="₦120,000,000.00"
            change="2.5%"
            trend="positive"
            color="text-[#4545FE]"
          />
          <MetricCard
            label="MRR"
            value="₦50,000,000.00"
            change="2.5%"
            trend="positive"
            color="text-[#12B76A]"
          />
          <MetricCard
            label="Commission Revenue"
            value="₦200,000,000.00"
            change="0.5%"
            trend="neutral"
            color="text-[#14B8A6]"
          />
          <MetricCard
            label="GMV"
            value="₦100,000,000.00"
            change="0.5%"
            trend="negative"
            color="text-[#F04438]"
          />
        </div>
      </div>
    </div>
  );
}
