import Link from "next/link";

// components/CTASection.js
export  function CTA() {
    return (
      <section className="shadow-md border bg-secondary-600 text-black py-12 md:m-10 m-5">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Business?</h2>
          <p className="mb-8">Get in touch with us today and start transforming your business with our software solutions.</p>
          <Link className="primary-button" href="/contact">Contact Us</Link>
        </div>
      </section>
    );
  }
  