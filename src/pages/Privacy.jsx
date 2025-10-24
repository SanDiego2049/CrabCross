import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { Shield, Globe } from "lucide-react";

const Privacy = () => {
  return (
    <div className="bg-black text-gray-200 min-h-screen flex flex-col">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-20">
        <header className="text-center mb-12 mt-10 md:mt-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            This Privacy Policy explains how CrabCross Technologies collects,
            uses, discloses and protects personal data.
          </p>
        </header>

        <article className="prose prose-invert max-w-none text-gray-200">
          <section>
            <h2 className="md:text-xl font-bold mt-4 mb-2">1. Introduction</h2>
            <p>
              CrabCross Technologies ("we", "us", or "our") is committed to
              protecting your privacy. This policy describes the types of
              information we collect, how we use it, with whom we share it, and
              your rights.
            </p>
          </section>

          <section>
            <h2 className="md:text-xl font-bold mt-4 mb-2">2. Controller</h2>
            <p>
              The data controller for personal data collected via our website
              and services is CrabCross Technologies. Contact details are
              available on our Contact page.
            </p>
          </section>

          <section>
            <h2 className="md:text-xl font-bold mt-4 mb-2">
              3. Personal Data We Collect
            </h2>
            <ul>
              <li>
                <strong>Account and Contact Data:</strong> name, email, phone,
                company name, job title.
              </li>
              <li>
                <strong>Usage Data:</strong> pages visited, IP address, device
                and browser information, access times, and interactions.
              </li>
              <li>
                <strong>Transactional Data:</strong> billing or payment
                information (limited; sensitive payment details are processed by
                third-party providers).
              </li>
              <li>
                <strong>Communications:</strong> support requests, emails,
                feedback, and other correspondence.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="md:text-xl font-bold mt-4 mb-2">
              4. How We Use Personal Data
            </h2>
            <p>
              We use personal data to: provide and maintain Services; process
              transactions; communicate updates; provide support; analyze usage
              to improve services; and comply with legal obligations.
            </p>
          </section>

          <section>
            <h2 className="md:text-xl font-bold mt-4 mb-2">
              5. Legal Bases for Processing (where applicable)
            </h2>
            <p>
              Where required by law (e.g., GDPR), our legal bases include:
              performance of a contract, legitimate interests (service security,
              product improvement), consent (for marketing), and compliance with
              legal obligations.
            </p>
          </section>

          <section>
            <h2 className="md:text-xl font-bold mt-4 mb-2">
              6. Cookies &amp; Tracking
            </h2>
            <p>
              We use cookies and similar technologies to operate the website,
              support analytics, and personalize content. You may manage cookie
              preferences via your browser or any cookie consent mechanism we
              provide.
            </p>
          </section>

          <section>
            <h2 className="md:text-xl font-bold mt-4 mb-2">
              7. Sharing &amp; Disclosure
            </h2>
            <p>
              We may share personal data with: service providers (hosting,
              analytics, payment processors), professional advisors, law
              enforcement or regulators when required by law, and in the context
              of business transfers (e.g., merger or sale).
            </p>
          </section>

          <section>
            <h2 className="md:text-xl font-bold mt-4 mb-2">
              8. Third-Party Services
            </h2>
            <p>
              Third-party services integrated with our offering have their own
              privacy practices. Where they process personal data on our behalf,
              we require appropriate safeguards (data processing agreements).
            </p>
          </section>

          <section>
            <h2 className="md:text-xl font-bold mt-4 mb-2">
              9. International Data Transfers
            </h2>
            <p>
              Personal data may be transferred to and processed in countries
              outside your jurisdiction. We implement appropriate safeguards,
              such as standard contractual clauses or other lawful transfer
              mechanisms.
            </p>
          </section>

          <section>
            <h2 className="md:text-xl font-bold mt-4 mb-2">
              10. Data Retention
            </h2>
            <p>
              We retain personal data as long as necessary for the purposes for
              which it was collected, to comply with legal obligations, and to
              resolve disputes. Retention periods vary by data type.
            </p>
          </section>

          <section>
            <h2 className="md:text-xl font-bold mt-4 mb-2">11. Security</h2>
            <p>
              We implement administrative, technical and physical measures to
              protect personal data. While we strive to protect data, no
              security system is impenetrable. Report suspected breaches to us
              immediately.
            </p>
          </section>

          <section>
            <h2 className="md:text-xl font-bold mt-4 mb-2">12. Your Rights</h2>
            <p>
              Depending on your jurisdiction, you may have rights including:
              access, correction, deletion, restriction of processing, data
              portability, objection to processing, and withdrawing consent. To
              exercise rights, contact us using the details on our Contact page.
            </p>
          </section>

          <section>
            <h2 className="md:text-xl font-bold mt-4 mb-2">13. Children</h2>
            <p>
              Our Services are not directed at children under 13 (or the
              applicable minimum age). We do not knowingly collect personal data
              from children without parental consent.
            </p>
          </section>

          <section>
            <h2 className="md:text-xl font-bold mt-4 mb-2">
              14. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy. We will post changes and update
              the effective date. Significant changes will be communicated by
              email or on the website.
            </p>
          </section>

          <section>
            <h2 className="md:text-xl font-bold mt-4 mb-2">15. Contact</h2>
            <p>
              For privacy questions, data requests, or to lodge complaints,
              contact:{" "}
              <a href="/contact" className="text-lime-400 hover:underline">
                hello@crabcross.com
              </a>
              . We aim to respond promptly and cooperate with supervisory
              authorities where applicable.
            </p>
          </section>

          <footer className="mt-8 text-sm text-gray-500">
            <p>Effective date: {new Date().toLocaleDateString()}</p>
            <p>
              Note: This policy is a comprehensive template but should be
              reviewed by legal counsel and adjusted for specific laws (e.g.,
              GDPR, CCPA) that may apply to your customers.
            </p>
          </footer>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
