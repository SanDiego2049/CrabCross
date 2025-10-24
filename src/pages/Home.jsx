import BusinessTransformation from "../components/home/BusinessTransformation";
import Hero from "../components/home/Hero";
import TechnologySolutions from "../components/home/TechnologySolutions";
import WhoWeAre from "../components/home/WhoWeAre";
import WhyChooseCrabCross from "../components/home/WhyChooseCrabCross";
import InsightsSection from "../components/home/InsightsSection";
import Footer from "../components/shared/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <main>
        <WhoWeAre />
        <TechnologySolutions />
        <BusinessTransformation />
        <WhyChooseCrabCross />
        <InsightsSection />
      </main>
      <Footer />
    </>
  );
};

export default Home;
