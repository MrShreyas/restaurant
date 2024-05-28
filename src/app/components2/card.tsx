"use client"


export default function ContactCard(){
    return(
        <div
        className="flex z-10 flex-col self-center p-10 mt-0 max-w-full text-base leading-6 bg-white rounded-2xl shadow-2xl w-[797px] max-md:px-5 max-md:mt-0"
        >
        <div className="flex gap-5 justify-between max-md:flex-wrap">
            <div className="flex flex-col">
            <div className="font-bold text-stone-800">Name</div>
            <div
                className="justify-center items-start px-6 py-5 mt-2 text-center bg-white border border-solid border-stone-300 rounded-[72px] text-stone-500 max-md:px-5"
            >
                Enter your name
            </div>
            </div>
            <div className="flex flex-col">
            <div className="font-bold text-stone-800">Email</div>
            <div
                className="justify-center items-start px-6 py-5 mt-2 text-center bg-white border border-solid border-stone-300 rounded-[72px] text-stone-500 max-md:px-5"
            >
                Enter email address
            </div>
            </div>
        </div>
        <div className="mt-6 font-bold text-stone-800 max-md:max-w-full">Subject</div>
        <div
            className="justify-center items-start px-6 py-5 mt-2 text-center bg-white border border-solid border-stone-300 rounded-[72px] text-stone-500 max-md:px-5 max-md:max-w-full"
        >
            Write a subject
        </div>
        <div className="mt-6 font-bold text-stone-800 max-md:max-w-full">Message</div>
        <div
            className="justify-center items-start px-6 pt-6 pb-8 mt-2 text-center bg-white rounded-2xl border border-solid border-stone-300 text-stone-500 max-md:px-5 max-md:max-w-full"
        >
            Write your message
        </div>
        <div
            className="justify-center items-center px-8 py-5 mt-6 font-bold text-right text-white whitespace-nowrap bg-pink-800 rounded-[118px] max-md:px-5 max-md:max-w-full"
        >
            Send
        </div>
        </div>
    )
}