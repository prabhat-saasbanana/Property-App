"use client"
import React from 'react'
import { BsBuildings } from "react-icons/bs";
import { BiCheckCircle } from "react-icons/bi";
import { BiAward } from "react-icons/bi";
import { BsHeadset } from "react-icons/bs";
import { BiRightArrowCircle } from "react-icons/bi";
import Image from 'next/image';
import Link from 'next/link';

export default function CallToActionSection1() {
    return (
        <div className='hero-section flex flex-col gap-6 mx-16 my-24'>
            <section className='flex flex-row gap-6'>
                <section className='card flex-1'>
                    <span className="premium-badge inline-flex items-center gap-2 bg-[var(--nav-hover-color)] text-white px-4 py-2 rounded-full ">
                        <BsBuildings className='inline align-middle' />
                        <span className=''>Premium Real Estate
                        </span>
                    </span>
                    <div className='card-header flex flex-col gap-4 mt-4'>
                        <div className='card-title text-[2.5rem] font-bold'>Transforming Real Estate Dreams Into Reality
                        </div>
                        <div className='card-description text-[1.1rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Browse thousands of verified listings from trusted agents.</div>
                    </div>
                    <section className="stats flex flex-row justify-start items-center gap-8 mt-16">
                        <div className="stats-item outline outline-gray-200 p-6 rounded-lg">
                            <div className="stat-value text-3xl font-bold text-[var(--accent-color)]">
                                2847+
                            </div>
                            <div className="stat-title text-sm text-gray-600">
                                Properties Listed
                            </div>
                        </div>
                        <div className="stats-item outline outline-gray-200 p-6 rounded-lg">
                            <div className="stat-value  text-3xl font-bold text-[var(--accent-color)]">
                                95%
                            </div>
                            <div className="stat-title text-sm text-gray-600">
                                Success Rate
                            </div>
                        </div>
                        <div className="stats-item outline outline-gray-200 p-6 rounded-lg">
                            <div className="stat-value  text-3xl font-bold text-[var(--accent-color)]">
                                24/7
                            </div>
                            <div className="stat-title text-sm text-gray-600">
                                Client Support
                            </div>
                        </div>
                    </section>
                    <ul className='feature-list flex flex-col gap-4 mt-12 list-none'>
                        <li className="feature-items inline-flex items-center gap-4">
                            <span className='text-[var(--accent-color)]'><BiCheckCircle size={24} /></span>Expert market analysis and pricing strategies
                        </li>
                        <li className="feature-items inline-flex items-center gap-4">
                            <span className='text-[var(--accent-color)]'><BiCheckCircle size={24} /></span>Personalized property matching services
                        </li>
                        <li className="feature-items inline-flex items-center gap-4">
                            <span className='text-[var(--accent-color)]'><BiCheckCircle size={24} /></span>Professional photography and virtual tours
                        </li>
                    </ul>

                    <section className='call-to-action flex flex-row gap-4 mt-12'>
                        <Link href="#" className="flex-1 bg-[var(--nav-hover-color)] text-white p-4 rounded-full hover:bg-[color-mix(in_srgb,_#2c7a7b,_transparent_25%)] transition text-lg text-center font-semibold inline-flex items-center justify-center gap-2">
                            Learn More About Us <BiRightArrowCircle />
                        </Link>
                        <div className="assistance flex-1">
                            <div className='flex flex-row gap-4 items-center'>
                                <div className="w-12 h-12 bg-[var(--accent-color)] text-white rounded-full flex items-center justify-center">
                                    <BsHeadset className="w-6 h-6" />
                                </div>

                                <div>
                                    <div>Need Assistance?</div>
                                    <div>
                                        <a href="tel:+1234567890" className="text-[var(--accent-color)] font-bold">+1 (234) 567-890</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                <section className="image-column flex-1 relative w-fit">
                    {/* Exterior */}
                    <Image
                        src="/images/hero/real-estate/property-exterior-7.webp"
                        alt="Exterior Image"
                        width={600}
                        height={400}
                        priority={true}
                        className="rounded-lg shadow-lg object-cover w-full mt-16"
                    />

                    <div className="flex flex-row gap-4 mt-4">
                        {/* Interior */}
                        <Image
                            src="/images/hero/real-estate/property-interior-8.webp"
                            alt="Interior Image"
                            width={250}
                            height={200}
                            className="rounded-lg shadow-md object-cover flex-1"
                        />

                        {/* Person */}
                        <Image
                            src="/images/hero/real-estate/property-interior-8.webp"
                            alt="Real Estate Person Image"
                            width={250}
                            height={200}
                            className="rounded-lg shadow-md object-cover flex-1"
                        />
                    </div>

                    {/* Awards */}
                    <div className="absolute top-80 right-8 flex items-center gap-4 drop-shadow-lg bg-white p-4 rounded-lg w-max">
                        <div className="w-12 h-12 bg-[var(--accent-color)] text-white rounded-xl flex items-center justify-center">
                            <BiAward className="w-6 h-6" />
                        </div>
                        <div className="flex flex-col">
                            <div className="font-bold text-2xl">+12</div>
                            <div className="text-sm text-gray-600">Awards Won</div>
                        </div>
                    </div>
                </section>

            </section>
        </div>
    )
}