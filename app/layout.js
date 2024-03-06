import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Providers } from "./providers";
import { ModelProvider } from "@/lib/context";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LLM Net",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-[#fafafa] dark:bg-neutral-900`}>
        <Providers>
          <ModelProvider>
            <div>
              <SpeedInsights />
              <Navbar />
              {children}
            </div>
          </ModelProvider>
        </Providers>
      </body>
    </html>
  );
}
