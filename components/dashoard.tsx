"use client";
import Image from "next/image";
import Carousel from "./carousel";
import OverviewCard from "./overview-card";
import SalesOverview from "./sales-listings-overview-section";

export default function DashboardPage() {
  const heroCarousel = [
    {
      id: 1,
      image: "/carousel-images/building1.jpg",
      subtitle: "Most Watchlisted",
      title: "Urban Prime Plaza Premiere",
    },
    {
      id: 2,
      image: "/carousel-images/building2.jpg",
      subtitle: "Most CLICKED",
      title: "Central Business District Hub",
    },
    {
      id: 3,
      image: "/carousel-images/building3.jpg",
      subtitle: "HOTTEST LISTING",
      title: "Skyline Towers",
    },
  ];

  const officeCarousel = [
    {
      id: 1,
      image: "/carousel-images/building3.jpg",
      subtitle: "Office Space",
      title: "Downtown Office Complex",
    },
    {
      id: 2,
      image: "/carousel-images/building2.jpg",
      subtitle: "Workspace",
      title: "Corporate Park Suites",
    },
    {
        id: 15,
        image: "/carousel-images/building1.jpg",
        subtitle: "Most Watchlisted",
        title: "Urban Prime Plaza Premiere",
      },
  ];

  const apartmentCarousel = [
    {
      id: 1,
      image: "/carousel-images/building2.jpg",
      subtitle: "Residential",
      title: "Luxury Apartments",
    },
    {
        id: 4,
        image: "/carousel-images/building3.jpg",
        subtitle: "Office Space",
        title: "Downtown Office Complex",
      },
      {
        id: 15,
        image: "/carousel-images/building1.jpg",
        subtitle: "Most Watchlisted",
        title: "Urban Prime Plaza Premiere",
      },
  ];

  return (
    <div className="mx-auto max-w-[1440px] px-6">

        <h2 className="text-[#191919] font-bold text-[20px] mt-4 mb-4  ">Welcome, Ahmed</h2>

    
          <div className="grid grid-cols-1 gap-3 xl:grid-cols-3 mb-6">
  <div className="xl:col-span-2">
    <SalesOverview />
  </div>
  <div className="space-y-6">
      {/* Listings Overview */}
      <OverviewCard
        icon={  <Image
            src={"/icons/solar_home-linear.png"}
            alt={"Previous"}
            width={24}
            height={24}
          />}
        title="Listings Overview"
        stats={[
          { label: "Total", value: "1.8k" },
          { label: "Active", value: "80" },
          { label: "Archived", value: "1k" },
        ]}
        onViewAll={() => console.log("View all listings")}
      />

      {/* Users Overview */}
      <OverviewCard
        icon={<Image
            src={"/icons/user.png"}
            alt={"Previous"}
            width={24}
            height={24}
          />}
        title="Users Overview"
        stats={[
          { label: "Total", value: "20.7k" },
          { label: "Riders", value: "8.5k" },
          { label: "Subscribers", value: "7.5k" },
        ]}
        onViewAll={() => console.log("View all users")}
      />
    </div>

</div>
  <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
      {/* Hero carousel (autoplay) */}
      <Carousel autoPlay interval={5000} items={heroCarousel} />

      {/* Secondary carousel (slower autoplay) */}
      <Carousel autoPlay interval={7000} items={officeCarousel} />

      {/* Static carousel (dots only) */}
      <Carousel autoPlay interval={9000} items={apartmentCarousel} />
    </div>

  
    </div>
  );
}
