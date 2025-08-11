import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
  return (
    <div>
      <img src={blog.cover} alt="" />
      <div  className="hover:text-orange-400 my-2 ">
        <Link to={`/blogPosts/${blog.id}`} >
          {blog.title}
        </Link>
      </div>
      <span className="my-1.5 text-sm ">
        <span>توسط </span>
        <span>
          {blog.author}
          <span className="px-2 text-gray-400 text-xs">{blog.date}</span>
        </span>
      </span>
      <p className="text-gray-400 text-sm mt-1.5 line-clamp-2">
        {blog.content}
      </p>
    </div>
  );
}
