import DashboardPage from "@/components/dashoard";
import Navbar from "@/components/navbar";
import SubNavbar from "@/components/subnav";

export default function Home() {
  return (
    <div className="flex-col">
    <Navbar/>
    <SubNavbar/>
    <DashboardPage/>
    </div>
  );
}
