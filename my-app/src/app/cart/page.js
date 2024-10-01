'use client';

import { useState, useEffect } from 'react';

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  // Load cart from localStorage when the component mounts
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);



  const addToCart = (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);
    let updatedCart;

    if (existingProduct) {
      updatedCart = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCart = [...cartItems, { ...product, quantity: 1 }];
    }

    // Update the state, and the useEffect hook will handle updating localStorage
    setCartItems(updatedCart);
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };

  // Clear cart
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cart');
  };

  return (
    <div className="container py-10 mx-auto">
      <h1 className="mb-8 text-3xl font-bold text-center">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty</p>
      ) : (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cartItems.map((item) => (
            <div key={item.id} className="p-6 border rounded-lg shadow-lg">
              <img src={item.image} alt={item.title} className="object-cover w-full h-48 mb-4" />
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-gray-500">${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="px-4 py-2 mt-2 text-white bg-red-500 rounded"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      <div className="mt-10 text-center">
        <button
          onClick={() => clearCart()}
          className="px-6 py-3 text-white bg-blue-500 rounded-lg"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}
