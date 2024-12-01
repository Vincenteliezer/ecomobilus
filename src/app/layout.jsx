import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Navbar from "@/components/elements/navbar";
import { Poppins } from "next/font/google";
import AntdProvider from "@/providers/antd-provider";
import Footer from "@/components/elements/footer";

const poppins = Poppins({
  variable: "--font-alumni_sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Ecomobilus Technologies",
    template: "%s | Ecomobilus",
  },
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    title: "Ecomobilus Technologies",
    capable: "yes",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className={`${poppins.className} antialiased`}>
        <AntdRegistry>
          <AntdProvider poppins={poppins}>
            <Navbar />
            {children}
            <Footer />
          </AntdProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
