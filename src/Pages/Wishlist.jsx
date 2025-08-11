import Footer from "../LayOut/Footer";
import Header from "../LayOut/Header";
import MenuItems from "../LayOut/MenuItems";
import { BiSolidShoppingBagAlt } from "react-icons/bi";
import { useWishlist } from "../Hooks/useWishlist";
import { HiTrash } from "react-icons/hi";
import Loader from "../Components/Loader";
import { Link } from "react-router-dom";
export default function Wishlist() {
  const { wishlist, isLoading, isError, removeFromWishlist } = useWishlist();
  if (isLoading) return <Loader />;
  if (isError) return <div>خطا در بارگذاری لیست علاقه‌مندی‌ها</div>;

  return (
    <>
      <div className="container mx-auto md:px-24">
        <Header />
        <MenuItems />
        <div className="bg-rose-500 h-52 items-center justify-center flex flex-col">
          <p className="text-white text-xl">لیست علاقه مندی ها</p>
          <p className="text-sm text-white mt-2">
            نمایش لیست محصولات مورد علاقه شما
          </p>
        </div>
        <div className="overflow-x-auto my-20">
          <table className="min-w-full border border-gray-200 text-center">
            {/* جدول Header */}
            <thead className="bg-gray-100 ">
              <tr className="">
                <th className="text-center py-3 px-4 col-span-1"></th>
                <th className="text-center py-3 px-4">نام محصول</th>
                <th className="text-center py-3 px-4">قیمت واحد</th>
                <th className="text-center py-3 px-4">وضعیت موجودی</th>
                <th className="text-center py-3 px-4 col-span-3"> </th>
              </tr>
            </thead>

            {/* جدول Body */}
            <tbody>
              {wishlist.length === 0 ? (
                <tr className="text-center ">
                  <td className=" h-20 text-center" colSpan={5}>
                    لیست علاقمندی ها خالی است
                  </td>
                </tr>
              ) : (
                wishlist.map((product) => (
                  <tr key={product.id} className="border-t border-gray-200">
                    <td className="py-4 px-4 flex items-center gap-2 justify-center">
                      <img
                        src={product.imagePrimary}
                        alt={product.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                    </td>
                    <td className="py-4 px-4">{product.name}</td>
                    <td className="py-4 px-4">{product.price} تومان</td>
                    <td className="py-4 px-4">
                      {product.inStock ? (
                        <span className="text-green-600">موجود</span>
                      ) : (
                        <span className="text-red-600">ناموجود</span>
                      )}
                    </td>
                    <td className="">
                      <button
                        type="button"
                        onClick={() => removeFromWishlist(product.id)}
                        className="cursor-pointer text-xl"
                      >
                        <HiTrash size={25} />
                      </button>
                      <Link
                        to={`/products/${product.id}`}
                        className="px-2 inline-block"
                      >
                        <BiSolidShoppingBagAlt
                          size={24}
                          className="text-orange-500"
                        />
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <Footer />
      </div>
    </>
  );
}
