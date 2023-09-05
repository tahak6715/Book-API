import { NextRequest, NextResponse } from "next/server";

const bookss = [
  {
    id: 1,
    title: "The Russian",
    author: "John Doe",
    genre: "Fiction",
    publicationYear: 2020,
    available: true,
    rating: 4.5,
    description: "A thrilling novel about espionage and adventure.",
  },
  {
    id: 2,
    title: "Just as I Am",
    author: "Jane Smith",
    genre: "Non-Fiction",
    publicationYear: 2019,
    available: false,
    rating: 4.0,
    description: "An inspiring memoir of a remarkable life.",
  },
  {
    id: 3,
    title: "The Vanishing Half",
    author: "Alice Johnson",
    genre: "Fiction",
    publicationYear: 2021,
    available: true,
    rating: 4.7,
    description: "A thought-provoking exploration of identity and family.",
  },
  {
    id: 4,
    title: "The Midnight Library",
    author: "Samuel Green",
    genre: "Fiction",
    publicationYear: 2018,
    available: true,
    rating: 4.2,
    description: "A tale of alternate lives and second chances.",
  },
  {
    id: 5,
    title: "Untamed",
    author: "Emily Brown",
    genre: "Non-Fiction",
    publicationYear: 2022,
    available: true,
    rating: 4.9,
    description: "A guide to embracing one's true self and passions.",
  },
  {
    id: 6,
    title: "Viscount Who Loved Me",
    author: "Julia Andrews",
    genre: "Romance",
    publicationYear: 2017,
    available: true,
    rating: 4.4,
    description: "A historical romance novel filled with passion and drama.",
  },
  {
    id: 7,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    publicationYear: 1937,
    available: true,
    rating: 4.8,
    description: "An epic fantasy adventure set in Middle-earth.",
  },
  {
    id: 8,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Classic",
    publicationYear: 1960,
    available: true,
    rating: 4.6,
    description: "A powerful story of racial injustice and moral growth.",
  },
  {
    id: 9,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    publicationYear: 1925,
    available: true,
    rating: 4.3,
    description: "A portrait of the Jazz Age and the American Dream.",
  },
  {
    id: 10,
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    genre: "Fantasy",
    publicationYear: 1997,
    available: true,
    rating: 4.7,
    description: "The magical journey of a young wizard, Harry Potter.",
  },
];

// You now have 10 book objects with various properties.


interface IParams {
  params: { bookId: string };
};

export async function GET(request: NextRequest, { params }: IParams) {
  const bookIdd = parseInt(params.bookId, 10);

  // Find the book with the specified ID
  const booky = bookss.find((b) => b.id === bookIdd);

  if (!booky) {
    return NextResponse.json({ message: "Book not found" }, { status: 404 });
  }

  return NextResponse.json(booky);
}