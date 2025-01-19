"use client";
import Link from "next/link";
import { useState, useMemo } from "react";
import { usePathname } from "next/navigation";
import { OptimizedImage } from "@/components";
import { RiMenu3Fill } from "react-icons/ri";
import { MdClose } from "react-icons/md";

export function AppHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
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
    <nav className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo Section */}
        <Link
          href="/"
          className="flex items-center space-x-2 rtl:space-x-reverse"
        >
          <OptimizedImage
            src="/icon.png"
            width={40}
            height={40}
            alt="Ascodeelevate Logo"
          />
          <div>
            <span className="text-lg font-semibold text-black dark:text-white">
              AS CodeElevate
            </span>
            <span className="text-xs font-medium text-primary-600 dark:text-gray-400 block">
              Solution
            </span>
          </div>
        </Link>

        <button
          onClick={toggleMenu}
          type="button"
          className="lg:hidden p-2 text-gray-500 dark:text-gray-400 rounded focus:outline-none ring-2 ring-gray-200 dark:focus:ring-gray-600"
        >
          {isOpen ? (
            <MdClose className="w-6 h-6 text-gray-800 dark:text-white" />
          ) : (
            <RiMenu3Fill className="w-6 h-6 text-gray-800 dark:text-white" />
          )}
        </button>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute lg:static top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent dark:bg-gray-900 lg:dark:bg-transparent shadow-lg lg:shadow-none z-20 lg:flex lg:items-center lg:space-x-8`}
        >
          <ul className="flex flex-col lg:flex-row items-start lg:items-center lg:space-x-8 w-full lg:w-auto bg-white lg:bg-transparent dark:bg-gray-900 lg:dark:bg-transparent">
            {navItems.map((item) => (
              <li key={item.href} className="w-full lg:w-auto">
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block w-full lg:inline-block py-2 px-4 lg:py-0 text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 ${
                    isActive(item.href)
                      ? "font-semibold text-primary-600 dark:text-primary-400 border-b-2 border-primary-600 dark:border-primary-400"
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* "Get Started" Button */}
          <div className="mt-4 lg:mt-0 lg:ml-4 px-4 lg:px-0">
            <Link
              href="/contact"
              className="block lg:inline-block w-full lg:w-auto py-2 px-4 text-center bg-primary-600 text-white rounded-lg hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
