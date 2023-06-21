import "./globals.css";
import NavBar from "./navigation/nav.js";
import BottomNav from "./navigation/bottomNav.js";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Include shared UI here e.g. a header or sidebar */}
        <NavBar />

        {children}
        <BottomNav />
      </body>
    </html>
  );
}
