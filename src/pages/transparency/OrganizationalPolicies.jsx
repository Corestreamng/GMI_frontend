
import { motion } from "framer-motion";
import { page, fadeUp, stagger } from "../../animations/variants";
import policiesImg from "../../assets/images/transparency/policies.jpg";
  import Footer from "../../components/layout/Footer"; 

export default function OrganizationalPolicies() {
  const policyGroups = [
    {
      title: "Ethics & Conduct",
      policies: [
        "Code of Conduct / Ethics Policy",
        "Anti-Corruption and Ethics Policy",
        "Abuse of Power Policy",
        "Whistleblower Policy",
        "Conflict of Interest Policy",
        "Modern Slavery and Human Trafficking Policy"
      ]
    },
    {
      title: "Governance & Operations",
      policies: [
        "Board Policy",
        "Financial Management and Audit",
        "Procurement Policy",
        "Risk Management Policy",
        "Value for Money Policy",
        "Operating Reserve Policy",
        "Downstream Delivery Chain Management"
      ]
    },
    {
      title: "People & Safety",
      policies: [
        "Personnel Policy",
        "Staff Remuneration Policy",
        "Gender and Inclusion Policy",
        "Safeguarding and Child Protection Policy",
        "Prevention of Bullying and Harassment",
        "Sexual Harassment Policy",
        "Health and Safety Policy"
      ]
    },
    {
      title: "Information & Digital",
      policies: [
        "Data Protection Policy",
        "Communication Policy",
        "Intellectual Property Policy",
        "Computer and Internet Use Policy",
        "Record Management Policy",
        "Open Science Policy",
        "Confidentiality Policy"
      ]
    }
  ];

  return (
     <>
    <motion.main variants={page} initial="initial" animate="animate" exit="exit" className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.h1 variants={fadeUp} className="text-4xl font-bold text-primary mb-4">
            Organizational Policies & Compliance
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-gray-600 mb-8 max-w-3xl">
            GMI maintains a robust framework of 33 internal policies ensuring full adherence to national 
            regulations, donor requirements, and the highest ethical standards across all operations[cite: 1726, 1981].
          </motion.p>

          <motion.img
            variants={fadeUp}
            src={policiesImg}
            className="w-full h-80 object-cover rounded-xl shadow mb-12"
            alt="GMI Governance Framework"
          />

          <motion.div variants={fadeUp} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {policyGroups.map((group, index) => (
              <div key={index} className="space-y-4">
                <h3 className="font-bold text-primary text-lg border-b border-gray-100 pb-2">
                  {group.title}
                </h3>
                <ul className="space-y-2">
                  {group.policies.map((policy, pIndex) => (
                    <li key={pIndex} className="text-sm text-gray-700 flex items-start gap-2">
                      <span className="text-green-500 font-bold">✓</span>
                      {policy}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          {/* Compliance Banner */}
          <motion.div 
            variants={fadeUp} 
            className="mt-16 p-8 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6"
          >
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Regulatory Adherence</h3>
              <p className="text-sm text-gray-600">
                We are fully registered and compliant with the Corporate Affairs Commission (CAC), 
                Federal Inland Revenue Service (FIRS), and SCUML.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="bg-white px-4 py-2 rounded shadow-sm text-xs font-mono">CAC/IT/180249</div>
              <div className="bg-white px-4 py-2 rounded shadow-sm text-xs font-mono">TIN: 24253673-0001</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.main>
    <Footer />
    </>
  );
}