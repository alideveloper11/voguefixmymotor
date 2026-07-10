import Blogs from "@/components/components_blog/Blogs";
import Latest_videos from "@/components/latest_videos/Latest_videos";
import LatestVideosData from "@/lib/blogs_data/LatestVideosData";
export default async function Blog() {
  try{
  const username = process.env.BLOG_USERNAME;
  const password = process.env.BLOG_PASSWORD;
  const response = await fetch(
    "https://blogs-tbsmf.ondigitalocean.app/api/vogue-fix-my-motor/blogs/",
    {
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(`${username}:${password}`).toString("base64"),
      },
      cache: "no-store",
    }
  );
  if (!response.ok) {
  console.log(response.status);
  console.log(await response.text());
  throw new Error("Failed to fetch blogs");
}
  const blogs = await response.json();
  return (
    <>
    <div className="flex flex-wrap w-full">
      <Blogs blogs={blogs} />
    </div>
     <div className="flex flex-wrap w-full">
      <Latest_videos LatestVideosData={LatestVideosData}  />
    </div>  
    </>
  );
   }
catch {
   return (
    <div className="flex flex-wrap w-full">
      <p className="text-xl text-[red]">Unable to load blogs. Please try again later......</p>
    </div>
  );
}
}
