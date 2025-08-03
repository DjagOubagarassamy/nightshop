import React from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  image?: string;
  category: string;
  flavors?: string[];
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden group hover:shadow-md transition-all duration-200 hover:scale-105 relative">
      {product.image && (
        <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center bg-white bg-opacity-90">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-32 max-w-full object-contain rounded shadow-lg"
          />
        </div>
      )}
      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-900 mb-1">{product.name}</h3>
        <p className="text-xs text-gray-500 mb-2">{product.category}</p>
        {product.flavors && product.flavors.length > 0 && (
          <p className="text-xs text-gray-900 mb-2">Options disponibles : {product.flavors.join(', ')}</p>
        )}
        <p className="text-lg font-bold text-blue-600">{product.price.toFixed(2)} €</p>
      </div>
    </div>
  );
};

export default ProductCard;