import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { CheckCircle2, Users, MapPin, Briefcase, X } from "lucide-react";
import impactImage from "../../assets/images/impact.jpg"; 

export default function ImpactStorySection() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setShow(true),
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: <Users className="w-5 h-5" />, label: "Total Beneficiaries", value: "2,500+" },
    { icon: <MapPin className="w-5 h-5" />, label: "States Reached", value: "33" },
    { icon: <Briefcase className="w-5 h-5" />, label: "Direct Jobs Created", value: "70+" },
  ];

  return (
    <section ref={ref} className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* IMAGE SIDE */}
        <div
          className={`relative transition-all duration-1000
          ${show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
        >
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full -z-10" />
          <img
            src={impactImage}
            alt="GMI Impact"
            className="rounded-3xl shadow-2xl w-full aspect-[4/5] object-cover"
          />
          <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-8 rounded-2xl shadow-xl hidden lg:block">
            <p className="text-4xl font-bold">500+</p>
            <p className="text-sm opacity-90">Campus Entrepreneurs Trained</p>
          </div>
        </div>

        {/* CONTENT SIDE */}
        <div
          className={`transition-all duration-1000 delay-200
          ${show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
        >
          <h4 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">
            Our Track Record
          </h4>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
            Unlocking Potential: From Campus to Career
          </h2>

          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            Since our inception, <strong>Glowing Minds Initiatives</strong> has been at the forefront of 
            bridging the employability gap. We have successfully democratized impact, reaching 
            youth in <strong>33 out of 36 states</strong> in Nigeria through our innovative hybrid delivery model.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            {stats.map((stat, i) => (
              <div key={i} className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className="text-blue-600 mb-2">{stat.icon}</div>
                <div className="text-xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-xs text-slate-500 uppercase font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center bg-slate-900 text-white px-8 py-4 rounded-full font-bold
            hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-200"
          >
            Read Our Success Stories
          </button>
        </div>
      </div>

      {/* EXPANDABLE CONTENT MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-y-auto relative p-8 md:p-12"
          >
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 p-2 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-slate-500" />
            </button>

            <div className="space-y-12">
              <section>
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <CheckCircle2 className="text-blue-500" /> Real Lives, Real Change
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-blue-50 p-6 rounded-2xl">
                    <h4 className="font-bold text-blue-900 mb-2">Yusuf Amina's Journey</h4>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      After attending our Future Focus Conference, Amina was recommended for a Job Fair where she 
                      successfully secured a role with a leading ICT firm in Abuja.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-2xl">
                    <h4 className="font-bold text-blue-900 mb-2">Adaradohun Samson's Revamp</h4>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      Through our Graduate Employability Program (GEP 2.0), Samson optimized his professional 
                      identity, moving from minimal connections to a fully revamped LinkedIn profile that attracts 
                      opportunities.
                    </p>
                  </div>
                </div>
              </section>

              <section className="border-t pt-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Impact by the Numbers</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { n: "34", t: "Institutions Reached" },
                    { n: "510", t: "Graduate Entrepreneurs" },
                    { n: "50", t: "Volunteer Faculty" },
                    { n: "3", t: "Policies Influenced" }
                  ].map((item, i) => (
                    <div key={i} className="text-center p-4 bg-slate-50 rounded-xl">
                      <div className="text-2xl font-bold text-blue-600">{item.n}</div>
                      <div className="text-[10px] uppercase font-bold text-slate-500">{item.t}</div>
                    </div>
                  ))}
                </div>
              </section>

              <div className="bg-slate-900 text-white p-8 rounded-3xl text-center">
                <h4 className="text-xl font-bold mb-2">Be Part of the Story</h4>
                <p className="text-slate-400 mb-6">Our 2026-2030 strategic plan aims to scale these numbers across West Africa.</p>
                <button className="bg-blue-600 px-8 py-3 rounded-full font-bold">Join Our Community</button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}