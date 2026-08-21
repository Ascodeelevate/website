import Link from "next/link";

export function CTA() {
  return (
    <section
      id="cta"
      className="relative bg-gradient-to-r from-secondary-600 via-secondary-500 to-secondary-400 text-white py-16 shadow-lg"
    >
      <div className="absolute inset-0 bg-opacity-50 bg-black" />

      <div className="relative max-w-screen-xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Power Your School With Modern Software
        </h2>

        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Manage student results, school accounting, and computer-based
          examinations with reliable software solutions built by{" "}
          <span className="font-semibold">AS Code Elevate.</span>
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            className="primary-button"
            href="https://result-manager.ascodeelevate.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Result Manager
          </Link>

          <Link
            className="primary-button"
            href="https://acct.ascodeelevate.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            School Accounting
          </Link>

          <Link
            className="primary-button"
            href="https://cbt.ascodeelevate.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CBT Platform
          </Link>

          <Link className="primary-button-white" href="/contact">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
