"use client"
import { FormEvent } from "react";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { normalizeRegistration } from "@/lib/registration";
export default function Contact_form(){
  const [loading, setLoading] = useState(false);
const [serverError, setServerError] = useState("");
     const router = useRouter();
      const searchParams = useSearchParams();
  const regFromUrl = searchParams.get("reg") || "";
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [phone, setPhone] = useState("");
  const [postcode, setPostcode] = useState("");
  const [registration, setRegistration] = useState(() => normalizeRegistration(regFromUrl));
  const [message, setMessage] = useState("");
  const [error, setError] = useState<Record<string, string>>({});

  function clearError(field: string) {
    if (error[field]) setError((prev) => ({ ...prev, [field]: "" }));
  }
async function form_validation(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();

  const newErrors: {
    email?: string;
    name?: string;
    phone?: string;
    postcode?: string;
    registration?: string;
    message?: string;
  } = {};

  // NAME VALIDATION
  if (!name.trim())
    newErrors.name = "Full name is required.";
  else if (name.trim().length < 2)
    newErrors.name = "Name is too short.";
  else if (!/^[A-Za-z\s'\-]+$/.test(name))
    newErrors.name = "Name can only contain letters.";

  // PHONE VALIDATION
  const phoneDigits = phone.replace(/\D/g, "");
  if (!phoneDigits)
    newErrors.phone = "Phone number is required.";
  else if (phoneDigits.length < 10)
    newErrors.phone = "Please enter a valid phone number.";

  // EMAIL VALIDATION
  if (!email.trim())
    newErrors.email = "Email address is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
    newErrors.email = "Enter a valid email address.";

  // REGISTRATION VALIDATION (optional)
  const normalizedRegistration = normalizeRegistration(registration);
  if (!normalizedRegistration)
    newErrors.registration = "Registration number is required.";
  else if (registration && registration !== normalizedRegistration)
    newErrors.registration = "Registration must be alphanumeric only (max 8 characters).";
  else if (normalizedRegistration.length > 8)
    newErrors.registration = "Registration must be alphanumeric only (max 8 characters).";

  // POSTCODE VALIDATION (optional)
  if (!postcode.trim())
    newErrors.postcode = "Postcode is required..";

  else if (postcode && !/^[A-Za-z0-9][A-Za-z0-9\s]{1,7}$/.test(postcode.trim()))
    newErrors.postcode = "Enter a valid postcode.";

  // MESSAGE VALIDATION
  if (!message.trim())
    newErrors.message = "Message is required.";
  else if (message.trim().length < 10)
    newErrors.message = "Please provide more detail (at least 10 characters).";

  setError(newErrors);

  if (Object.keys(newErrors).length === 0) {
    try {
      setLoading(true);
      setServerError("");
      
      // PAYLOAD BANAO (CONTACT FORM KE HISAB SE)
      const payload = {
        website_name: "voguefixmymotor",
        name: name,
        phone: phone,
        email: email,
        postcode: postcode,
        vrm: normalizedRegistration,
        issue: message,  // YAHAN MESSAGE HAI, SERVICE NAHI
        browser: navigator.userAgent,
        ip_address: "Client-Side",
      };
      
      // API CALL
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        router.push("/thank-you");
      } else {
        alert(data.error || "Something went wrong");
      }
      
    } catch (error: unknown) {
      console.log(error);
      alert("Server Error. Please try again later.");
    } finally {
      setLoading(false);
    }
  }
}
    return(

          
            <form  className="flex flex-wrap  py-2 w-full rounded-xl" onSubmit={form_validation} noValidate>
   
                       


                                    <div style={{backgroundColor:"white", colorScheme:"light"}} className="w-full rounded-xl " >
                                        
                                        <div>
                                                                      
                                                                        </div>
                                                                                 
                                                                                <div className="flex flex-wrap text-left">
                                                                                    
                                                                                          <div className=" w-full ">
                                                                                        <div className="mx-2">
                                                                             <label className="mb-1 text-sm text-black font-medium">Reg Number  <span style={{color:"red"}}>*</span></label>
                                                                                      
                                                                                 <div className="flex border rounded overflow-hidden w-full mt-2" style={{borderColor:"#FFCB05"}}>
                                                
                                                    <button type="button" className="bg-blue-900 text-white px-4 items-center justify-center ">
                                                    <div><Image src="/Vector.svg" alt="flag" width={28} height={20} className="mt-2"/></div>
                                                    <div>UK</div>
                                                    </button>


                                                    <input
                                                    type="text"
                                                    required
                                                    value={registration}
                                                    onChange={(e) => {
    setRegistration(normalizeRegistration(e.target.value));
  }}
                                                    placeholder="Enter Registration"
                                                    className="flex-1 px-4 py- registration w-full outline-none text-black"
                                                    style={{ backgroundColor: "#FFCB05" }}
                                                    />
                                 
                                                                                    
                                            </div>   
                                                 {error.registration && (
                                <p style={{ color: "red" }}>{error.registration}</p>
                                )}
                                                                            </div>
                                                                        </div>
                                                                                    <div className="w-full lg:w-12/24 mt-3">
                                                                                    

                                                                                    {/* Phone Number */}
                                                                                    <div className="mt-3 mx-2">
                                                                                        <label className="mb-1 text-sm text-black font-medium">Full Name  <span style={{color:"red"}}>*</span></label>
                                                                                        <input
                                                                                        type="text"
                                                                                         value={name} 
                                                                                          required
                                                                                            name="name"
                                                                                        placeholder="John Smith"
                                                                                    
                                                                                        className="border border-[#4B5563] rounded-md placeholder-[#4B5563] text-black  p-2 w-full outline-none"
                                                                                        onChange={(e) => {
                                                                                                setName(e.target.value);
                                                                                                clearError("name");
                                                                                            }}
                                                                                        />
                                                                                        {error.name && (
                                                                                            <p style={{ color: "red" }}>{error.name}</p>
                                                                                        )}
                                                                                    </div>
                                                                                    </div>
                                                                            
                                                                        <div className="w-full lg:w-12/24 mt-3 ">
                                                                        

                                                                     


                                                                        <div className="mt-3 mx-2">
                                                                            <label className="mb-1 text-sm text-black  font-medium">Phone Number  <span style={{color:"red"}}>*</span></label>
                                                                            <input
                                                                            type="text"
                                                                             value={phone}
                                                                             required
                                                                             onChange={(e) => { setPhone(e.target.value); clearError("phone"); }}
                                                                            placeholder="071234567800"
                                                                            className="border border-[#4B5563]  rounded-md placeholder-[#4B5563] w-full text-black  p-2 outline-none"
                                                                            />
                                                                             {error.phone && <p style={{ color: "red" }}>{error.phone}</p>}
                                                                        </div>


                                                                        </div>
                                                                        
                                                                    </div>
                                                                                <div className="flex flex-wrap text-left">
                                                                                  












                                                                                 
                                                                                </div>
                                                                                <div className="flex flex-wrap text-left">
                                                                                    
                                                                                    <div className="w-full lg:w-12/24 mt-3">
                                                                                    

                                                                                  
                                                                                    <div className="mt-3 mx-2">
                                                                                        <label className="mb-1 text-sm text-black font-medium">Email  <span style={{color:"red"}}>*</span></label>
                                                                            <input
                                                                            type="email"
                                                                            required
                                                                            placeholder="jhon@example.com"
                                                                            className="border border-[#4B5563] rounded-md placeholder-[#4B5563] text-black w-full  p-2 outline-none"
                                                                              value={email}
                                                                                name="email"
                                                                                    onChange={(e) => {
                                                                                setEmail(e.target.value);
                                                                                clearError("email");
                                                                                }}
                                                                                />
                                                                                {error.email && (
                                                                                <p style={{ color: "red" }}>{error.email}</p>
                                                                                )}
                                                                                       
                                                                                    </div>
                                                                                    </div>
                                                                            
                                                                        <div className="w-full lg:w-12/24 mt-3 ">
                                                                        

                                                                     


                                                                        <div className="mt-3 mx-2">
                                                                            <label className="mb-1 text-sm text-black  font-medium">Postcode  <span style={{color:"red"}}>*</span></label>
                                                                            <input
                                                                            type="text"
                                                                            required
                                            
                                                                            value={postcode}
                                                                            
                                                                            onChange={(e) => { setPostcode(e.target.value); clearError("postcode"); }}
                                                                            placeholder="RM20 4EL"
                                                                            className="border border-[#4B5563]  rounded-md placeholder-[#4B5563] w-full text-black  p-2 outline-none"
                                                                            />
                                                                            {error.postcode && (
                                                                                <p style={{ color: "red" }}>{error.postcode}</p>
                                                                       )} </div>


                                                                        </div>
                                                                        
                                                                    </div>
                                                                     <div className="flex flex-wrap text-left">
                                                                                    <div className="mt-3 w-full">
                                                                                        
                                                                                        <div className="mx-2">
                                                                                        <label className="mb-1 text-sm text-black font-medium">Message  <span style={{color:"red"}}>*</span></label>
                                                                                        <textarea
  value={message}
  onChange={(e) => { setMessage(e.target.value); clearError("message"); }}
  placeholder="Tell us how can we help you (at least 10 characters)"
  className="border border-[#4B5563] h-[180px] rounded-md placeholder-[#4B5563] text-black p-2 w-full outline-none"
/>
{error.message && <p style={{ color: "red" }}>{error.message}</p>}
                                                                                        </div>
                                                                                    </div>
                                                                                    </div>
                                                                    <div className="p-5 pt-1">
                                                                    <center><button
  disabled={loading}
  className={`mt-5 mb-5 pt-2 pb-2 text-white bg-[#059669] hover:bg-[#03855c] font-bold rounded-md
  ${loading ? "opacity-50 cursor-not-allowed" : ""}
  `}
  style={{
    display: "block",
   color:"white",
    width: "90%",
    margin: "20px",
  }}
>
  {loading ? "Sending..." : "Send Message"}
</button>
{
  serverError && (
    <p className="text-red-500 text-center">
      {serverError}
    </p>
  )
}</center>
                                                                    <div className="text-center text-[#4B5563] mt-1 mb-1 text-sm">
                                                                                                    We&apos;ll respond to your message within 24 hours during business days
                                                                   </div>
                                                                    </div>
                                                                   
                                                                    </div>
                                                    
                  
             </form>
              
                       
          
    )
}
