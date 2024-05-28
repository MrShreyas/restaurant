"use client"

import ContactCard from "../components2/card";


export default function SectionA1() {
    return(
        <div
        className="flex flex-col items-center px-5 pb-20 w-full bg-stone-50 max-md:max-w-full"
        >
        
        <div
            className="mt-20 text-8xl text-center leading-[96px] text-stone-800 max-md:mt-10 max-md:max-w-full max-md:text-4xl"
        >
            Contact Us
        </div>
        <div
            className="mt-6 mb-52 text-lg leading-7 text-center text-gray-600 w-[545px] max-md:mb-10 max-md:max-w-full"
        >
            We consider all the drivers of change gives you the components you need to
            change to create a truly happens.
        </div>
        <ContactCard></ContactCard>
        <div className="self-center px-5 mt-20 max-w-full w-[776px] max-md:mt-10">
    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
      <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col font-bold max-md:mt-10">
          <div className="text-xl leading-7 text-stone-800">Call Us:</div>
          <div className="mt-6 text-2xl tracking-tighter text-pink-800">
            +1-234-567-8900
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col text-stone-800 max-md:mt-10">
          <div className="text-xl font-bold leading-7">Hours:</div>
          <div className="mt-6 text-lg leading-7">
            Mon-Fri: 11am - 8pm Sat, Sun: 9am - 10pm
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col grow text-stone-800 max-md:mt-10">
          <div className="text-xl font-bold leading-7">Our Location:</div>
          <div className="mt-6 text-lg leading-7">
            123 Bridge Street Nowhere Land, LA 12345 United States
          </div>
        </div>
      </div>
    </div>
  </div>
        </div>

    )
}