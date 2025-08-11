import React from "react";
import { useParams } from "react-router-dom";
import useFetchBlogDetail from "../Hooks/useFetchBlogDetail";
import Loader from "../Components/Loader";
import Header from "../LayOut/Header";
import MenuItems from "../LayOut/MenuItems";
import CommentForm from "../Components/CommentForm/CommentForm";
import Footer from "../LayOut/Footer";
import { useBlog } from "../Hooks/useFetchBlog";
import BlogCard from "../Components/Blog/BlogCard";
import { useFetchProducts } from "../Hooks/useFetchProducts";
import { Link } from "react-router-dom";
export default function BlogDetail() {
  const { id } = useParams();
  const {
    data: blogDetail,
    isLoading,
    isError,
    error,
  } = useFetchBlogDetail(id);
  const { data: blogs = [] } = useBlog();
  const relatedBlogs = blogs?.filter((blog) => blog.id !== id).slice(0, 2);

  const { data: products = [] } = useFetchProducts(
    "http://localhost:4000/bestSellers"
  );
  const relatedProduct = products.slice(0, 3);

  if (isLoading) return <Loader />;
  if (isError) {
    console.error("Error", error.message);
    return null;
  }
  return (
    <div className="container mx-auto md:px-24">
      <Header />
      <MenuItems />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="col-span-2 ">
          <div className=" w-full ">
            <img
              src={blogDetail.cover}
              alt=""
              className="mb-5 block w-full h-56"
            />
          </div>
          <div className="pb-12">
            <h2 className="text-4xl mt-5 text- mb-5">{blogDetail.title}</h2>
            <p className="text-gray-800 text-sm pb-3 ">{blogDetail.content}</p>
            <span className="text-xs text-gray-500">{blogDetail.date}</span>
            <span className="text-xs text-gray-500 px-3">
              {blogDetail.author}
            </span>
          </div>
          {/* Related Blogs */}
          {relatedBlogs?.length > 0 && (
            <section className="mb-12">
              <h2 className="mb-4">مطالب مرتبط</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {relatedBlogs.map((blog) => (
                  <BlogCard blog={blog} />
                ))}
              </div>
            </section>
          )}
          {/* Comment Form*/}
          <CommentForm />
        </div>
        <div className="col-span-1 mt-10">
          {relatedProduct?.length > 0 && (
            <section>
              <div className="grid col-span-1 gap-3 ">
                <div className="mb-3">
                  <h2 className="text-xl mb-2">محصولات حراج</h2>
                  <div className="h-px w-24 bg-gray-800"></div>
                </div>
                {relatedProduct.map((product) => (
                  <div className="flex flex-col">
                    <div className="flex justify-between items-start">
                      <div className="flex flex-col">
                        <div className="hover:text-orange-500">
                          <Link to={`/products/${product.id}`}>
                            {product.name}
                          </Link>
                        </div>
                        <span className="text-red-500 text-sm mt-2">
                          {product.price}
                        </span>
                        <span className="line-through text-gray-500 text-sm">
                          {product.discountPrice}
                        </span>
                      </div>
                      <div>
                        <img
                          src={product.imagePrimary}
                          alt=""
                          className="h-32 w-28"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
