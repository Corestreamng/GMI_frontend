
import { motion } from "framer-motion";
import { page, fadeUp, stagger } from "../../animations/variants";
import awardsImg from "../../assets/images/impact/awards.jpg";
import Footer from "../../components/layout/Footer";

export default function Awards() {
  const awardsList = [
    {
      title: "Nigerian Youth SDGs Top 50 Changemakers",
      description: "Recognized by the Nigeria Youth SDG Network, with support from Oxfam, the United Nations, and other partners, our Executive Director was honored as one of the 50 Young Change-makers driving sustainable development in Nigeria.",
    },
    {
      title: "CSR-in-Action Humanitarian Award Nominee",
      description: "Nominated for the Apostle Hayford Alile Humanitarian Award at the 2024 Community and Human Rights Africa Awards (CAHR), organized by CSR-in-Action in collaboration with Ford Foundation and Global Rights, specifically recognizing our work around SDG 8.",
    },
    {
      title: "Impact Investment Foundation Recognition",
      description: "Nominated for the prestigious Innocent C. Chukwuma Award 2024 at the 6th edition of the Impact Investment Foundation Annual Dinner and Awards, supported by the Innocent C. Chukwuma Empowerment Foundation.",
    }
  ];

  return (
     <>
    <motion.main variants={page} initial="initial" animate="animate" exit="exit" className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.h1 variants={fadeUp} className="text-4xl font-bold text-primary mb-8">
            Awards & Recognitions
          </motion.h1>

          <motion.img
            variants={fadeUp}
            src={awardsImg}
            className="rounded-xl shadow mb-10 h-72 w-full object-cover"
            alt="GMI Awards and Recognition"
          />

          <motion.div variants={fadeUp} className="grid md:grid-cols-1 gap-8">
            {awardsList.map((award, index) => (
              <div key={index} className="border-l-4 border-primary pl-6 py-2">
                <h3 className="text-xl font-semibold text-primary mb-2">{award.title}</h3>
                <p className="text-gray-700 leading-relaxed italic">
                  {award.description}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.main>
    <Footer />
    </>
  );
}