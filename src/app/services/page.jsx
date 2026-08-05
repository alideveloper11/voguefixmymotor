
import Herosection from "../../components/components_services/hero_section/Herosection";
import Reviews from "@/components/components_reviews/reviews/Reviews";
import servicesData from "@/lib/services_data/servicesData";
import Services from "../../components/service_section/Services";
import Content from "../../components/content/Content";
import Green_slider1 from "../../components/components_services/green_slider/Green_slider1";
import SaleParts from "@/components/saleparts/SaleParts";
import Latest_videos from "../../components/latest_videos/Latest_videos";

import { locations } from "@/lib/services_data/areas_list";
import saleParts from "@/lib/services_data/SaleParts";
import LatestVideosData from "@/lib/services_data/LatestVideosData";
import SalePartsEngineCallToSection from "../../components/EngineCallToSection/EngineCallToSection";
import FAQ from "../../components/faq/FAQ";

import faq_data from "@/lib/services_data/faq_data";
import Areas_links from "../../components/areas_links/Areas_links";
import reviewsData from "@/lib/services_data/reviewsData";
import { getcontent3 } from "@/lib/services_data/content_data";
const data = getcontent3();
export const metadata = {
  alternates: {
    canonical: "https://voguefixmymotor.co.uk/services",
  },
};
export default function Review() {
  return (

               <div className="flex flex-wrap w-full">
                        <div className="w-24/24 text-center"><Herosection /></div>
                        <div className="w-24/24 text-center"><Reviews reviewsData={reviewsData} /></div>
                        <div className="w-24/24 text-center"><Services servicesData={servicesData} /></div>
                        <div className="w-24/24 text-center"><SaleParts saleParts={saleParts}/></div>
                        <div className="w-24/24 text-center"><Green_slider1 /></div>
                        <div className="w-24/24 text-center"><Content data={data} /></div>
                        <div className="w-24/24 text-center"><SalePartsEngineCallToSection /></div>
                        <div className="w-24/24 text-center"><Areas_links locations={locations} /></div>
                        <div className="w-24/24 text-center"><FAQ faq_data={faq_data} /></div>
                        <div className="w-24/24 text-center"><Latest_videos LatestVideosData={LatestVideosData} /></div>
                  </div>
  );
}