import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-primary-600 text-white py-10 px-6 md:px-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3 className="font-bold text-lg mb-4">AS Code Elevate</h3>

          <p className="text-sm leading-6 text-white/90">
            AS Code Elevate is a software development company building reliable
            and modern digital solutions for schools, businesses, and
            organizations. We specialize in custom software, web applications,
            mobile applications, and school management systems.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-bold text-lg mb-4">Navigation</h3>

          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>

            <li>
              <Link href="/#services" className="hover:underline">
                Services
              </Link>
            </li>

            <li>
              <Link href="/products" className="hover:underline">
                Products
              </Link>
            </li>

            <li>
              <Link href="/about" className="hover:underline">
                About Us
              </Link>
            </li>

            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Our Software */}
        <div>
          <h3 className="font-bold text-lg mb-4">Our Software</h3>

          <ul className="space-y-2">
            <li>
              <a
                href="https://result-manager.ascodeelevate.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Result Manager
              </a>
            </li>

            <li>
              <a
                href="https://acct.ascodeelevate.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                School Accounting
              </a>
            </li>

            <li>
              <a
                href="https://cbt.ascodeelevate.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                CBT Platform
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-lg mb-4">Contact Us</h3>

          <div className="space-y-2 text-sm">
            <p>
              Email:{" "}
              <a
                href="mailto:ascodeelevate@gmail.com"
                className="hover:underline"
              >
                ascodeelevate@gmail.com
              </a>
            </p>

            <p>
              WhatsApp:{" "}
              <a
                href="https://wa.me/2348109774285"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                +234 810 977 4285
              </a>
            </p>

            <p>
              Phone:{" "}
              <a href="tel:+2349034557339" className="hover:underline">
                +234 903 455 7339
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm text-white/80">
        &copy; {new Date().getFullYear()} AS Code Elevate Solution Limited. All
        rights reserved.
      </div>
    </footer>
  );
}
