import { locations } from "@/lib/Areas_data/areas_list";
import Reviews from "@/components/components_areas/detailpage/reviews/Reviews";
import Latest_videos from "@/components/components_areas/latest_videos/Latest_videos";
import Content1 from "../../../components/components_areas/detailpage/content/Content1";
import Content2 from "../../../components/components_areas/detailpage/content/Content2";
import Servedincity from "../../../components/components_areas/detailpage/servedincity/Servedincity";
import SaleParts from "@/components/components_areas/saleparts/SaleParts";
import Herosection from "@/components/components_areas/detailpage/hero_section/Herosection";
import Requestaqoute from "@/components/components_areas/detailpage/requestaqoute/Requestaqoute";
import FAQ from "@/components/components_areas/detailpage/faq/FAQ";
import Services from "@/components/components_areas/detailpage/service_section/Services";

import EngineCallToSection from "@/components/components_areas/EngineCallToSection/EngineCallToSection";
export default async function ServiceDetail({ params }) {
  const { slug } = await params;
  const areas = locations.find(
    (item) => item.slug === slug
  );
  return (
    <div className="flex flex-wrap w-full"> 
    
     <div className="w-24/24 text-center"><Herosection /></div>       
      <div className="w-24/24 text-center"><Reviews reviews={areas.Reviews} /></div>       
        <div className="w-24/24 text-center"><Servedincity content={areas.served} /></div>     
        <div className="w-24/24 text-center"><Requestaqoute content={areas.requestqoute} /></div> 
          <div className="w-24/24 text-center"><EngineCallToSection /></div> 
          <div className="w-24/24 text-center"><Services servicesData={areas.servicesData} /></div>
          <div className="w-24/24 text-center"><SaleParts /></div>
           <div className="w-24/24 text-center"><Content1 content={areas.paragraph1} /></div>  
           <div className="w-24/24 text-center mt-10 mb-5"><Content2 content={areas.paragraph2} /></div>
           <div className="w-24/24 text-center mt-10 mb-5"><FAQ faq_data={areas.faq}  /></div>   
        <div className="w-24/24 text-center"><Latest_videos /></div>
                      
    </div>
  );
}