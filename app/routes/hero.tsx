export default function Hero(){
    return(
        <main className="  ">
            <div   className="min-h-screen bg-cover bg-center"> 
            <div className="flex mt-6 flex-col w-full justify-center gap-44 items-center  lg:flex-row">
                <div className="flex flex-col w-fit">
                    <div className="cinzel-decorative-regular  text-[#493426]">
                    <p className="text-3xl">Hello!, I'm</p>
                    <p className="text-[#646637] lg:text-8xl">Atara</p>
                    </div>
                    <div className="text-[#493426]">
                        <p>I am a <b className="text-[#D49569]">Front-end Developer</b></p>
                    </div>
                </div>
                <div className="w-96 h-96 rounded-full shadow shadow-[#493426]"> 
                <img  src="Hero-Image.webp" className="w-96 h-96 rounded-full"/>
              </div>
              </div>
              </div>
        </main>
    )
}