
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const DropdownArrow = () => <span className="ml-1 text-[10px]">▼</span>;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md text-gray-800" : "bg-blue-900 text-white"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
        
        <img
          src={logo}
          alt="Glowing Minds Initiatives Logo"
          className={`h-12 transition ${scrolled ? "" : "brightness-0 invert"}`}
        />

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-6 text-xs xl:text-sm font-medium">
          <NavItem to="/" text="Home" />

          <Dropdown
            title="About Us"
            open={openMenu === "about"}
            onOpen={() => setOpenMenu("about")}
            onClose={() => setOpenMenu(null)}
            items={[
              { label: "Our Identity & History", to: "/about/identity" },
              { label: "Why We Exist", to: "/about/why-we-exist" },
              { label: "Vision & Mission", to: "/about/vision-mission" },
              { label: "Our Team & Faculty", to: "/about/team" },
              { label: "Governance Structure", to: "/about/governance" },
            ]}
            arrow={<DropdownArrow />}
          />

          <Dropdown
            title="What We Do"
            open={openMenu === "whatwedo"}
            onOpen={() => setOpenMenu("whatwedo")}
            onClose={() => setOpenMenu(null)}
            items={[
              { label: "Thematic Areas", to: "/what-we-do/thematic-areas" },
              { label: "Approach & Methodology", to: "/what-we-do/approach-methodology" },
              { label: "Core Competencies", to: "/what-we-do/core-competencies" },
              { label: "SDG Alignment", to: "/what-we-do/sdg-alignment" },
            ]}
            arrow={<DropdownArrow />}
          />

          <Dropdown
            title="Programs & Innovation"
            open={openMenu === "programs"}
            onOpen={() => setOpenMenu("programs")}
            onClose={() => setOpenMenu(null)}
            items={[
              { label: "Graduate Employability (GEP)", to: "/programs/gep" },
              { label: "Student Entrepreneurship (SLEP)", to: "/programs/slep" },
              { label: "Project Umtazi", to: "/programs/umtazi" },
              { label: "Young Climate Entrepreneurs", to: "/programs/climate" },
              { label: "AI Transition Program", to: "/programs/ai" },
              { label: "Glowing Minds Policy Lab", to: "/programs/policy-lab" },
              { label: "Glowing Minds Hub (Suleja)", to: "/programs/hub" },
            ]}
            arrow={<DropdownArrow />}
          />

          <Dropdown
            title="Impact & Resources"
            open={openMenu === "impact"}  
            onOpen={() => setOpenMenu("impact")}
            onClose={() => setOpenMenu(null)}
            items={[
              { label: "Success Stories", to: "/impact/success-stories" },
              { label: "Knowledge Products", to: "/impact/knowledge-products" },
              { label: "GMI in the News", to: "/impact/news" },
              { label: "Annual Events (FFC)", to: "/impact/events" },
              { label: "Awards & Recognitions", to: "/impact/awards" },
            ]}
            arrow={<DropdownArrow />}
          />

          <Dropdown
            title="Transparency"
            open={openMenu === "transparency"}
            onOpen={() => setOpenMenu("transparency")}
            onClose={() => setOpenMenu(null)}
            items={[
              { label: "Legal & Compliance", to: "/transparency/legal" },
              { label: "Organizational Policies", to: "/transparency/policies" },
              { label: "GMI Partnerships", to: "/transparency/partnerships" },
              { label: "Financial Highlights", to: "/transparency/financials" },
            ]}
            arrow={<DropdownArrow />}
          />

          <Dropdown
            title="Get Involved"
            open={openMenu === "getinvolved"}
            onOpen={() => setOpenMenu("getinvolved")}
            onClose={() => setOpenMenu(null)}
            items={[
              { label: "Donate", to: "/get-involved/donate" },
              { label: "Volunteer/Mentor", to: "/get-involved/volunteer" },
              { label: "Advocate", to: "/get-involved/advocate" },
              { label: "Request SIWES/NYSC", to: "/get-involved/siwes" },
              { label: "Hire Talent", to: "/get-involved/hire-talent" },
              { label: "Join Community", to: "/get-involved/community" },
            ]}
            arrow={<DropdownArrow />}
          />

          <NavItem to="/contact" text="Contact" />
          
          <NavItem to="/blog" text="Blog" />
        </ul>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-2xl" onClick={() => setMobileOpen(!mobileOpen)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white text-gray-800 px-6 pb-6 space-y-4">
          <Link to="/" className="block" onClick={() => setMobileOpen(false)}>
            Home
          </Link>

          
          <div>
            <p className="font-semibold mb-2">About Us</p>
            <div className="space-y-2 pl-4">
              <Link to="/about/identity" onClick={() => setMobileOpen(false)} className="block">
                Our Identity & History
              </Link>
              
            </div>
          </div>

          <Link to="/contact" className="block" onClick={() => setMobileOpen(false)}>
            Contact
          </Link>
          
        
          <Link to="/blog" className="block" onClick={() => setMobileOpen(false)}>
            Blog
          </Link>
        </div>
      )}
    </nav>
  );
}

// NavItem Component
function NavItem({ to, text }) {
  return (
    <li>
      <Link
        to={to}
        className="cursor-pointer hover:text-blue-600 transition-colors whitespace-nowrap"
      >
        {text}
      </Link>
    </li>
  );
}

// Dropdown Component
function Dropdown({ title, items, open, onOpen, onClose, arrow }) {
  return (
    <li
      className="relative cursor-pointer py-2"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <span className="hover:text-blue-600 transition-colors flex items-center whitespace-nowrap">
        {title} {arrow}
      </span>

      {open && (
        <div className="absolute top-full left-0 bg-white text-gray-800 rounded-md shadow-xl min-w-[260px] py-3 border-t-2 border-blue-600">
          {items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="block px-5 py-2.5 hover:bg-blue-50 hover:text-blue-700 transition text-sm"
              onClick={onClose}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </li>
  );
}