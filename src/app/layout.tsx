import type { Metadata } from "next";
import localFont from "next/font/local";
import { Toaster } from "react-hot-toast";

import "./globals.css";

const bon_foyage = localFont({
  src: "../app/fonts/Bon-Foyage-Demo.otf",
  display: "swap",
  variable: "--font-bon_foyage",
});
const satoshi = localFont({
  src: [
    {
      path: "../app/fonts/Satoshi-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../app/fonts/Satoshi-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../app/fonts/Satoshi-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../app/fonts/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  title: "Fashionistar Clothing",
  description: "Fashionistar clothing is a fashion ecommerce brand ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} ${bon_foyage.variable}`}>
        {children}
      </body>
      <Toaster />
    </html>
  );
}
