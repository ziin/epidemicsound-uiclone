import type { Metadata } from "next";
import { fonts } from "~/fonts";
import "./globals.css";

import { NavBar } from "~/components/navbar";

export const metadata: Metadata = {
  title: "Epidemic Sound",
  description: "Royalty-free music for your videos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${fonts.variable} font-sans font-medium`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
