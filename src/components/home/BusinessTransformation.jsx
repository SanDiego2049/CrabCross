// src/components/BusinessTransformation.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const BusinessTransformation = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".fade-up"),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="business-transformation"
      className="bg-white text-black py-20 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14 fade-up">
          <p className="text-gray-500 text-sm tracking-wide mb-1">
            Services We Deliver
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-gray-900 leading-tight">
            Our <span className="text-lime-600">Business Transformation</span>{" "}
            Services
          </h2>
          <div className="bg-lime-50 border-l-4 border-lime-500 max-w-2xl mx-auto mt-6 p-4 text-gray-700 text-sm leading-relaxed rounded-md">
            At CrabCross Technologies, we help organizations evolve through
            secure, data-driven, and scalable technology transformation. From
            strategic consulting to cybersecurity-led modernization, we empower
            businesses to thrive confidently in an ever-changing digital world.
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 fade-up">
          {/* Advisory Services */}
          <div className="bg-black text-white rounded-xl p-8 hover:scale-[1.02] transition-transform duration-300 border border-gray-800">
            <h3 className="text-lg font-semibold mb-4">
              Advisory Services & Training
            </h3>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Navigate complex cybersecurity and IT decisions with expert
              guidance from CrabCross consultants. We align technology
              strategies with your goals, mitigate risk, and build a culture of
              resilience through training and mentorship.
            </p>
            <ul className="text-sm space-y-1 text-lime-400">
              <li>• Strategic IT & Security Planning</li>
              <li>• Technology & Compliance Assessments</li>
              <li>• Cyber Risk Management</li>
              <li>• Employee Cyber Awareness Training</li>
            </ul>
          </div>

          {/* Managed Services */}
          <div className="bg-black text-white rounded-xl p-8 hover:scale-[1.02] transition-transform duration-300 border border-gray-800">
            <h3 className="text-lg font-semibold mb-4">Managed Services</h3>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              We provide end-to-end IT management designed for efficiency,
              uptime, and protection. From monitoring infrastructure to securing
              endpoints, our managed services keep your operations running
              safely and smoothly.
            </p>
            <ul className="text-sm space-y-1 text-lime-400">
              <li>• IT Infrastructure & Cloud Support</li>
              <li>• Managed Security & Threat Detection</li>
              <li>• Network Optimization</li>
              <li>• 24/7 Monitoring & Incident Response</li>
            </ul>
          </div>

          {/* Digital Transformation */}
          <div className="bg-black text-white rounded-xl p-8 hover:scale-[1.02] transition-transform duration-300 border border-gray-800 md:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">
              Digital Transformation
            </h3>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              We modernize legacy systems and drive secure cloud, AI, and
              automation adoption — helping your business become more agile,
              data-driven, and customer-focused in a secure environment.
            </p>
            <ul className="text-sm space-y-1 text-lime-400">
              <li>• Cloud Migration & Integration</li>
              <li>• AI-Powered Process Automation</li>
              <li>• Cybersecurity Enhancements</li>
              <li>• Customer Experience Optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessTransformation;
