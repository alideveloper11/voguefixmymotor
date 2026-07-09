export default function Loading() {
  return (
    <div
      className="max-w-[1800px] mx-auto py-10"
      style={{ width: "95%" }}
    >
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