import BlogCard from "./BlogCard";
import Title from "../Title";
import { useBlog } from "../../Hooks/useFetchBlog";
export default function BlogSection() {
  const { data: blogs = [], isLoading, isError, error } = useBlog();
  if (isError) {
    console.error("خظا", error);
  }
  if (isLoading || !blogs) {
    <div className="flex items-center justify-center p-8">
      <div className="animate-spin rounded-full h-10 w-10 border-4 border-t-4 border-gray-300 border-t-gray-600"></div>
      <span className="mr-3 text-gray-600">در حال بارگذاری...</span>
    </div>;
  }
  return (
    <div>
      <Title title={"آخرین مطالب وبلاگ"} />
      <div className="grid grid-cols-3 gap-3 my-12">
      {blogs.map((blog)=>(
        <BlogCard  key={blog.id} blog={blog}/>
      ))}

      </div>
    
    </div>
  );
}
