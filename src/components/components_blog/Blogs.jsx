"use client"
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { useState } from "react";
import Link from "next/link";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Blogs({blogs}){
  const blogsPerPage = 12;

const [currentPage, setCurrentPage] = useState(1);

const lastBlogIndex = currentPage * blogsPerPage;

const firstBlogIndex = lastBlogIndex - blogsPerPage;

const currentBlogs = blogs.slice(firstBlogIndex, lastBlogIndex);

const totalPages = Math.ceil(blogs.length / blogsPerPage);
const getPagination = () => {
  const pages = [];

  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  pages.push(1);

  if (currentPage > 3) {
    pages.push("....");
  }

  const start = Math.max(2, currentPage - 1);
  const end = Math.min(totalPages - 1, currentPage + 1);

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  if (currentPage < totalPages - 2) {
    pages.push("....");
  }

  pages.push(totalPages);

  return pages;
};
    return(
      <>
        <div className="w-full leading-7 tracking-[0.04em]  py-2 pb-8 flex flex-wrap mx-3 lg:mx-13 justify-center mt-6 ">
                {currentBlogs.map((blog,index)=>(
               
                  <div  key={blog.slug}  className=" w-full sm:w-full md:w-6/12 h-[auto] lg:w-4/12 flex justify-center ">
          <Link href={`/blog/${blog.slug}`} className="cursor-pointer" >         
  <div 
    className="m-2 flex flex-col relative overflow-hidden shadow-[0_0_10px_#696969] rounded-xl"
    
  >
    <div className="">
    <img
      src={blog.image}
      className="w-full h-full object-cover"
      style={{borderRadius:"10px 10px 0px 0px "}}
    />
    </div>
     <div>
    
  </div>
   <div>
    <div className="text-md h-[59px] overflow-hidden font-bold text-black mt-2 mx-2 leading-tight"  dangerouslySetInnerHTML={{ __html:  blog.title }}>
                
                  </div>
  </div>
  <div>
    <div className="text-sm text-black mx-2 mt-2 "  dangerouslySetInnerHTML={{ __html:  blog.excerpt.slice(0, 119) }} >
 
</div>
  </div>
   <div>
    
  </div>
     <p className="absolute h-[70px] rounded-full right-[-30] top-[-35] flex flex-wrap px-3 py-1 items-end justify-start text-lg text-white font-black text-center w-[70px] bg-[#046b3f]  ">
    <span className="pl-1">{index+1}</span>
  
                                </p>
                                <div className="h-3"></div>
                                <div className="flex mt-auto  m-2 mb-0 py-3 justify-between border-t-1 py-1 border-t-black">
                                <div className="flex  items-center text-[#7d7d7d] "><CalendarMonthIcon /> <div className="text-sm font-bold "  dangerouslySetInnerHTML={{ __html:  blog.date }}></div>
                   
                  </div>
                  <div className="text-md font-bold text-black   cursor-pointer">
                   <div style={{textDecoration:"none"}}  className="text-[#046b3f] hover:text-[#054f2f]">Read More <ArrowForwardIcon /></div> 
                  </div>
                  </div>
  </div>
 </Link> 
</div>
           ))}
</div>
<div className="flex justify-center items-center gap-4 my-8 w-full">

  {/* Previous Button */}
  <button
    onClick={() => setCurrentPage(currentPage - 1)}
    disabled={currentPage === 1}
    className="px-4 py-2 rounded-md bg-[#046b3f] text-white disabled:bg-gray-300 disabled:cursor-not-allowed"
  >
    <KeyboardDoubleArrowLeftIcon />
  </button>

  {/* Numbers Container */}
  <div className="flex items-center bg-white rounded-full shadow-md overflow-hidden px-2 py-1">

    {getPagination().map((page, index) =>

      page === "...." ? (

        <span
          key={index}
          className="px-3 text-gray-500 font-bold"
        >
          ....
        </span>

      ) : (

        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`w-10 h-10 rounded-full font-semibold transition ${
            currentPage === page
              ? "bg-[#046b3f] text-white"
              : "text-black hover:bg-gray-100"
          }`}
        >
          {page}
        </button>

      )

    )}

  </div>

  {/* Next Button */}
  <button
    onClick={() => setCurrentPage(currentPage + 1)}
    disabled={currentPage === totalPages}
    className="px-4 py-2 rounded-md bg-[#046b3f] text-white disabled:bg-gray-300 disabled:cursor-not-allowed"
  >
    <KeyboardDoubleArrowRightIcon />
  </button>

</div>
</>
)
}