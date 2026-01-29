
import { motion } from "framer-motion";
import { 
  UserCheck, 
  Rocket, 
  Binary, 
  Briefcase, 
  GraduationCap, 
  TrendingUp 
} from "lucide-react"; 
import { page, fadeUp, stagger } from "../../animations/variants";
import hireImg from "../../assets/images/GetInvolved/hire.jpg";
import Footer from "../../components/layout/Footer";

export default function HireTalent() {
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
            Hire GMI Talent
          </motion.h1>

          <motion.img 
            variants={fadeUp} 
            src={hireImg}
            className="w-full h-80 object-cover rounded-2xl shadow-lg mb-12" 
            alt="GMI Talent Pool"
          />

          <motion.div
            variants={fadeUp}
            className="text-gray-700 max-w-4xl space-y-8"
          >
            <div className="prose prose-lg">
              <p>
                Access a pool of vetted, innovative, and impact-driven talent trained
                through Glowing Minds Initiatives. Our graduates and fellows are equipped
                with <strong>employability, digital literacy, and soft skills</strong>,
                making them high-value contributors to the global labor market.
              </p>
            </div>

            {/* Talent Categories */}
            <div className="grid md:grid-cols-2 gap-6 mt-10">
              <div className="flex gap-4 p-6 bg-white rounded-xl shadow-sm border hover:border-primary/30 transition">
                <GraduationCap className="text-primary w-12 h-12" />
                <div>
                  <h3 className="font-bold text-lg text-primary">GEP Graduates</h3>
                  <p className="text-sm">
                    Fresh graduates from the Graduate Employability Program with
                    job-ready soft skills.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-white rounded-xl shadow-sm border hover:border-primary/30 transition">
                <Rocket className="text-primary w-12 h-12" />
                <div>
                  <h3 className="font-bold text-lg text-primary">
                    Campus Entrepreneurs
                  </h3>
                  <p className="text-sm">
                    SLEP talents with business development and innovation skills.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-white rounded-xl shadow-sm border hover:border-primary/30 transition">
                <Binary className="text-primary w-12 h-12" />
                <div>
                  <h3 className="font-bold text-lg text-primary">
                    Digital-First Workforce
                  </h3>
                  <p className="text-sm">
                    AI and digital economy–ready professionals.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-white rounded-xl shadow-sm border hover:border-primary/30 transition">
                <Briefcase className="text-primary w-12 h-12" />
                <div>
                  <h3 className="font-bold text-lg text-primary">
                    Job-Ready Interns
                  </h3>
                  <p className="text-sm">
                    SIWES and NYSC-ready interns with hands-on experience.
                  </p>
                </div>
              </div>
            </div>

            {/* Talent Advantage */}
            <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                <UserCheck className="w-7 h-7" />
                The GMI Talent Advantage
              </h3>

              <ul className="space-y-4">
                <li className="flex gap-3">
                  <TrendingUp className="text-primary w-5 h-5 mt-1" />
                  <span>
                    <strong>Market-Aligned Skills:</strong> Training aligned with
                    real-world labor market needs.
                  </span>
                </li>
                <li className="flex gap-3">
                  <UserCheck className="text-primary w-5 h-5 mt-1" />
                  <span>
                    <strong>Vetted Talent:</strong> Mentored and assessed by industry
                    professionals.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Rocket className="text-primary w-5 h-5 mt-1" />
                  <span>
                    <strong>Purpose-Driven:</strong> Talents trained for impact and
                    sustainability.
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
