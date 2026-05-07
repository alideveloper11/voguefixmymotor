import { locations } from "@/lib/Areas_data/areas_list";
import Link from "next/link";
export default function Areas_links() {
  return (
    <div  id="areas" className="flex flex-wrap">
      <div className="w-full">
        <div className="w-full">
            <center>
              <h1 className="font-bold text-2xl">Areas We Cover</h1>
            <p className="text-[#4B5563] text-sm mt-1 mb-8">We provide specialist engine services and vehicle recovery in all surrounding areas.</p>
            </center>
          </div>
        <div className="flex flex-wrap">
          
          {locations.map((item, index) => (
            <div
              key={item.id}
              className="w-4/12 md:w-3/12 mb-5 text-center flex items-center justify-center"
            >
               <Link href={`/areas/${item.slug}`}> 
            <button
  className="border-[2px] bg-[#F8FFFB] cursor-pointer border-[#16A34A] pt-2 pb-2 text-[10px] w-[100px] md:text-[14px] md:w-[200px] rounded-[10px] flex items-center gap-2 pl-3"
>
  <span className="w-2 h-2 bg-[#16A34A] rounded-full"></span>
  {item.name}
</button>
</Link>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}