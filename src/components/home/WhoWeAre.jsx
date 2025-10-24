import { useEffect, useRef } from "react";

import whoWeAre from "../../assets/who-are-we.jpg";
import { NavLink } from "react-router";

const WhoWeAre = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const el = sectionRef.current;
    const fadeUpElements = el.querySelectorAll(".fade-up");

    // Set initial states
    fadeUpElements.forEach((element) => {
      element.style.opacity = "0";
      element.style.transform = "translateY(50px)";
    });

    // Observe when section enters viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            fadeUpElements.forEach((element, i) => {
              setTimeout(() => {
                element.style.transition =
                  "opacity 0.8s ease-out, transform 0.8s ease-out";
                element.style.opacity = "1";
                element.style.transform = "translateY(0)";
              }, i * 200);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-gray-50 py-20 md:py-28 px-6 md:px-12 lg:px-20"
      id="who-we-are"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Image Section */}
        <div className="fade-up">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-lime-400 to-lime-600 rounded-2xl opacity-40 group-hover:opacity-50 blur-lg transition-opacity duration-500" />
            <img
              src={whoWeAre}
              alt="Who We Are - CrabCross"
              className="relative w-full rounded-2xl shadow-xl object-cover hover:shadow-2xl transition-shadow duration-300"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="space-y-6">
          <div className="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 leading-tight">
              Who We Are
            </h2>
            <div className="w-27 h-1 bg-lime-500 rounded-full mb-6" />
          </div>

          <div className="fade-up">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              CrabCross Technologies is a forward-thinking cybersecurity
              consulting firm dedicated to protecting digital ecosystems. We
              empower businesses with robust, adaptive, and proactive security
              strategies that align with the ever-evolving threat landscape.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our team combines deep technical expertise with strategic thinking
              to deliver comprehensive security solutions tailored to your
              business needs.
            </p>
          </div>

          <div className="fade-up pt-4">
            <NavLink
              to="/about"
              className="px-8 py-3.5 bg-lime-500 hover:bg-lime-600 text-white font-semibold rounded-full focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 cursor-pointer transition-colors"
            >
              <span>Discover More About Us</span>
              <span className="inline-block ml-2">→</span>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
