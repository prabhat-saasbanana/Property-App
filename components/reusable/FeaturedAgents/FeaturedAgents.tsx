import React from 'react'
import { BsArrowUpRight } from "react-icons/bs";
import Link from 'next/link'
import Image from 'next/image';

export default function FeaturedAgents() {
    return (
        <section className="featured-agents flex flex-col gap-6 mx-16 my-24">
            <div className='text-center text-3xl font-bold'>Featured Agents</div>
            <div className="relative w-[10rem] m-auto h-px bg-gray-300">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-1 bg-[var(--accent-color)]  rounded"></div>
            </div>

            <p className='text-center'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, reiciendis.
            </p>


            <section className="flex flex-row justify-center items-center gap-6 mx-16 my-16">
                <article className="flex flex-col justify-center items-center gap-6 outline outline-gray-300 p-6 rounded-xl flex-1">
                    <Image src="/images/hero/real-estate/agent-5.webp" alt="Agent 1" fill/>

                </article>
                <article className="flex flex-col justify-center items-center gap-6 outline outline-gray-300 p-6 rounded-xl flex-1">

                </article>
                <article className="flex flex-col justify-center items-center gap-6 outline outline-gray-300 p-6 rounded-xl flex-1">

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
