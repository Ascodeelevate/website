import { ZoomInOnScroll } from "./zoom-animation";

// components/ServicesSection.js
export const ServicesSection = () => {
  const services = [
    {
      name: "Software Development",
      description:
        "We offer tailored web and mobile software solutions designed to meet the specific needs of your business, from custom applications to scalable platforms.",
      icon: "💻",
    },
    {
      name: "IT Training",
      description:
        "Our comprehensive IT training programs cover a wide range of topics, from basic computer skills to advanced software development techniques, ensuring your team stays ahead in the tech world.",
      icon: "📚",
    },
    {
      name: "Digital Marketing",
      description:
        "We provide effective digital marketing strategies that include SEO, content marketing, social media management, and analytics to enhance your online visibility and drive growth.",
      icon: "📈",
    },
    {
      name: "Branding",
      description:
        "Our branding services focus on creating strong and impactful brand identities through logo design, brand messaging, and visual elements to make your business stand out.",
      icon: "🏷️",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900" id="services">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Our Services
        </h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-12">
          Discover the wide range of services we offer to help your business
          thrive.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ZoomInOnScroll  key={index}>
            <div   
              className="rounded-lg animate-zoom-in border p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center group"
            >
              <div className="flex justify-center items-center text-4xl mr-4">
                {service.icon}
              </div>

              <div className="text-left text-black">
                <h3 className="text-xl font-bold">{service.name}</h3>
                <p className="mb-4 text-black">{service.description}</p>
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
