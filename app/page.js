import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold">Demo App - PAW</h1>
        <p className="text-xl text-gray-600">
          Pengembangan Aplikasi Web Demo Day
        </p>
        <div className="flex gap-4 justify-center mt-8">
          <Link
            href="/posts"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            View Posts
          </Link>
          <Link
            href="/weather"
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Check Weather
          </Link>
        </div>
      </div>
    </main>
  );
}
