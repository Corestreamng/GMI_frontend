
import { motion } from "framer-motion";
import Footer from "../../components/layout/Footer";
import hero from "../../assets/images/heroes/ai.jpg";
import { page, fadeUp, stagger } from "../../animations/variants";

export default function AITransition() {
  return (
    <motion.div variants={page} initial="initial" animate="animate" exit="exit" className="bg-white">
      {/* HERO SECTION */}
      <section
        className="pt-40 pb-28 bg-cover bg-center relative text-white"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="absolute inset-0 bg-blue-900/70" />
        <motion.div variants={fadeUp} initial="hidden" animate="show" className="relative max-w-5xl mx-auto text-center px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">AI Transition Program</h1>
          <p className="mt-6 text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Assisting individuals, businesses, and communities in smoothly transitioning to AI platforms and technologies.
          </p>
        </motion.div>
      </section>

      {/* MISSION SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            variants={fadeUp} 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Navigating the AI Landscape</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The AI Transition Program is specifically designed to support <b>non-tech savvy youths</b>. We provide the necessary guidance to help participants navigate the complex AI landscape, ensuring no one is left behind in the digital shift.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our goal is to help you optimize operations, enhance customer experiences, and seize new opportunities within the rapidly evolving digital economy.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-blue-600">
              <h3 className="text-xl font-bold mb-4">Program Details</h3>
              <ul className="space-y-3">
                <li className="flex justify-between border-b pb-2">
                  <span className="text-gray-600 font-medium">Target Audience</span>
                  <span className="text-blue-700 font-semibold text-right">Non-Tech Savvy Youth (18-35)</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span className="text-gray-600 font-medium">Focus Area</span>
                  <span className="text-blue-700 font-semibold text-right">Digital Economy</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600 font-medium">Geographic Coverage</span>
                  <span className="text-blue-700 font-semibold text-right">Nigeria</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CORE ACTIVITIES */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Key Program Activities</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4" />
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "Capacity Building", 
                desc: "Foundational training in AI skills and digital literacy." 
              },
              { 
                title: "The Pitching Stage", 
                desc: "Showcasing AI-integrated business models and innovative tech solutions." 
              },
              { 
                title: "Post-Training Support", 
                desc: "Ongoing technical guidance to ensure successful adoption of AI tools." 
              },
              { 
                title: "Business Clinic", 
                desc: "Practical troubleshooting and trade fair opportunities for tech-enabled startups." 
              }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} whileHover={{ y: -6 }} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h4 className="text-lg font-bold mb-3 text-blue-900">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* STRATEGIC IMPORTANCE */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">Why AI Transition?</h2>
          <p className="text-blue-100 mb-10 leading-relaxed text-lg">
            "Skills mismatches between labour demand and labour supply is a key labour market challenge in Nigeria". We close this gap by preparing youth for a future where AI-driven productivity is the standard for economic growth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 border border-blue-400 rounded-lg">
              <span className="block text-2xl font-bold">SDG 4</span>
              <span className="text-xs uppercase text-blue-300">Quality Education </span>
            </div>
            <div className="p-4 border border-blue-400 rounded-lg">
              <span className="block text-2xl font-bold">SDG 8</span>
              <span className="text-xs uppercase text-blue-300">Decent Work </span>
            </div>
            <div className="p-4 border border-blue-400 rounded-lg">
              <span className="block text-2xl font-bold">SDG 17</span>
              <span className="text-xs uppercase text-blue-300">Partnerships </span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}