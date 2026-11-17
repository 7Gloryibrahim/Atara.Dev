export default function Hero(){
    return(
        <main className="  mt-20 h-[100vh] ">
          
            <div className="flex flex-col w-full justify-center gap-y-20 lg:gap-44 items-center  lg:flex lg:flex-row">
                <div className="flex flex-col w-fit text-left">
                    <div className="cinzel-decorative-regular  text-[#493426]">
                    <p className="text-4xl lg:text-3xl playwrite-us-trad-regular">Hello!, I'm</p>
                    <p className="text-[#646637] text-8xl lg:text-8xl  playwrite-us-trad-regular">Atara,</p>
                    </div>
                    <div className="text-[#493426] text-2xl lg:text-xl w-96">
                        <p>I am a <b className="text-[#f0873b] playwrite-au-sa-guides-regular">Front-end Developer</b>, a student of Obafemi Awolowo University currently based in Nigeria .</p>
                    </div>
                </div>
                <div className="w-[40em] lg:w-fit lg:h-[30em] rounded-2xl   relative"> 
                <img  src="Hero-Image.webp" className="w-[40em] lg:w-96 lg:h-[30em]  rounded-2xl"/>
                <div className="flex flex-col gap-y-7 text-[#493426] border rounded-2xl border-[#646637] text-2xl lg:text-xl absolute backdrop-blur-lg top-[28em] lg:top-96 left-96 lg:left-72 w-72 p-3 ">
                    <p> <b className="text-red-700 playwrite-au-sa-guides-regular ">Available for work!</b> </p>
                        <p>Currently accepting projects</p>
                        <a  href="https://wa.link/l9ofa5" className="bg-[#493426]   rounded-full border text-white border-red-700 w-fit p-2">Let's Talk</a>
                    
                </div>
              </div>
              </div>
               
        </main>
    )
}