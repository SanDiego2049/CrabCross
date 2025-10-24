import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { insightsData } from "../../data/insightsData";

const InsightsSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const el = sectionRef.current;
    const cards = el.querySelectorAll(".insight-card");

    // Set initial states
    cards.forEach((card) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(30px)";
    });

    // Observe when section enters viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            cards.forEach((card, i) => {
              setTimeout(() => {
                card.style.transition =
                  "opacity 0.6s ease-out, transform 0.6s ease-out";
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
              }, i * 150);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-gray-100 py-16 md:py-24 px-6 md:px-12 lg:px-20"
      id="insights"
      aria-labelledby="insights-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12 md:mb-16">
          <p className="text-lime-500 text-sm md:text-base tracking-wider mb-3">
            CrabCross Insights
          </p>
          <h2
            id="insights-heading"
            className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
          >
            Stay ahead with industry knowledge
          </h2>
          <p className="mt-4 text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
            Expert insights on cybersecurity, threat protection, and
            infrastructure resilience
          </p>
        </header>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 md:mb-16">
          {insightsData.slice(0, 6).map((insight) => (
            <article
              key={insight.id}
              className="insight-card group bg-white rounded-3xl border-2 border-lime-500/30 hover:border-lime-500 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-2xl m-4">
                <img
                  src={insight.images[0]}
                  alt={`${insight.title} - CrabCross cybersecurity insight`}
                  className="w-full h-48 md:h-56 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-6 pt-2">
                <div className="mb-3">
                  <span className="inline-block text-xs font-semibold text-lime-700 bg-lime-100 px-3 py-1 rounded-full">
                    {insight.category}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-4 bg-gradient-to-r from-lime-500 to-lime-600 p-4 rounded-xl leading-tight">
                  {insight.title}
                </h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6 line-clamp-3">
                  {insight.excerpt}
                </p>

                <Link
                  to={`/insights/${insight.slug}`}
                  className="inline-flex items-center gap-2 text-sm md:text-base font-semibold text-gray-900 hover:text-lime-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 rounded"
                  aria-label={`Read more about ${insight.title}`}
                >
                  <span>Read More</span>
                  <span
                    className="group-hover:translate-x-1 transition-transform duration-300"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            to="/insights"
            className="inline-block px-10 py-3 bg-lime-500 hover:bg-lime-600 text-white font-semibold rounded-full transition-colors"
            aria-label="Visit CrabCross insights page for more cybersecurity articles"
          >
            Visit Insights
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
