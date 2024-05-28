"use client"

import { useRouter } from "next/navigation";


export default function MenuSection(){

    const router = useRouter(); 

    function clickHandler(){

    router.push("/about");
    }
    return(

        <div
        className="flex justify-center items-center px-16 py-20 w-full bg-stone-50 max-md:px-5 max-md:max-w-full"
        >
        <div className="mt-10 mb-4 w-full max-w-[1296px] max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <img
                loading="lazy"
                src="Image.png"
                className="grow w-full aspect-[1.05] max-md:mt-10 max-md:max-w-full"
                />
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div
                className="flex flex-col self-stretch my-auto text-base font-medium text-stone-800 max-md:mt-10 max-md:max-w-full"
                >
                <div
                    className="text-6xl leading-[61px] max-md:max-w-full max-md:text-4xl max-md:leading-[49px]"
                >
                    We provide healthy food for your family.
                </div>
                <div className="mt-6 text-lg leading-7 max-md:max-w-full">
                    Our story began with a vision to create a unique dining experience
                    that merges fine dining, exceptional service, and a vibrant
                    ambiance. Rooted in city's rich culinary culture, we aim to honor
                    our local roots while infusing a global palate.
                </div>
                <div className="mt-6 leading-6 text-stone-700 max-md:max-w-full">
                    At place, we believe that dining is not just about food, but also
                    about the overall experience. Our staff, renowned for their warmth
                    and dedication, strives to make every visit an unforgettable event.
                </div>
                <div onClick={()=>clickHandler()}
                    className="cursor-pointer justify-center self-start px-8 py-5 mt-10 font-bold text-right text-gray-900 border-2 border-solid border-stone-800 leading-[150%] rounded-[118px] max-md:px-5"
                >
                    More About Us
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>

    )
}