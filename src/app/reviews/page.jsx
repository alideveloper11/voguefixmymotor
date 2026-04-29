
import Reviews from "../../components/components_reviews/reviews/Reviews";

import LatestVideos from "@/components/components_reviews/latest_videos/Latest_videos";
export default function Review() {
  return (
    <div className="flex flex-wrap w-full">
                        
                        <div className="w-24/24 text-center"><Reviews /></div>
                        <div className="w-24/24 text-center"><LatestVideos /></div>
                        </div>
  );
}