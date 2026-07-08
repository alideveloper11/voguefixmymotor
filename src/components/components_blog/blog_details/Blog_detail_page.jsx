import blogs_data from "@/lib/blogs_data/blogs_data";


export default async function Blog_detail_page({ params }) {
  const { slug } = await params;
  const blog = blogs_data.find(
    (item) => item.slug === slug
  );
   return (
   
        <div className="flex blog_detail  flex-wrap w-full  md:items-stretch">

{/* <div className="w-full mt-5  flex flex-wrap">
    
    <div className=" w-full">
                <img       src={blog.image}  className=" rounded-lg w-full h-full object-cover"/>
              </div>
  </div> */}


  <div className="w-full mt-2 mx-1 flex">
    <div className="w-full">
      <div className="md:px-5  md:mt-0 pt-0">
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