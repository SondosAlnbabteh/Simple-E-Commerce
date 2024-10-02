// app/api/products/add/route.js
import { NextResponse } from 'next/server';
import connectDB from '../../../../db';
import Product from '../../../../models/Product';
import { authenticate } from '../../../../middleware/auth'; // Import your authentication middleware

await connectDB();

const handler = async (request) => {
  try {
    const { name, price, description, imageUrl } = await request.json();

    const newProduct = new Product({ name, price, description, imageUrl });
    await newProduct.save();

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    console.error('Error saving product:', error);
    return NextResponse.json({ message: 'Error saving product' }, { status: 500 });
  }
};

// Export the POST function wrapped with the authenticate middleware
export const POST = authenticate(handler);
