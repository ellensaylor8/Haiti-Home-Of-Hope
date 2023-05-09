import "./globals.css";
import Nav from "./nav.js";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Haiti Home of Hope",
  description: "Haiti Home of Hope",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Include shared UI here e.g. a header or sidebar */}
        <Nav />

        {children}
      </body>
    </html>
  );
}
