"use client"
import blogs_data from "@/lib/blogs_data/blogs_data";
import Link from "next/link";
export default function Blogs(){
    return(
        <div className="w-full flex flex-wrap justify-center mt-6 ml-10 mr-4">
                {blogs_data.map((blog) => (
               
                  <div  key={blog.id}  className="w-full sm:w-full md:w-6/12 h-[auto] lg:w-4/12 flex justify-center items-center">
  <div 
    className="w-full md:w-[80%] shadow-lg rounded-xl"
    style={{ margin: "20px 20px 20px 0px" }}
  >
    <div className="h-[250px]">
    <img
      src={blog.image}
      className="w-full h-full object-cover"
      style={{borderRadius:"10px 10px 0px 0px "}}
    />
    </div>
     <div>
    <p className="text-md font-bold text-black m-2">
                    {blog.date}
                  </p>
  </div>
   <div>
    <p className="text-lg font-bold text-black m-2">
                    {blog.heading}
                  </p>
  </div>
  <div>
    <p className="text-sm text-black m-2">
  {blog.text1.slice(0, 120)}...
</p>
  </div>
   <div>
    <p className="text-md font-bold text-black m-2 cursor-pointer">
                  <Link href={`/blog/${blog.slug}`} style={{textDecoration:"none"}}> Read More &gt;</Link> 
                  </p>
  </div>
  </div>
 
</div>
             ))}    
</div>

    )
}