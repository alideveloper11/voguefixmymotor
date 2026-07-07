"use client"
import StarIcon from "@mui/icons-material/Star";
import { usePathname } from "next/navigation";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function Reviews({reviewsData}) {
    const pathname = usePathname();
    const [expandedId, setExpandedId] = useState(null);
const [overflowing, setOverflowing] = useState({});
const textRefs = useRef({});
useEffect(() => {
  const checkOverflow = () => {
    const temp = {};

    reviewsData.forEach((review) => {
      const el = textRefs.current[review.id];
      if (el) {
        temp[review.id] = el.scrollHeight > el.clientHeight;
      }
    });

    setOverflowing(temp);
  };

  checkOverflow();
  window.addEventListener("resize", checkOverflow);

  return () => window.removeEventListener("resize", checkOverflow);
}, [reviewsData]);
  return (
    <div className="flex flex-wrap py-5 w-full text-sm text-black bg-white" style={{colorScheme:"light"}}>

      <div className="w-full py-5 text-center text-black">
        <p className="font-bold text-2xl md:text-3xl">Reviews</p>
      </div>

      <div className="w-full pt-5 flex flex-wrap">
         
         <div className="w-full mx-3 lg:mx-13">
      <div className="w-full flex flex-wrap  justify-center  ">
        
        {reviewsData.map((review) => (

          <div
  key={review.id}
  className="w-full flex md:w-6/12 lg:w-3/12 pb-5 text-left"
>
            <div className=" w-full flex flex-col h-full shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]  bg-[#F3FFF9] mx-2 border border-gray-300 rounded-xl px-3 py-2 ">

              <p className="font-bold py-2 h-[80] flex items-center text-2xl">{review.name}</p>

              <p className="text-xs text-gray-400 ">
                {review.time}
              </p>
<p
  ref={(el) => (textRefs.current[review.id] = el)}
  className={`text-left text-sm py-3 ${
    expandedId === review.id ? "" : "h-[90px] overflow-hidden"
  }`}
>
  {review.text}
</p>

{overflowing[review.id] && (
  <button
    onClick={() =>
      setExpandedId(expandedId === review.id ? null : review.id)
    }
    className="text-black text-left cursor-pointer pb-2   text-sm font-semibold mt-2"
  >
    {expandedId === review.id ? "Read Less" : "Read More"}
  </button>
)}
<div>
  
</div>
              <div className="mt-auto mb-2 flex gap-1 ">
  {[...Array(5)].map((_, index) =>
    index < review.rating ? (
      <StarIcon key={index} className="text-yellow-500" />
    ) : (
      <StarBorderIcon key={index} className="text-gray-400" />
    )
  )}
</div>

            </div>
          </div>
        ))}
          
     
</div>
 <div className="w-full text-center pt-3 pb-8 text-black">
  {pathname !== "/reviews" && (
        <Link href="/reviews">
                         <button
                            className="block   mx-auto font-semibold text-[16px] border-2 border-[#088751]   hover:bg-[#088751] hover:text-white  cursor-pointer text-[#088751] px-17 py-[7px] rounded-lg ">
                            view more
                            </button></Link>
      )}
        
        </div>

</div>

      </div>
    
    </div>
  );
}