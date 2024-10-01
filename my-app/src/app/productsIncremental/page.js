export default async function ProductsPage() {
    const res = await fetch('https://fakestoreapi.com/products', {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    });
    const products = await res.json();
  
    return (
      <div className="container py-10 mx-auto">
        <h1 className="mb-8 text-3xl font-bold text-center">Products (ISR)</h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div key={product.id} className="p-6 border rounded-lg shadow-lg">
              <img src={product.image} alt={product.title} className="object-cover w-full h-48 mb-4" />
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-gray-500">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  