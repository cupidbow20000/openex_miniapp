"use client";
import { Inter, Karma } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const karma = Karma({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [path, setPath] = useState(pathname);
  useEffect(() => {
    setPath(pathname);
  }, [pathname]);
  return (
    <html lang="en">
      <body className={karma.className}>
        <img
          className="w-full h-screen fixed top-0 left-0 z-[-1]"
          src="/imgs/bg.png"
          alt="bg.png"
        />
        <Header />
        <div className="px-8 py-8 flex items-center">
          <img className="w-6 h-7" src="/imgs/logo.png" alt="logo.png" />
          <div className="text-4 text-white leading-5 px-3">
            <span className="font-bold">TRYTO</span>PLAYTHAT
          </div>
        </div>
        {children}
        {path.search("auth") == -1 && path != "/" && <Footer />}
      </body>
    </html>
  );
}
