"use client"
import { FormEvent } from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
export default function Contact(){
  const [loading, setLoading] = useState(false);
const [serverError, setServerError] = useState("");
     const router = useRouter();
      const searchParams = useSearchParams();
  const regFromUrl = searchParams.get("reg") || "";
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [phone, setPhone] = useState("");
  const [postcode, setPostcode] = useState("");
  const [registration, setRegistration] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<Record<string, string>>({});
async function form_validation(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();

  let newErrors: {
    email?: string;
    name?: string;
    phone?: string;
    postcode?: string;
    registration?: string;
  } = {};

  // EMAIL VALIDATION
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    newErrors.email = "Please enter a valid email address.";
  }

  // NAME VALIDATION
  if (!/^[A-Za-z ]*$/.test(name)) {
    newErrors.name = "Name can only contain letters and spaces.";
  }

  // PHONE VALIDATION
  if (!/^\d{11}$/.test(phone)) {
    newErrors.phone = "Please enter a valid UK phone number (11 digits required).";
  }

  // POSTCODE VALIDATION
  if (!/^[A-Za-z0-9 ]+$/.test(postcode)) {
    newErrors.postcode = "Postcode can only contain letters, numbers, and spaces.";
  }

  // REGISTRATION VALIDATION
  if (!/^[A-Za-z0-9 ]+$/.test(registration)) {
    newErrors.registration = "Registration can only contain letters, numbers, and spaces.";
  }

  setError(newErrors);

  // AGAR KOI ERROR NAHI HAI
  if (Object.keys(newErrors).length === 0) {
    try {
      setLoading(true);
      setServerError("");
      
      // PAYLOAD BANAO (CONTACT FORM KE HISAB SE)
      const payload = {
        website_name: "ford-engines",
        name: name,
        phone: phone,
        email: email,
        postcode: postcode,
        vrm: registration,
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
      
    } catch (error: any) {
      console.log(error);
      alert("Server Error. Please try again later.");
    } finally {
      setLoading(false);
    }
  }
}
  useEffect(() => {
    setRegistration(regFromUrl);
  }, [regFromUrl]);
    return(

          <div className="flex flex-wrap w-full">
            <form  className="flex flex-wrap w-full" onSubmit={form_validation}>
   
                       <div className="w-full">
                        <div className="mt-3">
                            <center>
                                <h1 className="font-bold text-lg md:text-2xl">
                                    Contact Information
                                </h1>
                                
                                <p className="text-sm text-[#4B5563]">Tell The Details So We Can Provide You Best Service</p>
                                </center>
                        </div>
                        </div>
                        <div className="w-full md:w-1/2 flex justify-center">


                                    <div style={{backgroundColor:"white", borderRadius:"10px" }} className="w-[85%] md:w-[80%] shadow-2xl" >
                                        
                                        <div className="bg-[#F3FFF9] rounded-t-[10px] rounded-b-[0px]">
                                                                      
                                                                        </div>
                                                                                 
                                                                                <div className="flex flex-wrap text-left">
                                                                                    
                                                                                          <div className="mt-3 w-full ">
                                                                                        <div className="ml-5 mr-5">
                                                                             <label className="mb-1 text-sm text-black font-medium">Reg Number  <span style={{color:"red"}}>*</span></label>
                                                                                      
                                                                                 <div className="flex border rounded overflow-hidden w-full mt-2" style={{borderColor:"#FFCB05"}}>
                                                
                                                    <button className="bg-blue-900 text-white px-4 items-center justify-center ">
                                                    <div><img src="/Vector.svg" alt="flag"  className="mt-2"/></div>
                                                    <div>UK</div>
                                                    </button>


                                                    <input
                                                    type="text"
                                                    required
                                                    value={registration}
                                                    onChange={(e) => {
    const value = e.target.value;

    // remove special characters
    const filtered = value.replace(/[^A-Za-z0-9 ]/g, "");

    // convert to uppercase
    setRegistration(filtered.toUpperCase());
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
                                                                                    <div className="w-12/24 mt-3">
                                                                                    

                                                                                    {/* Phone Number */}
                                                                                    <div className="mt-3 ml-5 mr-5">
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
                                                                                            }}
                                                                                        />
                                                                                        {error.name && (
                                                                                            <p style={{ color: "red" }}>{error.name}</p>
                                                                                        )}
                                                                                    </div>
                                                                                    </div>
                                                                            
                                                                        <div className="w-12/24 mt-3 ">
                                                                        

                                                                     


                                                                        <div className="mt-3 ml-5 mr-5">
                                                                            <label className="mb-1 text-sm text-black  font-medium">Phone Number  <span style={{color:"red"}}>*</span></label>
                                                                            <input
                                                                            type="text"
                                                                             value={phone}
                                                                             required
                                                                             onChange={(e) => setPhone(e.target.value)}
                                                                            placeholder="071234567800"
                                                                            className="border border-[#4B5563]  rounded-md placeholder-[#4B5563] w-full black  p-2 outline-none"
                                                                            />
                                                                             {error.phone && <p style={{ color: "red" }}>{error.phone}</p>}
                                                                        </div>


                                                                        </div>
                                                                        
                                                                    </div>
                                                                                <div className="flex flex-wrap text-left">
                                                                                  












                                                                                 
                                                                                </div>
                                                                                <div className="flex flex-wrap text-left">
                                                                                    
                                                                                    <div className="w-12/24 mt-3">
                                                                                    

                                                                                  
                                                                                    <div className="mt-3 ml-5 mr-5">
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
                                                                                }}
                                                                                />
                                                                                {error.email && (
                                                                                <p style={{ color: "red" }}>{error.email}</p>
                                                                                )}
                                                                                       
                                                                                    </div>
                                                                                    </div>
                                                                            
                                                                        <div className="w-12/24 mt-3 ">
                                                                        

                                                                     


                                                                        <div className="mt-3 ml-5 mr-5">
                                                                            <label className="mb-1 text-sm text-black  font-medium">Postcode  <span style={{color:"red"}}>*</span></label>
                                                                            <input
                                                                            type="text"
                                                                            required
                                            
                                                                            value={postcode}
                                                                            
                                                                            onChange={(e) => setPostcode(e.target.value)}
                                                                            placeholder="RM20 4EL"
                                                                            className="border border-[#4B5563]  rounded-md placeholder-[#4B5563] w-full black  p-2 outline-none"
                                                                            />
                                                                            {error.postcode && (
                                                                                <p style={{ color: "red" }}>{error.postcode}</p>
                                                                       )} </div>


                                                                        </div>
                                                                        
                                                                    </div>
                                                                     <div className="flex flex-wrap text-left">
                                                                                    <div className="mt-3 w-full">
                                                                                        
                                                                                        <div className="ml-5 mr-5">
                                                                                        <label className="mb-1 text-sm text-black font-medium">Message  <span style={{color:"red"}}>*</span></label>
                                                                                        <textarea
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  placeholder="Tell us how can we help you"
  className="border border-[#4B5563] h-[180px] rounded-md placeholder-[#4B5563] text-black p-2 w-full outline-none"
