import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThirdwebProvider } from "thirdweb/react";
import { ThemeProvider } from "next-themes";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TokenHive",
  description:
    "A decentralized platform that empowers users by removing central authority, promoting community governance, and facilitating the exchange of various crypto tokens.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>

          <ThirdwebProvider>{children}</ThirdwebProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
