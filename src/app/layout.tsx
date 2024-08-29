import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "../components/Footer";
import Image from "next/image";
import NavBar from "@/components/NavBar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // metadataBase: new URL('https://parallelintersect.vercel.app'),
  title: "Parallel Intersect",
  description: "we make impossible, possible",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <NavBar title="" /> */}
      <body className={inter.className}>
        {children}

        <div className="h-1/2 w-1/2 bg-cover absolute right-1/4 opacity-50 top-20 -z-10">
          <Image
            aria-hidden="true"
            src="logo.svg"
            alt="PI"
            width={1000}
            height={1000}
          />
        </div>
        <Footer />
      </body>
    </html>
  );
}
