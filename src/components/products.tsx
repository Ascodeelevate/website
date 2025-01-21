'use client'
import React, { useState } from 'react';
import { Modal, ProductDetails, ProductCard, CTA } from '@/components';
import { products } from '../../data';

export const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  return (
    <div className="w-full bg-gray-200  px-10 py-8">
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-primary-600 mb-4">
          Our Products
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Discover our specially designed packages that cater to the unique
          needs of schools and educational institutions. Whether you&apos;re aiming
          to enhance learning experiences or streamline administrative
          processes, we have the right solution for you. Reach out to us today
          and take the next step in transforming your educational environment, <strong>Demos Available for All Products</strong>.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center mx-auto max-w-6xl">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onClick={() => setSelectedProduct(product)}
          />
        ))}
      </div>
      <Modal isOpen={!!selectedProduct} onClose={() => setSelectedProduct(null)}>
        {selectedProduct && <ProductDetails product={selectedProduct} />}
      </Modal>
      <CTA />
    </div>
  );
};