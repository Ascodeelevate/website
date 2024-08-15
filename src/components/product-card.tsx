import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode, Key } from "react";
import { ProductCardProps } from "./types";
export const ProductCard = ({ product, onClick } :ProductCardProps) => (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-xl font-bold text-black mb-2">{product.name}</h2>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="mb-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            {product.plan} Plan
          </span>
        </div>
        {Array.isArray(product.price) ? (
          product.price.map((price: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined, index: Key | null | undefined) => (
            <p key={index} className="text-lg font-semibold">{price}</p>
          ))
        ) : (
          <p className="text-lg font-semibold">{product.price}</p>
        )}
        {product.notes && (
          <ul className="list-disc list-inside mt-4">
            {product.notes.map((note: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined, index: Key | null | undefined) => (
              <li key={index} className="text-sm text-gray-600">{note}</li>
            ))}
          </ul>
        )}

      {onClick ? (
        <div className="flex items-center justify-center mt-5">
                <button onClick={onClick} className="outline-button">See details</button>
        </div>
      ) : null}
        
      </div>
    </div>
  );
  