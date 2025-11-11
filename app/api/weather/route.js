import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get("city");

  // Validasi parameter city
  if (!city) {
    return NextResponse.json(
      { error: "Parameter city diperlukan" },
      { status: 400 }
    );
  }

  try {
    // Get API key from server-side environment variable
    const apiKey = process.env.OPENWEATHER_API_KEY || process.env.NEXT_PUBLIC_W_API;

    if (!apiKey) {
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 }
      );
    }

    // Fetch data dari OpenWeather API
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        city
      )}&appid=${apiKey}&units=metric`
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Kota tidak ditemukan" },
        { status: 404 }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Gagal mengambil data cuaca" },
      { status: 500 }
    );
  }
}
