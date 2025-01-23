import React from "react";
import { ProductCard } from "./product-card";
import { products } from "../../data";
import { ZoomInOnScroll } from "./zoom-animation";
export const ProductSection = () => {
  return (
    <section className="md:py-10 px-10 py-5 mt-[5rem]" id="products">
       <ZoomInOnScroll>
      <div className="text-center ">
        <h1 className="text-4xl font-bold text-black mb-4">
          Our <span className="border-b-4 border-primary-400">Educational</span>{" "}
          Solutions
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-5xl mx-auto">
          Discover our specially designed packages that cater to the unique
          needs of schools and educational institutions. Whether you&lsquo;re
          aiming to enhance learning experiences or streamline administrative
          processes, we have the right solution for you. Reach out to us today
          and take the next step in transforming your educational environment.
        </p>
      </div>
      </ZoomInOnScroll>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center mx-auto max-w-6xl mt-10">
        {products.slice(0, 3).map((product, index) => (
          <ZoomInOnScroll>
           <ProductCard key={index} product={product} />
          </ZoomInOnScroll>
        ))}
      </div>

      <div className="flex justify-center md:flex-row space-y-4 md:space-y-0 flex-col md:space-x-4 mt-10">
        <a href="/products" className="primary-button">
          View All Products
        </a>
        <a href="/contact" className="secondary-button">
          Contact us
        </a>
      </div>
    </section>
  );
};
