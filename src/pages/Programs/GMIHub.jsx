
import { motion } from "framer-motion";
import Footer from "../../components/layout/Footer";
import hero from "../../assets/images/heroes/hub.jpg";
import { page, fadeUp, stagger } from "../../animations/variants";

export default function GlowingMindsHub() {
  return (
    <motion.div variants={page} initial="initial" animate="animate" exit="exit" className="bg-white">
      {/* HERO SECTION */}
      <section
        className="pt-40 pb-28 bg-cover bg-center relative text-white"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <motion.div variants={fadeUp} initial="hidden" animate="show" className="relative max-w-5xl mx-auto text-center px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Glowing Minds Hub (Suleja)</h1>
          <p className="mt-6 text-xl md:text-2xl text-blue-50 max-w-3xl mx-auto">
            A premier innovation ecosystem designed for young creatives, remote workers, and startups.
          </p>
        </motion.div>
      </section>

      {/* HUB OVERVIEW */}
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Fueling Productivity & Excellence</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Located in Suleja, Niger State, the Glowing Minds Hub is built to support the next generation of African entrepreneurs. It is more than just a workspace; it is a community where ideas are scaled into groundbreaking solutions.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether you are a remote professional seeking a quiet environment or a startup founder needing training facilities, our hub provides the infrastructure to help you thrive.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-blue-600">
              <h3 className="text-xl font-bold mb-4">Hub Information</h3>
              <ul className="space-y-3">
                <li className="flex justify-between border-b pb-2">
                  <span className="text-gray-600 font-medium">Location</span>
                  <span className="text-blue-700 font-semibold text-right">Suleja, Niger State</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span className="text-gray-600 font-medium">Operating Hours</span>
                  <span className="text-blue-700 font-semibold text-right">Mon – Sat (9:00am – 4:00pm)</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600 font-medium">Primary Audience</span>
                  <span className="text-blue-700 font-semibold text-right">Startups & Remote Workers</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Key Services</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4" />
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Vibrant Co-working Space", 
                desc: "A professional environment designed to increase focus and foster collaboration among creatives." 
              },
              { 
                title: "Professional Conference Rooms", 
                desc: "Fully-equipped meeting spaces for stakeholder validation, team strategy, and corporate presentations." 
              },
              { 
                title: "State-of-the-Art Training Facilities", 
                desc: "Dedicated rooms for capacity building, workshops, and intensive digital skills training." 
              }
            ].map((service, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
                <h4 className="text-xl font-bold mb-4 text-blue-900">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* COMMUNITY FOCUS */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Part of a National Network</h2>
          <p className="text-blue-100 mb-10 leading-relaxed text-lg">
            While our digital footprint covers 33 states, our physical hubs like Suleja represent our commitment to high-touch community engagement and direct localized impact.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <span className="block text-4xl font-bold">5</span>
              <span className="text-xs uppercase tracking-widest text-indigo-300">Strategic Physical Hub States</span>
            </div>
            <div className="w-px h-12 bg-indigo-700 hidden md:block" />
            <div className="text-center">
              <span className="block text-4xl font-bold">Niger</span>
              <span className="text-xs uppercase tracking-widest text-indigo-300">Hub Physical Location</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}