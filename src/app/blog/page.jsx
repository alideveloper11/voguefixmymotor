import Blogs from "@/components/components_blog/Blogs";
import Latest_videos from "@/components/latest_videos/Latest_videos";
import LatestVideosData from "@/lib/blogs_data/LatestVideosData";

export default function blog(){
    return(
       <div className="flex flex-wrap w-full">
                <Blogs /> 
                <Latest_videos LatestVideosData={LatestVideosData}  />
        </div>
    )
}