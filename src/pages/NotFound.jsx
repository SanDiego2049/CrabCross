import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <section className="min-h-screen bg-black text-gray-200 flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl md:text-5xl font-bold text-lime-400 mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-gray-400 mb-6 text-center max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="flex items-center gap-2 bg-lime-500 hover:bg-lime-600 text-white px-5 py-2 rounded-full font-medium transition-all"
      >
        <ArrowLeft size={18} /> Back to Home
      </Link>
    </section>
  );
};

export default NotFound;
