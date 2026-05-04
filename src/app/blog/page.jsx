import Blogs from "@/components/components_blog/Blogs";
import Latest_videos from "@/components/components_blog/latest_videos/Latest_videos";

export default function blog(){
    return(
       <div className="flex flex-wrap w-full">
                <Blogs /> 
                <Latest_videos />
        </div>
    )
}