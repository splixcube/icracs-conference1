"use client";

import "./globals.css";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>ICRACS 2024</title>
        <meta
          name="description"
          content="Welcome to the official website of ICRACS 2024"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </head>
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
