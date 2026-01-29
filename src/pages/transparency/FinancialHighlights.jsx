
import { motion } from "framer-motion";
import { page, fadeUp, stagger } from "../../animations/variants";
import financeImg from "../../assets/images/transparency/finance.jpg";
import Footer from "../../components/layout/Footer";


export default function FinancialHighlights() {
  return (
    <motion. smugglers variants={page} initial="initial" animate="animate" exit="exit" className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.h1 variants={fadeUp} className="text-4xl font-bold text-primary mb-4">
            Financial Highlights
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-gray-600 mb-8 max-w-3xl">
            Glowing Minds Initiatives operates a prudent and transparent financial management system. 
            Our operations are guided by approved budgets, internal controls, and full compliance 
            with regulatory and donor requirements.
          </motion.p>

          <motion.img
            variants={fadeUp}
            src={financeImg}
            className="w-full h-80 object-cover rounded-xl shadow mb-12"
            alt="Financial Transparency"
          />

          <div className="grid md:grid-cols-2 gap-8 text-gray-700">
            {/* Funding Sources Section */}
            <motion.div variants={fadeUp} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-primary mb-4">Funding Sources & Sustainability</h3>
              <p className="mb-4 text-sm leading-relaxed">
                We maintain a diversified funding base to reduce dependency on single sources and strengthen organizational resilience. Our revenue includes:
              </p>
              <ul className="space-y-2 text-sm list-disc pl-5">
                <li><strong>Institutional Grants:</strong> Multilateral agencies and international foundations.</li>
                <li><strong>Corporate Partnerships:</strong> Strategic CSR initiatives and sponsorships.</li>
                <li><strong>Earned Income:</strong> Revenue from training programs, consulting, and social enterprise activities.</li>
                <li><strong>Philanthropic Donations:</strong> Contributions from individual donors and high-net-worth supporters.</li>
                <li><strong>In-Kind Support:</strong> Technical tools, professional services, and digital infrastructure.</li>
              </ul>
            </motion.div>

            {/* Expenditure Section */}
            <motion.div variants={fadeUp} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-primary mb-4">Resource Prioritization</h3>
              <p className="mb-4 text-sm leading-relaxed">
                Resources are strategically allocated to maximize value for money while maintaining efficient administrative costs.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-blue-50 rounded-lg text-center">
                  <span className="block font-bold text-primary text-lg">Program</span>
                  <span className="text-xs uppercase">Implementation</span>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg text-center">
                  <span className="block font-bold text-primary text-lg">Capacity</span>
                  <span className="text-xs uppercase">Development</span>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg text-center">
                  <span className="block font-bold text-primary text-lg">M & E</span>
                  <span className="text-xs uppercase">Research</span>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg text-center">
                  <span className="block font-bold text-primary text-lg">Community</span>
                  <span className="text-xs uppercase">Engagement</span>
                </div>
              </div>
              <p className="mt-6 text-sm italic">
                The organization has experienced steady year-on-year financial growth, enabling expanded reach across 33 states.
              </p>
            </motion.div>

            {/* Accountability Section */}
            <motion.div variants={fadeUp} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 md:col-span-2">
              <h3 className="text-xl font-bold text-primary mb-4">Financial Accountability Statement</h3>
              <blockquote className="border-l-4 border-primary pl-4 italic text-gray-600 mb-6">
                "All funds are managed in accordance with approved budgets, internal financial controls, and applicable regulatory and donor compliance requirements. Periodic financial reviews and audits are conducted to ensure transparency and accountability".
              </blockquote>
              <div className="flex flex-wrap gap-4 items-center">
                <span className="px-4 py-2 bg-blue-100 text-blue-800 text-xs font-bold rounded-full">FIRS COMPLIANT </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-800 text-xs font-bold rounded-full">CAC REGISTERED </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-800 text-xs font-bold rounded-full">SCUML CERTIFIED </span>
              
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </motion. smugglers>
  );
}