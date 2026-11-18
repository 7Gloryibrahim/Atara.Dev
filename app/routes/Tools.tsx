import { motion } from "framer-motion";

export default function Tools(){
    return(
        <article className="mt-33  ">
            <div className="flex justify-center text-5xl  ">
                
                <p className="text-[#493426] playwrite-us-trad-regular text-5xl">
                Tools I Use
                </p>
                
                </div>
            <ul className="mt-16 flex flex-col gap-y-5 lg:flex-row justify-center items-center text-2xl lg:gap-x-5">
                <motion.li
                 initial={{y:50, opacity:0}}
                    whileInView={{y:0, opacity:1}}
                    transition={{duration:0.6}}
                className="bg-[#493426] border border-red-700 p-14 w-fit rounded-full"><b>HTML5</b></motion.li>
                <motion.li
                
                 initial={{y:50, opacity:0}}
                    whileInView={{y:0, opacity:1}}
                    transition={{duration:0.7}}
                className="bg-[#493426] border border-red-700 p-14 w-fit rounded-full"><b>CSS3</b></motion.li>
                <motion.li
                 initial={{y:50, opacity:0}}
                    whileInView={{y:0, opacity:1}}
                    transition={{duration:0.8}}
                className="bg-[#493426] border border-red-700 p-14 w-fit rounded-full"><b>TALWINDCSS</b></motion.li>
                <motion.li
                 initial={{y:50, opacity:0}}
                    whileInView={{y:0, opacity:1}}
                    transition={{duration:0.9}}
                
                className="bg-[#493426] border border-red-700 p-14 w-fit rounded-full"><b>JAVASCRIPT</b></motion.li>
                <motion.li
                 initial={{y:50, opacity:0}}
                    whileInView={{y:0, opacity:1}}
                    transition={{duration:1}}
                
                className="bg-[#493426] border border-red-700 p-14 w-fit rounded-full"><b>REACT</b></motion.li>
            </ul>
        </article>
    )
}