import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mohitchugh.dev"),
  title: "Mohit Chugh | AI & ML Engineer · Full-Stack Developer",
  description:
    "Portfolio of Mohit Chugh — 3rd Year B.Tech CSE (AI & ML Specialization) undergraduate graduating in 2028. Creator of Jarvis, Fitness+ Vision, and Riya Dresses.",
  keywords: [
    "Mohit Chugh",
    "AI ML Engineer",
    "Computer Vision",
    "Full-Stack Developer",
    "Jarvis AI Assistant",
    "Fitness+ Vision",
    "Riya Dresses",
    "B.Tech CSE AI ML 2028",
  ],
  openGraph: {
    title: "Mohit Chugh | AI & ML Engineer · Full-Stack Developer",
    description:
      "3rd Year B.Tech CSE (AI & ML Specialization) · Creator of Jarvis, Fitness+ Vision & Riya Dresses.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohit Chugh | AI & ML Engineer · Full-Stack Developer",
    description:
      "3rd Year B.Tech CSE (AI & ML Specialization) · Creator of Jarvis, Fitness+ Vision & Riya Dresses.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark`}>
      <body className="font-sans antialiased bg-[#07070a] text-zinc-100 min-h-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
