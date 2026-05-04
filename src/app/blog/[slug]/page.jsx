import Blog_detail_page from "@/components/components_blog/blog_details/Blog_detail_page";

export default function BlogDetail({ params }) {

   return (
   
    <div className="flex flex-wrap w-full">
    <Blog_detail_page params={params} />
    </div>
   )
}