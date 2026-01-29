
import { motion } from "framer-motion";
import { page, stagger, fadeUp } from "../../animations/variants";

import {
  Laptop,
  BookOpen,
  FileText,
  Building2
} from "lucide-react";

import Footer from "../../components/layout/Footer";
import hero from "../../assets/images/heroes/gep-hero.jpg";


export default function GraduateEmployability() {
  return (
    <motion.div
      variants={page}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-white"
    >
      {/* HERO */}
      <section
        className="pt-40 pb-28 bg-cover bg-center relative text-white"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="relative max-w-5xl mx-auto px-6 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Graduate Employability Program (GEP)
          </h1>
          <p className="text-lg md:text-xl mt-6 leading-relaxed">
            A specialized career readiness initiative by Glowing Minds Initiatives designed to bridge the gap between formal education and the practical demands of the global labor market.
          </p>
        </motion.div>
      </section>

      {/* OVERVIEW & RATIONALE */}
      <section className="py-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12"
        >
          <motion.div variants={fadeUp}>
            <h2 className="text-3xl font-bold mb-4">Why GEP Exists</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              GEP was born out of a critical observation in 2018 regarding the economic vulnerability of students and the widening mismatch between academic theory and workplace reality.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We recognized that many fresh graduates exit tertiary institutions without the digital literacy, soft skills, or professional networks required to secure and retain decent work. GEP directly addresses this unemployment crisis by providing a structured transition from education to employment.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="bg-blue-50 p-8 rounded-2xl border border-blue-100"
          >
            <h3 className="text-xl font-bold mb-4 text-blue-900">Program Snapshot</h3>
            <ul className="space-y-4 text-gray-800">
              <li className="flex justify-between border-b border-blue-200 pb-2">
                <strong>Target Audience:</strong> 
                <span>Fresh Unemployed Graduates </span>
              </li>
              <li className="flex justify-between border-b border-blue-200 pb-2">
                <strong>Geographic Coverage:</strong> 
                <span>National (Nigeria) </span>
              </li>
              <li className="flex justify-between border-b border-blue-200 pb-2">
                <strong>Delivery Model:</strong> 
                <span>Hybrid (In-class & Virtual)</span>
              </li>
              <li className="flex justify-between">
                <strong>Current Progress:</strong> 
                <span>4 Cohorts Completed </span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* CORE COMPETENCIES */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Core Training Pillars</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Career Support",
                desc: "Structured guidance, employability training, and mentorship to equip youth for evolving markets."
              },
              {
                title: "Workforce Readiness",
                desc: "Focus on digital literacy, communication, and the 'Campus Entrepreneur' mindset."
              },
              {
                title: "Market Alignment",
                desc: "Interventions aligned with community needs and current labor market realities."
              }
            ].map((pillar, i) => (
              <motion.div 
                key={i} 
                variants={fadeUp}
                className="bg-white/10 p-6 rounded-xl backdrop-blur-sm"
              >
                <h4 className="text-xl font-bold mb-3 text-blue-300">{pillar.title}</h4>
                <p className="text-blue-50/80">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Training Methodology</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We utilize a blended learning approach that combines theory with practical exposure.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
  { label: "Interactive Lectures", icon: <BookOpen className="w-8 h-8 text-blue-500" /> },
  { label: "Case Studies", icon: <FileText className="w-8 h-8 text-blue-500" /> },
  { label: "Exposure Visits", icon: <Building2 className="w-8 h-8 text-blue-500" /> },
  { label: "Virtual Learning", icon: <Laptop className="w-8 h-8 text-blue-500" /> }
]
.map((method, i) => (
              <div key={i} className="p-6 border rounded-2xl hover:bg-gray-50 transition">
                <span className="text-4xl mb-4 block">{method.icon}</span>
                <span className="font-semibold text-gray-900">{method.label} </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KEY ACTIVITIES */}
      <section className="bg-gray-50 py-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-6 text-center"
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-12">
            Strategic Program Phases
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Intensive Capacity Building ",
              "Structured Internships",
              "Post-Training Support",
              "Corporate Career Fairs"
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border-t-4 border-blue-600 font-medium"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* IMPACT & SDG ALIGNMENT */}
      <section className="py-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Impact & Global Goals</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            GEP is a cornerstone of our mission to build a self-reliant generation. By equipping youth with market-relevant skills, we directly contribute to:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full font-bold uppercase tracking-wider text-sm">SDG 1: No Poverty</span>
            <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-bold uppercase tracking-wider text-sm">SDG 4: Quality Education</span>
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-bold uppercase tracking-wider text-sm">SDG 8: Decent Work</span>
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-bold uppercase tracking-wider text-sm">SDG 17: Partnerships</span>
          </div>
        </motion.div>
      </section>

      <Footer />
    </motion.div>
  );
}