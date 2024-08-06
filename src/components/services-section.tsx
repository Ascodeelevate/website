// components/ServicesSection.js
export const ServicesSection = () => {
    const services = [
      {
        name: "Software Development",
        description: "Web, desktop and mobile software solutions tailored for businesses.",
        icon: "💻",
      },
      {
        name: "IT Training",
        description: "Comprehensive IT training programs to enhance your skills.",
        icon: "📚",
      },
      {
        name: "Digital Marketing",
        description: "Effective digital marketing strategies to boost your online presence.",
        icon: "📈",
      },
      {
        name: "Branding",
        description: "Building strong and impactful brands for your business.",
        icon: "🏷️",
      },
    ];
  
    return (
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-12">
            Discover the wide range of services we offer to help your business thrive.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
                 <div key={index} className="bg-secondary-600 hover:bg-primary-600 dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center group">
                 <div className="text-4xl text-blue-600 dark:text-blue-400 mr-4">
                   {service.icon}
                 </div>
                 <div className="text-left">
                   <h3 className="text-xl font-semibold text-primary-600 dark:text-white mb-2 group-hover:text-secondary-600">
                     {service.name}
                   </h3>
                   <p className="text-primary-600 dark:text-gray-300 mb-4 group-hover:text-secondary-600">
                     {service.description}
                   </p>
                   <a href="#read-more" className="text-primary-600 dark:text-blue-400 hover:underline  group-hover:text-secondary-600">
                     Read more &rarr;
                   </a>
                 </div>
               </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default ServicesSection;
  