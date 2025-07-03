import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "WalletAdapter",
  description: "Generate Wallets for solana and Ethereum",
};

export default function RootLayout({
  children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
