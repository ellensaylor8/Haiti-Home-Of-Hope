import "./globals.css";
import ResponsiveAppBar from "./responsiveAppBar.js";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Haiti Home of Hope",
  description: "Haiti Home of Hope",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Include shared UI here e.g. a header or sidebar */}
        <ResponsiveAppBar />

        {children}
      </body>
    </html>
  );
}
