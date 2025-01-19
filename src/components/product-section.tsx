import React from "react";
import { ProductCard } from "./product-card";
import { products } from '../../data';

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
          needs of schools and educational institutions. Whether you&lsquo;re aiming
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
    </section>
  );
};
