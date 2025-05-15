import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const response = NextResponse.json({ message: 'This response is not cached by Vercel.' });
  response.headers.set('Cache-Control', 'no-store, max-age=0');
  return response;
}
