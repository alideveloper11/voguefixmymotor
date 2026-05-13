
import Herosection from "../../components/components_services/hero_section/Herosection";
import Reviews from "@/components/components_reviews/reviews/Reviews";
import Services from "../../components/components_services/service_section/Services";
import Content3 from "../../components/components_services/content/Content3";
import Green_slider1 from "../../components/components_services/green_slider/Green_slider1";
import SaleParts from "../../components/components_services/saleparts/SaleParts";
import Latest_videos from "../../components/components_services/latest_videos/Latest_videos";
import SalePartsEngineCallToSection from "../../components/components_services/EngineCallToSection/EngineCallToSection";
import FAQ from "../../components/components_services/faq/FAQ";
import Areas_links from "../../components/components_services/areas_links/Areas_links";
import reviewsData from "@/lib/services_data/reviewsData";
export default function Review() {
  return (

               <div className="flex flex-wrap w-full">
                        <div className="w-24/24 text-center"><Herosection /></div>
                        <div className="w-24/24 text-center"><Reviews reviewsData={reviewsData} /></div>
                        <div className="w-24/24 text-center"><Services /></div>
                        <div className="w-24/24 text-center"><SaleParts /></div>
                        <div className="w-24/24 text-center"><Green_slider1 /></div>
                        <div className="w-24/24 text-center"><Content3 /></div>
                        <div className="w-24/24 text-center"><SalePartsEngineCallToSection /></div>
                        <div className="w-24/24 text-center"><Areas_links /></div>
                        <div className="w-24/24 text-center"><FAQ /></div>
                        <div className="w-24/24 text-center"><Latest_videos /></div>
                  </div>
  );
}