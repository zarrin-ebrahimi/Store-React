import BlogCard from "./BlogCard";
import Title from "../Title";
import { useBlog } from "../../Hooks/useFetchBlog";
import Loader from "../Loader";
export default function BlogSection() {
  const { data: blogs = [], isLoading, isError, error } = useBlog();
  if (isError) {
    console.error("خظا", error);
  }
  if (isLoading) {
    <Loader />;
  }
  return (
    <div>
      <Title title={"آخرین مطالب وبلاگ"} />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-12">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
