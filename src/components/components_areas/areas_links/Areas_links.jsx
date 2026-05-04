import { locations } from "@/lib/Areas_data/areas_list";

export default function Areas_links() {
  return (
    <div className="flex flex-wrap">
      <div className="w-full">
        <div className="flex flex-wrap">
          {locations.map((item, index) => (
            <div
              key={item.id}
              className="w-4/12 md:w-3/12 mb-5 text-center flex items-center justify-center"
            >
            <button
  className="border-[2px] bg-[#F8FFFB] border-[#16A34A] pt-2 pb-2 text-[10px] w-[100px] md:text-[14px] md:w-[200px] rounded-[10px] flex items-center gap-2 pl-3"
>
  <span className="w-2 h-2 bg-[#16A34A] rounded-full"></span>
  {item.name}
</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}