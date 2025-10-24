import Footer from "../components/shared/Footer";
import AboutDetails from "../components/about/AboutDetails";
import OurTeam from "../components/about/OurTeam";
import Navbar from "../components/shared/Navbar";
import Banner from "../components/about/Banner";
import Stats from "../components/about/Stats";

const About = () => {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Banner />
        <Stats />
        <AboutDetails />
        <OurTeam />
      </main>
      <Footer />
    </div>
  );
};

export default About;
