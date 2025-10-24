import { Zap, Star, Shield, Users, RefreshCw, Heart } from "lucide-react";

const coreValues = [
  {
    title: "Integrity",
    description:
      "Building trust through transparency, accountability, and ethical practices.",
    icon: <Shield className="w-8 h-8 text-lime-500 mb-2" />,
  },
  {
    title: "Innovation",
    description:
      "Continuously pushing the boundaries of technology to deliver advanced solutions.",
    icon: <Zap className="w-8 h-8 text-lime-500 mb-2" />,
  },
  {
    title: "Excellence",
    description:
      "Maintaining the highest standards in service delivery and customer satisfaction.",
    icon: <Star className="w-8 h-8 text-lime-500 mb-2" />,
  },
  {
    title: "Collaboration",
    description:
      "Partnering with clients, employees, and global tech leaders to achieve shared goals.",
    icon: <Users className="w-8 h-8 text-lime-500 mb-2" />,
  },
  {
    title: "Adaptability",
    description:
      "Responding to the dynamic needs of the IT landscape with agility and creativity.",
    icon: <RefreshCw className="w-8 h-8 text-lime-500 mb-2" />,
  },
  {
    title: "Customer-Centricity",
    description:
      "Placing clients at the heart of everything we do to deliver outstanding experiences and solutions.",
    icon: <Heart className="w-8 h-8 text-lime-500 mb-2" />,
  },
];

const AboutDetails = () => {
  return (
    <section className="pt-20 space-y-16">
      {/* Mission & Vision */}
      <div className="px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:scale-105 hover:bg-lime-50 transition-all">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">MISSION</h3>
          <p className="text-gray-700 leading-relaxed">
            To design, build, and deliver cutting-edge IT solutions that empower
            businesses to harness their full potential. By leveraging deep
            industry expertise, flexible delivery models, and robust
            partnerships, we ensure our clients’ IT investments are reliable,
            scalable, and secure.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:scale-105 hover:bg-lime-50 transition-all">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">VISION</h3>
          <p className="text-gray-700 leading-relaxed">
            To be the leading provider of innovative IT infrastructure and
            security solutions, enabling businesses in West Africa and beyond to
            achieve operational excellence and digital transformation.
          </p>
        </div>
      </div>

      {/* Core Values + Company Culture Black Band */}
      <div className="px-6 w-full bg-black py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          {/* Core Values */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-12 text-center">
              Our Core Values
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {coreValues.map((value) => (
                <div
                  key={value.title}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:scale-105 hover:bg-lime-50 transition-all text-center"
                >
                  {value.icon}
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h4>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Company Culture */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {" "}
              Company Culture at CrabCross{" "}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {" "}
              CrabCross fosters a culture centered on customer-centricity,
              continuous learning, and team empowerment. We prioritize solving
              client challenges, encouraging professional growth, and creating a
              supportive environment for our employees. Driven by innovation and
              a commitment to community impact, we aim to advance technology
              while uplifting the local tech ecosystem and contributing to
              societal progress.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDetails;
