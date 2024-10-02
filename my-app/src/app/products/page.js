'use client';
// import { useEffect, useState } from 'react';
import ProductForm from './ProductForm';
// import axios from 'axios';

export default function ProductsPage() {
  // const [products, setProducts] = useState([]);
  // const [selectedProduct, setSelectedProduct] = useState(null);
  // const [isEditing, setIsEditing] = useState(false);

 
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await axios.get('/api/products'); // Replace with your actual API endpoint
  //       const data = response.data; // axios automatically parses JSON
  //       if (Array.isArray(data)) {
  //         setProducts(data); // Ensure data is an array
  //       } else {
  //         console.error('Expected an array, but received:', data);
  //         setProducts([]); // Set to empty array if not an array
  //       }
  //     } catch (error) {
  //       console.error('Error fetching products:', error);
  //       setProducts([]); // Handle error by setting an empty array
  //     }
  //   };

  //   fetchProducts();
  // }, []);

  // const handleAddOrEditProduct = (newProduct) => {
  //   if (isEditing) {
  //     setProducts((prev) =>
  //       prev.map((p) => (p._id === newProduct._id ? newProduct : p))
  //     );
  //     setIsEditing(false);
  //     setSelectedProduct(null);
  //   } else {
  //     setProducts((prev) => [...prev, newProduct]);
  //   }
  // };

  // const handleEditClick = (product) => {
  //   setSelectedProduct(product);
  //   setIsEditing(true);
  // };

  // const handleDeleteClick = async (id) => {
  //   try {
  //     await axios.delete(`/api/products/delete/${id}`);
  //     setProducts((prev) => prev.filter((product) => product._id !== id));
  //   } catch (error) {
  //     console.error('Error deleting product:', error);
  //   }
  // };

  return (
    <div className="container p-6 mx-auto">
    <h1 className="mb-6 text-3xl font-bold text-center">Products</h1>
    
    <ProductForm/>
  
    {/* <ul className="space-y-6">
      {products && products.map((product) => (
        <li key={product._id} className="p-4 bg-white border border-gray-300 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">{product.name}</h2>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-lg font-bold text-blue-600">${product.price}</p>
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-auto mt-2 rounded"
          />
          
          <div className="flex justify-between mt-4">
            <button
              onClick={() => handleEditClick(product)}
              className="px-4 py-2 font-semibold text-white transition duration-200 bg-yellow-500 rounded hover:bg-yellow-600"
            >
              Edit
            </button>
            <button
              onClick={() => handleDeleteClick(product._id)}
              className="px-4 py-2 font-semibold text-white transition duration-200 bg-red-500 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul> */}
  </div>
  
  );
}
