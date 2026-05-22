import Top_component from "@/components/components_about/top_component/Top_component";
import Green_slider1 from "@/components/components_about/green_slider/Green_slider1";
import Latest_videos from "@/components/components_about/latest_videos/Latest_videos";

export const metadata = {
  title: "About Vogue Fix My Motor | Engine Repair Specialists in Grays, Essex",
  description: "Learn about Vogue Fix My Motor — Grays, Essex based engine repair and car servicing specialists. Trusted by thousands of customers across Essex. Honest pricing, quality parts, and warranty on all repairs.",
};

export default function About() {
  return (
<div className="flex flex-wrap w-full">
            <div className="w-full flex flex-wrap h-[300px] items-center justify-center" id="second_hero_section">
              <div className="w-full text-center">
                <h1 className="text-white font-bold text-2xl md:text-3xl">About Vogue Fix My Motor</h1>
                <p className="text-white text-sm md:text-base mt-2 mx-10">Engine Repair &amp; Car Servicing Specialists based in Grays, Essex — trusted by drivers across the region.</p>
              </div>
            </div>
            <div className="w-full">
                <Top_component />
                <Green_slider1 />
                <Latest_videos />
            </div>
</div>
  );
}




