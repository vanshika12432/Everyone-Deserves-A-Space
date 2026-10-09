"use client";
import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider } from "next-themes";

export default function Providers({ children }) {
  return (
    <HeroUIProvider>
      <ThemeProvider attribute="class" defaultTheme="light" themes={["light", "dark"]}>
        {children}
      </ThemeProvider>
    </HeroUIProvider>
  );
}
