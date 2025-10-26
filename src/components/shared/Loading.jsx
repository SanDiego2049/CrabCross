import { useEffect, useState } from "react";

const Loading = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const totalDuration = 4000;
    const intervalTime = 100;
    const steps = totalDuration / intervalTime;
    const increment = 100 / steps;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {/* Animated Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-900 z-50">
        <div
          className="h-full bg-linear-to-r from-lime-400 to-lime-600 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Navbar Skeleton */}
      <div className="bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-4">
          <div className="flex items-center justify-between">
            {/* Logo skeleton */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-800 rounded-lg animate-pulse" />
              <div className="space-y-2">
                <div className="w-24 h-4 bg-gray-800 rounded animate-pulse" />
                <div className="w-20 h-3 bg-gray-800 rounded animate-pulse" />
              </div>
            </div>
            {/* Nav items skeleton */}
            <div className="hidden md:flex gap-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-16 h-4 bg-gray-800 rounded animate-pulse"
                />
              ))}
            </div>
            {/* CTA button skeleton */}
            <div className="w-32 h-10 bg-gray-800 rounded-full animate-pulse" />
          </div>
        </div>
      </div>

      {/* Hero Section Skeleton */}
      <div className="relative h-[70vh] bg-linear-to-b from-gray-900 to-black">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl mx-auto space-y-6">
            {/* Logo spinner */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-20 h-20 border-4 border-gray-800 border-t-lime-500 rounded-full animate-spin" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-lime-500/20 rounded-full animate-pulse" />
                </div>
              </div>
            </div>
            {/* Title skeleton */}
            <div className="space-y-4">
              <div className="w-96 h-12 bg-gray-800 rounded-lg mx-auto animate-pulse" />
              <div className="w-80 h-12 bg-gray-800 rounded-lg mx-auto animate-pulse" />
            </div>
            {/* Subtitle skeleton */}
            <div className="space-y-3 mt-6">
              <div className="w-full max-w-2xl h-6 bg-gray-800 rounded mx-auto animate-pulse" />
              <div className="w-full max-w-xl h-6 bg-gray-800 rounded mx-auto animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Content Section Skeleton */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image skeleton */}
          <div className="relative">
            <div className="absolute -inset-1 bg-linear-to-br from-lime-400/20 to-lime-600/20 rounded-2xl blur-lg" />
            <div className="relative w-full h-80 bg-gray-800 rounded-2xl animate-pulse" />
          </div>
          {/* Text content skeleton */}
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="w-48 h-10 bg-gray-800 rounded-lg animate-pulse" />
              <div className="w-32 h-1 bg-lime-500/50 rounded-full" />
            </div>
            <div className="space-y-4">
              <div className="w-full h-5 bg-gray-800 rounded animate-pulse" />
              <div className="w-full h-5 bg-gray-800 rounded animate-pulse" />
              <div className="w-5/6 h-5 bg-gray-800 rounded animate-pulse" />
              <div className="w-full h-5 bg-gray-800 rounded animate-pulse" />
              <div className="w-4/6 h-5 bg-gray-800 rounded animate-pulse" />
            </div>
            <div className="w-48 h-12 bg-gray-800 rounded-full animate-pulse mt-6" />
          </div>
        </div>
      </div>

      {/* Cards Section Skeleton */}
      <div className="bg-gray-900/50 py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-12">
            <div className="w-64 h-10 bg-gray-800 rounded-lg mx-auto animate-pulse mb-4" />
            <div className="w-96 h-6 bg-gray-800 rounded mx-auto animate-pulse" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-gray-800/50 rounded-2xl p-8 space-y-4 border border-gray-700"
              >
                <div className="w-12 h-12 bg-gray-700 rounded-full animate-pulse" />
                <div className="w-3/4 h-6 bg-gray-700 rounded animate-pulse" />
                <div className="space-y-2">
                  <div className="w-full h-4 bg-gray-700 rounded animate-pulse" />
                  <div className="w-full h-4 bg-gray-700 rounded animate-pulse" />
                  <div className="w-5/6 h-4 bg-gray-700 rounded animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Loading Text */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center gap-3 bg-gray-900/90 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-800">
          <div className="flex gap-1">
            <div
              className="w-2 h-2 bg-lime-500 rounded-full animate-bounce"
              style={{ animationDelay: "0ms" }}
            />
            <div
              className="w-2 h-2 bg-lime-500 rounded-full animate-bounce"
              style={{ animationDelay: "150ms" }}
            />
            <div
              className="w-2 h-2 bg-lime-500 rounded-full animate-bounce"
              style={{ animationDelay: "300ms" }}
            />
          </div>
          <span className="text-gray-300 text-sm font-medium">
            Loading CrabCross...
          </span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
