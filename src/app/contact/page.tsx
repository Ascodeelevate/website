export default function ContactUs() {
  return (
    <div className="max-w-xl mx-auto p-8 min-h-screen bg-white justify-center flex flex-col ">
      <h1 className="text-3xl font-bold mb-6 text-primary-600">Contact Us</h1>
      <p className="text-lg mb-4 text-primary-400">
        We'd love to hear from you! Here's how you can reach us:
      </p>

      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold text-primary-600">Email</h2>
          <p className="text-lg text-secondary-600">
            <a href="mailto:ascodeelevate@gmail.com">ascodeelevate@gmail.com</a>
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-primary-600">Phone</h2>
          <p className="text-lg text-secondary-600">
            <a href="tel:+2348109774285">+234 8109774285</a>
          </p>
          <p className="text-lg text-secondary-600">
            <a href="tel:+2349034557339">+234 9034557339</a>
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-primary-600">Address</h2>
          <p className="text-lg text-secondary-600">Abuja & Ilorin, Nigeria</p>
        </div>
      </div>
    </div>
  );
}
