import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import couch from "@/assets/couch.svg"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Room Generator",
  description: "This Is Room AI Generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + "bg-[#17181c] flex flex-col min-h-screen"}>
        <header className="w-full">
          <div className=" container border-b p-5 mx-auto flex items-center justify-between">
            <Link  href={"/"} className="flex items-center gap-3">
              <Image src={couch} alt="couch" width={50} height={50}/>
            </Link>
              {/* user info component */}
          </div>

        </header>
        {children}
        </body>
    </html>
  );
}
