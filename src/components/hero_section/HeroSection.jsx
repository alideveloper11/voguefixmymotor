export default function HeroSection(){
    return(
        
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
                                                    placeholder="Enter Registration"
                                                    className="flex-1 px-4 py-4 outline-none text-black placeholder-black"
                                                    style={{ backgroundColor:" #FFCB05"}}
                                                    />
                                                    
                                            </div>   
                                            <div className="flex flex-wrap text-left">
                                                
                                                <div className="w-11/24 mt-3 md:ml-5">
                                                <div className="mt-3">
                                                    <label className="mb-1 text-sm text-white font-medium">Username</label>
                                                    <input
                                                    type="text"
                                                    placeholder="John Smith"
                                                    style={{backgroundColor:"rgba(255, 255, 255, 0.26)", borderColor:"rgba(255, 255, 255, 0.15)"}}
                                                    className="border rounded-md placeholder-white text-white  p-2 w-full outline-none"
                                                    />
                                                </div>

                                                {/* Phone Number */}
                                                <div className="mt-3">
                                                    <label className="mb-1 text-sm text-white font-medium">Phone Number</label>
                                                    <input
                                                    type="text"
                                                    placeholder="01708 123456"
                                                    style={{backgroundColor:"rgba(255, 255, 255, 0.26)", borderColor:"rgba(255, 255, 255, 0.15)"}}
                                                    className="border rounded-md placeholder-white text-white w-full  p-2 outline-none"
                                                    />
                                                </div>
                                                </div>
                                        
                                    <div className="w-1/24 mt-3 "></div>
                                    <div className="w-11/24 mt-3 ">
                                    

                                     <div className="mt-3">
                                         <label className="mb-1 text-sm text-white font-medium">Email</label>
                                        <input
                                        type="email"
                                        placeholder="jhon@example.com"
                                        style={{backgroundColor:"rgba(255, 255, 255, 0.26)", borderColor:"rgba(255, 255, 255, 0.15)"}}
                                        className="border rounded-md placeholder-white text-white w-full  p-2 outline-none"
                                        />
                                    </div>


                                     <div className="mt-3">
                                         <label className="mb-1 text-sm text-white  font-medium">Postcode</label>
                                        <input
                                        type="email"
                                        placeholder="POSTCODE AB12"
                                        style={{backgroundColor:"rgba(255, 255, 255, 0.26)", borderColor:"rgba(255, 255, 255, 0.15)"}}
                                        className="border rounded-md placeholder-white w-full text-white  p-2 outline-none"
                                        />
                                    </div>


                                    </div>
                                     <div className="w-full text-left">
                                                                                <div style={{width:"90%", margin:"20px"}}>
                                                                            <label className="block text-sm text-white mt-2 mb-2 font-medium">
                                                                            Select Service
                                                                            </label>
<select style={{backgroundColor:"rgba(255, 255, 255, 0.48)"}}
  className="w-full p-3 rounded-md text-white"
>
  <option style={{ backgroundColor: "#000", color: "#fff" }}>
    Service 1
  </option>
  <option style={{ backgroundColor: "#000", color: "#fff" }}>
    Service 2
  </option>
  <option style={{ backgroundColor: "#000", color: "#fff" }}>
    Service 3
  </option>
</select>
                                                                    
                                                                    </div>
                                                                    </div>
                                </div>
                                  <center><button style={{display:"block", background: "radial-gradient(53.6% 50% at 46.4% 50%, #00BC71 0%, #036F3D 100%) ",width:"90%",  margin:"20px", borderRadius:"10px"}} className="mt-5 mb-5 pt-2 pb-2 text-white text-bold">Get Qoutation</button></center>
                                </div>
                 </div>
                 </div>
    )
}