
import { motion } from "framer-motion";
import { page, fadeUp, stagger } from "../../animations/variants";
import partnersImg from "../../assets/images/transparency/partnerships.jpg";
 import Footer from "../../components/layout/Footer";


export default function Partnerships() {
  return (
    <>
    <motion.main variants={page} initial="initial" animate="animate" exit="exit" className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.h1 variants={fadeUp} className="text-4xl font-bold text-primary mb-8">
            GMI Partnerships & Alliances
          </motion.h1>

          <motion.img
            variants={fadeUp}
            src={partnersImg}
            className="w-full h-80 object-cover rounded-xl shadow mb-10"
            alt="GMI Collaboration"
          />

          <motion.div variants={fadeUp} className="text-gray-700 space-y-8">
            <div className="max-w-4xl">
              <p className="text-lg leading-relaxed mb-6">
                Glowing Minds Initiatives builds and manages strategic partnerships with development agencies, 
                private sector actors, government institutions, and philanthropies to expand programme reach, 
                co-create solutions, and strengthen long-term sustainability.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Technology Partners */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-primary mb-4 border-b pb-2">Technology Partners</h3>
                <ul className="space-y-3 text-sm">
                  <li><strong>Corestream:</strong> Digital infrastructure & email systems.</li>
                  <li><strong>Google for Nonprofits:</strong> Productivity & marketing tools.</li>
                  <li><strong>Canva for Nonprofit:</strong> Design & branding support.</li>
                  <li><strong>Resilience Technologies:</strong> Cybersecurity & digital safety.</li>
                </ul>
              </div>

              {/* Knowledge & Capacity Partners */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-primary mb-4 border-b pb-2">Knowledge Partners</h3>
                <ul className="space-y-3 text-sm">
                  <li><strong>Civic Hive:</strong> Institutional strengthening.</li>
                  <li><strong>WACSI:</strong> Resource mobilisation & finance models.</li>
                  <li><strong>Dataphyte:</strong> Cybersecurity risk mitigation.</li>
                  <li><strong>NNNGO:</strong> Strategic planning & M&E support.</li>
                </ul>
              </div>

              {/* Program & Implementation Partners */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-primary mb-4 border-b pb-2">Program Partners</h3>
                <ul className="space-y-3 text-sm">
                  <li><strong>Raw Materials Research Dev. Council</strong>.</li>
                  <li><strong>Skills Outside School Foundation</strong>.</li>
                  <li><strong>Ecocycle</strong>.</li>
                  <li><strong>Nigeria Union of Journalists (FCT)</strong>.</li>
                </ul>
              </div>
            </div>

            {/* Strategic Alliances */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-primary mb-6">Strategic Alliances</h3>
              <div className="flex flex-wrap gap-4">
                {["Nigeria ESO Collaborative", "Nigeria Network of NGOs", "Nigeria Catalyst Now", "West Africa Civil Society Institute"].map((alliance) => (
                  <span key={alliance} className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100">
                    {alliance} 
                  </span>
                ))}
              </div>
            </div>

            {/* Engagement Model */}
            <div className="bg-primary text-white p-8 rounded-xl mt-12">
              <h3 className="text-xl font-bold mb-4">How We Partner</h3>
              <p className="text-sm opacity-90 mb-6">
                We engage with stakeholders through program co-creation, research collaboration, 
                mentorship, and in-kind support aligned with shared development goals.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="border border-white/20 p-3 rounded-lg">
                  <span className="text-xs uppercase tracking-wider">Public Sector</span>
                </div>
                <div className="border border-white/20 p-3 rounded-lg">
                  <span className="text-xs uppercase tracking-wider">Private Sector</span>
                </div>
                <div className="border border-white/20 p-3 rounded-lg">
                  <span className="text-xs uppercase tracking-wider">Civil Society</span>
                </div>
                <div className="border border-white/20 p-3 rounded-lg">
                  <span className="text-xs uppercase tracking-wider">Philanthropists</span>
                </div>
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