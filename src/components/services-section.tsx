import { ZoomInOnScroll } from "./zoom-animation";

// components/ServicesSection.js
export const ServicesSection = () => {
  const services = [
    {
      name: "Custom Software Development",
      description:
        "We design and develop custom software solutions tailored to solve real business problems, from simple management systems to large-scale web applications.",
      icon: "💻",
    },
    {
      name: "School Management Systems",
      description:
        "We build modern software solutions for schools, including result management, CBT examination systems, accounting and financial management systems, and other digital tools.",
      icon: "🏫",
    },
    {
      name: "Web & Mobile App Development",
      description:
        "We create fast, responsive, and user-friendly websites and mobile applications that help businesses connect with their customers and operate more efficiently.",
      icon: "📱",
    },
    {
      name: "Business & Enterprise Solutions",
      description:
        "We develop scalable digital systems that help organizations automate processes, manage data, improve productivity, and grow efficiently.",
      icon: "🚀",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900" id="services">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Our Services
        </h2>

        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-12">
          We build reliable software solutions that help schools, businesses,
          and organizations solve problems and operate more efficiently.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ZoomInOnScroll key={index}>
              <div className="rounded-lg animate-zoom-in border p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center group">
                <div className="flex justify-center items-center text-4xl mr-4">
                  {service.icon}
                </div>

                <div className="text-left text-black dark:text-white">
                  <h3 className="text-xl font-bold">{service.name}</h3>
                  <p className="mb-4 text-black dark:text-gray-300">
                    {service.description}
                  </p>
                </div>
              </div>
            </ZoomInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
