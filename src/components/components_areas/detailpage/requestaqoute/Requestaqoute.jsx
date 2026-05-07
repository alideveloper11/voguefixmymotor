
export default function Requestaqoute({content}) {
  return (
    <div>
    <div className=" w-full">
          <div className="flex  flex-wrap m-10">
             <div className=" w-full md:w-1/2">
              <div  style={{width:"100%"}}   className="md:h-[400px]">
                    <img src={content.image} className="h-full w-full object-cover" style={{width:"100%", borderRadius:"10px 0px 0px 10px"}} alt="slider_section_image" />
                </div>
          </div>
          <div className=" w-full md:w-1/2 bg-[#F3FFF9] shadow-2xl" style={{borderRadius:"0px 10px 10px 0px"}}>
            <div className="m-5 text-left ">
                   <h1 className="text-2xl md:text-3xl font-bold">{content.heading}</h1>
                                          <p className="mt-5">
                                              {content.paragraph}
                                          </p>
                                          <div className="w-full text-left">
                                              <ul className="list-disc mt-5 ml-3">
                                        {content.bullets.map((item, index) => (
                                          <li key={index}>{item}</li>
                                        ))}
                                      </ul>
                                              </div>
                                        <div className="w-24/24">
                        

                        <button className="border mt-5  px-4 py-2 rounded mb-2 bg-[#059669] hover:bg-[#0b5a41]"  
                        style={{ fontSize:"14px", color:"white", fontWeight:"bold" , width:"200px"}}>
                           read more
                           </button>
                        </div> 

            </div>
          </div>
         
          </div>
      </div>
    </div>
  );
}