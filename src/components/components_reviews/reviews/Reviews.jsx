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
    <div className="flex flex-wrap w-full text-sm">

      <div className="w-full text-center text-black">
        <p className="text-3xl mt-5 font-bold">Reviews</p>
      </div>

      <div className="w-full flex flex-wrap">
         <div className="w-2/24">
         </div>
         <div className="w-20/24">
        
    
      <div className="w-full flex flex-wrap justify-center mt-6 ">
        
        {reviewsData.map((review) => (

          <div
  key={review.id}
  className="w-full sm:w-full md:w-6/12 lg:w-4/12 flex text-left"
>
            <div className=" w-full md:w-[80%] bg-[#F3FFF9] border border-gray-300 rounded-xl p-4 my-3">

              <p className="font-bold text-2xl">{review.name}</p>

              <p className="text-xs text-gray-400 mt-1">
                {review.time}
              </p>

                 <p className="mt-3 text-left">
                    {expandedId === review.id
                      ? `"${review.text}"`
                      : review.text.length > 100
                        ? `"${review.text.slice(0, 100)}..."`
                        : `"${review.text}"`
                    }
                  </p>
                  {review.text.length > 100 && (
                    <button
                      onClick={() =>
                        setExpandedId(
                          expandedId === review.id ? null : review.id
                        )
                      }
                      className="text-black cursor-pointer mt-2 text-sm font-semibold"
                    >
                      {expandedId === review.id
                        ? "Read Less"
                        : "Read More"}
                    </button>
                  )}

              <div className="mt-auto flex gap-1 pt-4">
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
 <div className="w-full text-center text-black">
  {pathname !== "/reviews" && (
        <Link href="/reviews">
                         <button
                            className="block mb-5 mx-auto mt-3 font-bold border-2 border-[#088751]   hover:bg-[#046b3f] hover:text-white  cursor-pointer text-[#088751] px-17 py-[7px] rounded-lg">
                            view more
                            </button></Link>
      )}
        
        </div>

</div>

      </div>
    
    </div>
  );
}