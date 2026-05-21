import Contact_page from "@/components/components_contact/Contact_page";
import { Suspense } from "react";
export default function Contact(){
    return(
   <div className="flex flex-wrap w-full">
    <Suspense fallback={<div style={{fontWeight:"bold", backgroundColor:"black", color:"white"}}>Loading...</div>}>
       <Contact_page />
    </Suspense>
          
    </div>
    )
    
}