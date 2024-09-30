"use client";

import { products } from '../../data.js'; 
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; 



export default function ProductDetails({ params }) {
  const { id } = params; // الحصول على id من المعاملات
  const product = products.find((p) => p.id === parseInt(id));
  const router = useRouter();

  useEffect(() => {
    if (!product) {
      // إذا لم يكن المنتج موجودًا، انتقل إلى صفحة 404
      router.push('/error');
    }
  }, [product, router]);

  if (!product) {
    // يمكنك إظهار رسالة مؤقتة هنا إذا أردت
    return <div>Loading...</div>;
  }


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
      <p className="text-lg text-gray-600 mb-2">${product.price.toFixed(2)}</p>
      <p className="text-md mb-4">Detailed description of {product.name}.</p>
      <button 
        onClick={() => alert(`${product.name} has been added to your cart!`)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
}
