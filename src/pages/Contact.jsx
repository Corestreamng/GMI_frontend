
import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

import PartnersMarquee from "../components/sections/PartnersMarquee";
import Footer from "../components/layout/Footer";

const Contact = () => {
  const contactDetails = {
    email: "info@glowingmindsinitiatives.org",
    phone: "08148451424",
    hours: "Mon-Fri 9:00AM - 5:00PM",
    hq: "Plot 404, Marcus Garvey Street, 5th Avenue, Gwarimpa, Abuja",
    nigerState:
      "Behind House No 30 Franklyn Street, PDP Quarters Suleja – Niger State.",
  };

  return (
    <motion.div
      className="flex flex-col min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      
      <section className="relative h-[60vh] flex items-center justify-center text-white">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80')`, // Replace with your image path
          }}
        >
          
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-6xl font-extrabold mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200"
          >
            We would be delighted to answer your questions and guide you toward the best cause to make a meaningful impact.
          </motion.p>
        </div>
      </section> 

      <main className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            <motion.div className="space-y-6">
              <AnimatedCard icon={<MapPin />} title="Head Office" detail={contactDetails.hq} />
              <AnimatedCard icon={<MapPin />} title="Niger State Office" detail={contactDetails.nigerState} />
              <AnimatedCard icon={<Phone />} title="Phone" detail={contactDetails.phone} />
              <AnimatedCard icon={<Mail />} title="Email" detail={contactDetails.email} />
              <AnimatedCard icon={<Clock />} title="Working Hours" detail={contactDetails.hours} />
            </motion.div>

            
            <motion.div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input placeholder="Full Name" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none" />
                <input placeholder="Email Address" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none" />
                <select className="md:col-span-2 w-full px-4 py-3 rounded-lg border border-gray-200">
                  <option>General Inquiry</option>
                  <option>Program Application</option>
                  <option>Partnership Proposal</option>
                </select>
                <textarea rows="5" className="md:col-span-2 w-full px-4 py-3 rounded-lg border border-gray-200" placeholder="How can we help you?"></textarea>
                <button type="submit" className="md:col-span-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition active:scale-95">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </main>

      
      <section className="w-full h-[450px] bg-gray-200 relative">
        <iframe
          title="Office Location"
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?q=Gwarimpa%20Abuja&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="hover:grayscale-0 transition-all duration-500"
        ></iframe>
      </section>

    
      <section className="relative py-24 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-fixed bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80')`, // Replace with your impact image
          }}
        >
          <div className="absolute inset-0 bg-black/80"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Your support can make a difference.</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hands with us to scale our reach and amplify our impact.
          </p>
          <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition">
            Get Involved Now
          </button>
        </div>
      </section>

      
      <motion.section className="bg-white py-16 border-t border-gray-100">
        <PartnersMarquee />
      </motion.section>

      <Footer />
    </motion.div>
  );
};

const AnimatedCard = ({ icon, title, detail }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    }}
    transition={{ duration: 0.4 }}
    className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md"
  >
    <div className="flex items-start gap-4">
      <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
        {React.cloneElement(icon, { size: 24 })}
      </div>
      <div>
        <h3 className="font-bold text-gray-900">{title}</h3>
        <p className="text-gray-600 text-sm mt-1">{detail}</p>
      </div>
    </div>
  </motion.div>
);

export default Contact;