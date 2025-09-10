"use client";
import { BsSend } from "react-icons/bs";
import { BiChevronRight } from "react-icons/bi";
import { BsFillGeoAltFill } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { BiEnvelope } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer gap-6 mx-16 my-24">
            <div className="footer-top grid grid-cols-12 grid-rows-12 gap-8">
                <div className="col-span-4 row-span-12 flex flex-col justify-start gap-4 mt-4">
                    <h1 className="text-2xl font-bold text-black">TheProperty</h1>
                    <p className="text-gray-600">
                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                        posuere cubilia curae. Donec velit neque auctor sit amet aliquam vel
                        ullamcorper sit amet ligula.
                    </p>
                    <h3 className="text-xl font-bold">Stay Updated</h3>
                    <form className="flex flex-row items-center justify-start">
                        <input
                            type="text"
                            name="email"
                            id="email"
                            className="p-4 rounded-tl-full rounded-bl-full outline-none drop-shadow-lg bg-white p-4 mt-4"
                            placeholder="Enter your email"
                        />
                        <button className="p-4 rounded-tr-full rounded-br-full drop-shadow-lg bg-[var(--accent-color)] text-white p-4 mt-4">
                            <BsSend size={24} />
                        </button>
                    </form>
                </div>
                <div className="col-start-5 col-span-2 row-span-12 mt-4 flex flex-col gap-4">
                    <h1 className="text-xl font-bold text-black">Company</h1>
                    <ul className="list-none flex flex-col gap-2 ">
                        <li className="links text-gray-600">
                            <Link href="#" className=" inline-flex items-center gap-2">
                                <BiChevronRight />
                                About
                            </Link>
                        </li>
                        <li className="links text-gray-600 inline-flex items-center gap-2">
                            <Link href="#" className=" inline-flex items-center gap-2">
                                <BiChevronRight />
                                Careers
                            </Link>
                        </li>
                        <li className="links text-gray-600 inline-flex items-center gap-2">
                            <Link href="#" className=" inline-flex items-center gap-2">
                                <BiChevronRight />
                                Press
                            </Link>
                        </li>
                        <li className="links text-gray-600 inline-flex items-center gap-2">
                            <Link href="#" className=" inline-flex items-center gap-2">
                                <BiChevronRight />
                                Blog
                            </Link>
                        </li>
                        <li className="links text-gray-600 inline-flex items-center gap-2">
                            <Link href="#" className=" inline-flex items-center gap-2">
                                <BiChevronRight />
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="col-start-7 col-span-2 row-span-12  mt-4 flex flex-col gap-4">
                    <h1 className="text-xl font-bold text-black">Solutions</h1>
                    <ul className="list-none flex flex-col gap-2 ">
                        <li className="links text-gray-600">
                            <Link href="#" className=" inline-flex items-center gap-2">
                                <BiChevronRight />
                                Digital Strategy
                            </Link>
                        </li>
                        <li className="links text-gray-600 inline-flex items-center gap-2">
                            <Link href="#" className=" inline-flex items-center gap-2">
                                <BiChevronRight />
                                Cloud Computing
                            </Link>
                        </li>
                        <li className="links text-gray-600 inline-flex items-center gap-2">
                            <Link href="#" className=" inline-flex items-center gap-2">
                                <BiChevronRight />
                                Data Analytics
                            </Link>
                        </li>
                        <li className="links text-gray-600 inline-flex items-center gap-2">
                            <Link href="#" className=" inline-flex items-center gap-2">
                                <BiChevronRight />
                                AI Solutions
                            </Link>
                        </li>
                        <li className="links text-gray-600 inline-flex items-center gap-2">
                            <Link href="#" className=" inline-flex items-center gap-2">
                                <BiChevronRight />
                                Cybersecurity
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="col-start-9 col-span-4 row-span-12 flex flex-col justify-start gap-4 mt-4">
                    <h1 className="text-xl font-bold text-black">Get in Touch</h1>
                    <p className="text-gray-600 inline-flex items-center gap-4">
                        <div className="w-12 h-12 bg-[var(--accent-color)] text-white rounded-full flex items-center justify-center">
                            <BsFillGeoAltFill className="w-4 h-4" />
                        </div>
                        2847 Maple Avenue<br />
                        Los Angeles, CA 90210<br />
                        United States<br />
                    </p>
                    <p className="text-gray-600 inline-flex items-center gap-4">
                        <div className="w-12 h-12 bg-[var(--accent-color)] text-white rounded-full flex items-center justify-center">
                            <BsTelephone className="w-4 h-4" />
                        </div>
                        +1 (555) 987-6543
                        
                    </p>
                    <p className="text-gray-600 inline-flex items-center gap-4">
                        <div className="w-12 h-12 bg-[var(--accent-color)] text-white rounded-full flex items-center justify-center">
                            <BiEnvelope className="w-4 h-4" />
                        </div>
                        contact@example.com
                    </p>
                    {/* Icons */}
                    <div className="flex flex-row justify-start items-center gap-2">
                        <div className="w-12 h-12 bg-gray-200 text-[var(--default-color)]/70 rounded-full flex items-center justify-center">
                            <IoLogoFacebook
                             className="w-4 h-4" />
                        </div>
                        <div className="w-12 h-12 bg-gray-200 text-[var(--default-color)]/70 rounded-full flex items-center justify-center">
                            <FaXTwitter className="w-4 h-4" />
                        </div>
                        <div className="w-12 h-12 bg-gray-200 text-[var(--default-color)]/70 rounded-full  flex items-center justify-center">
                            <FaLinkedin className="w-4 h-4" />
                        </div>
                        <div className="w-12 h-12 bg-gray-200 text-[var(--default-color)]/70 rounded-full  flex items-center justify-center">
                            <FaYoutube className="w-4 h-4" />
                        </div>
                        <div className="w-12 h-12 bg-gray-200 text-[var(--default-color)]/70 rounded-full  flex items-center justify-center">
                            <FaGithub className="w-4 h-4" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
