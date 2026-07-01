import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Suhaib Matin | Backend & Telegram Bot Developer",
  description: "Portfolio of Suhaib Matin, Backend Engineer specializing in Telegram bots, REST APIs, C#, Python, PHP Laravel, ASP.NET Core and PostgreSQL.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
