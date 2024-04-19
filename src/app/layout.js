"use client";
import { Inter } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";
import "./global.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <NextUIProvider>
        <body className={inter.className}>{children}</body>
      </NextUIProvider>
    </html>
  );
};

export default RootLayout;
