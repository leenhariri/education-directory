"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeaderHero() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const st = window.scrollY;
      setScrollTop(st);
      setScrolled(st > 325); // same threshold as your original nav logic
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // fade opacity identical to jQuery version
  const opacity = Math.max(0, 1 - scrollTop / 325);

  return (
    <>
      {/* NAV */}
      <nav
className={`
  fixed top-0 left-0 w-full z-50 transition-all 
  ${scrolled ? "bg-[rgba(17, 46, 143, 1)]" : "bg-transparent"}
`}

      >
        <div className="max-w-[1200px] mx-auto flex justify-between items-center px-6 h-[75px]">
          {/* LOGO (using your exact »« marks) */}
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
            <li><a href="#" className="hover:text-[#ddd]">Resources</a></li>
             {/* <li><a href="#" className="hover:text-[#ddd]">News & Events</a></li> */}
            <li><a href="#" className="hover:text-[#ddd]">Contact us</a></li>
           
          </ul>
        </div>
      </nav>

      {/* HERO */}
      <header className="relative w-full h-[400px] text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
           backgroundImage: "url('/images/hero.jpeg')",
            opacity,
          }}
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[rgba(59, 60, 68, 0.5)]"></div>

        {/* TEXT */}
        <div
          className="absolute top-1/2 left-1/2 text-center opacity-0 animate-[fadeIn_0.75s_0.25s_ease-in_forwards]"
          style={{
            transform: `translate(-50%, calc(-50% + ${scrollTop * 0.4}px))`,
          }}
        >
          <h1 className="text-[64px] leading-none font-serif m-0">OQI Educational Repository</h1>
          {/* <p className="text-[24px] italic font-serif m-0">
            Scroll down the page
          </p> */}
        </div>
      </header>

      {/* Fade-in animation keyframe */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </>
  );
}
