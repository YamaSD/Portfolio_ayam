import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Name — Portfolio",
  description: "Portfolio of Your Name, designer and developer.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
