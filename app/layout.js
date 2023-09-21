"use client";
import "./globals.css";
import React, { useEffect } from "react";

export const metadata = {
  title: "Karnail Singh | Software Engineer",
};

export default function RootLayout({ children }) {
  if (typeof window !== "undefined") {
    window.addEventListener("resize", () => {
      let vh = window?.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
    let vh = window?.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    }
  });


  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>{metadata.title}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
