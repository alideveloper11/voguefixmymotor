

import Blogs from "@/components/components_blog/Blogs";
import Latest_videos from "@/components/latest_videos/Latest_videos";
import LatestVideosData from "@/lib/blogs_data/LatestVideosData";
import { getAllBlogs } from "@/app/api/blogs/blogsApi";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
export const metadata = {
  alternates: {
    canonical: "https://voguefixmymotor.co.uk/blog",
  },
};

export default async function Blog() {
  const result = await getAllBlogs();

 
  if (result.error) {
    return (
      <main className="bg-white w-full flex items-center justify-center px-6 py-10">
      <div className="w-full  text-center">

        {/* Icon */}
        <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-[#e8f6f0]">
          <ArticleOutlinedIcon
  sx={{
    fontSize: 46,
    color: "#00874e",
  }}
/>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-5">
          No Blogs Found
        </h1>
{/* Green underline */}
        <div className="mx-auto mb-7 flex items-center justify-center gap-2">
          <span className="h-1 w-14 rounded-full bg-[#111827]" />
          <span className="h-1 w-20 rounded-full bg-[#00874e]" />
        </div>

        {/* Description */}
        <p className="mx-auto max-w-xl text-lg leading-8 text-gray-600">
          We don&apos;t have any blog posts available at the moment.
          Please check back soon for the latest automotive tips,
          diagnostics advice, and updates from Vogue Fix My Motor.
        </p>

      

      </div>
    </main>
    
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
