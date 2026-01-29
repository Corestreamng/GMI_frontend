import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroBg from "../../assets/images/hero-bg.jpg";

export default function HeroSection() {
  return (
    <section
      className="relative h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
        >
          Developing communities through <br />
          investment in youths
        </motion.h1>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex justify-center gap-4"
        >
          <button className="bg-blue-700 px-8 py-3 rounded-md font-medium hover:opacity-90 transition">
            Join Us
          </button>

       <Link to="/get-involved/donate">
  <button className="border border-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-black transition">
    Donate
  </button>
</Link>

        </motion.div>
      </div>
    </section>
  );
}
