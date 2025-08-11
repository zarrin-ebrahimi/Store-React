import React from "react";

export default function Loader() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="animate-spin rounded-full h-10 w-10 border-4 border-t-4 border-gray-300 border-t-gray-600"></div>
      <span className="mr-3 text-gray-600">در حال بارگذاری...</span>
    </div>
  );
}
