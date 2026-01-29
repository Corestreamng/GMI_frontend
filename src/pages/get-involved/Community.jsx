
import { motion } from "framer-motion";
import { 
  Users, 
  Network, 
  Zap, 
  Globe, 
  MessagesSquare, 
  Lightbulb 
} from "lucide-react";
import { page, fadeUp, stagger } from "../../animations/variants";
import communityImg from "../../assets/images/GetInvolved/community.jpg";
import Footer from "../../components/layout/Footer";

export default function Community() {
  return (
    <>
<motion.main variants={page} initial="initial" animate="animate" exit="exit" className="pt-28 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.h1 variants={fadeUp} className="text-4xl font-bold text-primary mb-8">
            Join the GMI Community
          </motion.h1>

          <motion.img 
            variants={fadeUp} 
            src={communityImg} 
            className="w-full h-80 object-cover rounded-2xl shadow-lg mb-12" 
            alt="GMI Community Gathering" 
          />

          <motion.div variants={fadeUp} className="text-gray-700 max-w-4xl space-y-8">
            <div className="prose prose-lg">
              <p>
                Becoming a part of the Glowing Minds Initiatives (GMI) community means joining a vibrant network of changemakers[cite: 1530]. 
                With a digital footprint reaching <strong>33 out of 36 states in Nigeria</strong>, we offer a hybrid platform where location is no barrier to collaboration, mentorship, and collective impact[cite: 1922, 1923].
              </p>
            </div>

            {/* Community Benefits Grid */}
            <div className="grid md:grid-cols-2 gap-6 mt-10">
              <div className="flex gap-4 p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                <Network className="text-primary w-10 h-10 shrink-0" />
                <div>
                  <h3 className="font-bold text-lg text-primary">Global Networking</h3>
                  <p className="text-sm">Connect with peers, industry experts, and ecosystem enablers from both the private and development sectors[cite: 1640].</p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                <MessagesSquare className="text-primary w-10 h-10 shrink-0" />
                <div>
                  <h3 className="font-bold text-lg text-primary">Peer Learning</h3>
                  <p className="text-sm">Participate in collaborative platforms that facilitate peer-to-peer knowledge sharing and mentorship[cite: 1530].</p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                <Zap className="text-primary w-10 h-10 shrink-0" />
                <div>
                  <h3 className="font-bold text-lg text-primary">Exclusive Access</h3>
                  <p className="text-sm">Get priority access to our annual <strong>Future Focus Conference</strong> and specialized training workshops[cite: 1640].</p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                <Lightbulb className="text-primary w-10 h-10 shrink-0" />
                <div>
                  <h3 className="font-bold text-lg text-primary">Innovation Exposure</h3>
                  <p className="text-sm">Engage with the <strong>Glowing Minds Hub</strong>, an environment built to fuel productivity and groundbreaking excellence[cite: 1657, 1659].</p>
                </div>
              </div>
            </div>

            {/* Community Pillars Section */}
            <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10 mt-12">
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                <Users className="w-7 h-7" /> Why Our Community Matters
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Globe className="text-primary w-5 h-5 shrink-0 mt-1" />
                  <p className="text-sm">
                    <strong>Democratic Impact:</strong> We use digital innovation to ensure underserved youths in remote regions have equitable access to funding and leadership opportunities[cite: 1530, 1923].
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="text-primary w-5 h-5 shrink-0 mt-1" />
                  <p className="text-sm">
                    <strong>Self-Reliance:</strong> Our community is a springboard for young people to become co-creators of development solutions rather than just beneficiaries[cite: 1477, 1515].
                  </p>
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