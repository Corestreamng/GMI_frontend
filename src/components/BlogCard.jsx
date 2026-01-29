
import { Link } from "react-router-dom";
import { FaUser, FaCalendarAlt, FaClock, FaTag } from "react-icons/fa";
import { motion } from "framer-motion";

const BlogCard = ({ blog }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      viewport={{ once: true }}
      className="bg-blue-100 border border-gray-200 rounded-2xl p-7 flex flex-col justify-between
                 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 mb-3 flex items-center gap-1">
          <FaTag /> {blog.category}
        </p>

        <h3 className="text-xl font-semibold text-gray-900 leading-snug mb-4">
          {blog.title}
        </h3>

        <div className="flex flex-wrap gap-4 text-xs text-gray-500 mb-5">
          <span className="flex items-center gap-1"><FaUser /> {blog.author}</span>
          <span className="flex items-center gap-1"><FaCalendarAlt /> {blog.date}</span>
          <span className="flex items-center gap-1"><FaClock /> {blog.time}</span>
        </div>

        <p className="text-sm text-gray-700 leading-relaxed">
          {blog.excerpt}
        </p>
      </div>

      <Link
        to={`/blog/${blog.slug}`}
        className="mt-6 text-sm font-semibold text-brand-600 hover:text-blue-700 transition"
      >
        Read article →
      </Link>
    </motion.article>
  );
};

export default BlogCard;
