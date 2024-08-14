export  function Footer() {
    return (
      <footer className="bg-primary-600 text-secondary-500 py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div>
            <h3 className="font-bold mb-4">About</h3>
            <p>Ascodeelevate Solution specializes in teaching various modern technical skills and building software product for business...</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Navigation</h3>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <p>Email: ascodeelevate@gmail.com</p>
            <p>Phone: +2349034557339</p>
          </div>
          {/* <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
           Add social media icons here 
            </div>
          </div> */}
        </div>
        <div className="text-center mt-8">&copy; 2024 AscodeElevate Solution. All rights reserved.</div>
      </footer>
    );
  }
  