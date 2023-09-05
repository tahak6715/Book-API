import { NextResponse } from "next/server"




export async function POST(req : Request) {
    const { searchParams } = new URL(req.url)
    const bookId = searchParams.get('bookId')
    const CustomerName = searchParams.get('CustomerName')

    // const obj = Object.fromEntries(searchParams.entries())
   

    return NextResponse.json({"bookId" : bookId, "CustomerName" : CustomerName})
    
    
    
}