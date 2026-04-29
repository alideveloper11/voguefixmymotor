
import Reviews from "../components/reviews/Reviews";
import Services from "../components/service_section/Services";
import SaleParts from "@/components/saleparts/SaleParts";
import Topmakes from "@/components/top_makes/Topmakes";
import Why_choose from "@/components/why_choose/Why_choose";
import FAQ from "@/components/faq/FAQ";
import EngineCallToSection from "@/components/EngineCallToSection/EngineCallToSection";
import Content1 from "@/components/content/Content1";
import Content2 from "@/components/content/Content2";
import Content3 from "@/components/content/Content3";
import Content4 from "@/components/content/Content4";
import Explore from "@/components/explore/Explore";
import LatestVideos from "@/components/latest_videos/Latest_videos";
import HeroSection from "@/components/hero_section/HeroSection";
import Green_slider from "@/components/green_slider/Green_slider";

export default function Home() {
  return (
             <div className="flex flex-wrap w-full">
                    
                    <div className="w-24/24 text-center"><HeroSection /></div>
                    <div className="w-24/24 text-center"><Reviews /></div>
                    <div className="w-24/24 text-center"><Topmakes /></div>
                    <div className="w-24/24 text-center"><Why_choose /></div>
                    <div className="w-24/24 text-center"><Services /></div>
                    <div className="w-24/24 text-center"> <Content1 /> </div>
                    <div className="w-24/24 text-center"><SaleParts /></div>
                    <div className="w-24/24 text-center"> <Content2 /> </div>                 
                    <div className="w-24/24 text-center"> <Explore/> </div>                 
                    <div className="w-24/24 text-center"> <EngineCallToSection /> </div>
                    <div className="w-24/24 text-center"> <Green_slider /> </div>
                    <div className="w-24/24 text-center"> <Content3 /> </div>
                    <div className="w-24/24 text-center"> <Content4 /> </div>
                    <div className="w-24/24 text-center"> <FAQ /> </div>
                    <div className="w-24/24 text-center"> <LatestVideos /> </div>
                    </div>
  );
}
