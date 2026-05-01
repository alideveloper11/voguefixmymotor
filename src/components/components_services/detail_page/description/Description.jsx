export default function Description({ content , image}) {
  return (
    <div className="flex flex-wrap w-full bg-[#F8F8F8]">

      <div
        className="w-full bg-[#F3FFF9]"
        style={{
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
          borderRadius: "20px 20px 0px 0px",
        }}
      >

        <div className="w-full">

          <h1 className="font-bold m-5 text-left text-3xl mb-6">
            {content.heading}
          </h1>

          {content.paragraph?.map((item, index) => (
            <p key={index} className="text-left m-5 leading-relaxed text-gray-700">
              {item}
            </p>
          ))}

          <div className="text-left ml-10 mb-10">
            <ul className="list-disc pl-5">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Cras volutpat nibh pulvinar posuere auctor.</li>
              <li>Nullam lobortis risus pharetra lobortis blandit.</li>
            </ul>
          </div>
 <div className="text-left" > 
     <button
    style={{
      fontSize: "14px",
      fontWeight: "bold",
      width: "250px",
      border: "2px solid #059669"
    }}
    className="px-4 py-2 m-5 rounded mb-8 font-bold text-[#059669] hover:bg-[#059669] hover:text-white"
  >
    Instant Qoute
  </button></div>
        </div>

        <div className="w-[100%]">
          <img
            src={image}
            alt="description"
            className="w-full rounded-lg object-cover"
          />
        </div>

      </div>

    </div>
  );
}