import { OptimizedImage } from "@/components";
import { ZoomInOnScroll } from "./zoom-animation";
export const AboutUsSection = () => {
  return (
    <section className="md:py-20 pb-5 bg-gray-50 dark:bg-gray-900 mb-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        {/*  */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <ZoomInOnScroll>
            <OptimizedImage
              src="/images/home-about.jpg"
              alt="Ascodeelevatesolution - Empowering All Ages with Technical Skills"
              width={1200}
              height={630}
              className="w-full h-auto rounded-lg shadow-lg
              "
            />
          </ZoomInOnScroll>
        </div>
        <div className="md:w-1/2 md:pl-10">
          <ZoomInOnScroll>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Us
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              At Ascodeelevatesolution, we specialize in teaching modern
              technical skills to various age groups. Our offerings include
              courses for young learners on basic computer operations and
              software like MS Word, PowerPoint, and CorelDraw. For adults, we
              provide comprehensive training in software development, including
              mobile, web, and desktop applications.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              We also develop and supply software solutions tailored to meet the
              needs of personal businesses and companies, offering both physical
              and online training for kids and adults.
            </p>
            <div className="mt-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Our Impact
              </h3>
              <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300 space-y-2">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
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
                    ></path>
                  </svg>
                  <span>
                    {" "}
                    Helped over{" "}
                    <span className="font-semibold">50 schools </span>
                    with our school management software.
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
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
                    ></path>
                  </svg>
                  <span>
                    {" "}
                    Developed more than{" "}
                    <span className="font-semibold">100 apps </span> for various
                    businesses.
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
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
                    ></path>
                  </svg>
                  <span>
                    {" "}
                    Trained{" "}
                    <span className="font-semibold">200+ students </span> in
                    modern technical skills.
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
