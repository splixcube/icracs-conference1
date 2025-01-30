import "./globals.css";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

export async function generateMetadata() {
  return {
    title: "ICRACS 2025",
    description: "Welcome to the official website of ICRACS 2025",
    keywords: [
      "icracs",
      "icracs 2025",
      "poornima",
      "poornima jaipur",
      "icracs poornima",
      "piet college",
      "piet jaipur",
      "poornima conference",
      "piet conference",
    ],
    openGraph: {
      title: "ICRACS 2025",
      description: "Welcome to the official website of ICRACS 2025",
      url: "https://icracs.poornima.org/",
      images: [
        {
          url: "https://icracs.poornima.org/images/icracs-og.png",
          alt: "ICRACS 2025",
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "ICRACS 2025",
      description: "Welcome to the official website of ICRACS 2025",
      image: "https://icracs.poornima.org/images/icracs-og.png",
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <Header />
          {/* <main className="flex-grow bg-gradient-to-b from-white to-blue-100"> */}
          <main className="flex-grow bg-slate-50">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
