import type { Metadata } from "next";
import { Bitter } from "next/font/google";
import "./globals.css";

const bitter = Bitter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "St. George Serbian Orthodox Church",
  description: "St. George Serbian Orthodox Church",
  icons: {
    icon: "/serbian-cross.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bitter.className} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
