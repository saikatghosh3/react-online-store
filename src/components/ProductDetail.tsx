

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../types';
import { ShoppingCart, Heart } from 'lucide-react';

interface ProductDetailProps {
  fetchProduct: (id: string) => Promise<Product | null>;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ fetchProduct }) => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    fetchProduct(id)
      .then((data) => setProduct(data))
      .catch(() => setProduct(null))
      .finally(() => setLoading(false));
  }, [id, fetchProduct]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl text-gray-600">Product not found</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
        {/* Image gallery */}
        <div className="flex flex-col">
          <div className="overflow-hidden rounded-lg">
            <img
              src={product.image || 'https://images.unsplash.com/photo-1560343090-f0409e92791a'}
              alt={product.name}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{product.name}</h1>

          <div className="mt-3">
            <p className="text-3xl text-gray-900">${product.price?.toFixed(2)}</p>
          </div>

          <div className="mt-6">
            <p className="text-base text-gray-700 space-y-6">{product.description}</p>
          </div>

          <div className="mt-8 flex space-x-4">
            <button
              type="button"
              className="flex-1 bg-indigo-600 py-3 px-8 rounded-md text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="flex items-center justify-center">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </span>
            </button>
            <button
              type="button"
              className="flex-1 border border-gray-300 py-3 px-8 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="flex items-center justify-center">
                <Heart className="w-5 h-5 mr-2" />
                Add to Wishlist
              </span>
            </button>
          </div>

          <div className="mt-8">
            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-sm font-medium text-gray-900">Category</h3>
              <p className="mt-2 text-sm text-gray-500">{product.category}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
