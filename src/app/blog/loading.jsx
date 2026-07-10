export default function Loading() {
  return (
    <div
      className="max-w-[1800px] mx-auto py-7"
      style={{ width: "95%" }}
    >
      <div className="w-full text-center pb-10 font-bold text-2xl md:text-3xl">
                 <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          <span className=" relative inline-block  text-gray-900">Our
               <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#aba9a9]/20 via-[black] to-[#aba9a9]/20 rounded-full"></span>
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-[black] rounded-full"></span>
          
          </span>
          
          <span className="relative inline-block ml-3 text-[#046b3f]">
            Blogs
            {/* Underline Decoration */}
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#046b3f]/20 via-[#046b3f] to-[#046b3f]/20 rounded-full"></span>
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-[#046b3f] rounded-full"></span>
          </span>
        </h1>
              </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">

        {[...Array(12)].map((_, index) => (

          <div
            key={index}
            className="overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-lg"
          >

            {/* Image */}
            <div className="h-64 skeleton"></div>

            <div className="p-5">

              {/* Title */}
              <div className="h-7 w-[90%] skeleton"></div>

              <div className="mt-3 h-7 w-[65%] skeleton skeleton-delay-1"></div>

              {/* Description */}

              <div className="mt-6 space-y-3">

                <div className="h-4 skeleton"></div>

                <div className="h-4 skeleton skeleton-delay-1"></div>

                <div className="h-4 w-[75%] skeleton skeleton-delay-2"></div>

                <div className="h-4 w-[55%] skeleton skeleton-delay-3"></div>

              </div>

              {/* Divider */}

              <div className="my-6 h-px bg-gray-200"></div>

              {/* Footer */}

              <div className="flex justify-between items-center">

                <div className="flex items-center gap-2">

                  <div className="h-7 w-7 rounded-md skeleton"></div>

                  <div className="h-4 w-16 skeleton skeleton-delay-2"></div>

                </div>

                <div className="h-6 w-32 skeleton skeleton-delay-1"></div>

              </div>

            </div>

          </div>

        ))}

      </div>
    </div>
  );
}