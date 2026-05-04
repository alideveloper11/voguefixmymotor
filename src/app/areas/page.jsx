

import Herosection from "../../components/components_areas/hero_section/Herosection";
import SaleParts from "../../components/components_areas/saleparts/SaleParts";
import Latest_videos from "../../components/components_areas/latest_videos/Latest_videos";
import SalePartsEngineCallToSection from "../../components/components_areas/EngineCallToSection/EngineCallToSection";
import Reviews from "../../components/components_areas/reviews/Reviews";
import Content1 from "../../components/components_areas/content/Content1";
import Content2 from "../../components/components_areas/content/Content2";
import Content3 from "../../components/components_areas/content/Content3";
import Services from "../../components/components_areas/service_section/Services";
import FAQ from "../../components/components_areas/faq/FAQ";
import Green_slider1 from "../../components/components_areas/green_slider/Green_slider1";
import Green_slider2 from "../../components/components_areas/green_slider/Green_slider2";
import Areas_links from "../../components/components_areas/areas_links/Areas_links";
export default function Areas() {
  return (
    
                   <div className="flex flex-wrap w-full">
                            
                        <div className="w-24/24 text-center"><Herosection /></div>
                        <div className="w-24/24 text-center"><Reviews /></div>
                        <div className="w-24/24 text-center"><Areas_links /></div>
                        <div className="w-24/24 text-center"><Services /></div>
                        <div className="w-24/24 text-center"><Green_slider1 /></div>
                        <div className="w-24/24 text-center"><Green_slider2 /></div>
                        <div className="w-24/24 text-center"><SaleParts /></div>
                         <div className="w-24/24 text-center"><Content1 /></div>
                        <div className="w-24/24 text-center"><SalePartsEngineCallToSection /></div>
                        <div className="w-24/24 text-center"><Content2 /></div>
                        <div className="w-24/24 text-center"><Content3 /></div>
                         <div className="w-24/24 text-center"> <FAQ /> </div>
                        <div className="w-24/24 text-center"><Latest_videos /></div>
                    </div>
  )
}