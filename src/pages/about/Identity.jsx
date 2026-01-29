
import React from "react";
import { motion } from "framer-motion";
import Footer from "../../components/layout/Footer";
import heroIdentity from "../../assets/images/heroes/identity-hero.jpg";
import { page, fadeUp, stagger } from "../../animations/variants";

export default function Identity() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* HERO SECTION */}
      <div
        className="relative h-[420px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${heroIdentity})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-6xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-white text-4xl md:text-5xl font-extrabold"
          >
            Organisational Identity
          </motion.h1>
          <p className="text-blue-100 mt-4 text-xl max-w-2xl">
            A youth-focused social enterprise committed to advancing employability, entrepreneurship, and leadership across Africa.
          </p>
        </div>
      </div>

      <div className="flex-grow">
        <div className="max-w-6xl mx-auto px-6 py-20 space-y-20">
          
          {/* BACKGROUND & HISTORY */}
          <section>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-6 text-lg text-gray-700 bg-blue-50 p-10 rounded-3xl border border-blue-100"
              >
                <h3 className="text-2xl font-bold text-blue-900">Our Origin Story</h3>
                <p>
                  Glowing Minds Initiatives was established in response to interconnected social and economic challenges confronting Nigerian youth.
                </p>
                <p>
                  The catalyst emerged in 2018 when our Founder, Shamsudeen Abdulrazak, witnessed nearly 1,000 students at FUT Minna deferring studies due to unpaid fees. This exposed a critical gap: students lacked the practical, income-generating skills to sustain their education.
                </p>
                <p>
                This led to the "Campus Entrepreneurs" model, empowering students to work and earn while studying, which evolved into our flagship Graduate Employability Program (GEP).
                </p>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-blue-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Vision</h3>
                  <p className="text-gray-600 italic">
                    "An African Society where all Youths are employed and Self Reliant."
                  </p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-blue-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
                  <p className="text-gray-600">
                    To empower Youths with requisite knowledge and Opportunities while advocating for policies that makes them Self Reliant. 
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* THEORY OF CHANGE */}
          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-slate-900 text-white p-12 rounded-3xl text-center"
          >
            <h3 className="text-3xl font-bold mb-6">Theory of Change</h3>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              If young people are equipped with relevant skills, inclusive opportunities, and a voice in governance, they will secure decent livelihoods, drive climate solutions, and participate meaningfully in society.
            </p>
          </motion.section>

          {/* CORE VALUES */}
          <section>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900">Our Core Values</h3>
              <p className="text-gray-500 mt-2">The principles that guide our every action.</p>
            </div>
            <motion.div 
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-5 gap-6"
            >
              {["Integrity", "Empathy", "Excellence", "Hard work", "Personal Development"].map((value, i) => (
                <motion.div 
                  key={i} 
                  variants={fadeUp}
                  className="bg-white border border-gray-100 p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                    {value.charAt(0)}
                  </div>
                  <h4 className="font-bold text-gray-800">{value}</h4>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* WHY WE EXIST */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-blue-400 p-12 rounded-3xl text-white relative overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6">Why We Exist</h3>
              <div className="grid md:grid-cols-2 gap-8 text-blue-50">
                <p className="text-lg">
                  We exist to bridge the widening mismatch between formal education and the skills demanded by the labour market. We tackle youth unemployment, underemployment, and the exclusion of marginalized groups from decision-making processes[cite: 785, 787].
                </p>
                <p className="text-lg">
                  Through policy advocacy, climate action, and entrepreneurship support, we influence systemic change to create an enabling environment for youth empowerment and sustainable societal growth.
                </p>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full -mr-32 -mt-32 opacity-20" />
          </motion.div>

        </div>
      </div>

      <Footer />
    </div>
  );
}