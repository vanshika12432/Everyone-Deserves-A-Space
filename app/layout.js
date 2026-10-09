import "./globals.css";
import { Fraunces, DM_Sans } from "next/font/google";
import Providers from "./providers";
import SiteNavbar from "@/components/SiteNavbar";
import Footer from "@/components/Footer";

const display = Fraunces({ subsets: ["latin"], variable: "--font-display" });
const body = DM_Sans({ subsets: ["latin"], variable: "--font-body" });

export const metadata = {
  title: "Everyone Deserves A Space | Vanshika Aggarwal, Therapist",
  description:
    "Individual therapy and reflective circles with Vanshika Aggarwal, based in New Delhi and available online.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${display.variable} ${body.variable}`}>
      <body className="font-sans antialiased">
        <Providers>
          <SiteNavbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
