"use client"

export default function Footer() {
    return(
        <div
        className="flex justify-center items-center px-16 py-20 w-full bg-zinc-700 max-md:px-5 max-md:max-w-full"
        >
        <div
            className="flex flex-col mt-10 mb-1.5 w-full max-w-[1296px] max-md:max-w-full"
        >
            <div className="max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col max-md:mt-10">
                    <div
                    className="flex gap-3.5 text-4xl font-semibold tracking-tight leading-7 text-white"
                    >
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea73a94d8c64e12927b51b2e23af8b4457a9dab7f28bebd30b58a5cde6281132?"
                        className="shrink-0 w-14 aspect-[1.02]"
                    />
                    <div className="flex-auto my-auto italic">Asmita's Kitchen</div>
                    </div>
                    <div className="mt-8 text-base leading-6 text-stone-400">
                    In the new era of technology we look a in the future with
                    certainty and pride to for our company and.
                    </div>
                    <div className="flex gap-3 pr-20 mt-8 max-md:pr-5">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d6c05067fff89397c8213227513b4e5ef53f87227286d968951fc5e641b149b?"
                        className="shrink-0 aspect-square w-[35px]"
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/697cd861ac74e048c3a5d16a6d13a641203d7a32a3b136a1d2fcdc34b1cd35cd?"
                        className="shrink-0 aspect-square w-[35px]"
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f59e412e09769b850945b3cccea6f2ca5f85e28dcc7eb0eaf06dfb6528ef90ce?"
                        className="shrink-0 aspect-square w-[35px]"
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/38de0204d632321684bb0db59808ecb693058eb970c6ab98629a57981f9f1df2?"
                        className="shrink-0 aspect-square w-[35px]"
                    />
                    </div>
                </div>
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div
                    className="flex gap-5 justify-between text-base leading-6 text-stone-300 max-md:mt-10"
                >
                    <div className="flex flex-col whitespace-nowrap">
                    <div className="font-bold text-white">Pages</div>
                    <div className="mt-10">Home</div>
                    <div className="mt-5">About</div>
                    <div className="mt-5">Menu</div>
                    <div className="mt-5">Pricing</div>
                    <div className="mt-5">Blog</div>
                    <div className="mt-5">Contact</div>
                    <div className="mt-5">Delivery</div>
                    </div>
                    <div className="flex flex-col">
                    <div className="font-bold text-white">Utility Pages</div>
                    <div className="mt-10">Start Here</div>
                    <div className="mt-5">Styleguide</div>
                    <div className="mt-5">Password Protected</div>
                    <div className="mt-5">404 Not Found</div>
                    <div className="mt-5">Licenses</div>
                    <div className="mt-5">Changelog</div>
                    <div className="mt-5">View More</div>
                    </div>
                </div>
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow max-md:mt-10">
                    <div className="text-base font-bold leading-6 text-white">
                    Follow Us On Instagram
                    </div>
                    <div className="mt-10">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                        <img
                            loading="lazy"
                            src="footer1.png"
                            className="grow shrink-0 max-w-full aspect-[1.14] w-[194px] max-md:mt-4"
                        />
                        </div>
                        <div
                        className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full"
                        >
                        <img
                            loading="lazy"
                            src="footer2.png"
                            className="grow shrink-0 max-w-full aspect-[1.14] w-[194px] max-md:mt-4"
                        />
                        </div>
                    </div>
                    </div>
                    <div className="mt-4">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                        <img
                            loading="lazy"
                            src="footer3.png"
                            className="grow shrink-0 max-w-full aspect-[1.14] w-[194px] max-md:mt-4"
                        />
                        </div>
                        <div
                        className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full"
                        >
                        <img
                            loading="lazy"
                            src="footer4.png"
                            className="grow shrink-0 max-w-full aspect-[1.14] w-[194px] max-md:mt-4"
                        />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div
            className="shrink-0 mt-24 h-px border border-solid bg-stone-700 border-stone-700 max-md:mt-10 max-md:max-w-full"
            ></div>
            <div
            className="self-center mt-9 text-base leading-6 text-stone-400 max-md:max-w-full"
            >
            Copyright © 2023 Hashtag Developer. All Rights Reserved
            </div>
        </div>
        </div>

    )
}