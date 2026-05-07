
"use client"
import {useState} from 'react'
import servicesData from "@/lib/services_data/servicesData";
export default function HeroSection(){
    const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [phone, setPhone] = useState("");
  const [postcode, setPostcode] = useState("");
  const [registration, setRegistration] = useState("");
  const [error,setError]=useState({})

  function form_validation(e) {
    e.preventDefault();
  
    let newErrors = {};
  
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
   
                <div className="flex flex-wrap h-[900px] md:h-[600px] md:flex-nowrap" id="hero_section">
                 <div className="w-full md:w-6/12  flex items-center justify-center">
                        <div className="m-10" style={{width:"60%"}}>
                            <p className="font-bold text-left text-white text-[30px]">
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

                                   <div style={{backgroundColor:"black", width:"90%", borderRadius:"10px"}} >
                                    <p className="text-left font-bold text-white mt-4 ml-5">Get a Quick Qoute</p>
                                            <div className="flex border rounded overflow-hidden max-w-xl mt-2 ml-5 mr-5 mb-5" style={{borderColor:"#FFCB05"}}>
                                                
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
                                                    className="flex-1 px-4 py-4 outline-none text-black placeholder-black"
                                                    style={{ backgroundColor: "#FFCB05" }}
                                                    />
                                 
                                                                                    
                                            </div>   
                                                 {error.registration && (
                                <p style={{ color: "red" }}>{error.registration}</p>
                                )}
                                            <div className="flex flex-wrap text-left">
                                                
                                                <div className="w-10/24 mt-3 md:ml-5">
                                                <div className="mt-3">
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

                                                {/* Phone Number */}
                                                <div className="mt-3">
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
                                                </div>
                                        
                                    <div className="w-11/24 mt-3 ml-2 justify-end ">
                                    

                                     <div className="mt-3">
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


                                     <div className="mt-3">
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
                                     <div className="w-full text-left">
                                                                                <div style={{width:"95%", padding:"20px"}}>
                                                                            <label className="block text-sm text-white mt-2 mb-2 font-medium">
                                                                            Select Service <span style={{color:"red"}}>*</span>
                                                                            </label>
<select
  required
  style={{ backgroundColor: "rgba(255, 255, 255, 0.48)" }}
  className="w-full p-3 rounded-md text-white overflow-hidden"
>
   <option value="" disabled>
    Select Services
  </option>

  {servicesData.map((services) => (
    <option
  key={services.id}
  value={services.slug}
  style={{
    backgroundColor: "#000",
    color: "#fff",
  }}
>
  {services.name}
</option>
  ))}
</select>
                                                                    
                                                                    </div>
                                                                    </div>
                                </div>
                                <div>
                                 <center><button type="submit" style={{display:"block", background: "radial-gradient(53.6% 50% at 46.4% 50%, #00BC71 0%, #036F3D 100%) ", padding:"10px 50px",  margin:"20px", borderRadius:"10px"}} className="mt-5 mb-5 pt-2 pb-2 text-white cursor-pointer text-bold">Get Qoutation</button></center> 
                                </div>
                                </div>
                 </div>
                 </div>
                 </form>
    )
}