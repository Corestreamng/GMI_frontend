
import { motion } from "framer-motion";
import { page, fadeUp, stagger } from "../../animations/variants";
import knowledgeImg from "../../assets/images/impact/knowledge.jpg";
import Footer from "../../components/layout/Footer";

export default function KnowledgeProducts() {
  const publications = [
    "Annual Impact Reports (Audited) ",
    "Future Focus Conference (FFC) Reports",
    "Annual General Meeting (AGM) Reports ",
    "Project and Academic Articles ",
    "Strategic Plans and Case Studies "
  ];

  const researchAndPolicy = [
    "Policy Briefs on Youth Employability and Entrepreneurship ",
    "State of Campus Entrepreneurship in Nigeria Research ",
    "State of Climate Entrepreneurship in Nigeria Research ",
    "Startup and AI Policy Documents ",
    "Course Curriculums and Toolkits ",
    "Global Public Policy Legal Instrument Analysis "
  ];

  return (
      <>
    <motion.main variants={page} initial="initial" animate="animate" exit="exit" className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.h1 variants={fadeUp} className="text-4xl font-bold text-primary mb-8">
            Knowledge Products & Publications
          </motion.h1>

          <motion.img
            variants={fadeUp}
            src={knowledgeImg}
            className="rounded-xl shadow mb-10 h-72 w-full object-cover"
            alt="GMI Knowledge Products"
          />

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={fadeUp}>
              <h2 className="text-2xl font-semibold text-primary mb-4">Institutional Reports</h2>
              <ul className="space-y-3 text-gray-700">
                {publications.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h2 className="text-2xl font-semibold text-primary mb-4">Research & Policy</h2>
              <ul className="space-y-3 text-gray-700">
                {researchAndPolicy.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.p variants={fadeUp} className="mt-12 p-6 bg-gray-50 rounded-lg italic text-gray-600 border-l-4 border-primary">
            Our knowledge products are designed to translate innovative ideas into tangible, impactful policies that address the root causes of societal problems.
          </motion.p>
        </motion.div>
      </div>
    </motion.main>
      <Footer />
    </>
  );
}