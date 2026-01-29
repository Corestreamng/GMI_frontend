
import { motion } from "framer-motion";
import Footer from "../../components/layout/Footer";
import hero from "../../assets/images/heroes/umtazi.jpg";
import { page, fadeUp, stagger } from "../../animations/variants";

export default function ProjectUmtazi() {
  return (
    <motion.div variants={page} initial="initial" animate="animate" exit="exit" className="bg-white">
      
      <section
        className="pt-40 pb-28 bg-cover bg-center relative text-white"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="absolute inset-0 bg-blue-900/70" />
        <motion.div variants={fadeUp} initial="hidden" animate="show" className="relative max-w-4xl mx-auto text-center px-6">
          <h1 className="text-5xl font-extrabold mb-6">Project Umtazi</h1>
          <p className="text-xl md:text-2xl font-light leading-relaxed">
            Empowering the next generation of female leaders from underserved communities to become self-reliant through leadership and personal development.
          </p>
        </motion.div>
      </section>

      {/* MISSION & FOCUS */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-900 pl-4">
              Building Self-Reliant Female Leaders
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Project Umtazi is a specialized leadership development program designed for young females in underserved communities who aspire to lead.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We focus on providing these young women with the personal development and leadership skills necessary to break cycles of economic vulnerability and achieve sustainable self-reliance.
            </p>
          </motion.div>
          
          <motion.div 
            variants={fadeUp} 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true }}
            className="bg-purple-50 p-8 rounded-2xl border border-purple-100"
          >
            <h3 className="text-xl font-bold text-blue-900 mb-4">Program Snapshot</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-900 mr-2">●</span>
                <p><strong>Primary Target:</strong> Young females from underserved communities.</p>
              </li>
              <li className="flex items-start">
                <span className="text-blue-900 mr-2">●</span>
                <p><strong>Geographic Focus:</strong> Nigeria.</p>
              </li>
              <li className="flex items-start">
                <span className="text-blue-900 mr-2">●</span>
                <p><strong>Core Objective:</strong> Advancing gender equality and social inclusion.</p>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* KEY ACTIVITIES GRID */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Our Strategic Pillars</h2>
            <p className="text-gray-600 mt-4">A structured pathway from capacity building to market entry.</p>
          </div>
          
          <motion.div 
            variants={stagger} 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true }} 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { 
                title: "Capacity Building", 
                desc: "Intensive training in personal development and leadership skills." 
              },
              { 
                title: "The Pitching Stage", 
                desc: "Developing the confidence to present ideas and secure support for community initiatives." 
              },
              { 
                title: "Post-Training Support", 
                desc: "Continued mentorship and guidance to ensure long-term success." 
              },
              { 
                title: "Business Clinics", 
                desc: "Hands-on advisory services and trade fair opportunities to test ideas in real markets." 
              }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                variants={fadeUp} 
                whileHover={{ y: -5 }} 
                className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-blue-950"
              >
                <h4 className="font-bold text-blue-700 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SDG IMPACT */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Aligned with Global Goals</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-red-600 text-white flex items-center justify-center font-bold text-xl rounded-lg mb-2">1</div>
              <span className="text-sm font-medium">No Poverty </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-orange-500 text-white flex items-center justify-center font-bold text-xl rounded-lg mb-2">5</div>
              <span className="text-sm font-medium">Gender Equality </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-800 text-white flex items-center justify-center font-bold text-xl rounded-lg mb-2">8</div>
              <span className="text-sm font-medium">Decent Work </span>
            </div>
          </div>
          <p className="mt-10 text-gray-700 italic">
            "We combat the exclusion of women and marginalized groups from opportunities and decision-making processes." 
          </p>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}