import { motion } from "framer-motion";
import { page, fadeUp, stagger } from "../../animations/variants";

import CTAButtons from "../../components/common/CTAButtons";
import Footer from "../../components/layout/Footer";

import success1 from "../../assets/images/impact/success-1.jpg";
import success2 from "../../assets/images/impact/success-2.jpg";

/* ===============================
   Impact Stats Component
================================ */
function ImpactStats() {
  const stats = [
    { value: "2,500+", label: "Youth Reached" },
    { value: "33", label: "States Covered" },
    { value: "120+", label: "Programs Implemented" },
    { value: "85%", label: "Positive Outcomes" },
  ];

  return (
    <motion.section
      variants={fadeUp}
      className="mt-20 bg-white rounded-2xl shadow-lg p-10"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <h3 className="text-3xl md:text-4xl font-extrabold text-blue-900">
              {stat.value}
            </h3>
            <p className="mt-2 text-sm text-gray-600 uppercase tracking-wide">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

/* ===============================
   Success Stories Page
================================ */
export default function SuccessStories() {
  const stories = [
    {
      name: "Yusuf Amina",
      image: success1,
      role: "Job Placement Success",
      description:
        "Amina joined the GMI community in November 2024 as a Corp Member after attending the Future Focus Conference at Nile University. By May 2025, following a recommendation by GMI to Jobberman for a Job Fair, she successfully secured employment with an ICT Firm in Abuja.",
    },
    {
      name: "Amb. Adamu Dauda",
      image: success2,
      role: "Policy Lab Fellow & Youth Leader",
      description:
        "Adamu is a vibrant youth leader currently serving as the Councilor representing Lambata Ward in the Gurara Local Government Area of Niger State. He is a distinguished fellow of the Glowing Minds Policy Lab for Youth Leaders, where he contributes to regional policy development.",
    },
  ];

  return (
    <>
      <motion.main
        variants={page}
        initial="initial"
        animate="animate"
        exit="exit"
        className="pt-28 pb-24 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={stagger} initial="hidden" animate="show">
            
            {/* Page Title */}
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl font-bold text-blue-900 mb-14 text-center"
            >
              Success Stories
            </motion.h1>

            {/* Stories */}
            <div className="grid md:grid-cols-2 gap-10">
              {stories.map((story, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
                >
                  <div className="relative h-64">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="h-full w-full object-cover"
                    />
                    <span className="absolute bottom-0 left-0 bg-blue-900 px-4 py-1 text-white text-xs font-bold uppercase tracking-widest">
                      {story.role}
                    </span>
                  </div>

                  <div className="p-8 flex-grow">
                    <h3 className="font-bold text-2xl text-blue-950 mb-4">
                      {story.name}
                    </h3>
                    <p className="text-gray-700 leading-relaxed italic">
                      “{story.description}”
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Impact Narrative */}
            <motion.div
              variants={fadeUp}
              className="mt-20 p-10 bg-primary/5 rounded-2xl text-center border border-primary/10"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
                The GMI Impact
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                With over 2,500 young people reached across 33 states, these
                stories reflect Glowing Minds Initiatives’ commitment to building
                Africa’s next generation of skilled professionals, civic leaders,
                and change-makers.
              </p>
            </motion.div>

            {/* Impact Stats */}
            <ImpactStats />

            {/* Call to Action */}
            <motion.div variants={fadeUp} className="mt-20 text-center">
              <CTAButtons
                primaryText="Apply to Volunteer"
                primaryLink="/get-involved/volunteer"
                secondaryText="Partner With Us"
                secondaryLink="/get-involved/community"
              />
            </motion.div>

          </motion.div>
        </div>
      </motion.main>

      <Footer />
    </>
  );
}
