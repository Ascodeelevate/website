"use client";
import Link from "next/link";
import { useState, useMemo } from "react";
import { usePathname } from "next/navigation";
import { OptimizedImage } from "@/components";
import { ZoomInOnScroll } from "./zoom-animation";

export function AppHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get the current path

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = useMemo(
    () => [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Services", href: "/#services" },
      { name: "Products", href: "/products" },
      { name: "Contact", href: "/contact" },
    ],
    []
  );

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="bg-primary-400 sticky z-10 top-0 border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-1 rtl:space-x-reverse"
        >
          <OptimizedImage
            src="/icon.png"
            width={50}
            height={50}
            alt="Ascodeelevate Logo"
          />
          <div className="flex flex-col justify-start items-start">
            <span className="text-lg font-semibold text-white">
              AS CodeElevate
            </span>
            <span className="text-xs font-medium text-black hover:text-primary-600 dark:text-gray-400">
              Solution
            </span>
          </div>
        </Link>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 border-0 bg-white w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full lg:flex lg:items-center lg:space-x-40 lg:w-auto`}
          id="navbar-default"
        >
          <ZoomInOnScroll>
          <ul className="font-medium flex flex-col p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  onClick={toggleMenu}
                  href={item.href}
                  className={`block py-2 px-3 rounded ${
                    isActive(item.href)
                      ? "text-primary-600"
                      : "text-gray-900 hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-primary-600 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          </ZoomInOnScroll>

         <ZoomInOnScroll>
          <div className="mt-4 lg:mt-0 lg:ml-4">
            <Link
              onClick={toggleMenu}
              href="/contact"
              className="primary-button-white"
            >
              Get started
            </Link>
          </div>
          </ZoomInOnScroll>
        </div>
      </div>
    </nav>
  );
}
