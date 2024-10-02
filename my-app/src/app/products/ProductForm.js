'use client';

import { useState } from 'react';
import axios from 'axios';

export default function AddProductForm() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const payload = { name, price, description, imageUrl };
  
      // Make the POST request to add a new product
      const res = await axios.post('/api/products/add', payload, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`, // Assuming the JWT is stored in local storage
        },
      });
      
      alert("Product added successfully");
      // Optionally, reset the form fields after successful submission
      setName('');
      setPrice('');
      setDescription('');
      setImageUrl('');
    } catch (error) {
      console.error("Error adding product:", error);
      if (error.response && error.response.status === 401) {
        alert("Token is not valid");
      } else {
        alert("Failed to add product");
      }
 
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg p-6 mx-auto bg-white rounded-lg shadow-md">
      <h2 className="mb-4 text-2xl font-bold text-center">Add Product</h2>
      
      <div className="mb-4">
        <label className="block mb-1 text-sm font-medium text-gray-700" htmlFor="product-name">Product Name</label>
        <input
          id="product-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Product Name"
          required
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
    
      <div className="mb-4">
        <label className="block mb-1 text-sm font-medium text-gray-700" htmlFor="price">Price</label>
        <input
          id="price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          required
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
    
      <div className="mb-4">
        <label className="block mb-1 text-sm font-medium text-gray-700" htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
    
      <div className="mb-4">
        <label className="block mb-1 text-sm font-medium text-gray-700" htmlFor="image-url">Image URL</label>
        <input
          id="image-url"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="Image URL"
          required
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
    
      <button
        type="submit"
        className="w-full px-4 py-2 font-semibold text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700"
      >
        Add Product
      </button>
    </form>
  );
}
