
import { motion } from "framer-motion";
import {
  Users,
  BookOpen,
  MessageSquare,
  Settings,
  CheckCircle,
  Award,
} from "lucide-react";
import { page, fadeUp, stagger } from "../../animations/variants";
import volunteerImg from "../../assets/images/GetInvolved/volunteer.jpg";
import CTAButtons from "../../components/common/CTAButtons";
import Footer from "../../components/layout/Footer";

export default function Volunteer() {
  return (
    <>
    <motion.main
      variants={page}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pt-28 pb-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={stagger} initial="hidden" animate="show">

          {/* Page Title */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl font-bold text-primary mb-8"
          >
            Volunteer / Mentor
          </motion.h1>

          {/* Hero Image */}
          <motion.img
            variants={fadeUp}
            src={volunteerImg}
            className="w-full h-80 object-cover rounded-2xl shadow-lg mb-12"
            alt="Volunteer with GMI"
          />

          {/* Intro Text */}
          <motion.div
            variants={fadeUp}
            className="text-gray-700 max-w-4xl space-y-8"
          >
            <p className="text-lg leading-relaxed">
              GMI Volunteers are experienced professionals—entrepreneurs, policy
              analysts, facilitators, and executives—who are passionate about
              service. By contributing your expertise and networks, you help
              drive youth-led sustainable development across Africa on a
              pro-bono basis.
            </p>

            {/* Volunteering Roles */}
            <div className="grid md:grid-cols-2 gap-6 mt-10">
              <Role
                icon={<Users />}
                title="Training & Facilitation"
                text="Facilitate sessions in entrepreneurship, employability, and leadership development programs."
              />
              <Role
                icon={<MessageSquare />}
                title="Mentorship & Advisory"
                text="Provide career guidance and strategic advisory support to young leaders and entrepreneurs."
              />
              <Role
                icon={<BookOpen />}
                title="Content Development"
                text="Develop training materials and contribute expert articles to the GMI Knowledge Hub."
              />
              <Role
                icon={<Settings />}
                title="Operational Support"
                text="Support logistics, coordination, and administration during program delivery."
              />
            </div>

            {/* Requirements */}
            <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10 mt-14">
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                <Award className="w-7 h-7" />
                Engagement Requirements
              </h3>

              <ul className="grid md:grid-cols-2 gap-y-4 gap-x-8">
                {[
                  "Alignment with GMI core values: Integrity, Empathy, and Excellence.",
                  "Completion of the GMI Train-the-Trainer workshop.",
                  "Minimum commitment of two sessions (at least 6 hours) per year.",
                  "Provision of a professional referral.",
                  "Willingness to volunteer on a pro-bono basis.",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <CheckCircle className="text-green-600 w-5 h-5 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* CTA */}
      <CTAButtons
        primaryText="Apply to Volunteer"
        primaryLink="/get-involved/volunteer"
        secondaryText="Join Community"
        secondaryLink="/get-involved/community"
      />

      {/* Footer */}
      
    </motion.main>
    <Footer />
    </>
  );
}

/* Card */
function Role({ icon, title, text }) {
  return (
    <div className="flex gap-4 p-5 rounded-xl border border-gray-100 bg-gray-50 hover:shadow-md transition-shadow">
      <div className="text-primary w-12 h-12 shrink-0">{icon}</div>
      <div>
        <h3 className="font-bold text-lg text-primary">{title}</h3>
        <p className="text-sm text-gray-600">{text}</p>
      </div>
    </div>
  );
}
