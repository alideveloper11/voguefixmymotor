import Link from "next/link";
export default function Requestaqoute(){
    return(
        <div>
    <div className=" w-full">
          <div className="flex  flex-wrap m-10">
             <div className=" w-full md:w-1/2">
              <div  style={{width:"100%"}}   className="md:h-[400px]">
                    <img src="\vogue fix my motor image 17.jpg" className="h-full w-full object-cover" style={{width:"100%", borderRadius:"10px 0px 0px 10px"}} alt="Vogue Fix My Motor workshop, Grays Essex" />
                </div>
          </div>
          <div className=" w-full md:w-1/2 bg-[#F3FFF9] shadow-2xl" style={{borderRadius:"0px 10px 10px 0px"}}>
            <div className="m-5 text-left ">
                   <h2 className="text-2xl md:text-3xl font-bold">Get a Free Engine Repair Quote in Essex</h2>
                                          <p className="mt-5">
                                               Whether your vehicle needs a diagnostic check, a specific repair, or a full engine rebuild, Vogue Fix My Motor in Grays, Essex is here to help. We provide expert car services across all surrounding areas with honest pricing and no hidden charges.
                                          </p>
                                          <div className="w-full text-left">
                                              <ul className="list-disc mt-5 ml-3">
                                          <li>Free, no-obligation quotes on all repairs</li>
                                                  <li>Expert engine diagnostics using advanced scanning tools</li>
                                                  <li>Quality, manufacturer-approved parts on every job</li>
                                                  <li>Warranty included on all engine repairs and fitted parts</li>
                                      </ul>
                                              </div>
                                        <div className="w-24/24">

                        <Link href="/contact">
                        <button className="border mt-5  px-4 py-2 rounded mb-2 bg-[#059669] hover:bg-[#0b5a41]"
                        style={{ fontSize:"14px", color:"white", fontWeight:"bold" , width:"200px"}}>
                           Request A Quote
                           </button>
                           </Link>
                        </div>

            </div>
          </div>

          </div>
      </div>
    </div>
    )
}
