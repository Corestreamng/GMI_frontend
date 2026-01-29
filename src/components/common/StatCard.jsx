
import { motion } from "framer-motion";
import useCounter from "../../hooks/useCounter";

export default function StatCard({ label, value }) {
  const numericValue = parseInt(value.replace(/\D/g, ""));
  const count = useCounter(numericValue);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-xl shadow p-6 text-center"
    >
      <h3 className="text-4xl font-bold text-primary">
        {count}
        {value.includes("+") && "+"}
      </h3>
      <p className="mt-2 text-gray-600 font-medium">{label}</p>
    </motion.div>
  );
}
