import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav, Search, Settings } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + ` bg-[#F7F8FA]`}>
        <div className="flex">
          <div className="">
            <Nav />
          </div>
          <div className="flex-1 mr-[29px] mt-[54px]">
            <Search />
            {children}
          </div>
          <div className="w-[330px] mt-[54px] mr-[40px]">
            <Settings />
          </div>
        </div>
      </body>
    </html>
  );
}