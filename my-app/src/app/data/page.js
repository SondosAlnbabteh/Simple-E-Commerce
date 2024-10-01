import AddToCartButton from '../CartPage/page';

// This component is a Server Component
export default async function ProductsPage() {
  // Fetch products on the server
  const response = await fetch('https://fakestoreapi.com/products');
  const products = await response.json();

  return (
    <div className="container py-10 mx-auto">
      <h1 className="mb-8 text-3xl font-bold text-center">Products</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div key={product.id} className="p-6 border rounded-lg shadow-lg">
            <img
              src={product.image}
              alt={product.title}
              className="object-cover w-full h-48 mb-4"
            />
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-gray-500">${product.price}</p>
            {/* Cart interaction in client-side component */}
            <AddToCartButton product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
