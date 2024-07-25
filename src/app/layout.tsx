import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import couch from "@/assets/couch.svg"
import { ClerkProvider } from "@clerk/nextjs";
import UserInf from "@/components/UserInf";

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
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className + " bg-black flex flex-col min-h-screen"}>
        <header className="w-full">
          <div className=" container border-b p-5 mx-auto flex items-center justify-between">
            <Link  href={"/"} className="flex items-center gap-3">
              <Image src={couch} alt="couch" width={50} height={50}/>
              <h3 className=" text-white md:text-3xl text-2xl font-bold">AI Room</h3>
            </Link>
              {/* user info component */}
              <UserInf/>
          </div>

        </header>
        {children}
        </body>
    </html>
    </ClerkProvider>
  );
}
