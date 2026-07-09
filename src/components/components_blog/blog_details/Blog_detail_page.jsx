

export default async function Blog_detail({ params }) {
   try{
  const { slug } = await params;
   const username = process.env.BLOG_USERNAME;
 const password = process.env.BLOG_PASSWORD;
  const response = await fetch(
    `https://blogs-tbsmf.ondigitalocean.app/api/vogue-fix-my-motor/blogs/${slug}/`,
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
    throw new Error("Failed to fetch blogs");
  }

  const blog = await response.json();
   return (
   <div className="blog_detail flex flex-wrap">
<div className="w-full  flex flex-wrap ">
  <div className="shadow-[0_0px_1px_#4CFF3D] mt-2  w-full rounded-3xl flex flex-wrap overflow-hidden">
    <div className=" w-full">
      <img
  src={blog.images?.[0]?.image}
  className="w-full first_blog_image h-full object-cover"
  alt={blog.title}
/>
    </div>

  </div>
</div>

  <div className="w-full py-5 ">
    <div className="w-full">
      <div className="">
        <h1 className="font-bold text-3xl"  dangerouslySetInnerHTML={{ __html:  blog.title }}>
        </h1>
      </div>

      <div
        className=""
        dangerouslySetInnerHTML={{ __html: blog.excerpt }}
      />
    </div>
  </div>


              
              <div className="w-full">
                <div className="mt-5" dangerouslySetInnerHTML={{ __html: blog.content }}>
                  
                </div>
              </div>
            

              
             
            
                
              
              
    
    </div>
   )
  }
  catch (error) {
   return (
    <div className="flex flex-wrap w-full">
      <p className="text-xl text-[red]">blog not found.....</p>
    </div>
  );
}
}