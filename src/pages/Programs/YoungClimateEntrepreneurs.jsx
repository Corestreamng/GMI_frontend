
import { motion } from "framer-motion";
import Footer from "../../components/layout/Footer";
import hero from "../../assets/images/heroes/climate.jpg";
import { page, fadeUp, stagger } from "../../animations/variants";

export default function YoungClimateEntrepreneurs() {
  return (
    <motion.div variants={page} initial="initial" animate="animate" exit="exit" className="bg-white">
      {/* HERO SECTION */}
      <section
        className="pt-40 pb-28 bg-cover bg-center relative text-white"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <motion.div variants={fadeUp} initial="hidden" animate="show" className="relative max-w-5xl mx-auto text-center px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Young Climate Entrepreneurs Program</h1>
          <p className="mt-6 text-xl md:text-2xl text-green-50 max-w-3xl mx-auto">
            Empowering the next generation of green leaders through circular economy knowledge and sustainable innovation.
          </p>
        </motion.div>
      </section>

      {/* OVERVIEW SECTION */}
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Advancing Green Innovation</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Young Climate Entrepreneurs Program is an intensive <strong>eight-week virtual initiative</strong> designed to equip fresh graduates in Nigeria with deep knowledge of the circular economy[cite: 900, 901].
              </p>
              <p className="text-gray-700 leading-relaxed">
                By promoting environmental stewardship and green innovation, we help young people transition from being passive observers of climate change to active creators of sustainable business solutions[cite: 826, 1015].
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-blue-900">
              <h3 className="text-xl font-bold mb-4">Program Focus</h3>
              <ul className="space-y-3">
                <li className="flex justify-between border-b pb-2">
                  <span className="text-gray-600 font-medium">Primary Audience</span>
                  <span className="text-blue-700 font-semibold">Fresh Graduates</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span className="text-gray-600 font-medium">Duration</span>
                  <span className="text-blue-700 font-semibold">8 Weeks (Virtual)</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600 font-medium">Core Sector</span>
                  <span className="text-blue-700 font-semibold text-right">Circular & Green Economy</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STRATEGIC ACTIVITIES */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Key Program Activities</h2>
            <div className="w-24 h-1 bg-blue-800 mx-auto mt-4" />
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Green Capacity Building", 
                desc: "Specialized training on circular economy principles and sustainable enterprise models." 
              },
              { 
                title: "The Climate Pitch", 
                desc: "A platform for participants to showcase innovative green business ideas to potential supporters." 
              },
              { 
                title: "Business Clinics", 
                desc: "Practical advisory sessions and trade fair opportunities for early-stage green ventures." 
              },
              { 
                title: "Sustainability Mentorship", 
                desc: "Ongoing post-training support to help scale climate-driven solutions." 
              },
              { 
                title: "Policy Engagement", 
                desc: "Equipping youth to influence climate governance and decision-making spaces." 
              },
              { 
                title: "Resource Hub Access", 
                desc: "Access to virtual learning resources and a community of environmental stewards." 
              }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} whileHover={{ y: -6 }} className="bg-blue-50 p-8 rounded-2xl border border-green-100">
                <h4 className="text-lg font-bold mb-3 text-blue-900">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHY CLIMATE ACTION */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Closing the Climate Gap</h2>
          <p className="text-blue-100 mb-10 leading-relaxed text-lg">
            With youth participation in climate governance below 30% in most African countries, we are bridging the gap by equipping young people with the skills to drive the green economy[cite: 826].
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <span className="block text-4xl font-bold">0.3%</span>
              <span className="text-xs uppercase tracking-widest text-blue-100">Global Funding Reach for Youth Green Initiatives [cite: 800]</span>
            </div>
            <div className="w-px h-12 bg-blue -700 hidden md:block" />
            <div className="text-center">
              <span className="block text-4xl font-bold">SDG 13</span>
              <span className="text-xs uppercase tracking-widest text-blue-100">Direct Alignment with Climate Action [cite: 854]</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}