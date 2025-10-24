// src/pages/InsightDetails.jsx
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { insightsData } from "../data/insightsData";

const InsightDetails = () => {
  const { slug } = useParams();
  const insight = insightsData.find((s) => s.slug === slug);

  if (!insight) {
    return (
      <div className="min-h-screen bg-black text-gray-200">
        <Navbar />
        <section className="min-h-[60vh] flex items-center justify-center p-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-lime-400 mb-4">
              Insight Not Found
            </h1>
            <p className="text-gray-400 mb-6">
              The insight you are looking for does not exist.
            </p>
            <Link
              to="/insights"
              className="inline-block bg-lime-500 hover:bg-lime-600 text-white px-5 py-2 rounded-full"
            >
              Back to Insights
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  // split into paragraphs at double-newline (keeps headings like Markdown-style)
  const blocks = insight.content.trim().split(/\n\n+/).filter(Boolean);

  return (
    <section className="bg-black text-gray-200 min-h-screen">
      <Navbar />

      {/* Hero */}
      <header className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src={insight.images[0]}
          alt={insight.title}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-20 text-center px-6">
          <span className="inline-block text-sm font-semibold text-lime-400 bg-black/40 px-3 py-1 rounded-full mb-4">
            {insight.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mt-4 max-w-4xl mx-auto leading-tight">
            {insight.title}
          </h1>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-6 md:px-12 py-16">
        <article className="prose prose-invert max-w-none text-gray-200">
          {blocks.map((block, i) => {
            // if block starts with Markdown-like heading (### or **), render as heading
            if (/^###\s+/.test(block)) {
              return <h3 key={i}>{block.replace(/^###\s+/, "")}</h3>;
            }
            if (/^\*\*(.+)\*\*/.test(block)) {
              const text = block.replace(/^\*\*(.+)\*\*/, "$1");
              return <h3 key={i}>{text}</h3>;
            }
            return <p key={i}>{block}</p>;
          })}
        </article>

        {/* Supporting images (if any) */}
        {insight.images.length > 1 && (
          <div className="grid grid-cols-1 gap-6 mt-10 mb-10">
            {insight.images.slice(1).map((img, idx) => (
              <div key={idx} className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={img}
                  alt={`${insight.title} supporting ${idx + 1}`}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        )}

        {/* Related insights */}
        <section className="mt-14">
          <h3 className="text-2xl font-bold text-white mb-6">
            Related Insights
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {insight.related.map((relatedSlug) => {
              const related = insightsData.find((s) => s.slug === relatedSlug);
              if (!related) return null;
              return (
                <Link
                  key={related.slug}
                  to={`/insights/${related.slug}`}
                  className="group bg-white rounded-2xl p-4 shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="overflow-hidden rounded-md">
                    <img
                      src={related.images[0]}
                      alt={related.title}
                      className="w-full h-36 object-cover rounded-md group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <h4 className="mt-4 font-semibold text-gray-900">
                    {related.title}
                  </h4>
                  <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                    {related.excerpt}
                  </p>
                </Link>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </section>
  );
};

export default InsightDetails;
