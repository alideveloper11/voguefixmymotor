export default function Servedincity({content})
{
    return(
      <div className="flex flex-wrap bg-gray-100 ">

      <div className="w-full">
        <div className="mx-5 md:mx-15 my-10 text-left">
        <h2 className="font-bold  text-2xl md:text-3xl ">
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