import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import connectDB from '../../../../db';
import User from '../../../../models/users';
import { NextResponse } from 'next/server';

// JWT secret key (you can store this in environment variables for security)
const JWT_SECRET = '123';

// Connect to the database
await connectDB();

export async function POST(request) {
  const { email, password } = await request.json();

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ error: 'Invalid password' }, { status: 400 });
    }

    // Create JWT payload
    const payload = {
      user: {
        id: user._id,
        email: user.email,
      },
    };

    // Sign token
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

    return NextResponse.json({ token }, { status: 200 });
  } catch (error) {
    console.error('Error during login:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
