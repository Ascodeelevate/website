import React from "react";
import { ZoomInOnScroll } from "./zoom-animation";

interface Client {
  name: string;
  logo: string;
}

export const TrustedClients: React.FC = () => {
  const clients: Client[] = [
    { name: "Afroxdigital", logo: "/images/clients/afroxdigital.png" },
    { name: "New Cambridge school", logo: "/images/clients/new-cambridge.png" },
    { name: "Dinesurf", logo: "/images/clients/dinesurf.png" },
    {
      name: "Solid Rock Acedemy",
      logo: "/images/clients/solid-rock-acedemy.png",
    },
    { name: "The UKPS school", logo: "/images/clients/the-ukps-school.png" },
    {
      name: "Crystal Brains School",
      logo: "/images/clients/crystal-brains-school.png",
    },
    { name: "Seed of Glory", logo: "/images/clients/seed-of-glory.png" },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Trusted by Leading Organizations and Institutions
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
          We're honored to work with some of the best companies in the industry,
          many of which rely on our software.
        </p>
        <div className="flex overflow-x-auto space-x-8 py-4 scrollbar-hide">
          {clients.map((client, index) => (
            <ZoomInOnScroll>
              <div
                key={index}
                className="flex animation-fade-out items-center justify-center min-w-[120px] h-[100px] bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-16 object-contain"
                />
              </div>
            </ZoomInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
