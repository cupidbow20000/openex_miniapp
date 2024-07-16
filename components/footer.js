"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Footer() {
  const pathname = usePathname();
  const [path, setPath] = useState(pathname);
  useEffect(() => {
    setPath(pathname);
  }, [pathname]);
  return (
    <div className="fixed bottom-0 w-full flex justify-center items-center space-x-28 py-2 bg-slate-800">
      <Link href={"/ttpt/ttpthome"}>
        <img
          className="w-6 h-6"
          src={path == "/ttpt/ttpthome" ? "/imgs/home2.png" : "/imgs/home1.png"}
        />
      </Link>
      <Link href={"/ttpt/task"}>
        <img
          className="w-6 h-6"
          src={path == "/ttpt/task" ? "/imgs/task2.png" : "/imgs/task1.png"}
        />
      </Link>
      <Link href={"/ttpt/user"}>
        <img
          className="w-6 h-6"
          src={path == "/ttpt/user" ? "/imgs/user2.png" : "/imgs/user1.png"}
        />
      </Link>
    </div>
  );
}
