
// import connectDB from '../../../db';
// import Product from '../../../models/Product';

// export async function GET() {
//     try {
//       await connectDB();
//       const products = await Product.find();
//       if (!Array.isArray(products)) {
//         console.error('Expected an array but received:', products);
//         return new Response(JSON.stringify({ error: 'Products should be an array.' }), { status: 500 });
//       }
//       return new Response(JSON.stringify(products), { status: 200 });
//     } catch (error) {
//       console.error('Error fetching products:', error);
//       return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
//     }
//   }
  
  
