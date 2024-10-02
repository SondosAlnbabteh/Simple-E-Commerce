// // app/api/products/edit/[id]/route.js
// import connectDB from '../../../../../db';
// import Product from '../../../../../models/Product';

// export async function PUT(request, { params }) {
//   const { id } = params;
//   const { name, price, description, imageUrl } = await request.json();
  
//   await connectDB();
  
//   const updatedProduct = await Product.findByIdAndUpdate(
//     id,
//     { name, price, description, imageUrl },
//     { new: true }
//   );
  
//   return new Response(JSON.stringify(updatedProduct), { status: 200 });
// }
