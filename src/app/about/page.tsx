
const AboutUs = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6 py-10 space-y-8">
        <h1 className="text-4xl font-bold text-center text-gray-800">
          About Ascodeelevatesolution
        </h1>
        <p className="text-lg text-gray-600 text-center">
          At Ascodeelevatesolution, we are committed to empowering businesses
          and individuals through innovative software solutions and technical
          skills training.
        </p>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Transforming Businesses with Automation
          </h2>
          <p className="text-gray-600">
            We develop software solutions for businesses of all sizes, helping
            to replace manual processes with efficient automated systems. By
            streamlining operations, reducing errors, and saving time, our
            custom solutions drive productivity and support business growth.
            From inventory management to workflow automation, our software
            adapts to meet your unique needs.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Comprehensive Solutions
          </h2>
          <p className="text-gray-600">In addition to training, we provide:</p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>
              <span className="font-medium">Custom Software Development:</span>{" "}
              Tailored business tools for growth.
            </li>
            <li>
              <span className="font-medium">Ready-Made Software:</span>{" "}
              Quick-deploy solutions for common needs.
            </li>
            <li>
              <span className="font-medium">Website Development:</span> Modern,
              easy-to-update websites for businesses.
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Online Training for Adults and Kids
          </h2>
          <p className="text-gray-600">
            We also offer flexible online training programs designed to equip
            individuals with essential digital skills.
          </p>

          <div className="space-y-2">
            <h3 className="text-xl font-medium text-gray-800">For Adults</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>
                <span className="font-medium">Software Development:</span> Build
                mobile, web, and desktop applications.
              </li>
              <li>
                <span className="font-medium">Website Design:</span> Create
                user-friendly, professional websites.
              </li>
              <li>
                <span className="font-medium">Business Automation Tools:</span>{" "}
                Learn to use technology to improve efficiency.
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-medium text-gray-800">For Kids</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>
                <span className="font-medium">Basic Computer Operations:</span>{" "}
                Learn essential computer tools.
              </li>
              <li>
                <span className="font-medium">Scratch Programming:</span>{" "}
                Explore coding with fun, interactive projects.
              </li>
              <li>
                <span className="font-medium">Graphic Design:</span> Develop
                creativity with easy-to-use tools.
              </li>
            </ul>
          </div>

          <div className="text-gray-800">
            <p>
              At Ascodeelevatesolution, our mission is to simplify processes,
              enhance productivity, and equip individuals with the tools and
              skills they need to succeed in the digital age.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
