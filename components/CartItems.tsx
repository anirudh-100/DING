import React from 'react';

const CartItems: React.FC = () => {
  const cartItems = [
    { id: 1, name: 'Product A', quantity: 2, price: '$40' },
    { id: 2, name: 'Product B', quantity: 1, price: '$30' },
  ];

  return (
    <div className="py-10 px-5">
      <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="border p-4 mb-4 rounded shadow flex justify-between items-center">
          <div>
            <h3 className="font-bold">{item.name}</h3>
            <p>Quantity: {item.quantity}</p>
          </div>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
