import CallIcon from '@mui/icons-material/Call';
export default function Herosection()
{
        return(
          
          <>
    <div className="flex  flex-wrap  h-[400px] items-center justify-center" id="second_hero_section">
      <div className="w-full items-center justify-center">
            <p className="text-white font-bold text-16 md:text-[20px]">
              Quick Engine Repairs & Maintenance
            </p>
            <p className="text-white  text-sm md:text-[16px] ml-10 mr-10">
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
    
    </div>
    </>
        )
}

