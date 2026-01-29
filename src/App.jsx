
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

// CORE
import Home from "./pages/Home";
import ContactPage from "./pages/Contact";
import BlogList from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";

// ABOUT
import Identity from "./pages/about/Identity";
import WhyWeExist from "./pages/about/WhyWeExist";
import VisionMission from "./pages/about/VisionMission";
import Team from "./pages/about/Team";
import Governance from "./pages/about/Governance";

// WHAT WE DO
import ThematicAreas from "./pages/what-we-do/ThematicAreas";
import ApproachMethodology from "./pages/what-we-do/ApproachMethodology";
import CoreCompetencies from "./pages/what-we-do/CoreCompetencies";
import SDGAlignment from "./pages/what-we-do/SDGAlignment";

// PROGRAMS
import GEP from "./pages/Programs/GEP";
import SLEP from "./pages/Programs/SLEP";
import ProjectUmtazi from "./pages/Programs/ProjectUmtazi";
import YoungClimateEntrepreneurs from "./pages/Programs/YoungClimateEntrepreneurs";
import AITransition from "./pages/Programs/AITransition";
import PolicyLab from "./pages/Programs/PolicyLab";
import GMIHub from "./pages/Programs/GMIHub";

// IMPACT & RESOURCES
import SuccessStories from "./pages/impact/success-stories";
import KnowledgeProducts from "./pages/impact/Knowledge-Products";
import GMINews from "./pages/impact/news";
import AnnualEvents from "./pages/impact/Events";
import Awards from "./pages/impact/Awards";

// TRANSPARENCY
import LegalCompliance from "./pages/Transparency/LegalCompliance";
import Policies from "./pages/Transparency/OrganizationalPolicies";
import Partnerships from "./pages/Transparency/Partnerships";
import FinancialHighlights from "./pages/Transparency/FinancialHighlights";

// GET INVOLVED
import Donate from "./pages/get-involved/Donate";
import Volunteer from "./pages/get-involved/Volunteer";
import Advocate from "./pages/get-involved/Advocate";
import SIWES from "./pages/get-involved/SiwesNysc";
import HireTalent from "./pages/get-involved/HireTalent";
import Community from "./pages/get-involved/Community";
import DonateForm from "./pages/get-involved/DonateForm";


export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPost />} />

        {/* ABOUT */}
        <Route path="/about/identity" element={<Identity />} />
        <Route path="/about/why-we-exist" element={<WhyWeExist />} />
        <Route path="/about/vision-mission" element={<VisionMission />} />
        <Route path="/about/team" element={<Team />} />
        <Route path="/about/governance" element={<Governance />} />

        {/* WHAT WE DO */}
        <Route path="/what-we-do/thematic-areas" element={<ThematicAreas />} />
        <Route path="/what-we-do/approach-methodology" element={<ApproachMethodology />} />
        <Route path="/what-we-do/core-competencies" element={<CoreCompetencies />} />
        <Route path="/what-we-do/sdg-alignment" element={<SDGAlignment />} />

        {/* PROGRAMS */}
        <Route path="/programs/gep" element={<GEP />} />
        <Route path="/programs/slep" element={<SLEP />} />
        <Route path="/programs/umtazi" element={<ProjectUmtazi />} />
        <Route path="/programs/climate" element={<YoungClimateEntrepreneurs />} />
        <Route path="/programs/ai" element={<AITransition />} />
        <Route path="/programs/policy-lab" element={<PolicyLab />} />
        <Route path="/programs/hub" element={<GMIHub />} />

        {/* IMPACT */}
        <Route path="/impact/success-stories" element={<SuccessStories />} />
        <Route path="/impact/knowledge-products" element={<KnowledgeProducts />} />
        <Route path="/impact/news" element={<GMINews />} />
        <Route path="/impact/events" element={<AnnualEvents />} />
        <Route path="/impact/awards" element={<Awards />} />

        {/* TRANSPARENCY */}
        <Route path="/transparency/legal" element={<LegalCompliance />} />
        <Route path="/transparency/policies" element={<Policies />} />
        <Route path="/transparency/partnerships" element={<Partnerships />} />
        <Route path="/transparency/financials" element={<FinancialHighlights />} />

        {/* GET INVOLVED */}
        <Route path="/get-involved/donate" element={<Donate />} />
        <Route path="/get-involved/volunteer" element={<Volunteer />} />
        <Route path="/get-involved/advocate" element={<Advocate />} />
        <Route path="/get-involved/siwes" element={<SIWES />} />
        <Route path="/get-involved/hire-talent" element={<HireTalent />} />
        <Route path="/get-involved/community" element={<Community />} />
        <Route path="/get-involved/donate/form" element={<DonateForm />} />

      </Routes>
    </Router>
  );
}
