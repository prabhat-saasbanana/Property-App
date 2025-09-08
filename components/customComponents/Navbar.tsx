import Link from "next/link";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function Navbar() {
    return (
        <>
            <nav className="navbar m-8 rounded-full p-4 drop-shadow-[0_0_15px_rgba(0,0,0,0.15)] bg-white">
                <div className="navbar-container flex flex-row justify-between items-center">
                    <Link href="/" className="navbar-logo text-2xl font-bold">
                        TheProperty
                    </Link>
                    <ul className="navbvar-menu flex flex-row justify-between items-center gap-6 list-none">
                        <li>
                            <Link href="/about" className="navbar-links font-bold">
                                Home</Link>
                        </li>
                        <li>
                            <Link href="/about" className="navbar-links font-bold">
                                About</Link>
                        </li>
                        <li>
                            <Link href="/about" className="navbar-links font-bold">
                                Properties</Link>
                        </li>
                        <li>
                            <Link href="/about" className="navbar-links font-bold">
                                Services</Link>
                        </li>
                        <li>
                            <Link href="/about" className="navbar-links font-bold">
                                Agents</Link>
                        </li>
                        <li>
                            <Link href="/about" className="navbar-links font-bold">
                                Blog</Link>
                        </li>
                        <li>

                            <Menu as="div" className="relative inline-block">
      <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs inset-ring-1 inset-ring-gray-300 hover:bg-gray-50">
        More
        <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
      </MenuButton>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg outline-1 outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              Property Details
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              Service Details
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              Agent Profile
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              Blog Details
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              Terms
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              Privacy
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              404
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
                        </li>
                        <li>
                            <Link href="/about" className="navbar-links font-bold">
                                Contact</Link>
                        </li>
                        <li>
                            <Link href="/about" className="navbar-links      bg-[var(--nav-hover-color)] text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
                                Get Started</Link>
                        </li>

                    </ul>
                </div>

            </nav>
        </>
    )
}