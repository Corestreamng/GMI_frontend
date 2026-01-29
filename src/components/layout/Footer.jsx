import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaHome,
  FaInfoCircle,
  FaUsers,
  FaBullseye,
  FaBriefcase,
  FaBlog,
  FaEnvelopeOpenText,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.png";

import cert1 from "../../assets/images/certificates/cert1.png";
import cert2 from "../../assets/images/certificates/cert2.png";
import cert3 from "../../assets/images/certificates/cert3.png";
import cert4 from "../../assets/images/certificates/cert4.png";
import cert5 from "../../assets/images/certificates/cert5.png";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16 grid gap-12 md:grid-cols-3">
        {/* LEFT COLUMN */}
        <div>
          <img src={logo} alt="GMI Logo" className="h-20 mb-6" />

          <p className="text-sm text-gray-200 leading-relaxed">
            Glowing Minds Initiatives for Human Development is a non-profit
            organization established in 2018 to address youth unemployment and
            unemployability through entrepreneurship, education, leadership
            development, climate advocacy, and civic engagement.
          </p>

          {/* CERTIFICATES */}
          <div className="mt-6 grid grid-cols-3 sm:grid-cols-5 gap-4 items-center">
            {[cert1, cert2, cert3, cert4, cert5].map((img, i) => (
              <div
                key={i}
                className="flex items-center justify-center bg-white rounded-md p-2"
              >
                <img
                  src={img}
                  alt="Certificate"
                  className="h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* MIDDLE COLUMN – QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-3 text-sm text-gray-200">
            <li className="flex items-center gap-3">
              <FaHome className="text-accent" />
              <Link to="/pages/home" className="hover:text-accent">Home</Link>
            </li>

            <li className="flex items-center gap-3">
              <FaInfoCircle className="text-accent" />
              <Link to="/about/identity" className="hover:text-accent">About</Link>
            </li>

            <li className="flex items-center gap-3">
              <FaUsers className="text-accent" />
              <Link to="/pages/who-we-are" className="hover:text-accent">
                Who We Are
              </Link>
            </li>

            <li className="flex items-center gap-3">
              <FaUsers className="text-accent" />
              <Link to="/about/team" className="hover:text-accent">
                Our Team
              </Link>
            </li>

            <li className="flex items-center gap-3">
              <FaBullseye className="text-accent" />
              <Link to="/what-we-do/sdg-alignment" className="hover:text-accent">
                SDGs Focus
              </Link>
            </li>

            <li className="flex items-center gap-3">
              <FaBriefcase className="text-accent" />
              <Link to="/pages/careers" className="hover:text-accent">
                Careers
              </Link>
            </li>

            <li className="flex items-center gap-3">
              <FaBlog className="text-accent" />
              <Link to="/blog" className="hover:text-accent">
                Blog
              </Link>
            </li>

            <li className="flex items-center gap-3">
              <FaEnvelopeOpenText className="text-accent" />
              <Link to="/contact" className="hover:text-accent">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* RIGHT COLUMN – CONTACT */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>

          <ul className="space-y-4 text-sm text-gray-200">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-accent" />
              <span>
                Behind House No 30, Franklin Street PDP Quarters,
                Suleja – Niger State.
              </span>
            </li>

            <li className="flex items-center gap-3">
              <FaEnvelope className="text-accent" />
              <a
                href="mailto:info@glowingmindsinitiatives.org"
                className="hover:text-accent"
              >
                info@glowingmindsinitiatives.org
              </a>
            </li>

            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-accent" />
              <a href="tel:+2348148451424" className="hover:text-accent">
                +234 814 845 1424
              </a>
            </li>
          </ul>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-6">
            {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-accent transition"
                >
                  <Icon />
                </a>
              )
            )}
          </div>
        </div>
      </div>

      {/* BOTTOM FOOTER */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-sm text-gray-300">
          © 2026 GMI. All rights reserved | Powered by CorestreamNG
        </div>
      </div>
    </footer>
  );
}
