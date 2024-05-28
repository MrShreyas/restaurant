"use client"

import { useRouter } from "next/navigation";

export default function Introduction(){

  const router = useRouter(); 

  function clickHandler(section:any){
    if (section==1) {
      router.push("/book");
    }else if (section==2) {
      router.push("/menu")
    }
    
}
    return(
        <div className="flex flex-col w-full bg-stone-50 max-md:max-w-full">
         
        <div
          className="flex overflow-hidden relative flex-col items-center p-20 mt-5 w-full text-center min-h-[802px] max-md:px-5 max-md:max-w-full"
        >
          <img
            loading="lazy"
            src="image110.png"
            className="object-cover absolute inset-0 size-full"
          />
          <div
            className="relative mt-32 text-8xl leading-[96px] text-stone-800 w-[667px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-10"
          >
            Best food for
            <br />
            your taste
          </div>
          <div
            className="relative mt-8 text-xl leading-8 text-stone-800 w-[537px] max-md:max-w-full"
          >
            Discover delectable cuisine and unforgettable moments in our welcoming,
            culinary haven.
          </div>
          <div
            className="flex relative gap-4 mt-10 mb-20 text-base font-bold leading-6 text-right max-md:mb-10"
          >
            <div onClick={()=>clickHandler(1)}
              className="cursor-pointer justify-center px-8 py-5 text-white bg-pink-800 rounded-[118px] max-md:px-5"
            >
              Book A Table
            </div>
            <div onClick={()=>clickHandler(2)}
              className="cursor-pointer justify-center px-8 py-5 text-gray-900 border-2 border-solid border-stone-800 rounded-[118px] max-md:px-5"
            >
              Explore Menu
            </div>
          </div>
        </div>
        </div>
    )
}