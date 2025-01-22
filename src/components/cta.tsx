import Link from "next/link";

export function CTA() {
  return (
    <section id="cta" className="relative bg-gradient-to-r from-secondary-600 via-secondary-500 to-secondary-400 text-white py-16 my-10 shadow-lg">
      <div className="absolute inset-0 bg-opacity-50 bg-black" />
      <div className="relative max-w-screen-xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-4">
          Transform Results Management Today!
        </h2>
        <p className="text-lg mb-8">
          Simplify managing results, reduce errors, and boost productivity with 
          <span className="font-semibold"> Result Manager Software.</span> Take control now.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            className="primary-button"
            href="https://result-manager.ascodeelevate.com/"
            target="_blank"
          >
            Open App
          </Link>
          <Link
            className="primary-button-white"
            href="/contact"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
