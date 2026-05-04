import CallIcon from '@mui/icons-material/Call';
export default function Herosection()
{
        return(
          
          <>
    <div className="flex  flex-wrap  h-[400px] items-center justify-center" id="second_hero_section">
      <div className="w-full items-center justify-center">
            <p className="text-white font-bold text-[20px]">
              Quick Engine Repairs & Maintenance
            </p>
            <p className="text-white">
              We handle small issues early with accurate diagnostics and dependable repairs.
            </p>
            
      <div className="w-full ">
             <center> <div className="bg-black w-[80%] lg:w-[60%] mt-5" style={{ borderRadius:"10px"}}>
              <p className="text-white  font-bold ">Enter your registration for an instant quote</p>
            <div className="flex  items-center justify-center">
              
                                             <button className="m-1 ml-3 text-white bg-[#009051] hover:bg-[#05824b] mb-3 font-semibold text-[10px] md:text-lg px-6 w-[60%] md:w-[40%] rounded-sm h-[35px] shadow">
                                              <CallIcon  fontSize="small"  />1374531355</button>
                                             <button className="m-1 mr-3 text-white bg-black hover:bg-[#434a47] border-[2px] border-white mb-3 font-semibold text-[10px] md:text-lg px-6 w-[60%]  md:w-[40%]  rounded-sm h-[35px]  shadow">Request A Qoute</button>
                                                  
            </div> 
                                                  
            <div className="flex items-center justify-center">
            <p className="text-[#bdbdbd] mb-3  text-[12px] md:text-[16px]">Don't have the Reg?</p>
            <p className="text-white font-bold mb-3 text-[12px] md:text-[16px]">Find vehicle manually</p>
            </div>
            </div>
            </center> 
      </div>
      </div>
      
    </div>

    <div>
      <div className=" w-full">
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
         
          </div>
      </div>
    </div>
    </>
        )
}

