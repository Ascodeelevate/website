import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { ZoomInOnScroll } from "./zoom-animation";

interface Testimonial {
  name: string;
  designation: string;
  feedback: string;
  rating: number;
}

export const Testimonial: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "John Doe",
      designation: "CEO, ExampleCorp",
      feedback:
        "This service has completely revolutionized how we operate. Exceptional quality and outstanding support!",
      rating: 4.5,
    },
    {
      name: "Jane Smith",
      designation: "CTO, TechFlow",
      feedback:
        "The solutions provided were innovative and tailored to our needs. Highly recommended!",
      rating: 5,
    },
    {
      name: "Alex Johnson",
      designation: "Founder, InnovateNow",
      feedback:
        "Professional and efficient. They delivered exactly what we needed with great attention to detail.",
      rating: 4,
    },
  ];

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex space-x-1">
        {Array(fullStars)
          .fill(null)
          .map((_, i) => (
            <FaStar key={`full-${i}`} className="text-yellow-500" />
          ))}
        {hasHalfStar && <FaStarHalfAlt className="text-yellow-500" />}
        {Array(emptyStars)
          .fill(null)
          .map((_, i) => (
            <FaRegStar key={`empty-${i}`} className="text-gray-300" />
          ))}
      </div>
    );
  };

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          What Our Clients Say
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
          Hear from those who have experienced our exceptional service.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ZoomInOnScroll   key={index}>
              <div
                className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105"
              >
                <div className="text-left">
                  <div className="mb-4">{renderStars(testimonial.rating)}</div>
                  <p className="italic text-gray-700 dark:text-gray-300 mb-4">
                    "{testimonial.feedback}"
                  </p>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.designation}
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
