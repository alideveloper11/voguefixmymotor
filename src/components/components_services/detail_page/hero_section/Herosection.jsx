export default function Herosection(props)
{
        return(
    <div className="flex  flex-wrap  h-[400px] items-center justify-center" id="second_hero_section">
      <div className="w-full items-center justify-center">
            <p className="text-white font-bold text-[20px]">
              {props.name}
            </p>
            <p className="text-white">
             {props.text}
            </p>
            
      <div className="w-full ">
             <center> <div className="bg-black w-[80%] lg:w-[60%] mt-5" style={{ borderRadius:"10px"}}>
              <p className="text-white  font-bold ">Enter your registration for an instant quote</p>
            <div className="flex  items-center justify-center">
              <div className="flex border rounded text-[2vw] h-[40px] md:h-[55px]  overflow-hidden max-w-xl mt-2 ml-5 mr-5 mb-5" style={{borderColor:"#FFCB05"}}>
                                                
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
                                             <button className="ml-1 text-green-600 hover:text-green-700 bg-white hover:bg-[#c9c9c9] mb-3 font-semibold text-[10px] md:text-lg px-6 rounded-sm h-[40px] md:h-[55px] shadow">Find Engine</button>
                                                  
            </div>
            <div className="flex items-center justify-center">
            <p className="text-[#bdbdbd] mb-3">Don't have the Reg?</p>
            <p className="text-white font-bold mb-3">Find vehicle manually</p>
            </div>
            </div>
            </center> 
      </div>
      </div>
    </div>
        )
}

