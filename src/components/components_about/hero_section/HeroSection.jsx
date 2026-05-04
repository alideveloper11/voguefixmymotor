export default function HeroSection(){
    return(
        <div>
                <div className="flex flex-wrap h-[900px] md:h-[600px] md:flex-nowrap" id="second_hero_section">
                 <div className="w-full md:w-6/12  flex items-center justify-center">
                        <div className="m-10" style={{width:"60%"}}>
                            <p className="font-bold text-left text-white text-[25px] md:text-[40]">
                                Tell Us What You Need—We’ll Handle the Rest.
                            </p>
                            <p className="font-bold text-left text-white text-[12px] mt-3">
                                Tell us your issue and get a quick, no-obligation quote.
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
                                        type="text"
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
                 <div className="flex  flex-wrap m-10">
                              <div className=" w-full md:w-1/2">
                               <div  style={{width:"100%"}}   className="md:h-[400px]">
                                     <img src="\vogue fix my motor image 17.jpg" className="h-full w-full object-cover" style={{width:"100%", borderRadius:"10px"}} alt="slider_section_image" />
                                 </div>
                           </div>
                     <div className=" w-full md:w-1/2">
            <div className="m-5 text-left">
                   <h1 className="text-2xl md:text-3xl font-bold">Lorem Ipsum Has Been 
Then In</h1>
                                          <p className="mt-5">
                                               Lorem Ipsum is not simply random text. 
                                               It has roots in a piece of classical Latin literature from 45 BC,
                                                making it over 2000 years old. Richard McClintock, a Latin professor at 
                                                Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
                                                 consectetur, from a Lorem Ipsum passage,  Lorem Ipsum is not simply random text. 
                                                 It has roots in a 
                                          </p>
                                          <div className="w-full text-left">
                                              <ul className="list-disc mt-5 ml-3">
                                        
                                          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                                  <li>Cras volutpat nibh pulvinar posuere auctor.</li>
                                                  <li>Nullam lobortis risus pharetra lobortis blandit.</li>
                                                  <li>In ac ante dictum sapien feugiat laoreet eget non nibh.
                                                  </li>
                                       
                                      </ul>
                                              </div>
                                        <div className="w-24/24">
                        

                        <button className="border mt-5  px-4 py-2 rounded mb-2 bg-[#059669] hover:bg-[#0b5a41]"  
                        style={{ fontSize:"14px", color:"white", fontWeight:"bold" , width:"200px"}}>
                           read more
                           </button>
                        </div> 

            </div>
          </div>
          </div></div>
    )
}