/>
                                                                                        </div>
                                                                                    </div>
                                                                                    </div>
                                                                    <div className="p-5 pt-1">
                                                                    <center><button
  disabled={loading}
  className={`mt-5 mb-5 pt-2 pb-2 text-white font-bold rounded-md
  ${loading ? "opacity-50 cursor-not-allowed" : ""}
  `}
  style={{
    display: "block",
    background:
      "radial-gradient(53.6% 50% at 46.4% 50%, #00BC71 0%, #036F3D 100%)",
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
                                                                                                    We'll response to your message within 24 hours during bussiness days
                                                                   </div>
                                                                    </div>
                                                                   
                                                                    </div>
                                                    </div>
                                                      <div className="w-full md:w-1/2">
                                                      <div  className=" m-5 mt-10 ml-10 md:mr-5" >
                                                            <div>
                                                               <h1 className="font-bold text-lg ">Contact Information</h1>
                                                               <p className="pt-2 w-[90%]">
                                                                It is a long established fact that a reader be by the readable distracted layout.
                                                                </p>
                                                            </div>
                                                            <div className="flex">
                                                                <div className="w-1/2">
                                                                <p className="text-[#028D53] underline pt-3 font-bold">ADDRESS</p>
                                                                <p className="pt-3 font-bold">Unit 1A Hedley Ave
Grays RM20 4EL
United Kingdom</p>
                                                                
                                                                </div>
                                                                <div className="w-1/2">
                                                                <p className="text-[#028D53] underline pt-3 font-bold">CONTACT</p>
                                                                <p className="text-[#90B99F] pt-3 text-[12px] font-bold">PHONE:</p>
                                                                
                                                                <p className=" font-bold">01375 517170</p>
                                                                 <p className="text-[#90B99F] pt-3 text-[12px] font-bold">EMAIL:</p>
                                                                
                                                                <p className=" font-bold text-sm">info@selectprestige.co.uk</p>
                                                                </div>
                                                            </div>
                                                               <div className="w-7/12">
                                                                <p className="text-[#028D53] underline pt-5 font-bold">OPENING HOURS</p>
                                                                        <div className="pt-3 font-bold">
                                                                            Monday - Friday:  
                                                                            <span className="text-[20px] inline">
                                                                                 9:00 AM - 6:00 PM
                                                                            </span>
                                                                            </div>
                                                                            <div className="pt-3 font-bold">
                                                                            Saturday: 
                                                                            <span className="text-[20px] inline">
                                                                                 7:00 AM - 1:00 PM
                                                                            </span>
                                                                            </div>

                                                                             <div className="pt-3 font-bold">
                                                                            Sunday: 
                                                                            <span className="text-[red] inline">
                                                                                 Closed
                                                                            </span>
                                                                            </div>
                                                                </div>
                                                                
                                                               <div className=" w-[95%] md:w-[92%] mt-4">
                                       <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1918.840526322696!2d0.29315567556610106!3d51.47451701310638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8b7a2859bba33%3A0xd64a87b00877a1d!2sVogue%20Technics!5e1!3m2!1sen!2s!4v1778063921624!5m2!1sen!2s"
  width="100%"
  height="300"
  style={{ border: 0 }}
  loading="lazy"
></iframe>

</div>
                                                         
                                                     </div></div>
             </form>
              </div>
                       
          
    )
}