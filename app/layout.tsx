import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Territory Intelligence — BRINC DFR | Ethan Atchley",
  description:
    "202 leads scored. 7 states mapped. Territory intelligence for BRINC's DFR expansion.",
  openGraph: {
    title: "Territory Intelligence — BRINC DFR | Ethan Atchley",
    description:
      "202 leads scored. 7 states mapped. Before I applied.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
