
import { useParams } from "react-router-dom";
import { blogs } from "../components/data/blogs";
import { FaUser, FaCalendarAlt, FaClock, FaTag } from "react-icons/fa";
import { motion } from "framer-motion";

const BlogPost = () => {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <p className="max-w-3xl mx-auto py-24 px-6 text-gray-600">
        Blog post not found.
      </p>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-200"
    >
      <div className="max-w-3xl mx-auto px-6 py-24">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-600 flex items-center gap-1">
          <FaTag /> {blog.category}
        </p>

        <h1 className="text-4xl font-bold text-gray-900 mt-4 mb-6 leading-tight">
          {blog.title}
        </h1>

        <div className="flex flex-wrap gap-6 text-sm text-blue-900 mb-12">
          <span className="flex items-center gap-1"><FaUser /> {blog.author}</span>
          <span className="flex items-center gap-1"><FaCalendarAlt /> {blog.date}</span>
          <span className="flex items-center gap-1"><FaClock /> {blog.time}</span>
        </div>

        <div className="space-y-7 text-red-800 text-[1.05rem] leading-relaxed">
          {blog.content
            .trim()
            .split("\n")
            .filter(line => line.trim() !== "")
            .map((line, index) => (
              <p key={index}>{line}</p>
            ))}
        </div>
      </div>
    </motion.article>
  );
};

export default BlogPost;
