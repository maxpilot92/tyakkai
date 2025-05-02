import Navbar from "@/components/Navbar";
import HeroSection from "./_components/HeroSection";
import axios from "axios";

export default async function Home() {
  let services = [];
  try {
    const res = await axios.get("http://54.66.132.165/api/service");
    services = res.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  return (
    <div>
      <Navbar />
      <div className="relative">
        <HeroSection services={services} />
        {/* <ImageScroll /> */}
      </div>
      {/* <MarqueeLogo /> */}
    </div>
  );
}
