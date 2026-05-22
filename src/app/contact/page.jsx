import Contact_page from "@/components/components_contact/Contact_page";
import { Suspense } from "react";

export const metadata = {
  title: "Contact Vogue Fix My Motor | Engine Repair Grays, Essex",
  description: "Contact Vogue Fix My Motor in Grays, Essex for expert engine repair, diagnostics, and car servicing. Get a free quote, book an appointment, or ask our team a question. Serving Essex within a 10-mile radius.",
};
export default function Contact(){
    return(
   <div className="flex flex-wrap w-full">
    <Suspense fallback={<div style={{fontWeight:"bold", backgroundColor:"black", color:"white"}}>Loading...</div>}>
       <Contact_page />
    </Suspense>
          
    </div>
    )
    
}