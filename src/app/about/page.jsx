
import Top_component from "@/components/components_about/top_component/Top_component";

import HeroSection from "@/components/components_about/hero_section/HeroSection";
import Green_slider1 from "@/components/components_about/green_slider/Green_slider1";
import Green_slider2 from "@/components/components_about/green_slider/Green_slider2";
import Content1 from "@/components/components_about/content/Content1";
import Latest_videos from "@/components/components_about/latest_videos/Latest_videos";

export default function About() {   
  return (
<div className="flex flex-wrap w-full">
            <div className="w-full">
                <Top_component />
                <HeroSection />
                <Green_slider1 />
                <Green_slider2 />
                <Content1 />
                <Latest_videos />
            </div>
</div>
  );
}




