export  function Testimonials() {
    return (
      <section className="bg-secondary-500 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary-600 mb-8">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-primary-600 italic">"This is a testimonial. It's a great one!"</p>
              <h3 className="text-primary-600 font-bold mt-4">Jane Doe</h3>
              <p className="text-primary-400">CEO, CompanyName</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-primary-600 italic">"This is a testimonial. It's a great one!"</p>
              <h3 className="text-primary-600 font-bold mt-4">Jane Doe</h3>
              <p className="text-primary-400">CEO, CompanyName</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-primary-600 italic">"This is a testimonial. It's a great one!"</p>
              <h3 className="text-primary-600 font-bold mt-4">Jane Doe</h3>
              <p className="text-primary-400">CEO, CompanyName</p>
            </div>
            {/* Repeat for more testimonials */}
          </div>
        </div>
      </section>
    );
  }
  