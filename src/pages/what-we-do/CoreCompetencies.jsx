
import { motion } from "framer-motion";
import { 
  Briefcase, 
  Rocket, 
  Users, 
  FileText, 
  TrendingUp, 
  CheckCircle2 
} from "lucide-react"; 
import Footer from "../../components/layout/Footer";
import hero from "../../assets/images/heroes/competencies-hero.jpg";

const competencies = [
  {
    title: "Career Support Services",
    icon: <Briefcase className="w-8 h-8 text-blue-950" />,
    text: "We provide structured career guidance, employability training, mentorship, and job-readiness support that equips young people with relevant skills.",
    stat: "10,000+ Youth Trained"
  },
  {
    title: "Enterprise Support Services",
    icon: <Rocket className="w-8 h-8 text-blue-950" />,
    text: "We support youth-led enterprises through entrepreneurship training, market access, and advisory services for sustainable startups.",
    stat: "500+ Startups Supported"
  },
  {
    title: "Community Engagement",
    icon: <Users className="w-8 h-8 text-blue-950" />,
    text: "We work closely with communities to co-create inclusive programmes and deliver context-responsive interventions.",
    stat: "50+ Local Communities"
  },
  {
    title: "Policy Development",
    icon: <FileText className="w-8 h-8 text-blue-950" />,
    text: "We facilitate evidence-based policy research and advocacy to influence inclusive policies that integrate youth perspectives.",
    stat: "12 Policy Papers Published"
  },
  {
    title: "Business Incubation",
    icon: <TrendingUp className="w-8 h-8 text-blue-950" />,
    text: "We design and deliver structured incubation and acceleration programmes that support MSMEs with investment readiness.",
    stat: "$2M+ Seed Funding Raised"
  }
];

const impactStats = [
  { label: "Jobs Created", value: "2,500+" },
  { label: "Partner Organizations", value: "120+" },
  { label: "Success Rate", value: "85%" },
  { label: "Active Mentors", value: "300+" }
];

export default function CoreCompetencies() {
  return (
    <div className="min-h-screen bg-blue-300">
      
      <section
        className="pt-40 pb-28 bg-cover bg-center relative text-white"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto px-6 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Our Core Competencies
          </h1>
          <p className="text-lg md:text-xl mt-6 max-w-3xl mx-auto text-blue-100 leading-relaxed">
            Deep expertise and measurable impact in youth development and economic empowerment.
          </p>
        </motion.div>
      </section>

      {/* COMPETENCIES GRID */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } }
            }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {competencies.map((item, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, scale: 0.95 },
                  visible: { opacity: 1, scale: 1 }
                }}
                whileHover={{ y: -8 }}
                className="bg-white border border-blue-100 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.text}
                </p>
                <div className="flex items-center gap-2 text-blue-700 font-semibold text-sm bg-blue-50 w-fit px-3 py-1 rounded-full">
                  <CheckCircle2 className="w-4 h-4" />
                  {item.stat}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Our Measurable Impact</h2>
            <p className="text-blue-200 mt-2">The scale of our commitment to youth empowerment.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {impactStats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-blue-300 font-medium uppercase tracking-wider text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}