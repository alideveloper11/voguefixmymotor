"use client";

import { useEffect } from "react";

export default function ErrorPage({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-wrap w-full justify-center items-center text-center py-24 px-4">
      <div className="w-full">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Something went wrong!</h2>
        <p className="mb-6 text-gray-600">
          Please try again, or head back to the homepage.
        </p>
        <button
          onClick={() => unstable_retry()}
          className="px-6 py-3 rounded-xl bg-[#046b3f] text-white font-bold hover:opacity-90 transition"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
