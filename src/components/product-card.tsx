// import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode, Key } from "react";
import { ProductCardProps } from "./types";

export const ProductCard = ({ product, onClick }: ProductCardProps) => {
  // Generate initials from the product name
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word[0]?.toUpperCase() || "")
      .slice(0, 2)
      .join("");
  };

  return (
    <div className="relative group bg-white shadow-lg border max-w-[350px] min-h-[350px] rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
      {/* Circular Element at the Top */}
      <div className="flex justify-center items-center">
        <div className="w-16 h-16 bg-primary-400 text-white border-2 border-primary-600 flex items-center justify-center rounded-full mt-4">
          <span className="text-lg font-bold">{getInitials(product.name)}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h2 className="text-2xl font-bold text-black mb-2 text-center">
          {product.name}
        </h2>
        <p className="text-gray-600 mb-4 text-center">{product.description}</p>

     
        {/* Button */}
        {onClick && (
          <div className="flex items-center justify-center mt-5">
            <button
              onClick={onClick}
              className="bg-primary-400 text-white px-4 py-2 rounded-lg hover:bg-primary-500 transition-colors"
            >
              See Details
            </button>
          </div>
        )}
      </div>

    
    </div>
  );
};

  