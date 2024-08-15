import React from "react";
import { ProductCard } from "./product-card";

const products = [
  {
    name: "CBT Software for Internal and External Exam Practice",
    description: "Software for exam practice, both internal and external.",
    price: "₦50,000 per term",
    plan: "Termly",
  },
  {
    name: "Result Manager Software",
    description: "Manage student results efficiently.",
    price: "₦25,000 per 100 students per term",
    plan: "Termly",
    notes: [
      "Results for the first term and second term will still be available in the third term.",
      "Results will be deleted at the end of the session unless you choose to retain them.",
      "Optional Retention: To retain results permanently: ₦10,000 per 100 students per term",
    ],
  },
  {
    name: "Comprehensive Package",
    description:
      "CBT Software for Internal and External Exam Practice + Result Manager Software",
    price: [
      "Result Manager Software: ₦20,000 per 100 students per term",
      "Internal and External CBT: ₦40,000 per term",
    ],
    plan: "Termly",
    notes: [
      "Results for the first term and second term will still be available in the third term.",
      "Results will be deleted at the end of the session unless you choose to retain them.",
      "Optional Retention: To retain results permanently: ₦10,000 per 100 students per term",
    ],
  },
  {
    name: "Professional ICT Instructor (Admin)",
    description:
      "Includes managing the ICT curriculum and all software for the school",
    price: "₦180,000 per month",
    plan: "Monthly",
    notes: ["No software payment is required at the end of the term"],
  },
  {
    name: "Full ICT Setup with Instructor",
    description:
      "Includes 15 computers, 1 projector, and 1 professional ICT instructor (admin) to manage the ICT curriculum",
    price: "₦250,000 per month",
    plan: "Monthly",
    notes: ["No software payment is required at the end of the term"],
  },
  {
    name: "Advanced ICT Setup with Instructors",
    description:
      "Includes 30 computers, 2 projectors, and 2 professional ICT instructors (admin) to manage the ICT curriculum",
    price: "₦400,000 per month",
    plan: "Monthly",
    notes: ["No software payment is required at the end of the term"],
  },
  {
    name: "Alternative Monthly Plan",
    description:
      "For schools not ready to permanently employ staff. Provides a staff member who will manage all software for the school, teach the ICT curriculum, and be available at any time to address urgent issues.",
    price: [
      "Once a Week: ₦50,000 per month",
      "Twice a Week: ₦95,000 per month",
    ],
    plan: "Monthly",
    notes: ["No software payment is required at the end of the term"],
  },
];

export const ProductSection = () => {
  return (
    <section
      className="md:py-20 px-10 py-5 bg-secondary-600 dark:bg-gray-900"
      id="products"
    >
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-primary-600 mb-4">
          Our Educational Solutions
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Discover our specially designed packages that cater to the unique
          needs of schools and educational institutions. Whether you're aiming
          to enhance learning experiences or streamline administrative
          processes, we have the right solution for you. Reach out to us today
          and take the next step in transforming your educational environment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.slice(0, 3).map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      <div className="flex justify-center md:flex-row space-y-4 md:space-y-0 flex-col md:space-x-4 md:mt-10">
        <a href="/products" className="primary-button">
          View All Products
        </a>
        <a href="/contact" className="outline-button">
          Get Product
        </a>
      </div>
      {/* <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Revolutionize Your School Management with Our All-in-One Software
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6">
            Our School Management Software offers a comprehensive suite of
            features designed to streamline every aspect of school
            administration. From student enrollment to grade tracking, our
            solution simplifies complex processes, enabling educators and
            administrators to focus on what truly matters—education.
          </p>
          <ul className="list-disc list-inside mb-6">
            <li className="flex items-center text-gray-700 dark:text-gray-300">
              <svg
                className="w-5 h-5 text-green-500 mr-2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M7 10l3 3 5-5-1.4-1.4L10 11.2 8.4 9.6 7 10z" />
              </svg>
              Comprehensive Student Enrollment
            </li>
            <li className="flex items-center text-gray-700 dark:text-gray-300">
              <svg
                className="w-5 h-5 text-green-500 mr-2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M7 10l3 3 5-5-1.4-1.4L10 11.2 8.4 9.6 7 10z" />
              </svg>
              Real-time Grade Tracking
            </li>
            <li className="flex items-center text-gray-700 dark:text-gray-300">
              <svg
                className="w-5 h-5 text-green-500 mr-2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M7 10l3 3 5-5-1.4-1.4L10 11.2 8.4 9.6 7 10z" />
              </svg>
              Class Scheduling
            </li>
            <li className="flex items-center text-gray-700 dark:text-gray-300">
              <svg
                className="w-5 h-5 text-green-500 mr-2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M7 10l3 3 5-5-1.4-1.4L10 11.2 8.4 9.6 7 10z" />
              </svg>
              Attendance Monitoring
            </li>
            <li className="flex items-center text-gray-700 dark:text-gray-300">
              <svg
                className="w-5 h-5 text-green-500 mr-2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M7 10l3 3 5-5-1.4-1.4L10 11.2 8.4 9.6 7 10z" />
              </svg>
              Parent-Teacher Communication
            </li>
            <li className="flex items-center text-gray-700 dark:text-gray-300">
              <svg
                className="w-5 h-5 text-green-500 mr-2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M7 10l3 3 5-5-1.4-1.4L10 11.2 8.4 9.6 7 10z" />
              </svg>
              Financial Management
            </li>
            <li className="flex items-center text-gray-700 dark:text-gray-300">
              <svg
                className="w-5 h-5 text-green-500 mr-2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M7 10l3 3 5-5-1.4-1.4L10 11.2 8.4 9.6 7 10z" />
              </svg>
              Report Generation
            </li>
            <li className="flex items-center text-gray-700 dark:text-gray-300">
              <svg
                className="w-5 h-5 text-green-500 mr-2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M7 10l3 3 5-5-1.4-1.4L10 11.2 8.4 9.6 7 10z" />
              </svg>
              Customizable Dashboards
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src="/images/school-system-app.png"
            alt="School Management Software"
            className="w-full h-auto object-cover rounded-lg shadow-lg md:mt-10  mb-10"
          />

         
        </div>
      </div> */}
    </section>
  );
};
