import latestVideos from "@/lib/About_data/LatestVideosData";

export default function Latest_videos() {
  return (
    <div className="flex w-full flex-wrap">
      
      <div className="w-full flex flex-wrap mt-10 ">

        {latestVideos.map((videos) => (
          <div key={videos.id} className="w-full md:w-12/24 lg:w-8/24">

            <div
              className="shadow-[0_4px_20px_rgba(255,255,255,0.3)] bg-white justify-center items-center"
            >
<center>
              <iframe 
                style={{ borderRadius: "10px" }}
                src={videos.link}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
</center>
              <p className=" font-bold text-[17px]">
                {videos.name}
              </p>

              <p className="text-[#90A1B9] text-[12px]">
                {videos.date}
              </p>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}