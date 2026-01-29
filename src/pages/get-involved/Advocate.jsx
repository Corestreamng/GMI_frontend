import { motion } from "framer-motion";
import { 
  Megaphone, 
  Scale, 
  Globe, 
  Users, 
  FileText, 
  Share2 
} from "lucide-react"; 
import { page, fadeUp, stagger } from "../../animations/variants";
import advocateImg from "../../assets/images/GetInvolved/advocate.jpg";
import Footer from "../../components/layout/Footer";

export default function Advocate() {
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
            Advocate for Change
          </motion.h1>

          <motion.img 
            variants={fadeUp} 
            src={advocateImg}
            className="w-full h-80 object-cover rounded-2xl shadow-lg mb-12" 
            alt="Youth Advocacy" 
          />

          <motion.div
            variants={fadeUp}
            className="text-gray-700 max-w-4xl space-y-8"
          >
            <div className="prose prose-lg">
              <p>
                At Glowing Minds Initiatives, advocacy is a core pillar of our mission.
                We believe young people should be <strong>co-creators</strong> of the
                solutions that affect their lives. By becoming a GMI Advocate, you help
                influence systemic change and create an enabling environment for youth
                empowerment across Africa.
              </p>
            </div>

            {/* Advocacy Pillars */}
            <div className="grid md:grid-cols-2 gap-6 mt-10">
              <div className="flex gap-4 p-6 bg-white rounded-xl shadow-sm border">
                <Scale className="text-primary w-10 h-10" />
                <div>
                  <h3 className="font-bold text-lg text-primary">
                    Policy Lab Engagement
                  </h3>
                  <p className="text-sm">
                    Collaborate with our Policy Lab to translate ideas into
                    actionable youth-focused policies.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-white rounded-xl shadow-sm border">
                <Globe className="text-primary w-10 h-10" />
                <div>
                  <h3 className="font-bold text-lg text-primary">
                    Climate & Green Economy
                  </h3>
                  <p className="text-sm">
                    Advocate for youth participation in climate governance and
                    sustainable innovation.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-white rounded-xl shadow-sm border">
                <Users className="text-primary w-10 h-10" />
                <div>
                  <h3 className="font-bold text-lg text-primary">
                    Social Inclusion (GESI)
                  </h3>
                  <p className="text-sm">
                    Promote equity, disability inclusion, and gender justice.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-white rounded-xl shadow-sm border">
                <Megaphone className="text-primary w-10 h-10" />
                <div>
                  <h3 className="font-bold text-lg text-primary">
                    Civic Participation
                  </h3>
                  <p className="text-sm">
                    Strengthen youth engagement in governance and leadership.
                  </p>
                </div>
              </div>
            </div>

            {/* How to Advocate */}
            <div className="bg-primary/5 p-8 rounded-2xl border border-primary/20">
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                <Share2 className="w-7 h-7" />
                How You Can Amplify Our Voice
              </h3>

              <ul className="space-y-4">
                <li className="flex gap-3">
                  <FileText className="text-primary w-5 h-5" />
                  <span>
                    <strong>Distribute Knowledge:</strong> Share research,
                    policy briefs, and toolkits.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Megaphone className="text-primary w-5 h-5" />
                  <span>
                    <strong>Digital Advocacy:</strong> Amplify youth initiatives
                    and campaigns online.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Users className="text-primary w-5 h-5" />
                  <span>
                    <strong>Community Outreach:</strong> Facilitate youth-centered
                    policy dialogues.
                  </span>
                </li>
              </ul>
            </div>

          </motion.div>
        </motion.div>
      </div>
    </motion.main>
    <Footer />
    </>
  );
}
