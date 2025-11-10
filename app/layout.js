import "./globals.css";

export const metadata = {
  title: "Demo App - PAW",
  description: "Demo application for Pengembangan Aplikasi Web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
