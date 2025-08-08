import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import TRPCProvider from "../providers/trpc-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Turbotodo",
  description: "A simple todo fullstack app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <TRPCProvider>
          {children}
        </TRPCProvider>
      </body>
    </html>
  );
}
