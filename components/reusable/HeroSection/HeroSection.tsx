import React from 'react'
import { BiSolidStar } from "react-icons/bi";
import { HeroSectionForm } from './HeroSectionForm';

export default function HeroSection() {
    return (
        <div className='hero-section flex flex-col gap-6 mx-16 my-6'>
            <section className='flex flex-row flex-wrap'>
                <section className='card'>
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
                <section className='card'>
                    <div className='card-header'>
                        <div className='card-title'>Discover Your Perfect Home in the Heart of the City</div>
                        <div className='card-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Browse thousands of verified listings from trusted agents.</div>
                    </div>
                    <div className='card-body'>

                    </div>
                </section>
            </section>
        </div>
    )
}