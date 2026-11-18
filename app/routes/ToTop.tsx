import { useState } from "react"


export default function Totop(){
const handleScroll=()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    }   
    )
}

    return(
        <div  onClick={handleScroll} className="w-full  flex justify-end">
            <p   className="fixed bottom-15 z-50 text-[#646637] rounded-full  pl-5 pt-4 right-6 bg-[#EBE1D2]  border border-red-700 h-14 w-14 playwrite-us-trad-regular "><b>A</b></p>
        </div>
    )
}