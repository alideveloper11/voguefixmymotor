export default function Content3({ content }) {

  return (
    <div className="flex w-full flex-wrap">

       <div className="w-full text-left mx-5 md:mx-15">
                <p className="block md:inline font-bold" style={{fontSize:"20px"}}>{content.heading},</p>
                <p className="block md:inline  font-bold"  style={{fontSize:"20px", color:"#059669"}}>{content.greenHeading}</p>
              </div>  
              
              <div className="w-full text-left">
                 {content.paragraph.map((item,index)=>(
      //    
                <p  key={index} className="mt-5 mx-5 md:mx-15"> {item}  </p>
                 ))}
              </div>
              
              <div className="w-full text-left">
              <ul className="list-disc mx-10 md:mx-20 mt-5">
        {content.bullets.map((item,index)=>(
          <li key={index}>{item}</li>
        ))}
      </ul>
              </div>
              
    </div>
  );
}