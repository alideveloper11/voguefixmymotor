export default function Servedincity({content})
{
    return(
      <div className="flex flex-wrap">

      <div className="w-full">
        <div className="mx-20 my-5 text-left">
        <h2 className="font-bold text-2xl ">
            {content.heading}
        </h2>
        <p className="mt-5">
            {content.p1}
             </p>
        <p className="mt-5">
           {content.p2}
           </p>
        </div>
        </div>
    </div>
    )
}