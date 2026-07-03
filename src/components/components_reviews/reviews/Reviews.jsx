"use client"
import StarIcon from "@mui/icons-material/Star";
import { usePathname } from "next/navigation";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Link from "next/link";
import { useState } from "react";

export default function Reviews({reviewsData}) {
    const pathname = usePathname();
  const [expandedId, setExpandedId] = useState(null);
  return (
    <div className="flex flex-wrap  w-full text-sm text-black bg-white" style={{colorScheme:"light"}}>

      <div className="w-full py-5 text-center text-black">
        <p className="text-3xl  font-bold">Reviews</p>
      </div>

      <div className="w-full flex flex-wrap">
         
         <div className="w-full mx-3 lg:mx-13">
      <div className="w-full flex flex-wrap  justify-center  ">
        
        {reviewsData.map((review) => (

          <div
  key={review.id}
  className="w-full flex md:w-6/12 lg:w-3/12 pb-5 text-left"
>
            <div className=" w-full flex flex-col min-h-[300px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]  bg-[#F3FFF9] mx-2 border border-gray-300 rounded-xl px-3 py-2 ">

              <p className="font-bold text-2xl">{review.name}</p>

              <p className="text-xs text-gray-400 mt-1">
                {review.time}
              </p>
<p className="
  my-3
  text-left 
  text-lg
  text-transparent 
  bg-clip-text 
  bg-gradient-to-r 
  from-black 
  to-[#059669]
  leading-relaxed
  tracking-wide
  space-y-2
">

  {(() => {
    const words = review.text.split(/\s+/);
    return expandedId === review.id
      ? `"${review.text}"`
      : words.length > 30
      ? `"${words.slice(0, 20).join(" ")}..."`
      : `"${review.text}"`;
  })()}
</p>

{review.text.split(/\s+/).length > 30 && (
  <button
    onClick={() =>
      setExpandedId(expandedId === review.id ? null : review.id)
    }
    className="text-black text-left cursor-pointer my-2 text-sm font-semibold"
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
                            className="block   mx-auto -bold border-2 border-[#088751]   hover:bg-[#088751] hover:text-white  cursor-pointer text-[#088751] px-17 py-[7px] rounded-lg ">
                            view more
                            </button></Link>
      )}
        
        </div>

</div>

      </div>
    
    </div>
  );
}