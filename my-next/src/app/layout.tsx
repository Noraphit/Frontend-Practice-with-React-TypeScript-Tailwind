import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/layout/layoutFooter";

const inter = Inter({ subsets: ["latin"] });

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
    <>
      <html lang="en">
        <title>OH.STUDIO</title>
        <body>
          <div className="w-auto">{children}</div>
          <Footer
            className="pb-5" />
        </body>
      </html>
    </>
  );
};
