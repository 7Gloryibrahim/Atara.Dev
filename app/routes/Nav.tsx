import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { GiCancel } from "react-icons/gi";
export default function Nav(){

const [menu, setMenu]= useState(false)

    return(
       <main className="sticky  cinzel-decorative   w-full  top-2 z-50 left-0 right-0">
   <div className="ml-5 mr-5 flex flex-row justify-between lg:gap-72 items-center">
    <img src="/Atara-Logo.png" alt="Atara Dev logo" className="w-20"/>
    <div className="text-[#493426]">
       
        <ul className="hidden lg:flex flex-row gap-4 bg-[#646637]/20 backdrop-blur-3xl border-2 p-4 rounded-2xl border-[#646637]">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
             <li>Services</li>
             <li>Contact</li>
        </ul>
    </div>
    <div className="hidden lg:block">
        <a  href="https://wa.link/z92jr9" className="bg-[#493426] p-4 rounded-full border border-red-700">Let's Talk</a>
    </div>
    <div className="lg:hidden block">
    <IoMdMenu onClick={()=>setMenu(true)} className="text-6xl text-[#493426]"/>
         
       <div onClick={()=>setMenu(false)}  className={`left-0 z-50 transition-all duration-300   ease-in-out flex flex-row top-0 bottom-0 gap-[25em] h-screen w-2xl bg-[#646637]/50 backdrop-blur-3xl  fixed border-l-0 border-r-2 p-4 rounded-r-2xl  border-[#646637] ${menu ? "translate-x-0" : "-translate-x-full"}`}>
        
        <ul className="text-white flex flex-col gap-y-20 gap-4 mt-16 ml-15 text-3xl ">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
             <li>Services</li>
             <li>Contact</li>
        </ul>
        <GiCancel onClick={()=> setMenu(false)} className="mt-10 text-5xl text-[#493426]"/>
         </div>
    </div>
   </div>
    </main>
    )
}