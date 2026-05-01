import servicesData from "@/lib/services_data/servicesData";
import Herosection from "../../../components/components_services/detail_page/hero_section/Herosection";
import Reviews from "../../../components/components_services/detail_page/reviews/Reviews";
import Content1 from "../../../components/components_services/detail_page/content/Content1";
import Content2 from "../../../components/components_services/detail_page/content/Content2";
import Content3 from "../../../components/components_services/detail_page/content/Content3";
import Content4 from "../../../components/components_services/detail_page/content/Content4";
import Content5 from "../../../components/components_services/detail_page/content/Content5";
import Content6 from "../../../components/components_services/detail_page/content/Content6";
import FAQ from "../../../components/components_services/detail_page/faq/FAQ";
import SaleParts from "@/components/saleparts/SaleParts";

import EngineCallToSection from "@/components/EngineCallToSection/EngineCallToSection";
import LatestVideos from "@/components/latest_videos/Latest_videos";
import Green_slider1 from "../../../components/components_services/detail_page/green_slider/Green_slider1";
import Green_slider2 from "../../../components/components_services/detail_page/green_slider/Green_slider2";
import Description from "../../../components/components_services/detail_page/description/Description";
export default async function ServiceDetail({ params }) {
  const { slug } = await params;
  const service = servicesData.find(
    (item) => item.slug === slug
  );
  return (
    <div className="flex flex-wrap w-full">
    <div className="w-24/24 text-center"><Herosection  name={service.name} text={service.text}  /></div> 
    <div className="w-24/24 text-center"><Reviews reviews={service.Reviews} /></div>
        <div className="w-24/24 text-center"><Description content={service.discription} image={service.discription.image}  /></div> 
    <div className="w-24/24 text-center"><Content1 content={service.contents.content1} /></div>  
    <div className="w-24/24 text-center"><Content2 content={service.contents.content2} /></div>  
    <div className="w-24/24 text-center"><SaleParts /></div> 
    <div className="w-24/24 text-center"><Green_slider2 slides={service.green_slider2.items} image={service.green_slider2.img} /></div>  
    
    <div className="w-24/24 text-center"><Content3 content={service.contents.content3} /></div>  
    <div className="w-24/24 text-center"><Content4 content={service.contents.content4} /></div> 
    <div className="w-24/24 text-center"><Green_slider1 slides={service.green_slider1.items} image={service.green_slider1.img} /></div>  
    
    <div className="w-24/24 text-center"><Content5 content={service.contents.content5} /></div>  
    <div className="w-24/24 text-center"><Content6 content={service.contents.content6} /></div>  
    <div className="w-24/24 text-center"> <EngineCallToSection /> </div>
    <div className="w-24/24 text-center"> <FAQ faq_data={service.faq} /> </div>
    <div className="w-24/24 text-center"> <LatestVideos /> </div>
    </div>
  );
}