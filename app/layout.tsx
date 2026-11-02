import type { Metadata, Viewport } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const serif = Source_Serif_4({
  subsets: ["latin"],
  // variable font (weights 200–900) with the optical-size axis for crisp display headings
  axes: ["opsz"],
  variable: "--font-heading",
  display: "swap",
});
const sans = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  title: "OFGEN Africa | Building Africa’s energy infrastructure",
  description:
    "OFGEN Africa develops, finances and delivers bankable solar, battery storage, grid and telecom energy projects across Sub-Saharan Africa.",
  openGraph: {
    title: "OFGEN Africa | Building Africa’s energy infrastructure",
    description: "Developing, financing and delivering energy infrastructure across Sub-Saharan Africa.",
    type: "website",
    images: ["/images/hero.jpg"],
  },
};

export const viewport: Viewport = { themeColor: "#121519" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
     <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
