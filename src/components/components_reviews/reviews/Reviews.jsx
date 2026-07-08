"use client"
import StarIcon from "@mui/icons-material/Star";
import { usePathname } from "next/navigation";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"; // Down
import ExpandLessIcon from "@mui/icons-material/ExpandLess"; // Up
export default function Reviews({reviewsData}) {
  const [visibleReviews, setVisibleReviews] = useState(20);
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
        
        {reviewsData.slice(0, visibleReviews).map((review) => (

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
  {pathname=="/reviews"&&(
    <div className="w-full text-center py-5">
  {visibleReviews < reviewsData.length ? (
    <div className="relative w-fit mx-auto">

  {/* Rotating light */}
  <div className="light-rotate">
    <div className="light-dot"></div>
  </div>
   <button
 onClick={() => setVisibleReviews((prev) => prev + 20)}
className="relative z-10 flex items-center rounded-full
bg-gradient-to-r from-[#02b37c] to-[#04422f]
px-4 py-3
text-white
font-bold
text-lg
shadow-[0_20px_40px_rgba(4,107,63,.35)]
cursor-pointer
">

<div className="w-7 h-7 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">

<StarBorderRoundedIcon sx={{fontSize:17}}/>

</div>

<span className="px-3">
View More Reviews
</span>

<div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#046b3f]">

<ExpandMoreIcon sx={{fontSize:16}}/>

</div>

</button>
</div>
  ) : (
    reviewsData.length > 20 && (
          <div className="relative w-fit mx-auto">

  {/* Rotating light */}
  <div className="light-rotate">
    <div className="light-dot"></div>
  </div>
   <button
 onClick={() => setVisibleReviews(20)}
className="relative z-10 flex items-center rounded-full
bg-gradient-to-r from-[#02b37c] to-[#04422f]
px-4 py-3
text-white
font-bold
text-lg
shadow-[0_20px_40px_rgba(4,107,63,.35)]
cursor-pointer
">

<div className="w-7 h-7 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">

<StarBorderRoundedIcon sx={{fontSize:17}}/>

</div>

<span className="px-3">
Show Less Reviews
</span>

<div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#046b3f]">

<ExpandLessIcon sx={{fontSize:16}}/>

</div>

</button>
</div>
    )
  )}
</div>
  )}
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