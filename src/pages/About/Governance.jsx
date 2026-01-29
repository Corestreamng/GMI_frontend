
import React from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  ShieldCheck, 
  TrendingUp, 
  Briefcase, 
  MessageSquare, 
  Settings, 
  UserCheck, 
  Award,
  BookOpen
} from "lucide-react"; // Assuming Lucide-React is used for icons
import Footer from "../../components/layout/Footer";
import heroGovernance from "../../assets/images/heroes/governance-hero.jpg";
import { fadeUp, stagger } from "../../animations/variants";

export default function Governance() {
  const departments = [
    {
      name: "Programs, Impact & Learning",
      icon: <TrendingUp className="w-6 h-6" />,
      desc: "Designs and manages youth empowerment programs in employability, climate, and inclusion. Oversees M&E and research to generate evidence for policy advocacy."
    },
    {
      name: "Finance, Administration & Operations",
      icon: <Briefcase className="w-6 h-6" />,
      desc: "Manages financial planning, budgeting, donor compliance, and logistics to ensure transparent and efficient delivery across implementation locations."
    },
    {
      name: "Resource Mobilization & Partnerships",
      icon: <Award className="w-6 h-6" />,
      desc: "Leads fundraising and strategic partnerships with development agencies and private sector actors to ensure long-term financial sustainability."
    },
    {
      name: "Communications, Advocacy & External Relations",
      icon: <MessageSquare className="w-6 h-6" />,
      desc: "Drives organizational visibility, branding, and storytelling. Leads advocacy on youth policy and positions GMI as a credible voice in the public space."
    },
    {
      name: "People, Governance & Systems",
      icon: <Settings className="w-6 h-6" />,
      desc: "Oversees HR, volunteer management, and internal systems. Ensures legal compliance, risk management, and effective board governance."
    }
  ];

  const boardMembers = [
    { name: "Prof. Abdullahi Bala", role: "Board Chairman", title: "Former VC, FUT Minna" },
    { name: "Mr. Bello Lateef", role: "Board Member", title: "Principal at Grithworth LLC" },
    { name: "Mrs. Samirah Bello", role: "Board Member", title: "Head of Partnerships at ThriveAgric" },
    { name: "Mr. Ibrahim Jimoh", role: "Board Member", title: "Founder of Code4Africa" },
    { name: "Mr. Shamsudeen Abdulrazak", role: "Board Secretary", title: "Executive Director, GMI" }
  ];

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* HERO */}
      <div
        className="relative h-[420px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${heroGovernance})` }}
      >
        <div className="absolute inset-0 bg-slate-900/70" />
        <div className="relative max-w-6xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-white text-4xl md:text-5xl font-extrabold"
          >
            Governance & Structure
          </motion.h1>
          <p className="text-slate-200 mt-4 text-xl max-w-2xl">
            A robust framework of leadership and departmental expertise dedicated to accountability and social impact.
          </p>
        </div>
      </div>

      <div className="flex-grow">
        <div className="max-w-6xl mx-auto px-6 py-20 space-y-24">

          {/* GOVERNANCE OVERVIEW */}
          <section className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="md:w-1/2">
              <div className="flex items-center gap-3 text-blue-600 font-bold uppercase tracking-widest mb-4">
                <ShieldCheck className="w-5 h-5" />
                <span>Our Oversight</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Built on Integrity & Transparency</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Glowing Minds Initiatives (GMI) operates under a robust governance framework led by a distinguished Board of Directors and Executive Management.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We ensure that every program is anchored in global best practices, regulatory compliance (CAC, SCUML, FIRS), and strong stakeholder relationship management.
              </p>
            </motion.div>
            <div className="md:w-1/2 bg-white p-8 rounded-3xl shadow-sm border border-gray-100 grid grid-cols-2 gap-4">
               <div className="p-4 bg-blue-50 rounded-xl text-center">
                 <span className="block text-2xl font-bold text-blue-700">5</span>
                 <span className="text-xs text-gray-500 uppercase">Core Departments</span>
               </div>
               <div className="p-4 bg-blue-50 rounded-xl text-center">
                 <span className="block text-2xl font-bold text-blue-700">6+</span>
                 <span className="text-xs text-gray-500 uppercase">Compliance Badges</span>
               </div>
               <div className="p-4 bg-blue-50 rounded-xl text-center">
                 <span className="block text-2xl font-bold text-blue-700">50</span>
                 <span className="text-xs text-gray-500 uppercase">Volunteer Faculty</span>
               </div>
               <div className="p-4 bg-blue-50 rounded-xl text-center">
                 <span className="block text-2xl font-bold text-blue-700">Hybrid</span>
                 <span className="text-xs text-gray-500 uppercase">Delivery Model</span>
               </div>
            </div>
          </section>

          {/* DEPARTMENTS SECTION */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Functional Departments</h2>
              <p className="text-gray-500 mt-2">The operational pillars that drive our mission forward.</p>
            </div>
            <motion.div 
              variants={stagger} 
              initial="hidden" 
              whileInView="show" 
              viewport={{ once: true }} 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {departments.map((dept, i) => (
                <motion.div
                  key={dept.name}
                  variants={fadeUp}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {dept.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{dept.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{dept.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* BOARD OF DIRECTORS */}
          <section className="bg-slate-900 rounded-3xl p-12 text-white">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <h2 className="text-3xl font-bold">The Board of Directors</h2>
                <p className="text-slate-400 mt-2">Strategic oversight and institutional guidance.</p>
              </div>
              <Users className="w-12 h-12 text-blue-500 opacity-50" />
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {boardMembers.map((member, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-slate-800 p-6 rounded-xl border border-slate-700"
                >
                  <h4 className="font-bold text-blue-400">{member.name}</h4>
                  <p className="text-sm font-semibold text-white mt-1">{member.role}</p>
                  <p className="text-xs text-slate-400 mt-2">{member.title}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* KEY PERSONNEL / MANAGEMENT */}
          <section>
            <div className="flex items-center gap-4 mb-10">
              <UserCheck className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900">Executive Management</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Shamsudeen Abdulrazak", role: "Executive Director" },
                { name: "Hamdalat Yusuf", role: "Operations Manager" },
                { name: "Abdulbasit Abdulrazak", role: "HR Manager" },
                { name: "Sakeenah Ibrahim", role: "Program Manager" }
              ].map((staff, i) => (
                <div key={i} className="bg-blue-50 border border-blue-100 p-6 rounded-2xl">
                  <p className="text-gray-500 text-xs uppercase tracking-widest font-bold mb-1">{staff.role}</p>
                  <h4 className="text-gray-900 font-bold">{staff.name}</h4>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </div>
  );
}