"use client"
import Link from "next/link";
import MoreDropdown from "./MoreDropdown";

export default function Navbar() {
    return (
        <>
            <nav className="navbar m-8 rounded-full p-4 drop-shadow-[0_0_15px_rgba(0,0,0,0.15)] bg-white">
                <div className="navbar-container flex flex-row justify-between items-center">
                    <Link href="/" className="navbar-logo text-2xl font-bold px-4">
                        TheProperty
                    </Link>
                    <ul className="navbvar-menu flex flex-row justify-between items-center gap-6 list-none">
                        <li>
                            <Link href="/about" className="navbar-links font-bold text-[var(--nav-hover-color)]">
                                Home</Link>
                        </li>
                        <li>
                            <Link href="/about" className="navbar-links font-bold hover:text-[var(--nav-hover-color)]">
                                About</Link>
                        </li>
                        <li>
                            <Link href="/about" className="navbar-links font-bold hover:text-[var(--nav-hover-color)]">
                                Properties</Link>
                        </li>
                        <li>
                            <Link href="/about" className="navbar-links font-bold hover:text-[var(--nav-hover-color)]">
                                Services</Link>
                        </li>
                        <li>
                            <Link href="/about" className="navbar-links font-bold hover:text-[var(--nav-hover-color)]">
                                Agents</Link>
                        </li>
                        <li>
                            <Link href="/about" className="navbar-links font-bold hover:text-[var(--nav-hover-color)]">
                                Blog</Link>
                        </li>
                        <li>
                            <MoreDropdown />
                        </li>
                        <li>
                            <Link href="/about" className="navbar-links font-bold hover:text-[var(--nav-hover-color)]">
                                Contact</Link>
                        </li>
                        <li>
                            <Link href="/about" className="navbar-links      bg-[var(--nav-hover-color)] text-white px-4 py-2 rounded-full hover:bg-[color-mix(in_srgb,_#2c7a7b,_transparent_25%)] transition">
                                Get Started</Link>
                        </li>

                    </ul>
                </div>

            </nav>
        </>
    )
}