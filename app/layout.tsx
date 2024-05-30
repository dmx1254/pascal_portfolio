import type { Metadata } from "next";
import { Inter, Montserrat, Merriweather } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const monteserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  variable: "--font-monteserrat",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-merriweather",
});

export const metadata: Metadata = {
  title: "Pascal Cesar Ndecky Entrepreneur - Conférencier - Motivateur",
  description:
    "J'aide les jeunes à créer et développer leurs entreprises pour réaliser leurs rêves.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          `${inter.variable} ${monteserrat.variable} ${merriweather.variable} font-sans`
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
