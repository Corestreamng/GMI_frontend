
import React from "react";

import { motion } from "framer-motion";
import { 
  BookOpen, 
  Users, 
  Briefcase, 
  Leaf, 
  ShieldCheck, 
  Handshake,
  Settings,
  Link,
  Globe 
} from "lucide-react"; 
import Footer from "../../components/layout/Footer";
import hero from "../../assets/images/heroes/sdg-hero.jpg";

const sdgs = [
  {
    number: 4,
    title: "Quality Education",
    icon: <BookOpen className="w-8 h-8 text-white" />,
    color: "bg-[darkblue]",
    desc: "GMI advances inclusive and equitable quality education by equipping young people with employability, leadership, and digital skills that bridge the gap between formal education and labor market needs."
  },
  {
    number: 5,
    title: "Gender Equality",
    icon: <Users className="w-8 h-8 text-white" />,
    color: "bg-[darkblue]", 
    desc: "Through intentional program design, GMI promotes the participation and leadership of women and girls, addressing structural barriers to economic opportunity and civic inclusion."
  },
  {
    number: 8,
    title: "Decent Work & Economic Growth",
    icon: <Briefcase className="w-8 h-8 text-white" />,
    color: "bg-[darkblue]", 
    desc: "GMI supports youth employment and enterprise development, enabling young Africans to become self-reliant economic actors through programs like GEP and the Young Climate Entrepreneurs initiative."
  },
  {
    number: 13,
    title: "Climate Action",
    icon: <Leaf className="w-8 h-8 text-white" />,
    color: "bg-[darkblue]", 
    desc: "Advancing youth-led climate innovation and green skills. We empower environmental stewards to transition from observers of climate change to creators of sustainable business solutions."
  },
  {
    number: 16,
    title: "Peace, Justice & Strong Institutions",
    icon: <ShieldCheck className="w-8 h-8 text-white" />,
    color: "bg-[darkblue]", 
    desc: "The GMI Policy Lab strengthens youth participation in governance, positioning young people as co-creators of inclusive and accountable institutions through research and advocacy."
  },
  {
    number: 17,
    title: "Partnerships for the Goals",
    icon: <Handshake className="w-8 h-8 text-white" />,
    color: "bg-[darkblue]", 
    desc: "Collaborating with local and international development agencies to scale impact. We leverage strategic alliances to achieve shared goals in youth and workforce development."
  }
];

export default function SDGAlignment() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section
        className="pt-40 pb-28 bg-cover bg-center relative text-white"
        style={{ backgroundImage: `url(${hero})` }} 
      >
        <div className="absolute inset-0 bg-slate-900/70" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto px-6 text-center"
        >
          <div className="flex justify-center mb-6">
            <Globe className="w-12 h-12 text-blue-400 animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Our SDG Alignment
          </h1>
          <p className="text-lg md:text-xl mt-6 leading-relaxed text-slate-200 max-w-3xl mx-auto">
            "An African society where all youths are employed and self-reliant." 
            Our mission is anchored in the UN 2030 Agenda to drive sustainable, inclusive growth.
          </p>
        </motion.div>
      </section>

      {/* SDG CARDS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sdgs.map((sdg, i) => (
            <motion.div
              key={sdg.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className={`${sdg.color} p-6 flex items-center justify-between text-white`}>
                <div className="text-4xl font-black opacity-40 italic">Goal {sdg.number}</div>
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {sdg.icon}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-4 text-gray-900">{sdg.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {sdg.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* VISUAL ALIGNMENT / LOGIC MODEL */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              From Local Action to Global Impact
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto" />
            <p className="text-lg text-gray-600 max-w-3xl mx-auto pt-4">
              GMI’s programs are intentionally designed as "Pillars of Inspiration," translating grassroots 
              interventions into measurable outcomes that advance the 2030 Agenda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { label: "Employability & Entrepreneurship", target: "SDGs 4 & 8", icon: <BookOpen className="w-8 h-8 text-blue-900" /> },
              { label: "Women & Youth Inclusion", target: "SDGs 5 & 10", icon: <Users className="w-8 h-8 text-blue-900" /> },
              { label: "Climate Innovation & Green Skills", target: "SDG 13", icon: <Leaf className="w-8 h-8 text-blue-900" /> },
              { label: "Policy Labs & Civic Participation", target: "SDG 16", icon: <Settings className="w-8 h-8 text-blue-900" /> },
              { label: "Strategic Alliances & Scaling", target: "SDG 17", icon: <Link className="w-8 h-8 text-blue-900" /> }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center justify-between bg-blue-50 p-6 rounded-2xl border border-blue-100 group hover:bg-blue-600 transition-colors duration-300"
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-bold text-gray-800 group-hover:text-white transition-colors">{item.label}</span>
                </div>
                <div className="font-mono text-sm font-bold text-blue-600 group-hover:text-blue-100 transition-colors">
                  {item.target}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
     <section className="bg-slate-900 py-16 text-center text-white">
  <div className="max-w-4xl mx-auto px-6">
    <h3 className="text-2xl font-bold mb-6">
      Ready to support our SDG targets?
    </h3>

    <p className="text-slate-400 mb-8">
      We partner with organizations to deliver responsive solutions and achieve sustainable impact across the communities we serve.
    </p>

    <Link to="/get-involved/donate">
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full transition-all">
        Get Involved
      </button>
    </Link>
  </div>
</section>


      <Footer />
    </div>
  );
}