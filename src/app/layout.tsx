import type { Metadata } from "next";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vogue Fix My Motor",
  description: "Car Repair Services",
  icons: {
    icon: "/vogue-fix-my-motor-favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <body>
        <div className="flex flex-wrap w-full">
          <div className="w-full">
            <Header />
          </div>

          {children}

          <div className="w-full">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}