import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Narbar from "./Narbar";
import Login from "./Login";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Login Page",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#F5EDED] dark:bg-[#222831] h-screen w-screen relative">
        <div className="absolute z-50"> 
          <Narbar />
        </div>
        <Login />
      </body>
    </html>
  );
}
