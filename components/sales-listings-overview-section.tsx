"use client";
import Image from "next/image";
import {  Home } from "lucide-react";
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
      <div className="rounded-xl border border-[#E4E4E4] bg-white  h-[83px] p-4">
       
        <p className={`text-[19px] font-bold ${color}`}>{value}</p>
  
        <div className="mt-2 flex items-center gap-1 text-[11px] whitespace-nowrap">
  <p className="text-[#3D3D3D] font-semibold">{label}</p>

  <Image
    src={trendIconMap[trend]}
    alt={`${trend} trend`}
    width={16}
    height={16}
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
    <div className="rounded-2xl border border-[#E4E4E4] bg-white h-[350px]">
      {/* Header */}
      <div className="mb-3 flex items-center justify-between pr-6 pl-6 pt-6">
        <div>
          <h2 className="text-[20px] font-semibold text-[#191919]">Sales Overview</h2>
          <p className="text-sm text-[#606060]">
            Showing overview Jan 2022 – Sep 2022
          </p>
        </div>

        <button className="rounded-full border border-[#D6D6D6] text-[#191919] w-[177px] h-[46px] text-sm font-medium hover:bg-muted">
          View Transactions
        </button>
      </div>

      {/* Filters */}
      <div className="mb-2 flex gap-2 justify-end pr-6">
        {['1 Week', '1 Month', '1 Year'].map((item, i) => (
          <button
            key={item}
            className={`rounded-sm px-4 py-1.5 text-sm text-[#191919] ${
              i === 2
                ? ' bg-[#F5F5F5] hover:bg-[#E4E4E7] font-semibold'
                : ''
            }`}
          >
            {item}
          </button>
        ))}
      </div>

<div className="border border-[#E4E4E4]"/>
{/* Chart + Metrics */}
<div className="grid grid-cols-1 gap-10 lg:grid-cols-2 p-4 ">

  {/* Chart */}
<div className="relative h-[200px]">
  {/* Prev */}
  <button className="absolute  w-[26px] h-[26px] flex item-center justify-center -left-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-[#E4E4E4] bg-[#F5F5F5] p-2 shadow-sm hover:bg-[#F5F5F5]">
  <Image
    src={"/icons/Vector (6).png"}
    alt={"Previous"}
    width={5}
    height={5}
  />
  </button>

  {/* Next */}
  <button className="absolute w-[26px] h-[26px] flex item-center justify-center -right-8.5 top-1/2 z-10 -translate-y-1/2 rounded-full border border-[#E4E4E4] bg-[#E4E4E4] p-2 shadow-sm hover:bg-[#F5F5F5]">
  <Image
    src={"/icons/Vector (5).png"}
    alt={"Next"}
    width={5}
    height={5}
  />
  </button>

  <ResponsiveContainer width="100%" height="100%" className=" shadow-[4px_0_10px_-2px_rgba(0,0,0,0.08)]" >

    <BarChart data={chartData} barGap={3} barCategoryGap={10}>
      {/* <CartesianGrid  vertical={false} /> */}
      <XAxis dataKey="month" tickLine={false} axisLine={false} />
      <YAxis
  domain={[0, 50_000_000]}  
  ticks={[0, 10_000_000, 20_000_000, 30_000_000, 40_000_000, 50_000_000]}
  tickFormatter={(v) => `${v / 1_000_000}m`}
  tickLine={false}
  axisLine={{ stroke: "#E4E4E4", strokeWidth: 1 }} 
/>


      <Tooltip formatter={(v) => `₦${(v ?? 0).toLocaleString()}`} />

      <Bar dataKey="inflow" barSize={4} fill="#4545FE" />
      <Bar dataKey="outflow" barSize={4} fill="#12B76A" />
      <Bar dataKey="profit" barSize={4} fill="#F04438" />
    </BarChart>
  </ResponsiveContainer>
</div>



  {/* Metrics (2x2 grid) */}
  <div className="grid grid-cols-2 gap-3">
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




