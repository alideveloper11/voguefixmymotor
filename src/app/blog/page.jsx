import Blogs from "@/components/components_blog/Blogs";
import Latest_videos from "@/components/latest_videos/Latest_videos";
import LatestVideosData from "@/lib/blogs_data/LatestVideosData";
import { getAllBlogs } from "@/lib/blogs_data/blogsApi";

export const metadata = {
  alternates: {
    canonical: "https://voguefixmymotor.co.uk/blog",
  },
};

export default async function Blog() {
  const result = await getAllBlogs();

  if (result.error) {
    return (
      <div className="flex flex-wrap w-full">
        <p className="text-xl text-[red]">Unable to load blogs. Please try again later......</p>
      </div>
    );
  }

  return (
    <>
    <div className="flex flex-wrap w-full">
      <Blogs blogs={result.blogs} />
    </div>
     <div className="flex flex-wrap w-full">
      <Latest_videos LatestVideosData={LatestVideosData}  />
    </div>
    </>
  );
}
