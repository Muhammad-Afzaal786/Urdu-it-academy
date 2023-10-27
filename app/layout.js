import Script from "next/script";
import Navbar from "@/ui/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/ui/Footer";
import AdSense from "@/components/Adsense";
//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/js/bootstrap.js';
const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Home - Urdu It Academy",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8409124849421096"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
        
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="overflow-hidden mx-auto max-w-[1215px] px-4">
          {children}
        </main>
        <Footer />
        <AdSense />
      </body>
    </html>
  );
}
