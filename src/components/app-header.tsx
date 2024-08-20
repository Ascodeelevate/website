'use client';
import Link from 'next/link';
import { useState, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { OptimizedImage } from '@/components';

export function AppHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get the current path

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = useMemo(() => [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/#services' },
    { name: 'Products', href: '/products' },
    { name: 'Contact', href: '/contact' },
  ], []);

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-1 rtl:space-x-reverse">
          <OptimizedImage src="/icon.png"  width={50} height={50} alt="Ascodeelevate Logo" />
          <div className="flex flex-col justify-start items-start">
            <span className="text-lg font-semibold text-black">AS CodeElevate</span>
            <span className="text-xs font-medium text-primary-600 dark:text-gray-400">Solution</span>
          </div>
        </Link>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 border-0 bg-white w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen ? 'true' : 'false'}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:flex md:items-center md:space-x-40 md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block py-2 px-3 rounded ${isActive(item.href) ? 'text-primary-600' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-600 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'}`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-4 md:mt-0 md:ml-4">
            <Link
              href="/contact"
              className="block w-full py-2 px-3 text-center text-secondary-600 bg-primary-600 rounded md:inline-block md:w-auto md:px-5 md:py-2 md:ml-2 hover:bg-secondary-600  hover:text-primary-500"
            >
              Get started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
