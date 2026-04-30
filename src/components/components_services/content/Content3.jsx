import { getcontent3 } from "@/lib/services_data/content_data";
const data = getcontent3();
export default function Content3(){

return (
  <div className="flex w-full flex-wrap mb-8">
        <div className="w-full text-left mt-5 ml-5 mr-5">
          <p className="block md:inline font-bold" style={{fontSize:"20px"}}>{data.heading},</p>
          <p className="block md:inline  font-bold"  style={{fontSize:"20px", color:"#059669"}}>{data.greenHeading}</p>
        </div>  
        
        <div className="w-full text-left">
           {data.paragraph.map((item,index)=>(
//    
          <p  key={index} className="mt-5 ml-5 mr-5"> {item} </p>
           ))}
        </div>
        
        <div className="w-full text-left">
        <ul className="list-disc ml-10 mt-5">
  {data.bullets.map((item,index)=>(
    <li key={index}>{item}</li>
  ))}
</ul>
        </div>
        
      

  </div>
//   <div>
//     <h1>{data.heading}</h1>
//     <h2>{data.greenHeading}</h2>
//      {data.paragraph.map((item,index)=>(
//     <p key={index}>{item}</p>
//  ))}
    

//     <ul>
//       {data.bullets.map((item,index)=>(
//         <li key={index}>{item}</li>
//       ))}
//     </ul>
//   </div>
 );
}