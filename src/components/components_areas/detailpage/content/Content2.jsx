export default function Content2({ content }) {

  return (
    <div className="flex w-full flex-wrap">

      <div className="w-full text-left mt-5 ml-5 mr-5">
        <p className="block md:inline font-bold text-[20px]">
          {content.black_heading},
        </p>

        <p className="block md:inline font-bold text-[20px] text-[#059669]">
          {content.green_heading}
        </p>
      </div>

      <div className="w-full text-left">
        {content.p.map((item, index) => (
          <p key={index} className="mt-5 ml-5 mr-5">
            {item}
          </p>
        ))}
      </div>
      <div className="w-full text-left">
        <ul className="list-disc ml-10 mt-5">
          {content.lists.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

    </div>
  );
}