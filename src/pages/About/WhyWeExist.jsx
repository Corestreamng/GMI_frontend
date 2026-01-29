
import React from "react";
import { motion } from "framer-motion";
import { 
  Target, 
  AlertCircle, 
  Lightbulb, 
  Users, 
  Globe, 
  Scale, 
  Zap, 
  Leaf, 
  BookOpen 
} from "lucide-react";
import Footer from "../../components/layout/Footer";
import heroImage from "../../assets/images/why-we-exist-hero.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function WhyWeExist() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div
        className="relative h-[480px] flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/80" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="relative px-6 max-w-5xl space-y-6"
        >
          <div className="flex justify-center mb-4">
             <Target className="w-12 h-12 text-blue-400" />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Why Glowing Minds Initiatives Exists
          </h1>

          <p className="text-lg md:text-xl leading-relaxed text-blue-50 max-w-3xl mx-auto">
            GMI is a youth-focused social enterprise established to address the critical mismatch between 
            formal education and the evolving demands of the global labor market.
          </p>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-20 space-y-20">

        {/* The Core Problem */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="space-y-12"
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 flex items-center justify-center gap-3">
              <AlertCircle className="text-red-500" /> The Core Problem
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Addressing systemic barriers that hinder the progress of African youth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-gray-700">
            <div className="bg-blue-50 p-8 md:p-10 rounded-3xl border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Skills Mismatch</h3>
              <p className="leading-relaxed">
                Many graduates leave tertiary institutions without workplace readiness, digital literacy, 
                or the entrepreneurial competencies required to thrive in a technology-driven economy.
              </p>
            </div>

            <div className="bg-blue-50 p-8 md:p-10 rounded-3xl border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Economic Vulnerability</h3>
              <p className="leading-relaxed">
                The 2018 crisis at FUT Minna, where nearly 1,000 students deferred studies due to unpaid fees, 
                underscored the urgent need for students to possess income-generating skills while studying.
              </p>
            </div>

            <div className="bg-blue-50 p-8 md:p-10 rounded-3xl border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Systemic Exclusion</h3>
              <p className="leading-relaxed">
                Women, persons with disabilities, and marginalized youth face disproportionate barriers 
                to leadership participation and high-value economic opportunities.
              </p>
            </div>

            <div className="bg-blue-50 p-8 md:p-10 rounded-3xl border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Policy Gaps</h3>
              <p className="leading-relaxed">
                Young people are often treated as passive policy beneficiaries. We exist to transform them into 
                active co-creators of development policy and governance systems.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Purpose & Mission Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="bg-slate-900 p-10 md:p-16 rounded-[3rem] text-white relative overflow-hidden"
        >
          <div className="relative z-10 space-y-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-400">
              Purpose & Strategic Intent
            </h2>

            <p className="text-xl text-slate-300 leading-relaxed max-w-4xl">
              We bring deep expertise in youth employability and inclusive workforce development, 
              driven by a commitment to unlocking the potential of Nigerian youth through 
              global best practices and innovation.
            </p>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <div className="text-blue-400 font-bold uppercase tracking-widest text-sm">Vision</div>
                <p className="text-lg">An African Society where all Youths are employed and Self Reliant.</p>
              </div>

              <div className="space-y-4">
                <div className="text-blue-400 font-bold uppercase tracking-widest text-sm">Mission</div>
                <p className="text-lg">Empowering Youths with requisite knowledge while advocating for policies that foster self-reliance.</p>
              </div>

              <div className="space-y-4">
                <div className="text-blue-400 font-bold uppercase tracking-widest text-sm">Theory of Change</div>
                <p className="text-lg italic text-slate-400">
                  "If youth are equipped with skills and a voice in governance, they will secure decent livelihoods 
                  and drive sustainable development."
                </p>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full -mr-20 -mt-20 blur-3xl" />
        </motion.section>

        {/* Strategic Impact Areas */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="space-y-12"
        >
          <div className="flex items-center gap-4">
            <div className="h-px bg-blue-600 flex-grow" />
            <h2 className="text-3xl font-bold text-gray-900">Strategic Impact Areas</h2>
            <div className="h-px bg-blue-600 flex-grow" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Youth Development", icon: <Users className="text-blue-600" />, desc: "Workforce readiness and leadership training." },
              { title: "Entrepreneurship", icon: <Lightbulb className="text-blue-600" />, desc: "Supporting campus entrepreneurs and green startups." },
              { title: "Civic Engagement", icon: <Globe className="text-blue-600" />, desc: "Promoting youth-informed policy research." },
              { title: "Climate Action", icon: <Leaf className="text-blue-600" />, desc: "Circular economy knowledge and green innovation." },
              { title: "Social Inclusion", icon: <Scale className="text-blue-600" />, desc: "Advancing gender equality and PWD inclusion." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:bg-blue-50 transition-colors">
                <div className="flex-shrink-0">{item.icon}</div>
                <div>
                  <h4 className="font-bold text-gray-900">{item.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      </div>

      <Footer />
    </div>
  );
}