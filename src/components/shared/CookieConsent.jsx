// src/components/shared/CookieConsent.jsx
import { useState, useEffect } from "react";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check localStorage to see if user already made a choice
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const handleDeny = () => {
    localStorage.setItem("cookieConsent", "denied");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 bg-black/90 text-gray-200 p-4 md:p-6 border-t border-white/10 z-50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm leading-relaxed text-center md:text-left">
          We use cookies to enhance your browsing experience, analyze site
          traffic, and improve our services. You can choose to accept or decline
          our use of cookies. Read our{" "}
          <a href="/privacy" className="text-lime-400 hover:underline">
            Privacy Policy
          </a>{" "}
          for more details.
        </p>

        <div className="flex gap-3">
          <button
            onClick={handleDeny}
            className="cursor-pointer px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors text-sm"
          >
            Deny
          </button>
          <button
            onClick={handleAccept}
            className="cursor-pointer px-4 py-2 rounded-full bg-lime-500 hover:bg-lime-600 text-white font-semibold text-sm transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
