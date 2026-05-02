import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      
      <h1 className="text-5xl font-bold text-blue-600 mb-4">
        404
      </h1>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Page Not Found
      </h2>

      <p className="text-gray-500 mb-6">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md text-sm"
      >
        Go Back Home
      </Link>

    </div>
  );
}