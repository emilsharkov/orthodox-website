import type { Metadata } from "next";
import { El_Messiri } from "next/font/google";
import "./globals.css";

const elMessiri = El_Messiri({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Orthodox Website",
  description: "Sample website for Orthodox Church",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${elMessiri.className} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
