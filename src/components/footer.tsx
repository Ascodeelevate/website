import Link from "next/link";

export  function Footer() {
    return (
      <footer className="bg-primary-600 text-white py-8 px-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div>
            <h3 className="font-bold mb-4">About</h3>
            <p>Ascodeelevate Solution specializes in teaching various modern technical skills and building software product for business...</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Navigation</h3>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/#services">Services</Link></li>
              <li><Link href="/products">Products</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <p>Email: ascodeelevate@gmail.com</p>
            <p>Phone: +2349034557339</p>
          </div>
        </div>
        <div className="text-center mt-8">&copy; 2024 AscodeElevate Solution Limited. All rights reserved.</div>
      </footer>
    );
  }
  