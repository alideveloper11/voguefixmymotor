import blogs_data from "@/lib/blogs_data/blogs_data";
export default async function Blog_detail_page({ params }) {
  const { slug } = await params;
  const blog = blogs_data.find(
    (item) => item.slug === slug
  );
   return (
   
        <div className="flex flex-wrap w-full m-5 mx-7 md:mx-14 md:items-stretch">

  <div className="w-full md:w-1/2 flex">
    <div className="relative min-h-[400px] w-full overflow-hidden rounded-lg">
      <img
        src={blog.image}
        className="absolute w-full h-full object-cover"
      />
    </div>
  </div>

  <div className="w-full md:w-1/2 flex">
    <div className="w-full">
      <div className="md:p-5 mt-5 md:mt-0 pt-0">
        <div className="font-bold text-3xl"  dangerouslySetInnerHTML={{ __html:  blog.heading }}>
        </div>
      </div>

      <div
        className="md:p-5 pt-0"
        dangerouslySetInnerHTML={{ __html: blog.text1 }}
      />
    </div>
  </div>


              
              <div className="w-full">
                <div className="mt-5" dangerouslySetInnerHTML={{ __html: blog.text2 }}>
                  
                </div>
              </div>
              <div className="w-full">
                  <div className=" mt-5">
                <img src={blog.image2}  className=" rounded-lg mr-4 w-full  object-cover"/>
              </div>
              </div>

               <div className="w-full">
                <div className="mt-5"  dangerouslySetInnerHTML={{ __html: blog.text3 }}>
                 
                </div>
              
              </div>
               <div className="w-full mt-5">
              <div className=" w-full">
                <img src={blog.image3}  className=" rounded-lg w-full h-full object-cover"/>
              </div>
              </div>
            
              <div className="w-full mt-5">
              <div className="text-left"   dangerouslySetInnerHTML={{ __html: blog.text4 }}>
                 
              </div>

              </div>
                 <div className="w-full mt-5">
              <div className="  w-full text-center">
                <img src={blog.image4}  className=" rounded-lg w-full h-full object-cover"/>
              </div>
              
              </div>
               <div className="w-full mt-5">
              <div className="text-left"   dangerouslySetInnerHTML={{ __html: blog.text5 }}>
                
              </div>
              </div>
    </div>
   )
}