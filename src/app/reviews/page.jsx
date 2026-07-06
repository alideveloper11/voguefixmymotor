
import Reviews from "../../components/components_reviews/reviews/Reviews";
import reviewsData from "@/lib/Reviews_data/reviewsData";
import LatestVideos from "@/components/latest_videos/Latest_videos";

import LatestVideosData from "@/lib/Reviews_data/LatestVideosData";
export default function Review() {
  return (
    <div className="flex flex-wrap w-full">
                        
                        <div className="w-24/24 text-center"><Reviews reviewsData={reviewsData} /></div>
                        <div className="w-24/24 text-center"><LatestVideos LatestVideosData={LatestVideosData} /></div>
    </div>
  );
}