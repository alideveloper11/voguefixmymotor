import type { Metadata } from "next";
import Script from "next/script";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vogue Fix My Motor | Engine Repair & Diagnostics in Grays, Essex",
  description: "Vogue Fix My Motor offers expert engine repair, diagnostics, and car servicing in Grays, Essex. Serving Tilbury, Purfleet, Ockendon, Hornchurch & surrounding areas within 10 miles. Get a free quote today.",
  icons: {
    icon: "/vogue-fix-my-motor-favicon.webp",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{colorScheme:"light"}}>
      <head>
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NT53VTCB');`}
        </Script>
      </head>
      <body className="bg-white text-black">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NT53VTCB"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
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
