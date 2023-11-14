import type { Metadata } from "next";
import { fonts } from "~/fonts";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
