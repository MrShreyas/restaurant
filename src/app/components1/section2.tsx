

export default function Section2() {
    return(
        <div className="flex flex-col pb-20 w-full bg-white max-md:max-w-full">
        <div
            className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-20 w-full text-6xl font-medium text-center text-white leading-[61px] min-h-[690px] max-md:px-5 max-md:max-w-full max-md:text-4xl max-md:leading-[49px]"
        >
            {/* <img
            loading="lazy"
            srcset="..."
            className="object-cover absolute inset-0 size-full"
            /> */}
            <div
            className="flex relative flex-col mt-32 mb-24 max-w-full w-[596px] max-md:my-10 max-md:text-4xl max-md:leading-[49px]"
            >
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ae361d69c8cb842292051e557888d9bdc68549fa8c753b516d83e4958a82e99?"
                className="self-center max-w-full aspect-square w-[106px]"
            />
            <div className="mt-9 max-md:max-w-full max-md:text-4xl max-md:leading-[49px]">
                Feel the authentic & original taste from us
            </div>
            </div>
        </div>
        <div
            className="flex gap-5 justify-between self-center px-5 mt-20 mb-4 w-full max-w-[1272px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full"
        >
            <div className="flex gap-5 justify-between">
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/36a1262d41dd32f3e88240f896d96406d9fac046ab709b1490c6db5a5193c0f7?"
                className="shrink-0 self-start w-12 aspect-square"
            />
            <div className="flex flex-col">
                <div className="text-xl font-bold leading-7 text-center text-stone-800">
                Multi Cuisine
                </div>
                <div className="mt-4 text-base leading-6 text-stone-700">
                In the new era of technology we look in the future with certainty
                life.
                </div>
            </div>
            </div>
            <div className="flex gap-5 justify-between">
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/af11e709379d502031bce3f5a2cfc5a582901b0b88fe341bc5b73784ea34e9cb?"
                className="shrink-0 self-start w-12 aspect-square"
            />
            <div className="flex flex-col">
                <div className="text-xl font-bold leading-7 text-center text-stone-800">
                Easy To Order
                </div>
                <div className="mt-4 text-base leading-6 text-stone-700">
                In the new era of technology we look in the future with certainty
                life.
                </div>
            </div>
            </div>
            <div className="flex gap-5 justify-between">
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/249a2160e622122a76b69c277e5e5da2f34e4eb30988d012efef58a3ef30341e?"
                className="shrink-0 self-start w-12 aspect-square"
            />
            <div className="flex flex-col">
                <div className="text-xl font-bold leading-7 text-center text-stone-800">
                Fast Delivery
                </div>
                <div className="mt-4 text-base leading-6 text-stone-700">
                In the new era of technology we look in the future with certainty
                life.
                </div>
            </div>
            </div>
        </div>
        </div>

    )
}