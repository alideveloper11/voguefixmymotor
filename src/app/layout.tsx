import type { Metadata } from "next";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vogue Fix My Motor | Engine Repair & Diagnostics in Grays, Essex",
  description: "Vogue Fix My Motor offers expert engine repair, diagnostics, and car servicing in Grays, Essex. Serving Tilbury, Purfleet, Ockendon, Hornchurch & surrounding areas within 10 miles. Get a free quote today.",
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
    <html lang="en" style={{colorScheme:"light"}}>

      <body className="bg-white text-black">
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