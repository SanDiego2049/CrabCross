import { useParams, Link } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const Services = () => {
  const { "*": slug } = useParams();
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return (
      <section className="min-h-screen bg-black text-gray-200 flex flex-col items-center justify-center p-8">
        <h1 className="text-3xl md:text-5xl font-bold text-lime-400 mb-4">
          Service Not Found
        </h1>
        <p className="text-gray-400 mb-6 text-center max-w-md">
          The service you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="flex items-center gap-2 bg-lime-500 hover:bg-lime-600 text-white px-5 py-2 rounded-full font-medium transition-all"
        >
          <ArrowLeft size={18} /> Back to Home
        </Link>
      </section>
    );
  }

  // Split content into paragraphs for better formatting
  const paragraphs = service.content.split("\n\n").filter((p) => p.trim());

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-black text-gray-200">
        {/* Hero Banner */}
        <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black z-10" />
          <img
            src={service.images.hero}
            alt={service.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              {service.shortDesc}
            </p>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="max-w-7xl mx-auto py-20 px-6 md:px-12 lg:px-20">
          {/* Introduction */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-lime-400 mb-6">
              Overview
            </h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              {paragraphs.slice(0, 2).map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* First Supporting Image Section */}
          {service.images.supporting[0] && (
            <div className="mb-16">
              <div className="relative group rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute -inset-1 bg-gradient-to-br from-lime-400 to-lime-600 rounded-2xl opacity-20 group-hover:opacity-30 blur-lg transition-opacity duration-500" />
                <img
                  src={service.images.supporting[0]}
                  alt={`${service.title} - Detail 1`}
                  className="relative w-full h-[400px] md:h-[500px] object-cover rounded-2xl"
                />
              </div>
            </div>
          )}

          {/* Middle Content */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              {paragraphs.slice(2, 5).map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Two Column Image Grid */}
          {service.images.supporting[1] && service.images.supporting[2] && (
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="relative group rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute -inset-1 bg-gradient-to-br from-lime-400 to-lime-600 rounded-2xl opacity-20 group-hover:opacity-30 blur-lg transition-opacity duration-500" />
                <img
                  src={service.images.supporting[1]}
                  alt={`${service.title} - Detail 2`}
                  className="relative w-full h-[350px] object-cover rounded-2xl"
                />
              </div>
              <div className="relative group rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute -inset-1 bg-gradient-to-br from-lime-400 to-lime-600 rounded-2xl opacity-20 group-hover:opacity-30 blur-lg transition-opacity duration-500" />
                <img
                  src={service.images.supporting[2]}
                  alt={`${service.title} - Detail 3`}
                  className="relative w-full h-[350px] object-cover rounded-2xl"
                />
              </div>
            </div>
          )}

          {/* Remaining Content */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-lime-400 mb-6">
              Our Approach
            </h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              {paragraphs.slice(5).map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Key Benefits Section */}
          <div className="bg-gray-900/50 rounded-2xl p-8 md:p-12 mb-16 border border-gray-800">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              Why Choose CrabCross for {service.title}?
            </h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-lime-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Expert Team
                  </h4>
                  <p className="text-gray-400">
                    Certified professionals with deep industry expertise and
                    proven track records
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-lime-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Tailored Solutions
                  </h4>
                  <p className="text-gray-400">
                    Custom strategies designed specifically for your business
                    needs and goals
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-lime-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Proven Methodologies
                  </h4>
                  <p className="text-gray-400">
                    Industry best practices and frameworks that deliver
                    measurable results
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-lime-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Ongoing Support
                  </h4>
                  <p className="text-gray-400">
                    Continuous partnership and support throughout your
                    technology journey
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-lime-500/10 to-lime-600/10 rounded-2xl p-12 border border-lime-500/20">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how our {service.title.toLowerCase()} services can
              help transform your business and drive measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-block bg-lime-500 hover:bg-lime-600 text-white px-8 py-4 rounded-full font-semibold transition-all text-lg shadow-lg hover:shadow-xl"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Services;
