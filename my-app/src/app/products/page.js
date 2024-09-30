import Link from 'next/link';
import { products } from '../data.js';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-6">Product List</h1>
      <ul className="space-y-4">
        {products.map((product) => (
          <li key={product.id} className="border p-4 rounded shadow">
            <Link href={`/products/${product.id}`}>
              <h2 className="text-xl font-semibold hover:underline cursor-pointer">{product.name}</h2>
            </Link>
            <p className="text-lg text-gray-600">${product.price.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
