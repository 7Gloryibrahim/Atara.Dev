import {motion} from "framer-motion"
export default function Hero(){
    return(
        <main className="  mt-20 h-[] ">
          
            <div className="flex flex-col w-full justify-center gap-y-20 lg:gap-44 items-center  lg:flex lg:flex-row">
                <div className="flex flex-col w-fit text-left">
                    <div className="cinzel-decorative-regular  text-[#493426]">
                    <p className="text-4xl lg:text-3xl playwrite-us-trad-regular">Hello!, I'm</p>
                    <motion.p 
                    initial={{y:-50, opacity:0}}
                    whileInView={{y:0, opacity:1}}
                    transition={{duration:0.8}}
                    className="text-[#646637] text-8xl lg:text-8xl  playwrite-us-trad-regular">Atara,</motion.p>
                    </div>
                    <div className="text-[#493426] text-3xl lg:text-xl w-3xl lg:w-96">
                        <p>I am a <b className="text-red-700 playwrite-au-sa-guides-regular">Front-end Developer</b>, a student of Obafemi Awolowo University, currently based in Nigeria . I build <b>modern</b>, <b>visually appealing</b>, and <b>responsive websites.</b></p>
                    </div>
                </div>
                <div className="w-[40em] lg:w-fit lg:h-[30em] rounded-2xl   relative"> 
                <img  src="Hero-Image.webp" alt="atara portfolio hero image" className="w-[40em] lg:w-96 lg:h-[30em]  rounded-2xl"/>
                <div className="flex flex-col gap-y-2 text-[#493426] border rounded-2xl border-[#646637] text-2xl lg:text-xl absolute backdrop-blur-3xl top-[28em] lg:top-96 left-96 lg:left-72 w-72 p-3 ">
                    <p> <b className=" text-white lg:text-red-700   ">Available for work!</b> </p>
                        <p className="text-[#493426]">Currently accepting projects</p>
                        <a  href="https://wa.link/z92jr9" className="bg-[#493426]   rounded-full border text-white border-red-700 w-fit p-2 animate-pulse transition-transform duration-700 mt-2">Let's Talk</a>
                    
                </div>
              </div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="mt-52"><path fill="#493426" fill-opacity="1" d="M0,288L60,272C120,256,240,224,360,192C480,160,600,128,720,149.3C840,171,960,245,1080,282.7C1200,320,1320,320,1380,320L1440,320L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
               
        </main>
    )
}