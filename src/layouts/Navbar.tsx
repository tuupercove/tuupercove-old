import React, { useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = () => {
    setIsLoading(true);
    toast.loading("Loading...");
  };

  const navbarRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  gsap.from(navbarRef.current, {
    y: -100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: navbarRef.current,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });

  return (
    <nav ref={navbarRef} className="flex items-center justify-between py-4 px-6 bg-white shadow-md">
      <div className="flex items-center">
        <Link href="/" className="text-xl font-bold">TuuperCove</Link>
      </div>
      <div className="flex items-center space-x-4">
        <Link href="/home" className="text-lg hover:text-blue-500">Home</Link>
        <Link href="/video" className="text-lg hover:text-blue-500">Video</Link>
        <Link href="/talent" className="text-lg hover:text-blue-500">Talent</Link>
        <Link href="/group" className="text-lg hover:text-blue-500">Group/Team</Link>
        <Link href="/support" className="text-lg hover:text-blue-500">Support me</Link>
        <Link href="/contact" className="text-lg hover:text-blue-500">Contact us</Link>
      </div>
      <div className="flex items-center">
        <button
          onClick={handleButtonClick}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          {isLoading ? "Loading..." : "Sign In"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
