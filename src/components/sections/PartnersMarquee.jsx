import partner1 from "../../assets/images/partners/partner1.jpg";
import partner2 from "../../assets/images/partners/partner2.jpg";
import partner3 from "../../assets/images/partners/partner3.jpg";
import partner4 from "../../assets/images/partners/partner4.jpg";
import partner5 from "../../assets/images/partners/partner5.jpg";
import partner6 from "../../assets/images/partners/partner6.jpg";
import partner7 from "../../assets/images/partners/partner7.jpg";

const partners = [
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
  partner7,
];

export default function PartnersMarquee() {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-950">
          Partners & Sponsors
        </h2>
        <p className="text-gray-600 mt-2">
          Organizations supporting our mission across Africa
        </p>
      </div>

      
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-marquee gap-16">
          {/* Duplicate logos for seamless loop */}
          {[...partners, ...partners].map((logo, index) => (
            <div key={index} className="flex items-center">
              <img
                src={logo}
                alt="Partner Logo"
                className="h-16 md:h-20 object-contain hover:grayscale-0 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
