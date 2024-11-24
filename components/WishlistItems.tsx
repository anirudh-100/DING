import React from 'react';

const WishlistItems: React.FC = () => {
  const wishlistItems = [
    { id: 1, name: 'Product A', price: '$40' },
    { id: 2, name: 'Product B', price: '$30' },
  ];

  return (
    <div className="py-10 px-5">
      <h2 className="text-2xl font-semibold mb-6">Your Wishlist</h2>
      {wishlistItems.map((item) => (
        <div key={item.id} className="border p-4 mb-4 rounded shadow flex justify-between items-center">
          <div>
            <h3 className="font-bold">{item.name}</h3>
            <p>{item.price}</p>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default WishlistItems;
