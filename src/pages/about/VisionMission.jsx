
import React from "react";
import { motion } from "framer-motion";
import Footer from "../../components/layout/Footer";
import heroVision from "../../assets/images/heroes/vision-hero.jpg";
import { fadeUp, stagger } from "../../animations/variants";

export default function VisionMission() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* HERO SECTION */}
      <div
        className="relative h-[420px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${heroVision})` }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative max-w-6xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-white text-4xl md:text-5xl font-extrabold mb-4"
          >
            Strategic Direction
          </motion.h1>
          <p className="text-blue-100 max-w-3xl text-lg md:text-xl">
            Our mandate is to bridge the gap between formal education and the global labor market through targeted youth empowerment.
          </p>
        </div>
      </div>

      <div className="flex-grow">
        <div className="max-w-6xl mx-auto px-6 py-20 space-y-20">
          
          {/* VISION & MISSION CARDS */}
          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                title: "Company Vision",
                text: "An African Society where all Youths are employed and Self Reliant.",
                
              },
              {
                title: "Company Mission",
                text: "To empower Youths with requisite knowledge and Opportunities while advocating for policies that makes them Self Reliant.",
                
              }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white p-10 rounded-3xl shadow-sm border border-blue-400 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h2 className="text-blue-600 font-bold uppercase  mb-6 flex items-center">
                  <span className="w-8 h-[2px] bg-blue-600 mr-3"></span>
                  {item.title}
                </h2>
                <p className="text-xl text-gray-800  font-medium">
                  "{item.text}"
                </p>
              </motion.div>
            ))}
          </div>

          {/* THEORY OF CHANGE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 text-white p-12 rounded-3xl relative overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="text-blue-400 font-bold uppercase  mb-6">Theory of Change</h3>
              <p className="text-2xl md:text-3xl font-light ">
                If <span className="text-blue-400 font-normal">young people</span> are equipped with relevant skills and inclusive opportunities, and if we <span className="text-blue-400 font-normal">advocate</span> for youth-informed policies, then they will secure <span className="text-blue-400 font-normal">decent livelihoods</span>, drive climate solutions, and participate meaningfully in governance.
              </p>
            </div>
            {/* Background design element */}
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
          </motion.div>

          {/* CORE OBJECTIVES */}
          <section>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900">Our Strategic Objectives</h3>
              <p className="text-gray-500 mt-2">How we translate our mission into measurable action.</p>
            </div>
            <motion.div 
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              {[
                {
                  title: "Skill Acquisition",
                  desc: "Providing high-quality training and capacity building to reduce unemployment and underemployment."
                },
                {
                  title: "Inclusion & Advocacy",
                  desc: "Ensuring marginalized groups, including women and PWDs, are included in decision-making processes."
                },
                {
                  title: "Policy Influence",
                  desc: "Fostering youth-led research and consultations to influence inclusive and accountable governance."
                }
              ].map((obj, i) => (
                <motion.div 
                  key={i} 
                  variants={fadeUp}
                  className="bg-blue-50 p-8 rounded-2xl border border-transparent hover:border-blue-200 hover:bg-white hover:shadow-md transition-all"
                >
                  <h4 className="text-blue-900 font-bold mb-3">{obj.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{obj.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

        </div>
      </div>

      <Footer />
    </div>
  );
}