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
  const { name, email, password } = await request.json();

  try {
  
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 });
    }


    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);


    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();
 
    const payload = {
      user: {
        name: newUser.name,
        id: newUser._id,
        email: newUser.email,
      },
    };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

    return NextResponse.json({ token }, { status: 201 });
  } catch (error) {
    console.error('Error during signup:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

