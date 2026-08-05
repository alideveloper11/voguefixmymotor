"use client";

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <div className="flex flex-wrap w-full justify-center items-center text-center min-h-screen px-4">
          <div className="w-full">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Something went wrong!</h2>
            <p className="mb-6 text-gray-600">
              Please reload the page to continue.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 rounded-xl bg-[#046b3f] text-white font-bold hover:opacity-90 transition"
            >
              Reload
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
