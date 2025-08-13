import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { MdOutlineDone } from "react-icons/md";
import { TiPlus } from "react-icons/ti";
import { FaMinus } from "react-icons/fa";
export default function ProductDetailsInfo({ product }) {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setselectedColor] = useState(null);
  const [count, setCount] = useState(1);
  return (
    <div>
      <h1 className="text-2xl font-semibold">{product.name}</h1>
      <div className="bg-gray-100 h-14 rounded-xl mt-4 flex items-center px-1 justify-center">
        <p className="text-gray-600 tracking-tightest text-xs  md:text-sm ">
          با توجه به تفاوت رنگ در صفحه نمایش و واقعیت، ممکن است رنگ محصولات تا
          ۲۰٪ متغیر باشد
        </p>
      </div>

      {/* Size */}
      <div className="mt-6">
        <h3 className="font-semibold mb-3">سایزها:</h3>
        <div className="flex gap-3">
          {product.sizes.map((size, i) => (
            <button
              type="button"
              key={i}
              onClick={() => setSelectedSize(size)}
              className={`flex items-center justify-between w-20 px-3.5 py-2 rounded-xl border transition-all 
            ${selectedSize === size ? "border-green-500" : "border-gray-300"}`}
            >
              <span className="text-lg">{size}</span>
              <span
                className={`w-5 h-5 rounded-full flex items-center justify-center border transition-colors duration-200
              ${
                selectedSize === size
                  ? "bg-green-500 border-green-500"
                  : "border-gray-300 bg-gray-100"
              }`}
              >
                {selectedSize === size && (
                  <FaCheckCircle className="w-3.5 h-3.5 text-white" />
                )}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Colors */}
      <div className="mt-6">
        <h3 className="font-semibold mb-2">رنگ‌ها:</h3>
        <div className="flex gap-2.5">
          {product.colors.map((color, i) => (
            <div
              key={i}
              className="w-6 h-6 rounded-full  flex items-center justify-center cursor-pointer"
              style={{ backgroundColor: color }}
              title={color}
              onClick={() => setselectedColor(color)}
            >
              {selectedColor === color && (
                <MdOutlineDone className="text-white" />
              )}
            </div>
          ))}
        </div>
        <p className="text-xs text-blue-400 mt-3">
          با خرید این محصول سه امتیاز دریافت می کنین
        </p>
      </div>

      <h2 className="text-2xl  my-5 font-semibold  text-orange-400">
        {product.price.toLocaleString()}
        <span className="mr-2">تومان</span>
      </h2>
      <div className="flex justify-end  ">
        <div className="flex gap-x-5  items-center">
          <div className="flex gap-x-5 items-center border border-amber-500 py-3 px-6 rounded-md">
            <span className="cursor-pointer" onClick={() => setCount(count + 1)}><TiPlus/></span>
            <span className="text-xl">{count}</span>
            <span className="cursor-pointer" onClick={() => setCount(count - 1)}><FaMinus/></span>
          </div>
          <div>
            <button
              type="button"
              className="flex items-center bg-amber-400 rounded-md py-3.5 px-6 gap-x-1 text-gray-700"
            >
              <RiShoppingBag4Fill size={24} />
              افزودن به سبدخرید
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
