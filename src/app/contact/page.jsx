import Contact_page from "@/components/components_contact/Contact_page";

export const metadata = {
  title: "Contact Vogue Fix My Motor | Engine Repair Grays, Essex",
  description: "Contact Vogue Fix My Motor in Grays, Essex for expert engine repair, diagnostics, and car servicing. Get a free quote, book an appointment, or ask our team a question. Serving Essex within a 10-mile radius.",
  alternates: {
    canonical: "https://voguefixmymotor.co.uk/contact",
  },
};

export default function Contact(){
    return(
   <div className="flex flex-wrap w-full">
       <Contact_page />
          
    </div>
    )
    
}
