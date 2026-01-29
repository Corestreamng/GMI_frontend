
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CTAButtons({
  primaryText,
  primaryLink,
  secondaryText,
  secondaryLink
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-wrap gap-4 mt-8"
    >
      <Link
        to={primaryLink}
        className="px-8 py-3 rounded-lg bg-primary text-white font-semibold
        hover:bg-blue-700 transition shadow"
      >
        {primaryText}
      </Link>

      {secondaryText && (
        <Link
          to={secondaryLink}
          className="px-8 py-3 rounded-lg border border-primary text-primary font-semibold
          hover:bg-primary hover:text-white transition"
        >
          {secondaryText}
        </Link>
      )}
    </motion.div>
  );
}
