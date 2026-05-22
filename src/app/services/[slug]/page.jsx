import servicesData from "@/lib/services_data/servicesData";
import serviceUniqueSlides from "@/lib/services_data/serviceUniqueSlides";
import serviceUniqueContent3 from "@/lib/services_data/serviceUniqueContent3";
import Herosection from "../../../components/components_services/detail_page/hero_section/Herosection";
import Reviews from "@/components/components_reviews/reviews/Reviews";
import Content3 from "../../../components/components_services/detail_page/content/Content3";
import FAQ from "../../../components/components_services/detail_page/faq/FAQ";
import SaleParts from "@/components/saleparts/SaleParts";
import { notFound } from "next/navigation";
import EngineCallToSection from "@/components/EngineCallToSection/EngineCallToSection";
import LatestVideos from "@/components/latest_videos/Latest_videos";
import Green_slider1 from "../../../components/components_services/detail_page/green_slider/Green_slider1";
export default async function ServiceDetail({ params }) {
  const { slug } = await params;
  const service = servicesData.find(
    (item) => item.slug === slug
  );
   if (!service) {
    notFound();
  }
  const uniqueSlide = serviceUniqueSlides[service.slug];
  const mergedSlides = uniqueSlide
    ? [uniqueSlide, ...service.green_slider1.items.slice(1)]
    : service.green_slider1.items;
  const content3 = serviceUniqueContent3[service.slug] || service.contents.content3;
  return (
    <div className="flex flex-wrap w-full">
    <div className="w-24/24 text-center"><Herosection  name={service.name} text={service.text}  /></div>
    <div className="w-24/24 text-center"><Reviews reviewsData={service.Reviews} /></div>

    <div className="w-24/24 text-center"><SaleParts /></div>
   <div className="w-24/24 text-center"><Green_slider1 slides={mergedSlides} image={service.green_slider1.img} /></div>
  
    <div className="w-24/24 text-center mt-3"><Content3 content={content3} /></div>  
   <div className="w-24/24 text-center mt-10"> <EngineCallToSection /> </div>
    <div className="w-24/24 text-center"> <FAQ faq_data={service.faq} /> </div>
    <div className="w-24/24 text-center"> <LatestVideos /> </div>
    </div>
  );
}