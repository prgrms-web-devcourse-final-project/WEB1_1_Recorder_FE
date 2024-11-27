import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import HeaderMember from "@/components/headerMember";
import Footer from "@/components/footer";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "RevUP",
  description: "RevUP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pretendard.variable} font-pretendard flex flex-col min-h-screen`}
      >
        <HeaderMember />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
