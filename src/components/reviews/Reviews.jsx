import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import reviewsData from "@/lib/reviewsData";

export default function Reviews() {
  return (
    <div className="flex flex-wrap w-full text-sm">

      <div className="w-full text-center text-black">
        <p className="text-3xl mt-5 font-bold">Reviews</p>
      </div>

      <div className="w-full flex flex-wrap">
         <div className="w-2/24">
         </div>
         <div className="w-20/24">
        
    
      <div className="w-full flex flex-wrap justify-center  ml-6 m6-6">
        
        {reviewsData.map((review) => (

          <div
  key={review.id}
  className="w-full sm:w-full md:w-6/12 lg:w-4/12 flex text-left"
>
            <div className=" w-full md:w-[80%] bg-[#F3FFF9] border border-gray-300 rounded-xl p-4" style={{margin:"20px 20px 20px 0px"}}>

              <p className="font-bold text-2xl italic">{review.name}</p>

              <p className="text-xs text-gray-400 mt-1">
                {review.time}
              </p>

              <p className="mt-3 text-left">
                &quot;{review.text}&quot;
              </p>

              <div className="flex gap-1 mt-3">
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

         <div className="w-24/24">
         <button style={{ fontSize:"14px", fontWeight:"bold" , width:"250px", border: " 2px solid #059669"}} className="border px-4 py-2 rounded mb-8 text-[#059669]   hover:bg-[#059669] hover:text-white"  >
            view more
            </button>
         </div> 
        </div>

</div>

      </div>
    
    </div>
  );
}