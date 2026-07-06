"use client"
import blogs_data from "@/lib/blogs_data/blogs_data";
import Link from "next/link";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";


export default function Blogs(){
    return(
        <div className="w-full leading-7 tracking-[0.04em]  py-2 pb-8 flex flex-wrap mx-3 lg:mx-13 justify-center mt-6 ">
                {blogs_data.map((blog,index) => (
               
                  <div  key={blog.id}  className=" w-full sm:w-full md:w-6/12 h-[auto] lg:w-4/12 flex justify-center ">
  <div 
    className="m-2 flex flex-col relative overflow-hidden shadow-[0_0_10px_#696969] rounded-xl"
    
  >
    <div className="h-[250px]">
    <img
      src={blog.image}
      className="w-full h-full object-cover"
      style={{borderRadius:"10px 10px 0px 0px "}}
    />
    </div>
     <div>
    
  </div>
   <div>
    <div className="text-lg font-bold text-black m-2"  dangerouslySetInnerHTML={{ __html:  blog.heading }}>
                
                  </div>
  </div>
  <div>
    <div className="text-sm text-black m-2"  dangerouslySetInnerHTML={{ __html:  blog.text1.slice(0, 119) }} >
 
</div>
  </div>
   <div>
    
  </div>
     <p className="absolute h-[70px] rounded-full right-[-30] top-[-35] flex flex-wrap px-3 py-1 items-end justify-start text-lg text-white font-black text-center w-[70px] bg-[#046b3f]  ">
    <span className="pl-1">{index+1}</span>
  
                                </p>
                                
                                <div className="flex mt-auto  mb-0 justify-between border-t-2 py-1 border-t-black">
                                <div className="flex m-2 items-center text-[#7d7d7d] "><CalendarMonthIcon /> <div className="text-sm font-bold "  dangerouslySetInnerHTML={{ __html:  blog.date }}></div>
                   
                  </div>
                  <div className="text-md font-bold text-black m-2  cursor-pointer">
                  <Link href={`/blog/${blog.slug}`} style={{textDecoration:"none"}} className="text-[#046b3f] hover:text-[#054f2f]"> Read More <ArrowForwardIcon /></Link> 
                  </div>
                  </div>
  </div>
 
</div>
             ))}    
</div>

    )
}