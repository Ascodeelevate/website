export const HeroSection = () => {
  return (
    <section
      className="relative py-20 bg-primary-400 h-[80vh] lg:h-[90vh] flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/01.jpg')", // Replace with the actual path to your image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-primary-400 opacity-90"></div>
      <div className="relative container mx-auto lg:px-6 px-8 lg:text-center space-y-3">
        <h1 className="mx-auto lg:max-w-[60%] md:max-w-[60%] lg:text-6xl text-4xl font-bold text-white dark:text-gray-300 mb-4">
          We are building software solutions to help.
        </h1>
        <div className="w-full flex justify-center">
          <p className="text-lg lg:text-center text-left md:max-w-[60%] md:text-xl text-gray-900 mb-8">
            We provide custom software development and ready-to-use software
            products tailored to meet diverse business needs.
          </p>
        </div>

        <div className="flex justify-center space-x-4">
          <a href="/products" className="primary-button-white">
            Ready Made Software
          </a>
        </div>
      </div>
    </section>
  );
};
