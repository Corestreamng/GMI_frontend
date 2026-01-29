
import { motion } from "framer-motion";
import Footer from "../../components/layout/Footer";
import hero from "../../assets/images/heroes/slep.jpg";
import { page, fadeUp, stagger } from "../../animations/variants";

export default function StudentEntrepreneurship() {
  return (
    <motion.div variants={page} initial="initial" animate="animate" exit="exit" className="bg-white">
      {/* HERO SECTION */}
      <section
        className="pt-40 pb-28 bg-cover bg-center relative text-white"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <motion.div variants={fadeUp} initial="hidden" animate="show" className="relative max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Student Leadership & Entrepreneurship Program (SLEP)
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Empowering undergraduates in public higher institutions with the skills to ideate, start, and scale businesses while on campus.
          </p>
        </motion.div>
      </section>

      {/* BACKGROUND & RATIONALE */}
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
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Why SLEP?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The program was inspired by a 2018 crisis at the Federal University of Technology, Minna, where nearly 1,000 students were forced to defer their studies due to unpaid tuition.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We realized that academic structures lacked practical entrepreneurial training. SLEP bridges this gap by building <strong>"Campus Entrepreneurs"</strong>—students equipped to earn a livelihood while pursuing their education.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-blue-600">
              <h3 className="text-xl font-bold mb-4">Program Snapshot</h3>
              <ul className="space-y-3">
                <li className="flex justify-between border-b pb-2">
                  <span className="text-gray-600 font-medium">Target Audience</span>
                  <span className="text-blue-700 font-semibold text-right">Public University Undergraduates </span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span className="text-gray-600 font-medium">Primary Goal</span>
                  <span className="text-blue-700 font-semibold text-right">Self-Reliance </span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span className="text-gray-600 font-medium">Recorded Impact</span>
                  <span className="text-blue-700 font-semibold text-right">2 Cohorts Completed </span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600 font-medium">Coverage</span>
                  <span className="text-blue-700 font-semibold text-right">National (Nigeria) </span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* KEY ACTIVITIES */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Core Program Activities </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4" />
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Capacity Building", desc: "Intensive training in entrepreneurship and business development." },
              { title: "The Pitching Stage", desc: "A platform for students to present business ideas and secure support." },
              { title: "Post-Training Support", desc: "Continuous guidance for campus startups beyond the initial training." },
              { title: "Business Clinics", desc: "Practical troubleshooting and expert advisory for student enterprises." },
              { title: "Leadership Seminars", desc: "Integrating personal leadership with technological and agricultural innovation." },
              { title: "Campus Trade Fairs", desc: "Real-world exposure to market dynamics and customer engagement." }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} whileHover={{ y: -6 }} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h4 className="text-lg font-bold mb-3 text-blue-900">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Adaptive Delivery Model</h2>
          <p className="text-blue-100 mb-12 leading-relaxed text-lg">
            Our training utilizes a hybrid approach, combining face-to-face in-class interactions with an online learning interface. Students participate in interactive lectures, case studies, and exposure visits to actual business sites.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Interactive Lectures", "Case Studies", "Guided Tours", "Virtual Resources"].map((m, i) => (
              <div key={i} className="bg-white/10 py-4 px-2 rounded-lg backdrop-blur-sm border border-white/20">
                <span className="text-sm font-semibold uppercase tracking-wider">{m}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT / TESTIMONIAL SUMMARY */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10 text-gray-900">Measuring Success </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-left bg-gray-50 p-8 rounded-2xl">
              <p className="italic text-gray-700 mb-6">
                "For the past 8 weeks with SLEP 2.0, gaining business orientation is an understatement. From the Johari window to the Business Model Canvas and funding, I gained a lot for my business growth."
              </p>
              <p className="font-bold text-blue-900">— Isa Mariam Oyebisi, 200 Level Student </p>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h4 className="text-4xl font-extrabold text-blue-600">500+</h4>
                <p className="text-gray-600 font-medium">Campus Entrepreneurs Trained </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl">
                <h4 className="text-4xl font-extrabold text-blue-600">34+</h4>
                <p className="text-gray-600 font-medium">Tertiary Institutions Reached </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}