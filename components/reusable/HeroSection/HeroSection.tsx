import React from 'react'
import { BiSolidStar } from "react-icons/bi";
import { HeroSectionForm } from './HeroSectionForm';
import Image from 'next/image';
import heroImage1 from '@/public/images/hero/real-estate/property-exterior-3.webp';
import personImage1 from '@/public/images/hero/real-estate/agent-4.webp';
import interiorImage1 from '@/public/images/hero/real-estate/property-interior-7.webp';

export default function HeroSection() {
    return (
        <div className='hero-section flex flex-col gap-6 mx-16 my-6'>
            <section className='flex flex-row gap-6'>
                <section className='card flex-1'>
                    <span className="hero-badge inline-flex items-center gap-2 bg-[var(--nav-hover-color)] text-white px-4 py-2 rounded-full ">
                        <BiSolidStar className='inline align-middle' />
                        <span className=''>Premium Properties</span>
                    </span>
                    <div className='card-header flex flex-col gap-4'>
                        <div className='card-title text-[2.5rem] font-bold'>Discover Your Perfect Home in the Heart of the City</div>
                        <div className='card-description text-[1.1rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Browse thousands of verified listings from trusted agents.</div>
                    </div>
                    <div className='card-body my-6'>
                        <HeroSectionForm />
                    </div>

                </section>
                <section className="image-column flex-1 relative w-fit">
                    {/* Main image */}
                    <Image
                        src={heroImage1}
                        alt="Hero Image"
                        priority={true}
                        className="rounded-lg shadow-lg object-cover w-full h-full mt-16"
                    />

                    {/* Small image in top-left */}
                    <Image
                        src={interiorImage1}
                        alt="Interior Image"
                        width={200}
                        className="rounded-lg shadow-md object-fit absolute top-[0.5rem] left-8 border-2 border-white"
                    />

                    {/* Top-left small card */}
                    <div className="absolute top-20 right-5 flex flex-col justify-center items-start gap-2 drop-shadow-lg bg-white p-3 rounded-lg w-max">
                        <div className="font-bold text-xl text-[var(--accent-color)]">
                            $850,000
                        </div>
                        <div className="font-bold text-sm text-gray-600">FEATURED</div>
                    </div>

                    {/* Bottom-right agent card */}
                    <div className="absolute bottom-[-6rem] left-8 flex items-center gap-4 drop-shadow-lg bg-white p-4 rounded-lg w-max">
                        <Image
                            src={personImage1}
                            alt="Real Estate Person"
                            width={50}
                            className="rounded-full outline outline-1 outline-[var(--accent-color)]"
                        />
                        <div className="flex flex-col">
                            <div className="font-bold">David Johnson</div>
                            <div className="text-sm text-gray-600">Top Real Estate Agent</div>
                            <div className="text-sm text-gray-600">
                                <span>4.9</span> (127 Reviews)
                            </div>
                        </div>
                    </div>
                </section>

            </section>
            <section className="stats flex flex-row justify-start items-center gap-8 mt-16 px-12">
                <div className="stats-item">
                    <div className="stat-value text-3xl font-bold text-[var(--accent-color)]">
                        2847+
                    </div>
                    <div className="stat-title text-sm text-gray-600">
                        Properties Listed
                    </div>
                </div>
                <div className="stats-item">
                    <div className="stat-value  text-3xl font-bold text-[var(--accent-color)]">
                        156+
                    </div>
                    <div className="stat-title text-sm text-gray-600">
                        Verified Agents
                    </div>
                </div>
                <div className="stats-item">
                    <div className="stat-value  text-3xl font-bold text-[var(--accent-color)]">
                        98%
                    </div>
                    <div className="stat-title text-sm text-gray-600">
                        Client Satisfaction
                    </div>
                </div>
            </section>
        </div>
    )
}