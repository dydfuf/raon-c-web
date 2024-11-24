import "@/styles/globals.css";
import "@/styles/prosemirror.css";

import type { Metadata } from "next";
import localFont from "next/font/local";
import CommonLayout from "@/components/layout/CommonLayout";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning className="size-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative flex flex-col`}
      >
        <CommonLayout>{children}</CommonLayout>
      </body>
    </html>
  );
}
