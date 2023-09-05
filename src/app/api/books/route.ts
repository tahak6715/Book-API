import { NextResponse } from "next/server"




export async function GET(req : Request) {
    const { searchParams } = new URL(req.url)
    const type = searchParams.get('type')
    const limit  = searchParams.get('limit')

    const books = [
        { id: 1, name: "The Russian", type: "fiction", available: true },
        { id: 2, name: "Just as I Am", type: "non-fiction", available: false },
        { id: 3, name: "The Vanishing Half", type: "fiction", available: true },
        { id: 4, name: "The Midnight Library", type: "fiction", available: true },
        { id: 5, name: "Untamed", type: "non-fiction", available: true },
        { id: 6, name: "Viscount Who Loved Me", type: "fiction", available: true },
      ];

      let filteredBooks = books;

      if (type) {
        // Filter books based on the 'type' parameter
        const filteredBooks = books.filter((book) => book.type === type);
    
        return NextResponse.json(filteredBooks);
      }

      if (limit) {
        const limitCount = parseInt(limit, 10);
        if (!isNaN(limitCount) && limitCount >= 0) {
          filteredBooks = filteredBooks.slice(0, limitCount);
        }
        return NextResponse.json(filteredBooks);
      }
    
      
      return NextResponse.json(books)
    }

    // const obj = Object.fromEntries(searchParams.entries())
   

  
    
    
    

