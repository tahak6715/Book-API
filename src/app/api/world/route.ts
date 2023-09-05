import { NextResponse } from "next/server";

type Feedback = {
    name?: string,
    email?: string,
    messege?: string,
}

export async function GET(req : Request) {
    const { searchParams } = new URL(req.url)
    // const name = searchParams.get('name')

    const obj = Object.fromEntries(searchParams.entries())
   

    return NextResponse.json({"name" :obj,"class" : obj})
    
    
    
}

export async function POST(req: Request) {
    const data: Feedback = await req.json();
    console.log("data :", data)

    const { name, email, messege } = data
    

    return NextResponse.json({ name, email, messege})
}