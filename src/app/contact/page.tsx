export default function ContactUs() {
  return (
    <div className="max-w-xl mx-auto p-8 min-h-screen bg-white justify-center flex flex-col text-black">
      <h1 className="text-3xl font-bold mb-6 ">Contact Us</h1>
      <p className="text-lg mb-4 ">
        We&apos;d love to hear from you! Here&apos;s how you can reach us:
      </p>

      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold ">Email</h2>
          <p className="text-lg ">
            <a href="mailto:ascodeelevate@gmail.com">ascodeelevate@gmail.com</a>
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold ">Phone</h2>
          <p className="text-lg ">
            <a href="tel:+2348109774285">+234 8109774285</a>
          </p>
          <p className="text-lg ">
            <a href="tel:+2349034557339">+234 9034557339</a>
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold ">Address</h2>
          <p className="text-lg ">Abuja & Ilorin, Nigeria</p>
        </div>
      </div>
    </div>
  );
}
