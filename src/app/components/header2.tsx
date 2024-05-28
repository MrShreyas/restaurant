"use client"

import { useRouter } from "next/navigation";

export default function Header2() {

    const router = useRouter();
    
    function clickHandler(section:any){
        console.log(section);
        if (section==1) {
            router.push("/homepage");
        }else if (section==2) {
            router.push('/about');
        }else if (section==3) {
            router.push('/menu')
        }else if (section==4) {
            router.push('/contact')
        }
        else if (section==5) {
            router.push('/book')
        }
    }


    return(
        <div
        className="flex gap-5 justify-between items-center self-center px-5 mt-7 w-full text-base leading-6 max-w-[1293px] max-md:flex-wrap max-md:max-w-full"
        >
        <div
            className="flex gap-3.5 self-stretch text-5xl font-semibold tracking-tight leading-7 text-zinc-700"
        >
            <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a1e7ff32c6e74a934ff05af3cdaaa8a801f2af2e2d891f14c028eb854975e4c?"
            className="shrink-0 w-14 aspect-[1.02]"
            />
            <div className="flex-auto my-auto italic">Asmita's Kitchen</div>
        </div>
        <div
            className="flex gap-5 justify-between items-center self-stretch my-auto font-medium whitespace-nowrap text-stone-800"
        >
            <div onClick={()=>clickHandler(1)}
            className="cursor-pointer justify-center self-stretch px-4 py-1 bg-stone-300 rounded-[34px]"
            >
            Home
            </div>
            
            <div onClick={()=>clickHandler(2)} className="cursor-pointer self-stretch my-auto">About</div>
            <div onClick={()=>clickHandler(3)} className="cursor-pointer self-stretch my-auto">Menu</div>
            <div onClick={()=>clickHandler(4)} className="cursor-pointer self-stretch my-auto">Contact</div>
        </div>
        <div
            onClick={()=>clickHandler(5)}
            className="cursor-pointer justify-center self-stretch px-6 py-3 my-auto font-bold text-right text-gray-900 border-2 border-solid border-stone-800 rounded-[118px] max-md:px-5"
        >
            Book A Table
        </div>
        </div>

    )
}