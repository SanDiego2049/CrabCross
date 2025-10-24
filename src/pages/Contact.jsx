import { useState } from "react";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { Mail, Phone, MapPin } from "lucide-react";
import contact_us from "../assets/contact_us.jpeg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject:
            "New Contact Form Submission from CrabCross Technologies Website",
          from_name: "CrabCross Technologies Website",
          to: "k.olubanjo@crabcrosstech.com",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        console.error("Web3Forms error:", result);
        setStatus("error");
      }
    } catch (error) {
      console.error("Network error:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-black text-gray-200 min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[50vh] flex items-center justify-center">
        <img
          src={contact_us}
          alt="Contact Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <h1 className="relative text-4xl md:text-6xl font-bold text-white text-center px-4">
          Get in Touch with CrabCross Technologies
        </h1>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-6 py-16 gap-12">
        {/* Contact Form */}
        <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-lime-400 mb-6">
            Send Us a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col">
              <label className="mb-1 text-gray-600 font-semibold">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="p-3 rounded-xl bg-gray-100 text-gray-600 focus:outline-none focus:ring-2 focus:ring-lime-500"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-gray-600 font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="p-3 rounded-xl bg-gray-100 text-gray-600 focus:outline-none focus:ring-2 focus:ring-lime-500"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-gray-600 font-semibold">
                Message
              </label>
              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                required
                className="p-3 rounded-xl bg-gray-100 text-gray-600 focus:outline-none focus:ring-2 focus:ring-lime-500"
              ></textarea>
            </div>

            {status === "success" && (
              <div className="p-4 bg-green-100 text-green-700 rounded-xl">
                Thank you! Your message has been sent successfully. We'll get
                back to you soon.
              </div>
            )}

            {status === "error" && (
              <div className="p-4 bg-red-100 text-red-700 rounded-xl">
                Oops! Something went wrong. Please try again or email us
                directly at{" "}
                <a
                  href="mailto:k.olubanjo@crabcrosstech.com"
                  className="underline font-semibold"
                >
                  k.olubanjo@crabcrosstech.com
                </a>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-lime-500 hover:bg-lime-600 text-white px-6 py-3 rounded-full font-semibold transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Company Info */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-bold text-lime-400 mb-4">
            Contact Information
          </h2>
          <div className="flex items-center gap-4">
            <MapPin className="w-6 h-6 text-lime-400" />
            <p>32 Honorable Saheed Bankole Street, Ologolo, Lagos, Nigeria</p>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="w-6 h-6 text-lime-400" />
            <p>+234 803 353 2790</p>
          </div>
          <div className="flex items-center gap-4">
            <Mail className="w-6 h-6 text-lime-400" />
            <a className="underline" href="mailto:k.olubanjo@crabcrosstech.com">
              k.olubanjo@crabcrosstech.com
            </a>
          </div>
          <p className="text-gray-400 mt-6">
            We're here to answer any questions you may have. Reach out to us and
            we'll respond as soon as we can.
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
