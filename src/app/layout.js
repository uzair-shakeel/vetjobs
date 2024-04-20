"use client";
import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { Inter } from "next/font/google";
import "./global.css";

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
