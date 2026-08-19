"use client"
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
export default function Blogs({blogs}){
const searchParams = useSearchParams();
const blogsPerPage = 12;
const currentPage =
Number(searchParams.get("page")) || 1;
const totalPages =
    Math.ceil(
      blogs.length / blogsPerPage
    );
const safePage =
    currentPage > totalPages
      ? 1
      : currentPage;
const firstBlogIndex =
    (safePage - 1) * blogsPerPage;
const lastBlogIndex =
    firstBlogIndex + blogsPerPage;
const currentBlogs =
    blogs.slice(
      firstBlogIndex,
      lastBlogIndex
    );
const changePage = (page) => {
if(
      page < 1 ||
      page > totalPages
    ){
      return;
    }
window.history.pushState(
      null,
      "",
      `/blog?page=${page}`
    );
window.dispatchEvent(
      new PopStateEvent("popstate")
    );
window.scrollTo({
      top:0,
      behavior:"smooth"
    });
};
const getPagination = () => {
if(totalPages <= 4){
return Array.from(
        {
          length:totalPages
        },
        (_,i)=>i+1
      );
  }
if(safePage <= 3){

      return [
        1,
        2,
        3,
        4,
        "...",
        totalPages
      ];
}
if(
      safePage >= totalPages - 2
    ){
return [
        1,
        "...",
        totalPages-3,
        totalPages-2,
        totalPages-1,
        totalPages
      ];
}
return [
      1,
      "...",
      safePage-1,
      safePage,
      safePage+1,
      "...",
      totalPages
    ];

  };
    return(
  <>
         <div className="w-full leading-7 tracking-[0.04em]  py-2 pb-8 flex flex-wrap mx-3 lg:mx-13 justify-center mt-5 ">
              <div className="w-full text-center pb-10 font-bold text-2xl md:text-3xl">
                 <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          <span className=" relative inline-block  text-gray-900">Our
               <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#aba9a9]/20 via-[black] to-[#aba9a9]/20 rounded-full"></span>
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-[black] rounded-full"></span>
          
          </span>
          
          <span className="relative inline-block ml-3 text-[#046b3f]">
            Blogs
            {/* Underline Decoration */}
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#046b3f]/20 via-[#046b3f] to-[#046b3f]/20 rounded-full"></span>
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-[#046b3f] rounded-full"></span>
          </span>
        </h1>
              </div> 
                 {currentBlogs.map((blog,index)=>(
                          
                             <div  key={blog.slug}  className=" w-full sm:w-full md:w-6/12 h-[auto] lg:w-4/12 flex justify-center ">
                     <Link href={`/blog/${blog.slug}`} className="cursor-pointer" >         
             <div 
               className="m-2 flex flex-col relative overflow-hidden shadow-[0_0_10px_#696969] rounded-xl"
               
             >
               <div className="aspect-video  w-full overflow-hidden">
               <img
                 src={blog.image}
                 className="w-full h-full object-contain"
                 alt={blog.title}
                 style={{borderRadius:"10px 10px 0px 0px "}}
               />
               </div>
                <div>
               
             </div>
              <div>
               <div className="text-md h-[59px] overflow-hidden font-bold text-black mt-2 mx-2 leading-tight"  dangerouslySetInnerHTML={{ __html:  blog.title }}>
                           
                             </div>
             </div>
             <div
             className="mx-2 mt-2 text-sm text-black line-clamp-3"
             dangerouslySetInnerHTML={{ __html: blog.excerpt }}
           />
              <div>
               
             </div>
                <p className="absolute h-[70px] rounded-full right-[-30] top-[-35] flex flex-wrap px-3 py-1 items-end justify-start text-lg text-white font-black text-center w-[70px] bg-[#046b3f]  ">
               <span className="pl-1">{index+1}</span>
             
                                           </p>
                                           <div className="h-3"></div>
                                           <div className="flex mt-auto  m-2 mb-0 py-3 justify-end border-t-1 py-1 border-t-black">
                                     
                             <div className="text-md font-bold text-black   cursor-pointer">
                              <div style={{textDecoration:"none"}}  className="text-[#046b3f] hover:text-[#054f2f]">Read More <ArrowForwardIcon /></div> 
                             </div>
                             </div>
             </div>
            </Link> 
           </div>
                      ))}
</div>

 <div className="flex justify-center px-5 lg:px-15 items-center gap-4 my-8 w-full">


        {/* Previous Button */}

        <button

          onClick={() => {
            changePage(safePage - 1);
          }}

          disabled={safePage === 1}

          className="px-4 py-2 rounded-md bg-[#046b3f] text-white disabled:bg-gray-300 disabled:cursor-not-allowed"

        >

          <KeyboardDoubleArrowLeftIcon />

        </button>


        {/* Page Numbers */}

        <div className="flex items-center bg-white rounded-full shadow-md overflow-hidden px-2 py-1">
          {
            getPagination().map((page,index)=>(
           page === "..." ? (


                <span

                  key={index}

                  className="w-10 text-center text-gray-500 font-bold"

                >

                  ...

                </span>


              )

              :

              (


                <button

                  key={`${page}-${index}`}


                  onClick={() => {

                    if(typeof page === "number"){

                      changePage(page);

                    }

                  }}


                  className={`
                  
                    w-10 h-10 rounded-full font-semibold transition

                    ${
                      safePage === page
                      ?
                      "bg-[#046b3f] text-white"
                      :
                      "hover:bg-gray-100"
                    }

                  `}

                >

                  {page}

                </button>


              )


            ))
          }

        </div>

        {/* Next Button */}
 <button
          onClick={() => {

            changePage(safePage + 1);

          }}

          disabled={safePage === totalPages}
 className="px-4 py-2 rounded-md bg-[#046b3f] text-white disabled:bg-gray-300 disabled:cursor-not-allowed"

        >

          <KeyboardDoubleArrowRightIcon />
        </button>

      </div>
</>
)
}