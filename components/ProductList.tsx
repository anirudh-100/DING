import React from 'react';

const ProductList: React.FC = () => {
  const products = [
    { id: 1, name: 'Product 1', price: '$10' },
    { id: 2, name: 'Product 2', price: '$15' },
    { id: 3, name: 'Product 3', price: '$20' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10 px-5">
      {products.map((product) => (
        <div key={product.id} className="border rounded p-4 shadow">
          <h3 className="font-bold">{product.name}</h3>
          <p>{product.price}</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded mt-4">
            Buy Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
