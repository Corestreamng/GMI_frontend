
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { page, fadeUp, stagger } from "../../animations/variants";
import donateImg from "../../assets/images/GetInvolved/donate.jpg";
import Footer from "../../components/layout/Footer";


export default function Donate() {
  const navigate = useNavigate();

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
          
          {/* Page Title */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl font-bold text-blue-800 mb-8"
          >
            Invest in the Future of African Youth
          </motion.h1>

          {/* Banner */}
          <motion.img
            variants={fadeUp}
            src={donateImg}
            className="w-full h-72 object-cover rounded-xl shadow mb-10"
            alt="Support GMI"
          />

          {/* Content */}
          <motion.div
            variants={fadeUp}
            className="max-w-4xl text-gray-700 space-y-6"
          >
            <p className="text-lg">
              Your support helps <strong>Glowing Minds Initiatives</strong> address
              youth unemployment, skills mismatch, and limited access to green
              opportunities. Every donation empowers young people—especially
              women and persons with disabilities—to thrive economically and
              socially.
            </p>

            <h3 className="text-2xl font-semibold text-blue-800">
              How Your Donation Makes an Impact:
            </h3>

            <ul className="grid md:grid-cols-2 gap-4">
              <li className="bg-gray-50 p-4 rounded-lg shadow-sm border-l-4 border-blue-800">
                <strong>Employability & Skills:</strong> Supporting GEP to help
                graduates secure jobs.
              </li>
              <li className="bg-gray-50 p-4 rounded-lg shadow-sm border-l-4 border-blue-800">
                <strong>Campus Entrepreneurship:</strong> Funding student startups
                through SLEP.
              </li>
              <li className="bg-gray-50 p-4 rounded-lg shadow-sm border-l-4 border-blue-800">
                <strong>Climate Action:</strong> Empowering green entrepreneurs.
              </li>
              <li className="bg-gray-50 p-4 rounded-lg shadow-sm border-l-4 border-blue-800">
                <strong>Policy Advocacy:</strong> Strengthening youth-led policy
                innovation.
              </li>
            </ul>

            {/* Bank Details */}
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 my-8">
              <h3 className="text-xl font-bold text-blue-800 mb-4">
                Bank Transfer Details
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div>
                  <p className="font-bold">Naira (NGN)</p>
                  <p>Acc No: 1225514013</p>
                </div>
                <div>
                  <p className="font-bold">Dollar (USD)</p>
                  <p>Acc No: 5074954635</p>
                </div>
                <div>
                  <p className="font-bold">Pounds (GBP)</p>
                  <p>Acc No: 5061518109</p>
                </div>
              </div>
            </div>

            <p className="italic text-sm text-gray-500">
              GMI operates a transparent and accountable financial management
              system. All funds are managed in line with approved budgets and
              internal controls.
            </p>
          </motion.div>

          {/* Donate Now Button (REDIRECT) */}
          <motion.div variants={fadeUp} className="mt-16 text-center">
            <button
              onClick={() => navigate("/get-involved/donate/form")}
              className="px-10 py-4 bg-blue-800 text-white rounded-xl font-semibold hover:bg-blue-900 transition"
            >
              Donate Now
            </button>
          </motion.div>

        </motion.div>
      </div>
    
    </motion.main>
    <Footer />
    </>
    
  );
}
