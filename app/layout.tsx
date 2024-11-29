import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import HeaderMember from "@/components/headerMember";
import Footer from "@/components/footer";
import Signup from "./signUp/page";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard"
});

export const metadata: Metadata = {
  title: "RevUP",
  description: "RevUP"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pretendard.variable} font-pretendard`}>
        <HeaderMember />
        {/* {children} */}
        <main className="flex-grow"><Signup /></main>
        <Footer />
      </body>
    </html>
  );
}
