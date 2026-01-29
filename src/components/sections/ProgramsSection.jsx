

import { useEffect, useRef, useState } from "react";

import program1 from "../../assets/images/programs/program1.jpg";
import program2 from "../../assets/images/programs/program2.jpg";
import program3 from "../../assets/images/programs/program3.jpg";

export default function ProgramsSection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const programs = [
    {
      title: "Youth Empowerment & Employability",
      image: program1,
      description:
        "Through vocational training, mentorship, and entrepreneurship development, we empower young people with the skills and confidence needed to thrive in today’s economy.",
    },
    {
      title: "Education & Digital Inclusion",
      image: program2,
      description:
        "We improve access to quality education and digital skills for underserved communities, ensuring no learner is left behind in the digital age.",
    },
    {
      title: "Community Development Initiatives",
      image: program3,
      description:
        "Our community-driven programs address climate advocacy, civic education, and leadership development to build resilient and sustainable communities.",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative bg-blue-800 py-20 overflow-hidden"
    >
      {/*shape*/}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          className="w-full h-16 fill-white"
        >
          <path d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Heading */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
            Our Programs
          </h2>
          <p className="text-gray-200">
            In a groundbreaking effort to uplift communities and foster youth
            empowerment, Glowing Minds Initiatives has impacted over 2,000
            beneficiaries across four states through education, skills
            development, and community-driven solutions.
          </p>
        </div>

        {/* Program cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-1000
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <img
                src={program.image}
                alt={program.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-950 mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {program.description}
                </p>

                <button className="mt-5 inline-block text-accent font-semibold hover:underline">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
