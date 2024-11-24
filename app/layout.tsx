import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "DING - Your Shopping Platform",
  description: "Experience the best in shopping with DING",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-16">{children}</main> {/* Add padding to avoid overlap */}
      </body>
    </html>
  );
}
