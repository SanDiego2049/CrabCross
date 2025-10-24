import bannerImage from "../../assets/banner_image.jpg";

const Banner = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white py-32 px-6 text-center"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-7xl font-extrabold mt-15 mb-3">
          We Build the Future of Tech
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          Empowering businesses with cutting-edge solutions that drive
          innovation and growth.
        </p>
      </div>
    </section>
  );
};

export default Banner;
