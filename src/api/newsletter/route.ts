import type { NextApiRequest, NextApiResponse } from 'next'

export const POST = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("Olá")
  
}


export async function GET() {
  return new Response("Hello, Next.js!");  
}