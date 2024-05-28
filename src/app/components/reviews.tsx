"use client"

export default function Reviews() {
    return(
        <div
        className="flex flex-col items-center p-20 w-full bg-white max-md:px-5 max-md:max-w-full"
        >
        <div
            className="mt-5 text-6xl font-medium text-center leading-[60.5px] text-stone-800 max-md:max-w-full max-md:text-4xl"
        >
            What Our Customers Say
        </div>
        <div className="mt-16 mb-7 w-full max-w-[1296px] max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center max-md:mt-6">
                <div
                    className="flex flex-col px-9 py-10 w-full rounded-xl bg-stone-50 max-md:px-5"
                >
                    <div className="text-2xl font-bold tracking-tighter text-pink-800">
                    “The best restaurant”
                    </div>
                    <div className="mt-6 text-lg leading-7 text-stone-700">
                    Last night, we dined at place and were simply blown away. From the
                    moment we stepped in, we were enveloped in an inviting atmosphere
                    and greeted with warm smiles.
                    </div>
                    <div
                    className="shrink-0 mt-8 h-px border border-solid bg-stone-300 border-stone-300"
                    ></div>
                    <div className="flex gap-5 mt-8 text-base leading-6">
                    {/* <img
                        loading="lazy"
                        srcset="..."
                        className="shrink-0 rounded-full aspect-square w-[70px]"
                    /> */}
                    <div className="flex flex-col my-auto">
                        <div className="font-bold text-stone-800">Sophire Robson</div>
                        <div className="text-stone-700">Los Angeles, CA</div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center max-md:mt-6">
                <div
                    className="flex flex-col px-9 py-10 w-full rounded-xl bg-stone-50 max-md:px-5"
                >
                    <div className="text-2xl font-bold tracking-tighter text-pink-800">
                    “Simply delicious”
                    </div>
                    <div className="mt-6 text-lg leading-7 text-stone-700">
                    Place exceeded my expectations on all fronts. The ambiance was
                    cozy and relaxed, making it a perfect venue for our anniversary
                    dinner. Each dish was prepared and beautifully presented.
                    </div>
                    <div
                    className="shrink-0 mt-8 h-px border border-solid bg-stone-300 border-stone-300"
                    ></div>
                    <div className="flex gap-5 mt-8 text-base leading-6">
                    {/* <img
                        loading="lazy"
                        srcset="..."
                        className="shrink-0 rounded-full aspect-square w-[70px]"
                    /> */}
                    <div className="flex flex-col my-auto">
                        <div className="font-bold text-stone-800">Matt Cannon</div>
                        <div className="text-stone-700">San Diego, CA</div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center max-md:mt-6">
                <div
                    className="flex flex-col px-9 py-10 w-full rounded-xl bg-stone-50 max-md:px-5"
                >
                    <div className="text-2xl font-bold tracking-tighter text-pink-800">
                    “One of a kind restaurant”
                    </div>
                    <div className="mt-6 text-lg leading-7 text-stone-700">
                    The culinary experience at place is first to none. The atmosphere
                    is vibrant, the food - nothing short of extraordinary. The food
                    was the highlight of our evening. Highly recommended.
                    </div>
                    <div
                    className="shrink-0 mt-8 h-px border border-solid bg-stone-300 border-stone-300"
                    ></div>
                    <div className="flex gap-5 mt-8 text-base leading-6">
                    {/* <img
                        loading="lazy"
                        srcset="..."
                        className="shrink-0 rounded-full aspect-square w-[70px]"
                    /> */}
                    <div className="flex flex-col my-auto">
                        <div className="font-bold text-stone-800">Andy Smith</div>
                        <div className="text-stone-700">San Francisco, CA</div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>

    )
}