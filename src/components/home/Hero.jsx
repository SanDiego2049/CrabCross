import { useEffect, useRef, useState } from "react";

import bg1 from "../../assets/hero-1.jpg";
import bg2 from "../../assets/hero-2.jpg";
import bg3 from "../../assets/hero-3.jpg";
import Navbar from "../shared/Navbar";

const Hero = () => {
  const slides = [
    {
      id: "slide-1",
      eyebrow: "Future-Ready Cybersecurity",
      title: "Protecting Your Business Infrastructure From Attacks",
      description:
        "CrabCross Technologies delivers proactive protection and resilient infrastructure management so companies can operate securely and focus on growth.",
      cta: { text: "Discover Security Solutions", href: "#services" },
      bg: bg1,
    },
    {
      id: "slide-2",
      eyebrow: "Managed Infrastructure",
      title: "Maintain Resilient Systems 24/7",
      description:
        "We monitor, harden, and respond — ensuring uptime and compliance across cloud and on-prem environments.",
      cta: { text: "Explore Managed Services", href: "#managed" },
      bg: bg2,
    },
    {
      id: "slide-3",
      eyebrow: "Enterprise Defence",
      title: "Detect, Respond, and Recover Rapidly",
      description:
        "Our incident response and remediation pipeline limits blast radius and reduces recovery time after breaches.",
      cta: { text: "See Incident Response", href: "#incident-response" },
      bg: bg3,
    },
  ];

  const [index, setIndex] = useState(0);
  const bgRefs = useRef([]);
  const textRef = useRef(null);
  const animTimeoutRef = useRef(null);

  // Accessibility: respect prefers-reduced-motion
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Initialize backgrounds
  useEffect(() => {
    bgRefs.current.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = i === index ? "1" : "0";
      el.style.transition = prefersReducedMotion
        ? "none"
        : "opacity 0.8s ease-in-out";
    });
  }, []);

  // Handle slide transitions
  useEffect(() => {
    // Clear any pending animations
    if (animTimeoutRef.current) {
      clearTimeout(animTimeoutRef.current);
    }

    // Update backgrounds
    bgRefs.current.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = i === index ? "1" : "0";
    });

    if (prefersReducedMotion) {
      return;
    }

    // Animate text elements
    const textNodes = textRef.current
      ? Array.from(textRef.current.querySelectorAll("[data-anim]"))
      : [];

    // Reset text elements
    textNodes.forEach((node, i) => {
      node.style.opacity = "0";
      node.style.transform = "translateY(12px)";
      node.style.transition = "none";
    });

    // Trigger reflow
    void textRef.current?.offsetHeight;

    // Animate in with stagger
    animTimeoutRef.current = setTimeout(() => {
      textNodes.forEach((node, i) => {
        node.style.transition =
          "opacity 0.7s ease-out, transform 0.7s ease-out";
        node.style.transitionDelay = `${i * 0.08}s`;
        node.style.opacity = "1";
        node.style.transform = "translateY(0)";
      });
    }, 50);

    return () => {
      if (animTimeoutRef.current) {
        clearTimeout(animTimeoutRef.current);
      }
    };
  }, [index, prefersReducedMotion]);

  // Pagination keyboard handler
  const onKeyNav = (e, i) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIndex(i);
    }
  };

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <header
      className="relative min-h-screen overflow-hidden bg-gray-900"
      aria-label="CrabCross hero"
    >
      {/* Navbar */}
      <Navbar />

      {/* Background images container */}
      <div className="absolute inset-0 z-0">
        {slides.map((s, i) => (
          <div
            key={s.id}
            ref={(el) => (bgRefs.current[i] = el)}
            className="absolute inset-0 w-full h-full"
            style={{ opacity: 0 }}
          >
            <img
              src={s.bg}
              className="w-full h-full object-cover"
              alt=""
              aria-hidden="true"
              loading={i === 0 ? "eager" : "lazy"}
            />
            {/* Gradient overlay for text contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
          </div>
        ))}
      </div>

      {/* Content container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-6 lg:px-12 h-screen flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-20 md:pt-24">
          {/* Left text column */}
          <div className="lg:col-span-7 text-white">
            <div
              ref={textRef}
              role="region"
              aria-live="polite"
              aria-atomic="true"
            >
              <p
                data-anim
                className="text-lime-400 font-semibold text-base md:text-lg lg:text-xl uppercase tracking-wide"
              >
                {slides[index].eyebrow}
              </p>
              <h1
                data-anim
                className="mt-3 md:mt-4 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight"
              >
                {slides[index].title}
              </h1>
              <p
                data-anim
                className="mt-4 md:mt-6 text-sm md:text-base lg:text-lg text-gray-200 max-w-2xl leading-relaxed"
              >
                {slides[index].description}
              </p>
              {/* <div data-anim className="mt-6 md:mt-8">
                <a
                  href={slides[index].cta.href}
                  className="inline-flex items-center gap-2 md:gap-3 rounded-full border-2 border-lime-400 px-5 md:px-6 py-2.5 md:py-3 text-sm md:text-base text-lime-400 font-semibold hover:bg-lime-400 hover:text-black transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-offset-2 focus:ring-offset-black"
                >
                  <span>{slides[index].cta.text}</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div> */}
            </div>
          </div>

          {/* Right pagination / progress */}
          <div className="lg:col-span-5 flex justify-start lg:justify-end">
            <div className="flex items-center gap-4 md:gap-6">
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => setIndex(i)}
                  onKeyDown={(e) => onKeyNav(e, i)}
                  aria-label={`Go to slide ${i + 1}: ${s.eyebrow}`}
                  aria-current={i === index ? "true" : "false"}
                  className={`group flex items-center gap-2 md:gap-3 cursor-pointer rounded px-2 py-1 transition-all ${
                    i === index
                      ? "text-lime-400"
                      : "text-gray-400 hover:text-gray-200"
                  }`}
                >
                  <span className="text-lg md:text-xl font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`h-0.5 transition-all duration-300 ${
                      i === index
                        ? "w-12 md:w-16 bg-lime-400"
                        : "w-8 md:w-12 bg-gray-500"
                    }`}
                    aria-hidden="true"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 z-30">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-xs md:text-sm text-gray-300 hidden md:block">
            <span className="text-lime-400 font-semibold">
              {String(index + 1).padStart(2, "0")}
            </span>
            {" / "}
            <span>{String(slides.length).padStart(2, "0")}</span>
          </div>
          <div className="flex gap-2 md:hidden">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === index ? "w-8 bg-lime-400" : "w-4 bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
