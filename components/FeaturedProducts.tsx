import React from 'react';

const FeaturedProducts: React.FC = () => {
  const products = [
    { id: 1, name: 'Product A', price: '$20' },
    { id: 2, name: 'Product B', price: '$30' },
    { id: 3, name: 'Product C', price: '$40' },
  ];

  return (
    <section className="py-10 px-5">
      <h2 className="text-2xl font-semibold text-center mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow">
            <h3 className="font-bold text-lg">{product.name}</h3>
            <p className="mt-2">{product.price}</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
