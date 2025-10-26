import { useEffect, useRef } from "react";
import ts1 from "../../assets/ts-1.jpg";
import ts2 from "../../assets/ts-2.jpg";
import ts3 from "../../assets/ts-3.jpg";
import ts4 from "../../assets/ts-4.jpg";
import ts6 from "../../assets/ts-6.jpg";
import ts8 from "../../assets/ts-8.jpg";
import ts9 from "../../assets/ts-9.jpg";

const cards = [
  {
    id: 1,
    title: "Cloud Solutions",
    text: "Simplify your cloud journey with optimized and secure cloud architectures.",
    image: ts1,
    color: "from-lime-600 to-lime-800",
  },
  {
    id: 2,
    title: "Cybersecurity Solutions",
    text: "Comprehensive protection with Zero Trust network and endpoint security.",
    image: ts2,
    color: "from-gray-800 to-gray-900",
  },
  {
    id: 3,
    title: "Enterprise AI Solutions & Integration",
    text: "AI-driven intelligence to automate processes and improve decisions.",
    image: ts3,
    color: "from-green-700 to-green-900",
  },
  {
    id: 4,
    title: "Data Analytics",
    text: "Transform raw data into actionable insights with advanced analytics tools.",
    image: ts4,
    color: "from-emerald-700 to-emerald-900",
  },
  {
    id: 5,
    title: "IT Infrastructure",
    text: "Scalable, reliable, and high-performance infrastructure modernization.",
    image: ts6,
    color: "from-cyan-700 to-cyan-900",
  },
  {
    id: 6,
    title: "Cloud Security",
    text: "Protect workloads and applications running in the cloud environment.",
    image: ts8,
    color: "from-teal-700 to-teal-900",
  },
  {
    id: 7,
    title: "IoT Solutions",
    text: "Connect, monitor, and manage devices securely at scale with IoT systems.",
    image: ts9,
    color: "from-green-800 to-green-950",
  },
];

const TechnologySolutions = () => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const container = containerRef.current;
    if (!container) return;

    // Clone cards for seamless loop
    const originalCards = Array.from(container.children);
    originalCards.forEach((card) => {
      const clone = card.cloneNode(true);
      container.appendChild(clone);
    });

    if (prefersReducedMotion) return;

    let scrollPosition = 0;
    let totalWidth = 0;
    let isPaused = false;

    // Calculate total width dynamically based on actual card widths
    const calculateWidth = () => {
      const firstCard = container.children[0];
      if (firstCard) {
        const cardWidth = firstCard.offsetWidth;
        const gap = 24; // gap-6 = 24px
        totalWidth = (cardWidth + gap) * cards.length;
      }
    };

    calculateWidth();

    // Recalculate on resize
    const handleResize = () => {
      calculateWidth();
    };
    window.addEventListener("resize", handleResize);

    const animate = () => {
      if (!isPaused && totalWidth > 0) {
        scrollPosition += 0.5;
        if (scrollPosition >= totalWidth) {
          scrollPosition = 0;
        }
        container.style.transform = `translateX(-${scrollPosition}px)`;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    // Pause on hover
    const handleMouseEnter = () => {
      isPaused = true;
    };
    const handleMouseLeave = () => {
      isPaused = false;
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section
      id="technology-solutions"
      className="w-full bg-linear-to-b from-gray-950 via-black to-gray-950 text-white py-20 md:py-28 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Our Technology <span className="text-lime-500">Solutions</span>
        </h2>
        <p className="mt-4 text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
          We deliver innovative, secure, and scalable technology solutions that
          help organizations stay protected and competitive in a rapidly
          evolving digital world. From cybersecurity to AI integration, our team
          simplifies complex IT challenges—empowering you to focus on what
          matters most: growth and innovation.
        </p>
      </div>

      {/* Continuous Scroll Carousel */}
      <div className="relative">
        <div
          ref={containerRef}
          className="flex gap-6"
          style={{ willChange: "transform" }}
        >
          {cards.map((card) => (
            <div
              key={`card-${card.id}-${card.title}`}
              className={`group min-w-[300px] md:min-w-[360px] rounded-2xl bg-linear-to-br ${card.color} p-6 transition-all duration-500 hover:scale-[1.05]`}
            >
              <div className="relative overflow-hidden rounded-xl mb-5">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-2xl font-bold mt-9 mb-3 group-hover:text-lime-400 transition-colors duration-300">
                {card.title}
              </h3>
              <p className="text-gray-200 mb-6 leading-relaxed min-h-12">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySolutions;
