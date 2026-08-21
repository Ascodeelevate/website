import { OptimizedImage } from "@/components";
import { ZoomInOnScroll } from "./zoom-animation";

export const AboutUsSection = () => {
  return (
    <section className="md:py-20 pb-5 bg-gray-50 dark:bg-gray-900 mb-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <ZoomInOnScroll>
            <OptimizedImage
              src="/images/home-about.jpg"
              alt="AS Code Elevate - Software Development and School Management Solutions"
              width={1200}
              height={630}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </ZoomInOnScroll>
        </div>

        <div className="md:w-1/2 md:pl-10">
          <ZoomInOnScroll>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Us
            </h2>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              At AS Code Elevate, we are a software development company focused
              on building reliable, modern, and scalable digital solutions. We
              develop custom web applications, mobile applications, business
              management systems, and specialized software designed to solve
              real-world problems.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              We have a strong focus on educational technology, developing
              software solutions that help schools manage examinations, student
              results, accounting, finances, and other important administrative
              processes. Our goal is to help schools and businesses reduce
              manual work, improve efficiency, and embrace technology.
            </p>

            <div className="mt-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Our Impact
              </h3>

              <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300 space-y-3">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                  <span>
                    Helping over{" "}
                    <span className="font-semibold">50 schools</span> manage
                    examinations, results, and other school operations with our
                    software solutions.
                  </span>
                </li>

                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                  <span>
                    Building modern{" "}
                    <span className="font-semibold">
                      school management systems
                    </span>{" "}
                    that simplify examinations, result processing, financial
                    management, and administration.
                  </span>
                </li>

                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                  <span>
                    Developing{" "}
                    <span className="font-semibold">
                      custom web and mobile applications
                    </span>{" "}
                    for schools, businesses, and organizations.
                  </span>
                </li>
              </ul>
            </div>
          </ZoomInOnScroll>
        </div>
      </div>
    </section>
  );
};
