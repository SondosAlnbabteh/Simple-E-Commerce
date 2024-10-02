// middleware/auth.js
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export const authenticate = (handler) => {
  return async (req) => {
    const token = req.headers.get('authorization')?.split(' ')[1];

    if (!token) {
      return NextResponse.json({ error: 'No token provided' }, { status: 401 });
    }

    try {
      const decoded = jwt.verify(token, '123'); // Replace '123' with your actual secret
      req.user = decoded.user; // Attach the user information to the request object

      // Call the next handler
      return await handler(req);
    } catch (error) {
      return NextResponse.json({ error: 'Token is not valid' }, { status: 401 });
    }
  };
};
