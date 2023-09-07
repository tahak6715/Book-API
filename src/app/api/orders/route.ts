// api/myRoute.js
import { NextResponse } from "next/server";

// Middleware function to check if a valid token is provided
function authenticateMiddleware(req:Response) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get('token');

  // You should implement your token validation logic here.
  // For this example, let's assume a simple check for a valid token.

  if (!token || token !== 'abc') {
    return NextResponse.error();
  }

  return null; // Authentication passed
}

export async function POST(req:Response) {
  // Check if authentication passes
  const authenticationError = authenticateMiddleware(req);
  if (authenticationError) {
    return authenticationError;
  }

  // If authentication passed, proceed with your POST logic
  const { searchParams } = new URL(req.url);
  const bookId = searchParams.get('bookId');
  const CustomerName = searchParams.get('CustomerName');

  return NextResponse.json({"bookId": bookId, "CustomerName": CustomerName});
}

