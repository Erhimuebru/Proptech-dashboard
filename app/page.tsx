import DashboardPage from "@/components/dashoard";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="flex-col">
    <Navbar/>
    <DashboardPage/>
    </div>
  );
}
