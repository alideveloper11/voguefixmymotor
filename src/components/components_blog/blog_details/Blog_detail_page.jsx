import blogs_data from "@/lib/blogs_data/blogs_data";
export default async function Blog_detail_page({ params }) {
  const { slug } = await params;
  const blog = blogs_data.find(
    (item) => item.slug === slug
  );
   return (
   
          <div className="flex flex-wrap w-full m-5">
    {/* {blog.text1} */}
    
              <div className="w-full md:w-12/24">
              <div className="h-[400px]">
                <img src={blog.image2}  className="w-full h-full object-cover"/>
              </div>
              </div>
              <div className="w-full md:w-12/24">
               <div className="p-5 mt-5 md:mt-0 pt-0 ">
                    <p className="font-bold text-3xl">{blog.heading}</p>
              </div>
              <div className="p-5 pt-0">
                    <p>{blog.text1}</p>
              </div>
              </div>
              
              <div className="w-full">
                <div className="mt-5">
                   {blog.text2}
                </div>
              </div>
              <div className="w-full">
                  <div className="h-[480px] mt-5">
                <img src={blog.image3}  className="w-full h-full object-cover"/>
              </div>
              </div>

               <div className="w-full">
                <div className="mt-5">
                   {blog.text3}
                </div>
                <div className="mt-5">
                   {blog.text4}
                </div>
              </div>
               <div className="w-full md:w-12/24 mt-5">
              <div className="h-[400px] md:w-[95%]">
                <img src={blog.image3}  className="w-full h-full object-cover"/>
              </div>
              </div>
               <div className="w-full md:w-12/24 mt-5">
              <div className="h-[400px] md:w-[95%] text-right">
                <img src={blog.image4}  className="w-full h-full object-cover"/>
              </div>
              </div>
    </div>
   )
}