
import Herosection from "../../components/components_services/hero_section/Herosection";
import Reviews from "../../components/components_services/reviews/Reviews";
import Services from "../../components/components_services/service_section/Services";
import Content1 from "../../components/components_services/content/Content1";
import Content2 from "../../components/components_services/content/Content2";
import Content3 from "../../components/components_services/content/Content3";
import Content4 from "../../components/components_services/content/Content4";
import Content5 from "../../components/components_services/content/Content5";
import Green_slider1 from "../../components/components_services/green_slider/Green_slider1";
import Green_slider2 from "../../components/components_services/green_slider/Green_slider2";
import SaleParts from "../../components/components_services/saleparts/SaleParts";
import Latest_videos from "../../components/components_services/latest_videos/Latest_videos";
import SalePartsEngineCallToSection from "../../components/components_services/EngineCallToSection/EngineCallToSection";
import FAQ from "../../components/components_services/faq/FAQ";
export default function Review() {
  return (

               <div className="flex flex-wrap w-full">
                        <div className="w-24/24 text-center"><Herosection /></div>
                        <div className="w-24/24 text-center"><Reviews /></div>
                        <div className="w-24/24 text-center" id="services"><Services /></div>
                        <div className="w-24/24 text-center"><Content1 /></div>
                        <div className="w-24/24 text-center"><Content2 /></div>
                        <div className="w-24/24 text-center"><SaleParts /></div>
                        <div className="w-24/24 text-center"><Green_slider1 /></div>
                        <div className="w-24/24 text-center"><Content3 /></div>
                        <div className="w-24/24 text-center"><Green_slider2 /></div>
                        <div className="w-24/24 text-center"><Content4 /></div>
                        <div className="w-24/24 text-center"><Content5 /></div>
                        <div className="w-24/24 text-center"><SalePartsEngineCallToSection /></div>
                        <div className="w-24/24 text-center"><FAQ /></div>
                        <div className="w-24/24 text-center"><Latest_videos /></div>
                        </div>
  );
}