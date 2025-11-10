import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Mengambil data post dari JSONPlaceholder
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=5"
    );
    const posts = await response.json();

    // Kirim JSON ke client
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}
