import "./globals.css";
import NavBar from "./nav.js";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Include shared UI here e.g. a header or sidebar */}
        <NavBar />

        {children}
      </body>
    </html>
  );
}
