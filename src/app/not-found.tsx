import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold">404</h1>

      <p className="mt-4 text-gray-600">
        This page does not exist.
      </p>

      <Link
        href="/"
        className="mt-6 bg-black text-white px-4 py-2 rounded"
      >
        Go Home
      </Link>
    </div>
  );
}