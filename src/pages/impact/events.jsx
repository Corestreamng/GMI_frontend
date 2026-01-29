
import { motion } from "framer-motion";
import { page, fadeUp, stagger } from "../../animations/variants";
import eventsImg from "../../assets/images/impact/events.jpg";
import Footer from "../../components/layout/Footer";
export default function AnnualEvents() {
  const events = [
    {
      name: "Future Focus Conference (FFC)",
      description: "Our flagship annual conference designed to explore emerging trends shaping the future of work, entrepreneurship, and innovation. It brings together leaders, young professionals, and ecosystem enablers from government, development, and private sectors for collaborative action.",
      details: "Held annually on Founders Day in Abuja. Features include keynote speeches, panel sessions, pitching competitions, and career fairs.",
    },
    {
      name: "Partners Appreciation Event",
      description: "A dedicated gathering to recognize and celebrate the institutional, technology, and funding partners whose support drives GMI's mission and impact across Africa.",
      details: "Focuses on relationship management and shared development goals.",
    },
    {
      name: "Annual Day Celebration",
      description: "A milestone event celebrating the organization's journey, achievements by the numbers, and the community of youth who have transformed their lives through our programs.",
      details: "A time for reflection, testimonials, and looking forward to strategic growth.",
    }
  ];

  const coreActivities = [
    "Keynote Speeches & Panel Sessions",
    "Exhibitions & Pitching Competitions",
    "Business Clinics & Trade Fairs",
    "Career Fairs & Breakout Sessions",
    "Annual General Meeting (AGM)"
  ];

  return (
    <>
    <motion.main variants={page} initial="initial" animate="animate" exit="exit" className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.h1 variants={fadeUp} className="text-4xl font-bold text-primary mb-8">
            Annual Events
          </motion.h1>

          <motion.img
            variants={fadeUp}
            src={eventsImg}
            className="rounded-xl shadow mb-10 h-72 w-full object-cover"
            alt="GMI Annual Events"
          />

          <motion.div variants={fadeUp} className="grid gap-10">
            {events.map((event, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-primary mb-3">{event.name}</h2>
                <p className="text-gray-700 leading-relaxed mb-3">{event.description}</p>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">{event.details}</p>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-12 bg-primary/5 p-8 rounded-xl">
            <h3 className="text-xl font-bold text-primary mb-6">What to Expect</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {coreActivities.map((activity, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-gray-700">
                  <span className="h-2 w-2 bg-primary rounded-full"></span>
                  <span>{activity}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.main>
    <Footer />
    </>
  );
}