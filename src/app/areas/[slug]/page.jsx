import { locations } from "@/lib/Areas_data/areas_list";
import Reviews from "@/components/components_reviews/reviews/Reviews";
import Latest_videos from "@/components/components_areas/latest_videos/Latest_videos";
import Servedincity from "../../../components/components_areas/detailpage/servedincity/Servedincity";
import SaleParts from "@/components/components_areas/saleparts/SaleParts";
import Herosection from "@/components/components_areas/detailpage/hero_section/Herosection";
import Requestaqoute from "@/components/components_areas/detailpage/requestaqoute/Requestaqoute";
import FAQ from "@/components/components_areas/detailpage/faq/FAQ";
import Services from "@/components/components_areas/detailpage/service_section/Services";
import { notFound } from "next/navigation";
import EngineCallToSection from "@/components/components_areas/EngineCallToSection/EngineCallToSection";
import Green_slider from "@/components/components_areas/detailpage/green_slider/Green_slider";
export default async function ServiceDetail({ params }) {
  const { slug } = await params;
  const areas = locations.find(
    (item) => item.slug === slug
  );
    if (!areas) {
    notFound();
  }
  return (
    <div className="flex flex-wrap w-full"> 
    
     <div className="w-24/24 text-center"><Herosection area={areas} /></div>       
      <div className="w-24/24 text-center"><Reviews reviewsData={areas.Reviews} /></div>   
      <div className="w-24/24 text-center"><Servedincity content={areas.served} /></div>     
      <div className="w-24/24 text-center"><Green_slider slides={areas.green_slider.items} image={areas.green_slider.img} /></div>  
        
        <div className="w-24/24 text-center"><Requestaqoute content={areas.requestqoute} /></div> 
          <div className="w-24/24 text-center"><EngineCallToSection /></div> 
          <div className="w-24/24 text-center"><Services servicesData={areas.servicesData} /></div>
          <div className="w-24/24 text-center"><SaleParts /></div>
           <div className="w-24/24 text-center  mb-5"><FAQ faq_data={areas.faq}  /></div>   
        <div className="w-24/24 text-center"><Latest_videos /></div>
                      
    </div>
  );
}