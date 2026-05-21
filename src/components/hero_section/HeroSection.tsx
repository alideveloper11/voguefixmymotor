
"use client"
import { FormEvent } from "react";
import {useState} from 'react'
import servicesData from "@/lib/services_data/servicesData";
import { useRef, useEffect } from "react";
export default function HeroSection(){
    const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [phone, setPhone] = useState("");
  const [postcode, setPostcode] = useState("");
  const [registration, setRegistration] = useState("");
 const [error, setError] = useState<Record<string, string>>({});
const [open, setOpen] = useState(false);
const [selectedService, setSelectedService] = useState("");
const dropdownRef = useRef<HTMLDivElement | null>(null);
useEffect(() => {
  function handleClickOutside(event: MouseEvent) {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setOpen(false);
    }
  }

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);
  function form_validation(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  
    let newErrors: {
  email?: string;
  name?: string;
  phone?: string;
  postcode?: string;
  registration?: string;
} = {};
  
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      console.log("email error");
      newErrors.email = "Please enter a valid email address.";

    }
  
    if (!/^[A-Za-z ]*$/.test(name)) {
      console.log("name error");
      newErrors.name = "Name can only contain letters and spaces.";
    }
    if (!/^\d{11}$/.test(phone)) {
    newErrors.phone = "Please enter a valid 11-digit phone number.";
  }

if (!/^[A-Za-z0-9 ]+$/.test(postcode)) {
  newErrors.postcode =
    "Postcode can only contain letters, numbers, and spaces.";
}
if (!/^[A-Za-z0-9 ]+$/.test(registration)) {
  newErrors.registration =
    "Registration can only contain letters, numbers, and spaces.";
}
  
    setError(newErrors);
  
    // console.log("button clicked");
    // console.log("FINAL ERROR OBJECT:", newErrors);
  }
    return(
          <form onSubmit={form_validation}>
   
                <div className="flex flex-wrap h-[900px] md:h-[600px]" id="hero_section">
                 <div className="w-full md:w-6/12  flex items-center justify-center">
                        <div className="m-6 md:m-15">
                            <p className="font-bold text-left text-white text-[40px]">
                                Reliable Car Repair Services You Can Trust.
                            </p>
                            <p className="font-bold text-left text-white text-[12px] mt-3">
                                Welcome to Vogue Fix My Motor, your trusted partner for expert auto services.
                                Whether you're in need of a simple car 
                                auto repair service or a complete engine overhaul, we've got you covered.
                            </p>
                        </div>
                 </div>
                 <div className="w-full md:w-6/12  flex items-center justify-center text-sm">
                                <div className="w-full mr-0 md:mr-14">
                                   <div className="" style={{backgroundColor:"black", borderRadius:"10px"}} >
                                       
                                      
                                     <div className="w-full text-left p-0 m-0 ">
                                      
                                                                               <div className="p-5">
                                                                                <p className="text-left font-bold text-white mt-4">Get a Quick Qoute</p>
                                        
                                                                                 <div className="flex border rounded overflow-hidden w-full mt-2" style={{borderColor:"#FFCB05"}}>
                                                
                                                    <button className="bg-blue-900 text-white px-4 items-center justify-center ">
                                                    <div><img src="/Vector.svg" alt="flag"  className="mt-2"/></div>
                                                    <div>UK</div>
                                                    </button>


                                                    <input
                                                    type="text"
                                                    required
                                                    value={registration}
                                                    onChange={(e) => setRegistration(e.target.value)}
                                                    placeholder="Enter Registration"
                                                    className="flex-1 px-4 py-4 w-full outline-none text-black placeholder-black"
                                                    style={{ backgroundColor: "#FFCB05" }}
                                                    />
                                 
                                                                                    
                                            </div>   
                                                 {error.registration && (
                                <p style={{ color: "red" }}>{error.registration}</p>
                                )}
                                <div className="flex flex-wrap">
                                  <div className="w-full md:w-11/24 mt-4">
   <label className=" text-sm text-white font-medium">Full Name <span style={{color:"red"}}>*</span></label>
                                                    <input
                                                    type="text"
                                                    value={name} 
                                                    required
                                                    name="name"
                                                    placeholder="John Smith"
                                                    style={{backgroundColor:"rgba(255, 255, 255, 0.26)", borderColor:"rgba(255, 255, 255, 0.15)"}}
                                                    className="border rounded-md placeholder-white text-white  p-2 w-full outline-none"
                                                     onChange={(e) => {
                                                     setName(e.target.value);
                                                   }} />
                                                   {error.name && (
                                                     <p style={{ color: "red" }}>{error.name}</p>
                                                   )}
                                  </div>
                                  <div className="w-full md:w-2/24 md:mt-4"></div>
                                  <div className="w-full md:w-11/24 mt-4">
  <label className=" text-sm text-white font-medium">Email Address <span style={{color:"red"}}>*</span></label>
                                        <input
                                        type="email"
                                         required
                                        placeholder="jhon@example.com"
                                        style={{backgroundColor:"rgba(255, 255, 255, 0.26)", borderColor:"rgba(255, 255, 255, 0.15)"}}
                                        className="border rounded-md placeholder-white text-white w-full  p-2 outline-none"
                                         value={email}
                                         name="email"
                                             onChange={(e) => {
                                           setEmail(e.target.value);
                                         }}
                                         />
                                         {error.email && (
                                           <p style={{ color: "red" }}>{error.email}</p>
                                         )}
                                  </div>
                                   <div className="w-full md:w-11/24 mt-4">
                       <label className="text-sm text-white font-medium">Phone Number  <span style={{color:"red"}}>*</span></label>
                                                   <input
                                                        type="number"
                                                        value={phone}
                                                        required
                                                        placeholder="01708 123456"
                                                        className="border rounded-md placeholder-white text-white w-full p-2 outline-none"
                                                        style={{ backgroundColor: "rgba(255, 255, 255, 0.26)", borderColor:"rgba(255, 255, 255, 0.15)" }}
                                                        onChange={(e) => setPhone(e.target.value)}
                                                        />
                                                        {error.phone && <p style={{ color: "red" }}>{error.phone}</p>}
                                             
                                  </div>
                                  <div className="w-full md:w-2/24 md:mt-4"></div>
                                  <div className="w-full md:w-11/24 mt-4">
<label className=" text-sm text-white  font-medium">Postcode  <span style={{color:"red"}}>*</span></label>
                                        <input
                                            type="text"
                                            required
                                            value={postcode}
                                            onChange={(e) => setPostcode(e.target.value)}
                                            placeholder="POSTCODE AB12"
                                            className="border rounded-md placeholder-white w-full text-white p-2 outline-none"
                                            style={{
                                                backgroundColor: "rgba(255, 255, 255, 0.26)",
                                                borderColor: "rgba(255, 255, 255, 0.15)",
                                            }}
                                            />
                                            {error.postcode && (
  <p style={{ color: "red" }}>{error.postcode}</p>
)}
                                  </div>
                                </div>
                                                                            <label className="block text-sm text-white mt-2 mb-2 font-medium">
                                                                            Select Service <span style={{color:"red"}}>*</span>
                                                                            </label>
<div className="relative w-full mt-2" ref={dropdownRef}>

  {/* SELECT BOX */}
  <div
    onClick={() => setOpen(!open)}
    className="w-full py-3 px-4 rounded-lg cursor-pointer text-white"
    style={{ backgroundColor: "rgba(255,255,255,0.48)" }}
  >
    {selectedService
      ? servicesData.find((s) => s.slug === selectedService)?.name
      : "Select Services"}
  </div>

  {/* DROPDOWN */}
  {open && (
  <div
    className="absolute left-0 w-full mt-1 shadow-lg z-50  rounded-lg overflow-hidden"
    style={{
       backgroundColor: "#cfcfcf",
      color:"black"
    }}
  >
    <div
     className="custom-scrollbar"
      style={{
        maxHeight: "180px",
        overflowY: "auto",
      }}
    >
      {servicesData.map((service) => (
        <div
          key={service.id}
          onClick={() => {
            setSelectedService(service.slug);
            setOpen(false);
          }}
          className="px-4 py-3 text-black cursor-pointer border-b border-gray-700 hover:bg-black hover:text-white"
        >
          {service.name}
        </div>
      ))}
    </div>
  </div>

  )}

</div>
               <div className="w-full mt-5">
  <button
    type="submit"
    className="w-full mt-5 mb-5 pt-2 pb-2 text-white cursor-pointer font-bold rounded-md"
    style={{
      background:
        "radial-gradient(53.6% 50% at 46.4% 50%, #00BC71 0%, #036F3D 100%)",
    }}
  >
    Get Quotation
  </button>
</div>
                                                                                     
                                                                    </div>
                                                                 
                                </div>
                                </div>
                                 
                                </div>
                 </div>
                 </div>
                 </form>
    )
}