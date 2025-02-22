import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { ShoppingBag } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
      {products.map((product) => (
        <Link
          to={`/product/${product._id}`}
          key={product._id}
          className="group"
        >
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:scale-105">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200">
              <img
                src={product.image || 'https://images.unsplash.com/photo-1560343090-f0409e92791a'}
                alt={product.name}
                className="h-48 w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
              <p className="mt-1 text-sm text-gray-500">{product.category}</p>
              <div className="mt-2 flex items-center justify-between">
                <p className="text-lg font-semibold text-indigo-600">
                  ${product.price.toFixed(2)}
                </p>
                <ShoppingBag className="h-5 w-5 text-gray-400 group-hover:text-indigo-600" />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;