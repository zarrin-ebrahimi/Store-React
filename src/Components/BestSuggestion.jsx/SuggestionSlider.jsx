import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";

export default function TopProductsSlider() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("خطا در گرفتن اطلاعات:", err));
  }, []);

  return (
    <section className="py-6 px-4 relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">پیشنهادهای شگفت انگیز
            <div className="w-full h-0.5 rounded-full bg-amber-500 mt-2"></div>
        </h2>
        <button
          onClick={() => navigate("/products")}
          className="bg-amber-400 px-6 py-2 rounded text-gray-900 " 
          type="button"
        >
          مشاهده همه
        </button>
      </div>

      <button
        ref={prevRef}
        className="absolute top-1/2 left-1 -translate-y-1/2 bg-gray-50 text-black p-2 rounded-full shadow-md hover:bg-purple-600 hover:text-white z-10"
        aria-label="Previous Slide"
      >
        <IoIosArrowBack size={24} />
      </button>
      <button
        ref={nextRef}
        className="absolute top-1/2 right-1 -translate-y-1/2 bg-gray-50 text-black p-2 rounded-full shadow-md hover:bg-purple-600 hover:text-white z-10"
        aria-label="Next Slide"
      >
        <IoIosArrowForward size={24} />
      </button>
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="
             !pb-6 relative [&_.swiper-button-next]:!bg-white [&_.swiper-button-prev]:!bg-white 
             [&_.swiper-button-next]:!w-10 [&_.swiper-button-prev]:!w-10 
             [&_.swiper-button-next]:!h-20 [&_.swiper-button-prev]:!h-20
             [&_.swiper-button-next]:!rounded [&_.swiper-button-prev]:!rounded
             [&_.swiper-button-next]:!text-black [&_.swiper-button-prev]:!text-black 
             [&_.swiper-button-next]:!text-sm [&_.swiper-button-prev]:!text-sm 
             [&_.swiper-button-next]:hover:!bg-orange-400 [&_.swiper-button-prev]:hover:!bg-orange-400 "
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
