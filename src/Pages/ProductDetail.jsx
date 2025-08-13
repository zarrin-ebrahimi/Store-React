import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import ProductGallery from "../Components/ProductDetail/ProductMainImg";
import ProductDetailsInfo from "../Components/ProductDetail/ProductDetailsInfo";
import ProductTabs from '../Components/ProductDetail/ProductTabs'
import Header from "../LayOut/Header";
import MenuItems from "../LayOut/MenuItems";
import Footer from "../LayOut/Footer";
async function fetchProduct(id) {
  const res = await fetch(`http://localhost:4000/bestSellers/${id}`);
  if (!res.ok) throw new Error("خطا در دریافت اطلاعات محصول");
  return res.json();
}

export default function ProductDetail() {
  const { id } = useParams();
  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id),
    staleTime: 5 * 60 * 1000, // 5 دقیقه کش
    cacheTime: 30 * 60 * 1000, // 30 دقیقه کش
    retry: 1,
  });

  if (isLoading) return <p className="text-center mt-10">در حال بارگذاری...</p>;
  if (error)
    return <p className="text-center mt-10 text-red-500">{error.message}</p>;
  if (!product) return <p className="text-center mt-10">محصول یافت نشد.</p>;

  return (
    <div className="container  mx-auto lg:px-24">
      <Header />
      <MenuItems />
      <div className="container mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <ProductGallery images={product.images} name={product.name} />
        <ProductDetailsInfo product={product} />
      </div>
      <ProductTabs/>
      <Footer />
    </div>
  );
}
