import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { GiCancel } from "react-icons/gi";
export default function Nav(){

const [menu, setMenu]= useState(false)

    return(
       <main className="absolute  cinzel-decorative-regular  w-full  top-2 z-50 left-0 right-0">
   <div className="ml-5 mr-5 flex flex-row justify-between lg:gap-96 items-center">
    <img src="/Atara-Logo.png" alt="Atara Dev logo" className="w-20"/>
    <div className="text-[#493426]">
       
        <ul className="hidden lg:flex flex-row gap-4 bg-[#646637]/20 border-2 p-4 rounded-2xl border-[#646637]">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
             <li>Services</li>
             <li>Contact</li>
        </ul>
    </div>
    <div className="hidden lg:block">
        <p className="bg-[#493426] p-4 rounded-full">Let's Talk</p>
    </div>
    <div className="lg:hidden block">
    <IoMdMenu onClick={()=>setMenu(true)} className="text-6xl text-[#493426]"/>
       {menu &&  
       <div onClick={()=>setMenu(false)}  className={`left-0 z-50 transition-all duration-300   ease-in-out flex flex-row top-0 bottom-0 gap-96 h-screen w-2xl bg-[#646637]/20  fixed border-l-0 border-r-2 p-4 rounded-r-2xl border-[#646637] ${menu ? "translate-x-0" : "-translate-x-full"}`}>
        
        <ul className=" flex flex-col gap-y-20 gap-4 mt-16 text-2xl ">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
             <li>Services</li>
             <li>Contact</li>
        </ul>
        <GiCancel onClick={()=> setMenu(false)} className="text-5xl"/>
         </div>}
    </div>
   </div>
    </main>
    )
}