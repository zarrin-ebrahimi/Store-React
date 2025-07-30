import React from "react";

export default function ProductCard({product}) {
  return (
    <div className=" flex flex-col shadow-sm rounded hover: group ">
      <div className="mb-3.5 justify-center flex " >
        <img src={product.image} alt="" className="w-full rounded h-72" />
      </div>
      <div className="relative">
        <span className="pr-2 font-bold">{product.name}</span>
        <span className="absolute  left-0 bg-pink-600 px-3.5 py-px rounded-tr-full rounded-br-full text-white ">
          {product.off}%
        </span>
      </div>
      <div className="flex flex-col items-end pl-2 my-3.5">
          <span className="font-bold text-gray-400 line-through">
            1,2000,000
          </span>
      
        <span className="font-bold text-xl flex items-center gap-x-2">
          <span className="text-sm">تومان</span>{product.price}
        </span>
      </div>
    </div>
  );
}
