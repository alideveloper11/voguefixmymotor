export default function Content6({ content }) {

  return (
    <div className="flex w-full flex-wrap">

      <div className="w-full text-left mt-5 ml-5 mr-5">
        <p className="block md:inline font-bold text-[20px]">
          {content.heading},
        </p>

        <p className="block md:inline font-bold text-[20px] text-[#059669]">
          {content.greenHeading}
        </p>
      </div>

      <div className="w-full text-left">
        {content.paragraph.map((item, index) => (
          <p key={index} className="mt-5 ml-5 mr-5">
            {item}
          </p>
        ))}
      </div>

      <div className="w-full text-left">
        <ul className="list-disc ml-10 mt-5">
          {content.bullets.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
  <div> <button
    style={{
      fontSize: "14px",
      fontWeight: "bold",
      width: "250px",
      border: "2px solid #059669"
    }}
    className="px-4 py-2 m-5 rounded mb-8 text-[#059669] hover:bg-[#059669] hover:text-white"
  >
    read more
  </button></div>
    </div>
  );
}