"use client"

import axios from "axios";
import ViewCounter from "./viewcount";


export default function Header1() {

    async function ShowDateTime() {
        const now = new Date();

        // Get the current date and time components
        const year = now.getFullYear();
        const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-indexed
        const day = now.getDate().toString().padStart(2, '0');
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');

        // Format the date and time string
        const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
        console.log(formattedDateTime);
        // const response = await axios.get('/api/viewcount');
        // const data = await response;
        // console.log(data)
        

    }

    

    return(
        <div
        className="flex justify-center items-center px-16 py-2.5 w-full bg-zinc-700 max-md:px-5 max-md:max-w-full"
        >
        <div
            className="flex gap-5 justify-between w-full max-w-[1296px] max-md:flex-wrap max-md:max-w-full"
        >
            <div
            className="flex gap-5 justify-between my-auto text-base leading-6 text-stone-50"
            >
            <div className="flex gap-2">
                <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e8d512376fafd52e1015b871f69eab6c954b5b2c52f974f12052137e9e510cb?"
                className="shrink-0 my-auto aspect-square w-[18px]"
                />
                <div>(414) 857 - 0107</div>
            </div>
            <div className="flex gap-2 whitespace-nowrap">
                <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ef2040ee612e128afd4c211c7e1332da13ae0757bbda90eabaa3a4781436798?"
                className="shrink-0 my-auto aspect-square w-[18px]"
                />
                <div>yummy@Asmita'sKitchen</div>
            </div>
            </div>
            <div className="flex gap-1">
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a24675541693903cf966c7f8261fa8065e5e1b811c48f82c66166f9b8c8a13a6?"
                className="shrink-0 aspect-square w-[27px]"
            />
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5763616faa1ee473a99844062c97390e53e646c4107802de5a1aaa45654cd45a?"
                className="shrink-0 aspect-square w-[27px]"
            />
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/173a597e38a4f835b97d3032099cfd1f5ceb522b5d652402bc460faf5dd0bd40?"
                className="shrink-0 w-7 aspect-[1.04]"
            />
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9fc1b7e21a424db049a30af8cd1fae96f59b260b043e96e490e019eaf7c0fb12?"
                className="shrink-0 aspect-square w-[27px]"
            />
            <button className="text-white m-2" onClick={ShowDateTime}>click me!</button>
            <ViewCounter></ViewCounter>
            </div>
            
        </div>
        </div>

    )
}