"use client";
import { useState } from "react";
import Link from "next/link";

export default function WeatherPage() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validasi input kosong
    if (!city.trim()) {
      setError("Nama kota wajib diisi");
      return;
    }

    setError("");
    setLoading(true);

    try {
      // Panggil API route internal
      const res = await fetch(
        `/api/weather?city=${encodeURIComponent(city)}`
      );

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error || "Terjadi kesalahan");
      }

      setData(json);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-sm mx-auto px-4">
        <div className="mb-6">
          <Link href="/" className="text-blue-600 hover:underline">
            ← Back to Home
          </Link>
        </div>
        <h1 className="text-3xl font-bold mb-6">Weather Check</h1>

        <form onSubmit={handleSubmit} className="space-y-2">
          <input
            className="w-full px-3 py-2 border rounded"
            placeholder="Masukkan kota..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded disabled:opacity-50"
          >
            {loading ? "Loading..." : "Cek Cuaca"}
          </button>
        </form>

        {data && (
          <div className="mt-6 p-4 border rounded bg-white">
            <h3 className="text-lg font-semibold">{data.name}</h3>
            <p>
              {data.weather[0].description}, {data.main.temp}°C
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
