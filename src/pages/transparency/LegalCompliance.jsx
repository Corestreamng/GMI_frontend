
import { motion } from "framer-motion";
import { page, fadeUp, stagger } from "../../animations/variants";
import legalImg from "../../assets/images/transparency/legal.jpg";
import Footer from "../../components/layout/Footer";

export default function LegalCompliance() {
  const complianceData = [
    { label: "Corporate Affairs Commission (CAC)", value: "Registered (CAC/IT/180249)", status: "Yes" },
    { label: "Federal Inland Revenue Service (FIRS)", value: "TIN: 24253673-0001", status: "Yes" },
    { label: "Special Control Unit Against Money Laundering", value: "SC 271400637", status: "Yes" },
    { label: "Federal Ministry of Budget and Economic Planning", value: "Statutory Coordination", status: "In-Progress" },
  ];

  return (
    <>
    <motion.main
      variants={page}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pt-28 pb-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.h1
            variants={fadeUp}
            className="text-4xl font-bold text-primary mb-8"
          >
            Legal & Compliance
          </motion.h1>

          <motion.img
            variants={fadeUp}
            src={legalImg}
            alt="GMI Legal Status"
            className="w-full h-80 object-cover rounded-xl shadow mb-10"
          />

          <motion.div
            variants={fadeUp}
            className="space-y-10 text-gray-700"
          >
            <div className="max-w-4xl">
              <p className="text-lg leading-relaxed mb-6">
                Glowing Minds Initiatives for Human Development (GMI) is a duly registered, 
                non-profit organization operating in full compliance with Nigerian laws. 
                Our operations adhere to the highest ethical standards and global best 
                practices for nonprofit governance.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
                <h3 className="font-bold text-primary mb-2">Accountability Statement</h3>
                <p className="text-sm italic">
                  "All funds are managed in accordance with approved budgets, internal financial 
                  controls, and applicable regulatory and donor compliance requirements. Periodic 
                  financial reviews and audits are conducted to ensure transparency and accountability."
                </p>
              </div>
            </div>

            {/* Registration Table */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-primary mb-6">Official Credentials</h3>
                <div className="space-y-4">
                  {complianceData.map((item, index) => (
                    <div key={index} className="flex justify-between items-center border-b pb-2">
                      <div>
                        <p className="text-xs text-gray-500 uppercase font-bold">{item.label}</p>
                        <p className="font-medium text-sm">{item.value}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        item.status === "Yes" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
                      }`}>
                        {item.status === "Yes" ? "ACTIVE" : item.status.toUpperCase()}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-primary mb-4">Compliance Framework</h3>
                <p className="text-sm mb-4">
                  Beyond statutory registration, we maintain full adherence to:
                </p>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">●</span>
                    <strong>Annual Statutory Filings:</strong> Regular reporting to the CAC and FIRS to maintain "Good Standing."
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">●</span>
                    <strong>Ethical Self-Regulation:</strong> Active membership in the Nigeria Network of NGOs (NNNGO) for peer accountability.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">●</span>
                    <strong>Safeguarding Protocols:</strong> Compliance with modern slavery and child protection policies across all programs.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">●</span>
                    <strong>Financial Controls:</strong> Robust risk management, procurement, and value-for-money policies.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.main>
    <Footer />
    </>
  );
}