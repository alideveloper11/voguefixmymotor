export default function Explore()
{
return(
  <div className="flex w-full flex-wrap  bg-[#F3F4F6]">
        <div className="flex w-full flex-wrap mt-20 ml-20 mr-20 mb-5">
             <div className=" text-left w-full md:w-6/12">

                <p className="font-bold text-[28px]">
                    Explore Our Repair
                </p>
                <p className="text-left pt-5 pb-5">
                   Results speak louder than words. So take a closer look at the quality behind
                    every repair we complete. From engine diagnostics to full restorations,
                     our gallery showcases real vehicles worked on by our experienced technicians.
                </p>
                <div>
                    <button className=" mb-10 md:mb-0 border px-4 py-2 rounded bg-[#059669] hover:bg-[#0b5a41]"
                        style={{ fontSize:"14px", color:"white", fontWeight:"bold", width:"250px" }}>
                        View All Gallery
                    </button>
                    </div>
            </div>  
            <div className="flex w-full md:w-6/12 flex-wrap ">
                <div className="mb-10" style={{width:"100%"}}>
                    <img src="/explore/1.jpg" alt="" className="w-full object-cover rounded  h-[350px] lg:h-[450px] md:h-[400px]"  style={{borderRadius:"10px", width:"100%"}} />
                </div>
            </div>  


      
            <div className=" w-full md:w-6/12 flex-wrap grid">
                 <div className="mb-10" style={{width:"100%"}}>
                    <img src="/explore/3.jpg" className="w-full object-cover rounded  h-[350px] lg:h-[450px] md:h-[400px]" alt="" style={{borderRadius:"10px" , width:"100%"}} />
                </div>
            </div> 
            <div className="flex w-full md:w-6/12 flex-wrap">
                <p className="text-left ml-5 mr-5">
                   Results speak louder than words. So take a closer look at the quality behind every repair we complete. From engine diagnostics to full restorations, our gallery showcases real vehicles worked on by our experienced technicians.
               
               ontrary to popular belief, Lorem Ipsum is not simply random text. 
               It has roots in a piece of classical Latin literature from 45 BC,
                making it over 2000 years old. Richard McClintock,
                a Latin professor at Hampden-Sydney College in Virginia,
                 looked up one of the more obscure Latin words, consectetur, 
                 from a Lorem Ipsum passage, and going through the cites of the word 
                 in classical literature, discovered the undoubtable source. </p>
            </div> 
        </div>
    </div>
    );
}