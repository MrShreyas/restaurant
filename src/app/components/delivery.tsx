"use client"


export default function DeliveryService() {
    return(
        <div
        className="flex justify-center items-center px-16 py-20 w-full bg-stone-50 max-md:px-5 max-md:max-w-full"
        >
        <div className="mt-10 mb-4 w-full max-w-[1296px] max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[62%] max-md:ml-0 max-md:w-full">
                <div className="grow max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-3/5 max-md:ml-0 max-md:w-full">
                    <img
                        loading="lazy"
                        src="pasta-making-ok-sign 1.png"
                        className="w-full aspect-[0.72] max-md:mt-6 max-md:max-w-full"
                    />
                    </div>
                    <div className="flex flex-col ml-5 w-2/5 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow mt-8 max-md:mt-10">
                        <img
                        loading="lazy"
                        src="salads.png"
                        className="w-full aspect-[0.87]"
                        />
                        <img
                        loading="lazy"
                        src="kebab-set-table 1.png"
                        className="mt-6 w-full aspect-[1.2]"
                        />
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full">
                <div
                className="flex flex-col self-stretch my-auto text-xl font-medium leading-7 text-stone-800 max-md:mt-10 max-md:max-w-full"
                >
                <div
                    className="text-6xl leading-[61px] max-md:max-w-full max-md:text-4xl max-md:leading-[49px]"
                >
                    Fastest Food Delivery in City
                </div>
                <div
                    className="mt-5 text-base leading-6 text-stone-700 max-md:max-w-full"
                >
                    Our visual designer lets you quickly and of drag a down your way to
                    customapps for both keep desktop.
                </div>
                <div className="flex gap-5 mt-12 max-md:flex-wrap max-md:mt-10">
                    <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1928087754a5386494af86ac405e55d47af734d2ad57dab68e09e287d0657ac6?"
                    className="shrink-0 aspect-square w-[30px]"
                    />
                    <div className="my-auto">Delivery within 30 minutes</div>
                </div>
                <div className="flex gap-5 mt-5 max-md:flex-wrap">
                    <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e2bbb94db5857a41dc1aca235aca187238c35688fa15f3c925ec5c43d1f6203?"
                    className="shrink-0 aspect-square w-[30px]"
                    />
                    <div className="my-auto">Best Offer & Prices</div>
                </div>
                <div className="flex gap-5 mt-5 max-md:flex-wrap">
                    <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1af29364779dc2ae035dc893461aa6dc1217043f79e5237027db0b3fe7528227?"
                    className="shrink-0 aspect-square w-[30px]"
                    />
                    <div className="my-auto">Online Services Available</div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>

    )
}