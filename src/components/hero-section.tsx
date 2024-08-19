
export const HeroSection = () => {
    return (
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="-trackig-[1px] mx-auto mb-6 font-PublicSans text-3xl font-bold leading-[1.06] text-[#121212] md:max-w-[60%] md:text-[60px] lg:max-w-[70%] lg:text-[50px] xl:max-w-[856px] xl:text-[70px] jos">
          Innovative Software Solutions for Every Need
          </h1>
          <div className="w-full flex justify-center">
            <p className="text-lg text-center max-auto  md:max-w-[60%] md:text-xl text-gray-700 dark:text-gray-300 mb-8">
                    We provide custom software development and ready-to-use software products tailored to meet diverse business needs.
                    
                    </p>
          </div>
         
          <div className="flex justify-center space-x-4">
            <a
              href="/products"
              className="primary-button"
            >
              Products
            </a>
            <a
              href="#services"
              className="outline-button"
            >
              Services
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  