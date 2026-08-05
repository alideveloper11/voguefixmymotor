import { notFound } from "next/navigation";
import Blog_detail_page from "@/components/components_blog/blog_details/Blog_detail_page";
import { getBlogBySlug } from "@/lib/blogs_data/blogsApi";

import Contact_form from "@/components/components_contact/Contact_form"

const SITE_URL = "https://voguefixmymotor.co.uk";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const result = await getBlogBySlug(slug);
  const canonical = `${SITE_URL}/blog/${slug}`;

  if (!result.blog) {
    return { alternates: { canonical } };
  }

  const { blog } = result;

  return {
    title: blog.meta_title || blog.title,
    description: blog.meta_description || blog.excerpt || undefined,
    alternates: { canonical },
  };
}

export default async function BlogDetail({ params }) {
  const { slug } = await params;
  const result = await getBlogBySlug(slug);

  if (result.notFound) {
    notFound();
  }

   return (
           <div className="flex  pb-10 flex-wrap w-full  md:items-stretch">
<div className=" px-4 lg:px-14 flex flex-wrap">
<div className="lg:w-8/12  w-full">
    <Blog_detail_page result={result} />
    </div> 
    <div className="lg:w-4/12  lg:sticky top-[65px] w-full mt-2">

      
<div className={`lg:sticky top-[70px]  lg:h-[calc(100vh-80px)] rounded-3xl shadow-[0_0px_60px_-15px_rgba(0,0,0,0.5)]       lg:ml-5 lg:overflow-y-auto scrollbar-hide`}>
  <div className="h-full contact_blog_scroll_bar">
   <p className="sticky  pt-3 bg-white px-5 font-black rounded-3xl text-md top-0  z-10 text-[#1a1a18]">
    VEHICLE REGISTRATION*
  </p>
    
        <div className=" rounded-3xl    w-full flex justify-center items-center scrollbar-hide">
  

<div className=" rounded-3xl  scrollbar-hide  mx-4 rounded-xl">


<Contact_form />
</div>
</div>
    </div></div>
</div>
    
    </div> </div>
   )
}


