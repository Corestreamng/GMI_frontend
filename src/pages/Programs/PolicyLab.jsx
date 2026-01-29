
import { motion } from "framer-motion";
import Footer from "../../components/layout/Footer";
import hero from "../../assets/images/heroes/policy.jpg";
import { page, fadeUp, stagger } from "../../animations/variants";

export default function PolicyLab() {
  return (
    <motion.div variants={page} initial="initial" animate="animate" exit="exit" className="bg-white">
      {/* HERO SECTION */}
      <section
        className="pt-40 pb-28 bg-cover bg-center relative text-white"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="absolute inset-0 bg-slate-900/70" />
        <motion.div variants={fadeUp} initial="hidden" animate="show" className="relative max-w-5xl mx-auto text-center px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Glowing Minds Policy Lab</h1>
          <p className="mt-6 text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto">
            Translating innovative ideas into tangible, impactful policies that address the root causes of societal problems.
          </p>
        </motion.div>
      </section>

      {/* MISSION & MODEL SECTION */}
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Bridging the Governance Gap
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Policy Lab is a dedicated arm of Glowing Minds Initiatives focused on ensuring sustainable and meaningful progress through youth-informed policy development.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We empower young civic leaders to transition from being mere policy beneficiaries to active co-creators of the development planning and decision-making processes.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold mb-6 text-slate-900">Program Framework</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-2">
                  <span className="text-gray-600">Target Audience</span>
                  <span className="font-semibold text-blue-700">Young Civic Leaders (18-35)</span>
                </div>
                <div className="flex items-center justify-between border-b pb-2">
                  <span className="text-gray-600">Primary Focus</span>
                  <span className="font-semibold text-blue-700">Niger State</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Status</span>
                  <span className="font-semibold text-blue-700">Active / Ongoing</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* THE FOUR-STAGE MODEL */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Our Strategic Methodology</h2>
            <p className="text-gray-600 mt-4">A systemic approach to social and legislative change.</p>
          </div>
          
          <motion.div 
            variants={stagger} 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true }} 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { step: "01", title: "Identify", desc: "Pinpointing pressing social issues through research and community consultation." },
              { step: "02", title: "Co-create", desc: "Collaborating with stakeholders to design innovative policy-oriented solutions." },
              { step: "03", title: "Advocate", desc: "Driving the domestication and implementation of policies at local and state levels." },
              { step: "04", title: "Monitor", desc: "Evaluating effectiveness through data to ensure long-term societal impact." }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="relative p-8 bg-slate-50 rounded-xl border-b-4 border-blue-600">
                <span className="text-4xl font-black text-blue-700 absolute top-4 right-4">{item.step}</span>
                <h4 className="text-xl font-bold text-slate-900 mb-3 relative z-10">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed relative z-10">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* KEY ACTIVITIES */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <h2 className="text-3xl font-bold mb-6">Advocacy in Action</h2>
              <p className="text-slate-400">
                Our competencies lie in facilitating evidence-based research and youth consultations that influence inclusive governance.
              </p>
            </div>
            <div className="md:col-span-2 grid sm:grid-cols-2 gap-8">
              {[
                "Policy Training",
                "Stakeholder Validation",
                "Legislative Consultation",
                "Civic Engagement Advocacy"
              ].map((activity, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold">
                    {i + 1}
                  </div>
                  <span className="text-lg font-medium">{activity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT ALIGNMENT */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">SDG Alignment</h2>
          <div className="flex justify-center gap-10">
            <div className="group">
              <div className="w-20 h-20 bg-blue-700 text-white flex items-center justify-center rounded-lg text-2xl font-bold mb-2 mx-auto">16</div>
              <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">Strong Institutions</p>
            </div>
            <div className="group">
              <div className="w-20 h-20 bg-blue-400 text-white flex items-center justify-center rounded-lg text-2xl font-bold mb-2 mx-auto">17</div>
              <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">Partnerships</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}