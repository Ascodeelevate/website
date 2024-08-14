export const ProductSection = () => {
  return (
    <section className="md:py-20 py-5 bg-secondary-600 dark:bg-gray-900">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
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

          <div className="flex justify-center md:flex-row space-y-4 md:space-y-0 flex-col md:space-x-4 mt-2">
            <a href="#all-products" className="primary-button">
              View All Products
            </a>
            <a href="#get-product" className="outline-button">
              Get Product
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
