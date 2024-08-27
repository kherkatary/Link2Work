import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppBar from "./components/Hero/Appbar/AppBar";
import Footer from "./components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Job Yes",
  description: "A job listing website of diffrent companies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <AppBar/>
        {children}
      <Footer/>
        </body>
    </html>
  );
}
