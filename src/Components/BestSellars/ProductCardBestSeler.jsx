import React from "react";
import { FcLike } from "react-icons/fc";
import { FaRegHeart } from "react-icons/fa";
export default function ProductCartBestSeler({product}) {
  return (
    <div className=" mb-20">
      <div className="relative group">
        <img src={product.imagePrimary} alt=""  className="h-80 w-full"/>
        {/*hover*/}
        <img
          src={product.imageHover}
          alt=""
          className="absolute inset-0 h-80 w-full  opacity-0 transition-opacity duration-300 group-hover:opacity-100 "
        />
        <div className="absolute inset-0 flex items-center justify-center group-hover:bg-black/10 ">
          <FaRegHeart className="absolute top-3 right-3 text-2xl text-white opacity-0 group-hover:opacity-100" />
          <div  className="flex flex-col -translate-y-4 group-hover:translate-y-0 duration-300 transition-all gap-y-2">
            <button className="bg-white text-black px-7 text-sm rounded-3xl py-3 hover:bg-gray-900 hover:text-white transition opacity-0 group-hover:opacity-100">
              اطلاعات بیشتر
            </button>
            <button className="bg-white text-black px-7 text-sm rounded-3xl py-3 hover:bg-gray-900 hover:text-white transition opacity-0 group-hover:opacity-100">
              خریدسریع 
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col mt-4 mb-3">
          <span className="font-bold">{product.name}</span>
          <span className="line-through text-gray-400">
            {product.discountPrice}<span>تومان</span>
          </span>
          <span>
            {product.price}<span>تومان</span>
          </span>
        </div>
        <div className="flex gap-x-1">
          {product.colors.map((color)=>(
          <div className="w-4 h-4 bg-amber-500 rounded-full" style={{backgroundColor: color}}></div>

          ))}
          
        </div>
      </div>
    </div>
  );
}
