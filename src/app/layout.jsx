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
  title: "Ecomobilus",
  description: "Ecomobilus Technologies Limited",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <AntdProvider poppins={poppins}>
          <AntdRegistry>
            <Navbar />
            {children}
            <Footer />
          </AntdRegistry>
        </AntdProvider>
      </body>
    </html>
  );
}
