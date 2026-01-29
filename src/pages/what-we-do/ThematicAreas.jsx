
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Briefcase, 
  Lightbulb, 
  Leaf, 
  Users, 
  Gavel, 
  CheckCircle2, 
  Globe2 
} from "lucide-react";
import Footer from "../../components/layout/Footer";
import hero from "../../assets/images/heroes/thematic-areas.jpg";

const areas = [
  {
    title: "Youth Employability & Skills Development",
    icon: <Briefcase className="w-8 h-8 text-blue-600" />,
    description:
      "We equip young people with practical, future-ready skills that improve productivity and income generation. Our interventions bridge the gap between education and the labour market through experiential learning and workforce alignment.",
    points: ["Workforce Readiness", "Digital Literacy", "Soft Skills Training"]
  },
  {
    title: "Entrepreneurship & Innovation",
    icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
    description:
      "We nurture entrepreneurial mindsets and support youth-led enterprises through incubation and mentorship. Our programs encourage innovation as a tool for solving social and economic challenges.",
    points: ["Business Incubation", "Market Access", "Startup Mentorship"]
  },
  {
    title: "Climate Action & Sustainability",
    icon: <Leaf className="w-8 h-8 text-blue-600" />,
    description:
      "Empowering young people to lead climate solutions by building green skills and supporting climate entrepreneurship. We promote inclusive participation in sustainable development initiatives.",
    points: ["Green Skills", "Circular Economy", "Environmental Stewardship"]
  },
  {
    title: "Gender Inclusion & Social Equity",
    icon: <Users className="w-8 h-8 text-blue-600" />,
    description:
      "Ensuring young women and marginalized groups, including PWDs, have access to leadership pathways and safe spaces for participation in economic and civic life.",
    points: ["Women Leadership", "Inclusive Opportunity", "PWD Advocacy"]
  },
  {
    title: "Civic Engagement & Governance",
    icon: <Gavel className="w-8 h-8 text-blue-600" />,
    description:
      "Strengthening youth participation in governance through the Policy Lab. We promote civic education and evidence-based policy engagement to influence accountable systems.",
    points: ["Policy Research", "Youth Advocacy", "Civic Education"]
  }
];

export default function ThematicAreas() {
  return (
    <div className="bg-slate-50 min-h-screen flex flex-col">
      {/* HERO SECTION */}
      <section
        className="pt-40 pb-28 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="relative max-w-6xl mx-auto px-6 text-white">
          <div className="flex items-center gap-3 text-blue-400 mb-4">
            <Globe2 className="w-6 h-6" />
            <span className="uppercase tracking-widest font-bold text-sm">Strategic Focus</span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-extrabold mb-6"
          >
            Our Thematic Areas
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl text-lg md:text-xl text-blue-100 leading-relaxed"
          >
            GMI’s work is anchored on five strategic pillars that address the root causes of youth 
            unemployment, systemic exclusion, and climate vulnerability across Africa.
          </motion.p>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-24 flex-grow">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {areas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="mb-6 p-4 bg-blue-50 rounded-2xl w-fit">
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {area.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                  {area.description}
                </p>
                <div className="pt-6 border-t border-slate-50">
                  <ul className="space-y-2">
                    {area.points.map((point) => (
                      <li key={point} className="flex items-center gap-2 text-sm text-slate-500">
                        <CheckCircle2 className="w-4 h-4 text-blue-500" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CALL-TO-ACTION */}
      <section className="bg-blue-300 py-16 text-center text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Responsive Solutions for Global Challenges</h2>
          <p className="text-blue-100 text-lg mb-8">
            Our approach combines local expertise with global best practices to ensure 
            measurable outcomes and sustainable impact.
          </p>
          <div className="flex justify-center gap-4">
          

       <Link to="/contact">
  <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-500 transition-colors">
    Contact-us
  </button>
</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}