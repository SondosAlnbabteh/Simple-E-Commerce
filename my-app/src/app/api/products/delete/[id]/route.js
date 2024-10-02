// // app/api/products/delete/[id]/route.js
// import connectDB from '../../../../../db';
// import Product from '../../../../../models/Product';

// export async function DELETE(request, { params }) {
//   const { id } = params;
//   await connectDB();
  
//   await Product.findByIdAndDelete(id);
  
//   return new Response(null, { status: 204 });
// }
