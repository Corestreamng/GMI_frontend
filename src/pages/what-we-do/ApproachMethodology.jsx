
import { motion } from "framer-motion";
import { 
  Users, BookOpen, Presentation, Globe, MapPin, 
  CheckCircle, Video, Briefcase, Microscope, Megaphone, 
  Scale, Lightbulb, Handshake, Heart, Award 
} from "lucide-react";
import Footer from "../../components/layout/Footer";
import hero from "../../assets/images/heroes/approach-hero.jpg";

export default function Approach() {
  const steps = [
    {
      title: "Needs-Driven Design",
      icon: <Microscope className="w-6 h-6 text-blue-700" />,
      text: "We design interventions based on real youth challenges identified through research, community engagement, and stakeholder consultations."
    },
    {
      title: "Co-Creation & Inclusion",
      icon: <Users className="w-6 h-6 text-blue-700" />,
      text: "Young people, women, and marginalized groups are involved as co-creators—not just beneficiaries—of programs and policies."
    },
    {
      title: "Practical Skill Building",
      icon: <Award className="w-6 h-6 text-blue-700" />,
      text: "Our programs emphasize hands-on learning, mentorship, and real-world problem solving rather than theory alone."
    },
    {
      title: "Partnership & Ecosystems",
      icon: <Handshake className="w-6 h-6 text-blue-700" />,
      text: "We collaborate with governments, private sector actors, academia, and civil society to amplify impact."
    },
    {
      title: "Monitoring, Learning & Adaptation",
      icon: <Lightbulb className="w-6 h-6 text-blue-700" />,
      text: "We track outcomes, learn continuously, and refine our approaches to ensure relevance and sustainability."
    }
  ];

  const methodologyItems = [
    "Capacity Building and Mentoring",
    "Research and Insights",
    "Media Engagement",
    "Policy Development and Advocacy",
    "Innovation",
    "Partnership, Co-Creation and Community-Driven Design",
    "Volunteering Services",
    "Job Placement & Career Opportunities"
  ];

  const feeInclusions = [
    "Provision of Course Venue, Materials, Facilitation, & Tea Breaks",
    "5 Days Face-to-Face Workshop Sessions",
    "Online/Virtual Learning Support",
    "Access to Post-Training Support from GMI Consultants"
  ];

  return (
    <>
      
      <section className="pt-40 pb-28 bg-cover bg-center relative text-white" style={{ backgroundImage: `url(${hero})` }}>
        <div className="absolute inset-0 bg-black/60" />
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="relative max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Approach & Methodology</h1>
          <p className="text-lg md:text-xl">Evidence-based, inclusive, and impact-driven solutions for youth development.</p>
        </motion.div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-blue-100 p-8 rounded-2xl shadow-sm flex items-start gap-4"
            >
              <div className="p-3 bg-white rounded-lg shadow-sm">{step.icon}</div>
              <div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-700 leading-relaxed">{step.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Training*/}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Training Methodology</h2>
            <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
              Our programs are delivered through a hybrid model. We combine <strong>in-class face-to-face interactions</strong> using 
              lectures, interactive techniques, and video clips with a robust <strong>online virtual interface</strong>. 
              Participants also embark on guided tours and exposure visits to real-world business locations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: <Presentation />, label: "Face-to-Face" },
              { icon: <Video />, label: "Video Debriefs" },
              { icon: <Globe />, label: "Virtual Learning" },
              { icon: <MapPin />, label: "Guided Tours" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl text-center shadow-sm flex flex-col items-center">
                <div className="text-blue-600 mb-3">{item.icon}</div>
                <span className="font-semibold">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Strategic Pillars */}
          <div className="bg-blue-900 text-white p-10 rounded-3xl">
            <h3 className="text-2xl font-bold mb-8 text-center uppercase tracking-wide">Our Strategic Pillars</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {methodologyItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white/10 p-4 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-blue-300 shrink-0" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fees Section */}
      <section className="py-20 bg-white border-t">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white border-2 border-blue-100 rounded-3xl overflow-hidden shadow-xl">
            <div className="bg-blue-600 p-8 text-center text-white">
              <h2 className="text-2xl font-bold mb-2">Program Investment</h2>
              <div className="text-4xl font-black">₦ 450,000</div>
              <p className="opacity-90 mt-2">Per Training Program</p>
            </div>
            <div className="p-8 md:p-12">
              <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
                <Briefcase className="text-blue-600" />
                This proposed fee covers:
              </h4>
              <ul className="space-y-4">
                {feeInclusions.map((text, i) => (
                  <li key={i} className="flex items-start gap-4 text-gray-700">
                    <div className="mt-1 bg-green-100 p-1 rounded-full">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}