

import Herosection from "../../components/components_services/hero_section/Herosection";
import SaleParts from "../../components/saleparts/SaleParts";
import Latest_videos from "../../components/latest_videos/Latest_videos";
import LatestVideosData from "@/lib/Areas_data/LatestVideosData";
import SalePartsEngineCallToSection from "../../components/EngineCallToSection/EngineCallToSection";
import servicesData from "@/lib/Areas_data/servicesData";
import Services from "../../components/service_section/Services";


import  { locations } from "@/lib/Areas_data/areas_list";
import saleParts from "@/lib/Areas_data/SaleParts";
import faq_data from "@/lib/Areas_data/faq_data";
import FAQ from "../../components/faq/FAQ";
import Green_slider1 from "../../components/components_areas/green_slider/Green_slider1";
import Green_slider2 from "../../components/components_areas/green_slider/Green_slider2";
import Areas_links from "../../components/areas_links/Areas_links";
export default function Areas() {
  return (
                   <div className="flex flex-wrap w-full">               
                        <div className="w-24/24 text-center"><Herosection /></div>
                       <div className="w-24/24 text-center"><Areas_links locations={locations} /></div>
                        <div className="w-24/24 text-center"><Services servicesData={servicesData}/></div>
                        <div className="w-24/24 text-center"><Green_slider1 /></div>
                        <div className="w-24/24 text-center"><Green_slider2 /></div>
                        <div className="w-24/24 text-center"><SaleParts saleParts={saleParts} /></div>
                        <div className="w-24/24 text-center"><SalePartsEngineCallToSection /></div>
                        <div className="w-24/24 text-center"> <FAQ faq_data={faq_data} /> </div>
                        <div className="w-24/24 text-center"><Latest_videos LatestVideosData={LatestVideosData} /></div>
                    </div>
  )
}