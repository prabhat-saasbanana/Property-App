import React from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { BsArrowRight } from "react-icons/bs";
import { BiCheck } from "react-icons/bi";
import { BsArrowUpRight } from "react-icons/bs";
import Link from 'next/link'

export default function FeaturedServices() {
    return (
        <section className="featured-properties flex flex-col gap-6 mx-16 my-24">
            <div className='text-center text-3xl font-bold'>Featured Properties</div>
            <div className="relative w-[10rem] m-auto h-px bg-gray-300">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-1 bg-[var(--accent-color)]  rounded"></div>
            </div>

            <p className='text-center'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, reiciendis.
            </p>


            <section className="flex flex-row justify-center items-center gap-6 mx-16 my-16">
                <article className="flex flex-col justify-center items-center gap-6 outline outline-gray-300 p-6 rounded-xl">
                    <div className="flex flex-row justify-between items-center gap-6 w-full">
                        <div className='flex justify-center items-center  p-4 rounded-full bg-[color-mix(in_srgb,var(--accent-color),transparent_90%)]'>
                            <FaMagnifyingGlass size={24} color="var(--accent-color)" className='' />
                        </div>
                        <p className='text-2xl font-bold text-gray-300'>
                            01
                        </p>
                    </div>
                    <Link href="#" className="text-3xl font-bold text-black hover:text-[var(--accent-color)] transition duration-300 text-center">
                        Property Search
                    </Link>
                    <p className="text-gray-700 text-center">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod tempor incididunt labore dolore magna
                    </p>
                    <ul className="flex flex-col gap-4">
                        <li className="text-sm text-gray-700 inline-flex items-center gap-2"><BiCheck/>Advanced Search Filters
                        </li>
                        <li className="text-sm text-gray-700 inline-flex items-center gap-2"><BiCheck/>360° Virtual Tours
                        </li>
                        <li className="text-sm text-gray-700 inline-flex items-center gap-2"><BiCheck/>Real-time Updates
                        </li>
                    </ul>
                    <Link href="#" className="flex-1 text-[var(--nav-hover-color)] bg-[color-mix(in_srgb,var(--accent-color),transparent_90%)] p-4 rounded-full text-center text-sm font-bold inline-flex items-center justify-center gap-2 outline outline-[var(--accent-color)]">
                        Explore Properties<BsArrowRight />
                    </Link>
                </article>
                <article className="flex flex-col justify-center items-center gap-6 p-6 rounded-xl bg-[var(--accent-color)] text-white">
                    <div className="flex flex-row justify-between items-center gap-6 w-full">
                        <div className='flex justify-center items-center  p-4 rounded-full bg-white'>
                            <FaMagnifyingGlass size={24} color="var(--accent-color)" className='' />
                        </div>
                        <p className='text-2xl font-bold'>
                            02
                        </p>
                    </div>
                    <Link href="#" className="text-3xl font-bold text-white text-center">
                        Market Analysis
                    </Link>
                    <p className="text-white text-center">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod tempor incididunt labore dolore magna
                    </p>
                    <ul className="flex flex-col gap-4">
                        <li className="text-sm text-white inline-flex items-center gap-2"><BiCheck/>Price Trend Reports
                        </li>
                        <li className="text-sm text-white inline-flex items-center gap-2"><BiCheck/>Investment Insights
                        </li>
                        <li className="text-sm text-white inline-flex items-center gap-2"><BiCheck/>Market Forecasting
                        </li>
                    </ul>
                    <Link href="#" className="flex-1 text-white bg-[var(--accent-color)] p-4 rounded-full text-center text-sm font-bold inline-flex items-center justify-center gap-2 outline outline-white">
                        Get Analysis<BsArrowRight />
                    </Link>
                </article>
                <article className="flex flex-col justify-center items-center gap-6 outline outline-gray-300 p-6 rounded-xl">
                    <div className="flex flex-row justify-between items-center gap-6 w-full">
                        <div className='flex justify-center items-center  p-4 rounded-full bg-[color-mix(in_srgb,var(--accent-color),transparent_90%)]'>
                            <FaMagnifyingGlass size={24} color="var(--accent-color)" className='' />
                        </div>
                        <p className='text-2xl font-bold text-gray-300'>
                            03
                        </p>
                    </div>
                    <Link href="#" className="text-3xl font-bold text-black hover:text-[var(--accent-color)] transition duration-300 text-center">
                        Property Management
                    </Link>
                    <p className="text-gray-700 text-center">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod tempor incididunt labore dolore magna
                    </p>
                    <ul className="flex flex-col gap-4">
                        <li className="text-sm text-gray-700 inline-flex items-center gap-2"><BiCheck/>Tenant Screening
                        </li>
                        <li className="text-sm text-gray-700 inline-flex items-center gap-2"><BiCheck/>Rental Collection
                        </li>
                        <li className="text-sm text-gray-700 inline-flex items-center gap-2"><BiCheck/>Maintenance Services
                        </li>
                    </ul>
                    <Link href="#" className="flex-1 text-[var(--nav-hover-color)] bg-[color-mix(in_srgb,var(--accent-color),transparent_90%)] p-4 rounded-full text-center text-sm font-bold inline-flex items-center justify-center gap-2 outline outline-[var(--accent-color)]">
                        Manage Now <BsArrowRight />
                    </Link>
                </article>
                <article className="flex flex-col justify-center items-center gap-6 outline outline-gray-300 p-6 rounded-xl">
                    <div className="flex flex-row justify-between items-center gap-6 w-full">
                        <div className='flex justify-center items-center  p-4 rounded-full bg-[color-mix(in_srgb,var(--accent-color),transparent_90%)]'>
                            <FaMagnifyingGlass size={24} color="var(--accent-color)" className='' />
                        </div>
                        <p className='text-2xl font-bold text-gray-300'>
                            04
                        </p>
                    </div>
                    <Link href="#" className="text-3xl font-bold text-black text-center hover:text-[var(--accent-color)] transition duration-300">
                        Legal Support
                    </Link>
                    <p className="text-gray-700 text-center">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod tempor incididunt labore dolore magna
                    </p>
                    <ul className="flex flex-col gap-4">
                        <li className="text-sm text-gray-700  inline-flex items-center gap-2"><BiCheck/>Contract Review
                        </li>
                        <li className="text-sm text-gray-700  inline-flex items-center gap-2"><BiCheck/>Title Verification
                        </li>
                        <li className="text-sm text-gray-700  inline-flex items-center gap-2"><BiCheck/>Legal Documentation
                        </li>
                    </ul>
                    <Link href="#" className="flex-1 text-[var(--nav-hover-color)] bg-[color-mix(in_srgb,var(--accent-color),transparent_90%)] p-4 rounded-full text-center text-sm font-bold inline-flex items-center justify-center gap-2 outline outline-[var(--accent-color)]">
                        Learn More <BsArrowRight />
                    </Link>
                </article>
            </section>

            <div className="flex justify-center items-center">
                <Link href="#" className="text-[var(--nav-hover-color)] bg-white p-6 rounded-full text-center text-sm font-bold inline-flex items-center justify-center gap-2 outline outline-[var(--accent-color)] inline">
                        Discover All Our Services<BsArrowUpRight />
                    </Link>
            </div>

        </ section>
    )
}
