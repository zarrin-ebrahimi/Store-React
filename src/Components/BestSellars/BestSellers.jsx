import ProductCardBestSeler from "./ProductCardBestSeler";
import Title from "../Title";
import useBestSellers from "./useBestSellers";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y } from "swiper/modules";
export default function BestSellers() {
  const { data: products, loading, error, retry } = useBestSellers();

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-10 w-10 border-4 border-t-4 border-gray-300 border-t-gray-600"></div>
        <span className="mr-3 text-gray-600">در حال بارگذاری...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 bg-red-50 border border-red-200 rounded-md text-center">
        <div className="text-red-700 mb-2">خطا: {error}</div>
        <button
          onClick={retry}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          تلاش دوباره
        </button>
      </div>
    );
  }
  if (!products || products.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500">
        محصولی برای نمایش نیست.
      </div>
    );
  }
  return (
    <section className=" px-4 relative ">
      <Title title="پرفروش ترین" />
      <Swiper
        modules={[Autoplay, A11y]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        a11y={{ enabled: true }}
        className="py-4"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="px-2" key={product.id}>
              <ProductCardBestSeler product={product} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
