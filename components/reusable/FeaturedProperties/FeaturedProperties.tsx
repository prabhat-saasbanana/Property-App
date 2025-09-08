import React from 'react'
import Image from 'next/image'

export default function FeaturedProperties() {
  return (
    <section className="featured-properties flex flex-col gap-6 mx-16 my-24">
      <div className='text-center text-3xl font-bold'>Featured Properties</div>
      <div className="relative w-[10rem] m-auto h-px bg-gray-300">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-1 bg-[var(--accent-color)]  rounded"></div>
      </div>

      <p className='text-center'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, reiciendis.
      </p>


      <section className="parent grid grid-cols-12 grid-rows-12 gap-2 h-screen my-8">
        <div className="col-span-8 row-span-12 bg-blue-200 flex items-center justify-center">
          <Image
            src="/images/hero/real-estate/property-exterior-6.webp"
            alt="Featured Property"
            width={800}
            height={600}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="col-start-9 col-span-4 row-span-4 bg-red-200 flex items-center justify-center">
          <Image
            src="/images/hero/real-estate/property-interior-2.webp"
            alt="Featured Property"
            width={800}
            height={600}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="col-start-9 col-span-4 row-start-5 row-span-4 bg-green-200 flex items-center justify-center">
          <Image
            src="/images/hero/real-estate/property-exterior-3.webp"
            alt="Featured Property"
            width={800}
            height={600}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="col-start-9 col-span-4 row-start-9 row-span-4 bg-yellow-200 flex items-center justify-center">
          <Image
            src="/images/hero/real-estate/property-interior-7.webp"
            alt="Featured Property"
            width={800}
            height={600}
            className="object-cover w-full h-full"
          />
        </div>
      </section>

    </ section>
  )
}
