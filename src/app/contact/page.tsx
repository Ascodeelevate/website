import Link from "next/link";

export default function ContactUs() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Let&apos;s Build Something Great
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Whether you need a school management system, a business application,
            a website, a mobile app, or a custom software solution, our team is
            ready to discuss your project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-1">Email</h3>
                <a
                  href="mailto:ascodeelevate@gmail.com"
                  className="text-lg text-secondary-400 hover:underline"
                >
                  ascodeelevate@gmail.com
                </a>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-1">WhatsApp</h3>
                <a
                  href="https://wa.me/2348109774285"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-secondary-400 hover:underline"
                >
                  +234 810 977 4285
                </a>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-1">Phone</h3>

                <div className="space-y-1">
                  <a
                    href="tel:+2348109774285"
                    className="block text-lg text-secondary-400 hover:underline"
                  >
                    +234 810 977 4285
                  </a>

                  <a
                    href="tel:+2349034557339"
                    className="block text-lg text-secondary-400 hover:underline"
                  >
                    +234 903 455 7339
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-1">Locations</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Abuja & Ilorin, Nigeria
                </p>
              </div>
            </div>
          </div>

          {/* Software Platforms */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Explore Our Software</h2>

            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Explore some of our software solutions designed to help schools
              and organizations work more efficiently.
            </p>

            <div className="space-y-4">
              <a
                href="https://result-manager.ascodeelevate.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg border border-gray-200 dark:border-gray-700 p-4 hover:shadow-md transition"
              >
                <h3 className="font-bold text-lg">Result Manager</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Student results, attendance, assignments, and performance
                  management.
                </p>
              </a>

              <a
                href="https://acct.ascodeelevate.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg border border-gray-200 dark:border-gray-700 p-4 hover:shadow-md transition"
              >
                <h3 className="font-bold text-lg">School Accounting System</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Manage fees, payments, expenses, accounts, and school
                  financial records.
                </p>
              </a>

              <a
                href="https://cbt.ascodeelevate.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg border border-gray-200 dark:border-gray-700 p-4 hover:shadow-md transition"
              >
                <h3 className="font-bold text-lg">CBT Platform</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Modern computer-based examination solutions for schools and
                  students.
                </p>
              </a>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 rounded-xl bg-secondary-600 text-white p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Need Custom Software?
          </h2>

          <p className="text-black mb-6 max-w-2xl mx-auto">
            Tell us what you want to build and we&apos;ll help turn your idea
            into a reliable software solution.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/2348109774285"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Chat on WhatsApp
            </a>

            <Link
              href="/products"
              className="border text-black border-black px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
