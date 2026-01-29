
import { motion } from "framer-motion";
import { 
  Briefcase, 
  GraduationCap, 
  Terminal, 
  Search, 
  Users, 
  CheckCircle2 
} from "lucide-react";
import { page, fadeUp, stagger } from "../../animations/variants";
import siwesImg from "../../assets/images/GetInvolved/siwes.jpg";
import CTAButtons from "../../components/common/CTAButtons";
import Footer from "../../components/layout/Footer";


export default function SiwesNysc() {
  return (
    <>
    <motion.main variants={page} initial="initial" animate="animate" exit="exit" className="pt-28 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.h1 variants={fadeUp} className="text-4xl font-bold text-primary mb-8">
            Request SIWES / NYSC Placement
          </motion.h1>

          <motion.img 
            variants={fadeUp} 
            src={siwesImg} 
            className="w-full h-80 object-cover rounded-2xl shadow-lg mb-12" 
            alt="SIWES and NYSC at GMI" 
          />

          <motion.div variants={fadeUp} className="text-gray-700 max-w-4xl space-y-8">
            <div className="prose prose-lg">
              <p>
                Glowing Minds Initiatives (GMI) provides structured learning opportunities designed to transition undergraduates and fresh graduates from theoretical academic settings to the practical demands of the global labor market[cite: 1466, 1467, 1474]. 
                Whether you are a <strong>SIWES student</strong> seeking industrial experience or an <strong>NYSC member</strong> looking for a primary place of assignment, we offer a pathway to sustainable self-reliance[cite: 1515, 1530].
              </p>
            </div>

            {/* Experience Pillars Grid */}
            <div className="grid md:grid-cols-2 gap-6 mt-10">
              <div className="flex gap-4 p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                <Briefcase className="text-primary w-10 h-10 shrink-0" />
                <div>
                  <h3 className="font-bold text-lg text-primary">Workforce Readiness</h3>
                  <p className="text-sm">Gain hands-on involvement in real-world projects that build your workplace readiness and digital literacy[cite: 1471, 1486].</p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                <Terminal className="text-primary w-10 h-10 shrink-0" />
                <div>
                  <h3 className="font-bold text-lg text-primary">Digital & Tech Exposure</h3>
                  <p className="text-sm">Work alongside our Innovation Officers on digital infrastructure and AI transition initiatives[cite: 1619, 1747, 1963].</p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                <Search className="text-primary w-10 h-10 shrink-0" />
                <div>
                  <h3 className="font-bold text-lg text-primary">Research & Policy</h3>
                  <p className="text-sm">Support the <strong>Glowing Minds Policy Lab</strong> in conducting research that influences youth-responsive policies[cite: 1524, 1629].</p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                <Users className="text-primary w-10 h-10 shrink-0" />
                <div>
                  <h3 className="font-bold text-lg text-primary">Community Impact</h3>
                  <p className="text-sm">Engage directly with underserved communities to co-create inclusive social impact programs[cite: 1472, 1735, 1736].</p>
                </div>
              </div>
            </div>

            {/* Why Intern with GMI */}
            <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10 mt-12">
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                <GraduationCap className="w-7 h-7" /> Why Join GMI?
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Access to structured mentorship from industry experts[cite: 1732].",
                  "Exposure to global best practices in nonprofit management[cite: 2099].",
                  "Opportunity to build a professional network within our 33-state reach[cite: 1922].",
                  "Post-placement career support and job fair recommendations[cite: 1576, 1934].",
                  "Alignment with UN Sustainable Development Goals (SDGs)[cite: 1549]."
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="text-green-600 w-5 h-5 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
 
 
      <CTAButtons 
        primaryText="Apply for SIWES/NYSC"
        primaryLink="/get-involved/siwes"
        secondaryText="Contact Us"
        secondaryLink="/contact"
      />
    </motion.main>
    <Footer />
    </>
  );
}