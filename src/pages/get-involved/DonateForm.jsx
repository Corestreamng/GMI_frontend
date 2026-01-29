import { useState } from "react";
import { motion } from "framer-motion";
import { page, fadeUp, stagger } from "../../animations/variants";

export default function DonateForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    amount: "",
    currency: "NGN",
    purpose: "General Donation",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handlePayment = () => {
    if (!form.email || !form.amount || !form.name) {
      alert("Please fill all required fields");
      return;
    }

    const handler = window.PaystackPop.setup({
      key: "pk_test_51a9c1d0xxxxxxxxxxxxxxxx", //  PUBLIC KEY
      email: form.email,
      amount: Number(form.amount) * 100,
      currency: form.currency,
      ref: new Date().getTime().toString(),
      metadata: {
        custom_fields: [
          {
            display_name: "Donor Name",
            variable_name: "donor_name",
            value: form.name,
          },
          {
            display_name: "Purpose",
            variable_name: "donation_purpose",
            value: form.purpose,
          },
        ],
      },
      callback: function (response) {
        console.log("Payment successful:", response);
        alert("Thank you! Your donation was successful.");
        // send response to backend for verification
      },
      onClose: function () {
        alert("Payment cancelled");
      },
    });

    handler.openIframe();
  };

  return (
    <motion.main
      variants={page}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pt-28 pb-24 bg-gray-50"
    >
      <div className="max-w-3xl mx-auto px-6">
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.h1
            variants={fadeUp}
            className="text-4xl font-bold text-blue-800 mb-10 text-center"
          >
            Make a Donation
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="bg-white p-8 rounded-2xl shadow-lg space-y-6"
          >
            <input
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3"
              required
            />

            <input
              name="email"
              type="email"
              placeholder="Email Address"
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3"
              required
            />

            <div className="grid md:grid-cols-2 gap-4">
              <input
                name="amount"
                type="number"
                placeholder="Donation Amount"
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
                required
              />

              <select
                name="currency"
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
              >
                <option value="NGN">NGN</option>
                <option value="USD">USD</option>
                <option value="GBP">GBP</option>
              </select>
            </div>

            <select
              name="purpose"
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3"
            >
              <option>General Donation</option>
              <option>Graduate Employability Program (GEP)</option>
              <option>Student Leadership & Entrepreneurship (SLEP)</option>
              <option>Climate Program</option>
              <option>Policy Advocacy</option>
            </select>

            <button
              onClick={handlePayment}
              className="w-full bg-blue-900 text-white py-4 rounded-xl font-semibold hover:bg-blue-800/90 transition"
            >
              Proceed to Payment
            </button>

            <p className="text-xs text-gray-500 text-center">
              Secured by Paystack 🔒
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.main>
  );
}
