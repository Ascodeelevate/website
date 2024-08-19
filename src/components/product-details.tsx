
import type { ProductDetailsProps } from './types';

export const ProductDetails = ({ product } : ProductDetailsProps) => (
    <div>
      <h2 className="text-2xl font-bold text-black mb-4">{product.name}</h2>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <div className="mb-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          {product.plan} Plan
        </span>
      </div>
      <p className="text-xl font-semibold mb-4">{product.price}</p>
      <h3 className="text-lg font-semibold mb-2">Features:</h3>
      <ul className="list-disc list-inside mb-4">
        {product.features.map((feature: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined, index: React.Key | null | undefined) => (
          <li key={index} className="text-gray-600">{feature}</li>
        ))}
      </ul>
      {product.notes && (
        <>
          <h3 className="text-lg font-semibold mb-2">Additional Notes:</h3>
          <ul className="list-disc list-inside">
            {product.notes.map((note: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined, index: React.Key | null | undefined) => (
              <li key={index} className="text-gray-600">{note}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );