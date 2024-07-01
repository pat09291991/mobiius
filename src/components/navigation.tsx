"use client";
import { useState, useRef, useEffect } from "react";
import Dropdown from "@/components/ui/dropdown";
import Logo from "@/components/ui/logo";
import { dropdownMenu } from "@/lib/menu";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import { goingDown } from "./keyframes";
import useLockBodyScroll from "@/lib/useLockBodyScroll";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [menuHeight, setMenuHeight] = useState<number>(0);
  const [isNavFixed, setIsNavFixed] = useState(false);
  const pathname = usePathname();

  useLockBodyScroll(menuOpen);

  const [ref, inView] = useInView({
    triggerOnce: false,
    rootMargin: "0px",
  });
  const animate = inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRefs.current.every(
        (ref) => ref && !ref.contains(event.target as Node),
      )
    ) {
      setActiveDropdown(null);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsNavFixed(true);
      } else {
        setIsNavFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const totalHeight = dropdownRefs.current.reduce((acc, ref) => {
      if (ref && activeDropdown && ref.dataset.label !== activeDropdown) {
        return acc + ref.offsetHeight;
      }
      return acc;
    }, 0);
    setMenuHeight(totalHeight);

    if (activeDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeDropdown]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -50 }}
      animate={animate}
      variants={goingDown}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
      className={`flex items-center w-full md:w-auto md:gap-60 justify-between md:items-center px-2 md:px-36 py-2 h-20 z-30 transition-all duration-300 ease-out ${
        isNavFixed &&
        "fixed top-0 left-0 right-0 bg-black z-50 transition-colors duration-300 ease-out"
      } ${menuOpen && "h-screen"}`}
    >
      <Logo />
      <div className="lg:hidden">
        <button className="text-white focus:outline-none" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="text-center h-full lg:hidden gap-4 absolute bg-black top-0 left-0 w-full flex flex-col items-center z-10 p-5"
            style={{ marginTop: `${menuHeight}px` }}
          >
            <div className="text-end w-full">
              <button onClick={() => setMenuOpen(false)}>X</button>
            </div>
            {dropdownMenu.map((dropdown, index) => (
              <Dropdown
                key={dropdown.label}
                label={dropdown.label}
                menu={dropdown.menu}
                isOpen={activeDropdown === dropdown.label}
                onToggle={() => handleDropdownToggle(dropdown.label)}
                ref={(el: HTMLDivElement | null) => {
                  dropdownRefs.current[index] = el;
                  if (
                    el &&
                    activeDropdown &&
                    el.dataset.label === activeDropdown
                  ) {
                    setMenuHeight((prevHeight) => prevHeight + el.offsetHeight);
                  }
                }}
              />
            ))}
            {!pathname.includes("start") && (
              <Link
                href={"/start"}
                className="p-2 w-36 text-sm rounded-lg leading-6 text-white font-normal bg-button-gradient flex flex-col items-center"
              >
                Start Verify
              </Link>
            )}
            <Link
              href={"/login"}
              className="p-2 w-36 text-sm rounded-lg leading-6 font-bold border-2 border-[#7B45F5] text-[#7B45F5] flex flex-col items-center"
            >
              Login
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
      <nav className="hidden lg:flex gap-10 items-center">
        {dropdownMenu.map((dropdown, index) => (
          <Dropdown
            key={dropdown.label}
            label={dropdown.label}
            menu={dropdown.menu}
            isOpen={activeDropdown === dropdown.label}
            onToggle={() => handleDropdownToggle(dropdown.label)}
            ref={(el: HTMLDivElement | null) => {
              dropdownRefs.current[index] = el;
              if (el && activeDropdown && el.dataset.label === activeDropdown) {
                setMenuHeight((prevHeight) => prevHeight + el.offsetHeight);
              }
            }}
          />
        ))}
        <div className="flex items-center gap-x-6">
          {!pathname.includes("start") && (
            <Link
              href={"/start"}
              className="p-2 w-36 text-sm rounded-lg leading-6 text-white font-normal bg-button-gradient flex flex-col items-center"
            >
              Start Verify
            </Link>
          )}
          <Link
            href={"/login"}
            className="p-2 w-36 text-sm rounded-lg leading-6 font-bold border-2 border-[#7B45F5] text-[#7B45F5] flex flex-col items-center"
          >
            Login
          </Link>
        </div>
      </nav>
    </motion.div>
  );
};

export default Navigation;
