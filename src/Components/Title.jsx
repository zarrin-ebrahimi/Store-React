import React from "react";

export default function Title ({title}) {
  return (
    <div>
      <div className="flex justify-center items-center  mb-4">
        <div className="flex items-center justify-center gap-x-10  mt-10 mb-4">
          <div className="w-32 h-0.25 rounded-full bg-gray-900 mt-2"></div>
          <div className="flex flex-col gap-y-1 text-center ">
            <h2 className="text-xl font-bold">{title}</h2>
            {/* <span className="text-gray-400  text-xs">
              پرفروش ترین های این هفته
            </span> */}
          </div>
          <div className="w-32 h-0.25 rounded-full bg-gray-900 mt-2"></div>
        </div>
      </div>
    </div>
  );
}
