export default function Loading() {
  return (
    <div
      className="max-w-[1800px] mx-auto py-6"
      style={{ width: "95%" }}
    >
      <div className="flex flex-wrap gap-6">

        {/* LEFT CONTENT */}

        <div className="w-full lg:w-[66%]">

          {/* Featured Image */}

          <div className="h-[560px] skeleton rounded-[28px]"></div>

          {/* Title */}

          <div className="mt-8 h-12 w-[92%] skeleton"></div>

          <div className="mt-4 h-12 w-[80%] skeleton skeleton-delay-1"></div>

          {/* Intro */}

          <div className="mt-10 space-y-4">

            <div className="h-5 skeleton"></div>

            <div className="h-5 skeleton skeleton-delay-1"></div>

            <div className="h-5 skeleton skeleton-delay-2"></div>

            <div className="h-5 w-[90%] skeleton"></div>

            <div className="h-5 w-[82%] skeleton skeleton-delay-3"></div>

          </div>

          {/* More Paragraph */}

          <div className="mt-12 space-y-4">

            <div className="h-5 skeleton"></div>

            <div className="h-5 skeleton skeleton-delay-2"></div>

            <div className="h-5 skeleton"></div>

            <div className="h-5 w-[70%] skeleton"></div>

          </div>

          {/* Heading */}

          <div className="mt-14 h-10 w-[55%] skeleton"></div>

          <div className="mt-8 space-y-4">

            <div className="h-5 skeleton"></div>

            <div className="h-5 skeleton skeleton-delay-2"></div>

            <div className="h-5 skeleton"></div>

            <div className="h-5 w-[75%] skeleton"></div>

          </div>

        </div>

        {/* RIGHT CONTACT FORM */}

        <div className="flex-1 min-w-[340px]">

          <div className="rounded-[28px] border border-gray-200 bg-white shadow-lg p-7">

            {/* Heading */}

            <div className="h-10 w-[80%] skeleton"></div>

            {/* Registration */}

            <div className="mt-8 h-5 w-36 skeleton"></div>

            <div className="mt-3 h-14 skeleton rounded-xl"></div>

            {/* Name + Phone */}

            <div className="grid grid-cols-2 gap-5 mt-8">

              <div>
                <div className="h-4 w-24 skeleton"></div>
                <div className="mt-2 h-12 skeleton rounded-lg"></div>
              </div>

              <div>
                <div className="h-4 w-28 skeleton"></div>
                <div className="mt-2 h-12 skeleton rounded-lg skeleton-delay-1"></div>
              </div>

            </div>

            {/* Email + Postcode */}

            <div className="grid grid-cols-2 gap-5 mt-7">

              <div>
                <div className="h-4 w-20 skeleton"></div>
                <div className="mt-2 h-12 skeleton rounded-lg"></div>
              </div>

              <div>
                <div className="h-4 w-24 skeleton"></div>
                <div className="mt-2 h-12 skeleton rounded-lg skeleton-delay-2"></div>
              </div>

            </div>

            {/* Message */}

            <div className="mt-8">

              <div className="h-4 w-24 skeleton"></div>

              <div className="mt-2 h-[230px] skeleton rounded-xl"></div>

            </div>

            {/* Button */}

            <div className="mt-8 h-14 skeleton rounded-xl"></div>
          </div>
        </div>

      </div>
    </div>
  );
}