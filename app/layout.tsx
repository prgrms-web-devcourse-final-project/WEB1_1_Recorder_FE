import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Providers from "@/app/provider";

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
      <body className={`${pretendard.variable} flex min-h-screen flex-col font-pretendard`}>
        <Providers>
          <Header />
          <main className="grow pt-24">{children}</main>
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
