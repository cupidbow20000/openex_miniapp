"use client";
import { Inter, Karma } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
// import img from "./imgs/bg.png";

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
        {/* <Image
          className="h-screen fixed top-0 left-0 z-[-1]"
          src={img}
          alt="bg.png"
        /> */}
        {/* <div style={{ width: "100%", height: "100%", position: "relative" }}>
          <Image
            alt="Mountains"
            src="/imgs/bg.png"
            layout="fill"
            objectFit="contain"
          />
        </div> */}
        <Header />
        <div className="px-8 py-8 flex items-center">
          <Image
            className="w-6 h-7"
            width={24}
            height={28}
            src="/imgs/logo1.png"
            alt="logo.png"
          />
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
