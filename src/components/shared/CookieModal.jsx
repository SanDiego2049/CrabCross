import { useEffect, useState } from "react";
import { X } from "lucide-react";

const CookieModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true, // always required
    analytics: false,
    marketing: false,
  });

  // Listen for the custom event from Footer
  useEffect(() => {
    const openModal = () => setIsOpen(true);
    window.addEventListener("openCookieSettings", openModal);
    return () => window.removeEventListener("openCookieSettings", openModal);
  }, []);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("cookiePreferences");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === "object") setPreferences(parsed);
      }
    } catch (error) {
      console.error("Invalid cookie preferences found:", error);
    }
  }, []);

  // Save preferences (you could later connect this to localStorage or cookies)
  const handleSave = () => {
    localStorage.setItem("cookiePreferences", JSON.stringify(preferences));
    setIsOpen(false);
  };

  // Close modal
  const handleClose = () => setIsOpen(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white text-gray-900 rounded-2xl max-w-lg w-full shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center p-5 border-b border-gray-200">
          <h2 className="text-xl font-semibold">Cookie Preferences</h2>
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700 transition"
          >
            <X size={22} />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 space-y-5">
          <p className="text-sm text-gray-600">
            We use cookies to improve your experience. You can manage your
            preferences below. Essential cookies are always enabled.
          </p>

          <div className="space-y-4">
            {/* Essential */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={preferences.essential}
                disabled
                className="mt-1 w-5 h-5 accent-lime-600 cursor-not-allowed"
              />
              <div>
                <p className="font-medium">Essential Cookies</p>
                <p className="text-sm text-gray-600">
                  Required for core website functionality such as security,
                  network management, and accessibility.
                </p>
              </div>
            </div>

            {/* Analytics */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={preferences.analytics}
                onChange={(e) =>
                  setPreferences((prev) => ({
                    ...prev,
                    analytics: e.target.checked,
                  }))
                }
                className="mt-1 w-5 h-5 accent-lime-600"
              />
              <div>
                <p className="font-medium">Analytics Cookies</p>
                <p className="text-sm text-gray-600">
                  Help us understand how visitors interact with our website by
                  collecting and reporting information anonymously.
                </p>
              </div>
            </div>

            {/* Marketing */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={preferences.marketing}
                onChange={(e) =>
                  setPreferences((prev) => ({
                    ...prev,
                    marketing: e.target.checked,
                  }))
                }
                className="mt-1 w-5 h-5 accent-lime-600"
              />
              <div>
                <p className="font-medium">Marketing Cookies</p>
                <p className="text-sm text-gray-600">
                  Used to deliver personalized ads and measure the effectiveness
                  of marketing campaigns.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 border-t border-gray-200 flex justify-end gap-3">
          <button
            onClick={handleClose}
            className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 rounded-md bg-lime-600 hover:bg-lime-700 text-white font-medium transition"
          >
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieModal;
