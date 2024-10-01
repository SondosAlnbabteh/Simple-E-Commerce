'use client';

import { useState, useEffect } from 'react';

export default function AddToCartButton({ product }) {
  const [cartItems, setCartItems] = useState([]);

  // Load cart from localStorage when the component mounts
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  // Function to add product to cart
  const addToCart = () => {
    const existingProduct = cartItems.find((item) => item.id === product.id);

    let updatedCart;
    if (existingProduct) {
      updatedCart = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCart = [...cartItems, { ...product, quantity: 1 }];
    }

    // Save updated cart to localStorage
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    alert("good");
  };

  return (
    <button
      onClick={addToCart}
      className="px-4 py-2 mt-2 text-white bg-green-500 rounded"
    >
      Add to Cart
    </button>
  );
}
