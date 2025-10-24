// src/components/WhyChooseCrabCross.jsx
import serverImg from "../../assets/why-choose-crabcross.jpg";

const WhyChooseCrabCross = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left image */}
        <div className="w-full lg:w-1/2">
          <div className="relative group">
            <div className="absolute -inset-1 bg-linear-to-br from-lime-400 to-lime-600 rounded-2xl opacity-40 group-hover:opacity-50 blur-lg transition-opacity duration-500" />
            <img
              src={serverImg}
              alt="Secure Cloud Server"
              className="relative w-full h-full object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute top-5 left-5 bg-lime-600 text-white font-semibold px-5 py-2 rounded-lg shadow-md z-10">
              Why Choose CrabCross Technologies?
            </div>
          </div>
        </div>

        {/* Right content */}
        <div className="lg:w-1/2 fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
            A Proven Partner in{" "}
            <span className="text-lime-500">Cybersecurity & IT Innovation</span>
          </h2>

          <ul className="space-y-4 mb-8 text-gray-300 text-sm leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 rounded-full bg-lime-500 shrink-0"></span>
              Backed by years of expertise helping businesses secure, modernize,
              and scale across sectors including finance, education, and digital
              commerce.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 rounded-full bg-lime-500 shrink-0"></span>
              A multidisciplinary team of certified cybersecurity specialists
              and cloud engineers dedicated to delivering robust, scalable, and
              compliant IT solutions.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 rounded-full bg-lime-500 shrink-0"></span>
              Proven success in securing critical systems and improving
              operational resilience with measurable business outcomes.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 rounded-full bg-lime-500 shrink-0"></span>
              Strong partnerships with global technology innovators such as AWS,
              Microsoft, and Fortinet—ensuring cutting-edge and future-ready
              solutions.
            </li>
          </ul>

          <a
            href="/Crab-Cross-Technology-company-profile.pdf"
            download="CrabCross_Company_Profile.pdf"
            className=" px-6 py-3 bg-lime-500 hover:bg-lime-600 text-white rounded-full font-semibold transition-colors"
          >
            Download Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseCrabCross;
