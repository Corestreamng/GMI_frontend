
import { blogs } from "../components/data/blogs";
import BlogCard from "../components/BlogCard";
import { motion } from "framer-motion";

const BlogList = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-blue-300 py-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-16">
          <h1 className="text-4xl font-bold text-blue-700">
            Insights & Stories
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            Research, impact stories, and thought leadership from Glowing Minds
            Initiatives.
          </p>
        </header>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default BlogList;
