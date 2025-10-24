import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import BackToTop from "./components/shared/BackToTop";
import NotFound from "./pages/NotFound";
import CookieConsent from "./components/shared/CookieConsent";
import CookieModal from "./components/shared/CookieModal";
import Loading from "./components/shared/Loading";

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Insights = lazy(() => import("./pages/Insights"));
const InsightDetails = lazy(() => import("./pages/InsightDetails"));
const Contact = lazy(() => import("./pages/Contact"));
const Terms = lazy(() => import("./pages/Terms"));
const Privacy = lazy(() => import("./pages/Privacy"));

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Default services page */}
          <Route path="/services/*" element={<Services />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:slug" element={<InsightDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />

          {/* 404 page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <BackToTop />
      <CookieConsent />
      <CookieModal />
    </>
  );
}

export default App;
