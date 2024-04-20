// components/Providers.jsx
import React from "react";
import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
