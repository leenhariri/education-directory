"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 325);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 transition-all 
       ${scrolled ? "bg-[#111730]" : "bg-transparent"}

      `}
    >
      <div className="max-w-[1200px] mx-auto flex justify-between items-center px-6 h-[75px]">

        <div className="flex items-center h-[75px]">
<Link href="/">
  <Image
    src="/images/oqi-logo.png"
    alt="OQI Logo"
    width={120}
    height={120}
    className="object-contain cursor-pointer"
  />
</Link>

        </div>

        <ul className="flex gap-8 text-white text-[14px]">
          <li><a href="#" className="hover:text-[#ddd]">About</a></li>
         <li><Link href="/" className="hover:text-[#ddd]">Resources</Link></li>

          {/* <li><a href="#" className="hover:text-[#ddd]">News & Events</a></li> */}
          <li><a href="#" className="hover:text-[#ddd]">Contact us</a></li>
        </ul>

      </div>
    </nav>
  );
}
