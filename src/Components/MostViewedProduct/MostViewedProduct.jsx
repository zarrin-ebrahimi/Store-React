
import ProductCardMostViewed from "./ProductCardMostViewed";
import Title from "../Title";
import { useFetchProducts } from "../../Hooks/useFetchProducts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y } from "swiper/modules";
import Loader from "../Loader";
export default function MostViewedProduct() {
  const {
    data: products = [],
    loading,
    error,
    refetch,
  } = useFetchProducts("http://localhost:4000/mostViewedProduct");

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="p-6 bg-red-50 border border-red-200 rounded-md text-center">
        <div className="text-red-700 mb-2">
          خطا: {error?.message || "خطایی پیش آمده"}
        </div>
        <button
          type="button"
          onClick={() => refetch()}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          تلاش دوباره
        </button>
      </div>
    );
  }
  console.log(products);
  if (!Array.isArray(products) || products.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500">
        محصولی برای نمایش نیست.
      </div>
    );
  }
  return (
    <section className=" px-4 relative ">
      <Title title="پربازدیدترین" />
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
          1024: { slidesPerView: 6 },
        }}
        a11y={{ enabled: true }}
        className="py-4"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="px-2" key={product.id}>
              <ProductCardMostViewed product={product} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
