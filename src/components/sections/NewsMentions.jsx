
import { useEffect, useRef, useState } from "react";

import guardian from "../../assets/images/news/guardian.png";
import punch from "../../assets/images/news/punch.png";
import vanguard from "../../assets/images/news/vanguard.png";
import businessday from "../../assets/images/news/businessday.png";
import thecable from "../../assets/images/news/thecable.png";
import unesco from "../../assets/images/news/unesco.png";
import Leadership from "../../assets/images/news/Leadership.png";
import MIT from "../../assets/images/news/MIT.png";
import BLUE from "../../assets/images/news/BLUE.png";

export default function NewsMentions() {
  const logos = [
    guardian,
    punch,
    vanguard,
    businessday,
    thecable,
    unesco,
    Leadership,
    MIT,
    BLUE,
  ];

  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`py-14 bg-gray-50 overflow-hidden transition-all duration-1000
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="max-w-7xl mx-auto px-4">
        
        <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-950 mb-10">
          GMI in the News
        </h2>

        {/* Marquee */}
        <div className="relative w-full overflow-hidden">
          <div
            className="
              flex items-center gap-20 whitespace-nowrap
              animate-marquee
              hover:[animation-play-state:paused]
            "
          >
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="Media Logo"
                className="h-14 md:h-20 object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
