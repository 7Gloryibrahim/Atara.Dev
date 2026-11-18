

export default function Footer(){
    return(
        <article className="bg-fixed bottom-0 left-0 right-0 mt-72 ">
            <div className="border-t-2 border-t-[#493426] pt-10">
               <div className="bg-[#493426]  flex flex-col gap-y-10 rounded-2xl mr-10 ml-10 items-center justify-center mx-4 text-center h-fit p-5">
                <p className="text-8xl w-4xl">Let's build something Together! </p>
                <a  href="https://wa.link/z92jr9" className="bg-[#493426]   rounded-full border text-3xl text-white border-[#646637] w-fit p-4 animate-pulse transition-transform duration-700 mt-2">Let's Talk</a>
                    
                </div> 

                <div className="text-[#493426] flex flex-row text-xl justify-center mt-28 lg:flex-row gap-x-52 ">
                    <p className="text-3xl playwrite-us-trad-regular">Atara.Dev</p>
                    <ul>
                         <li>Home</li>
            <li>About</li>
            <li>Projects</li>
             <li>Services</li>
             <li>Contact</li>
                    </ul>
                    <ul>
                        <li>
                            GitHub
                        </li>
                        <li>WhatsApp</li>
                        <li>
                            Email
                        </li>
                    </ul>
                </div>

                <div className="text-[#493426] flex flex-row gap-x-10 justify-center  mt-10 ml-3">
                    <p>© 2026 Atara.Dev. All rights reserved.</p>
                    <p>  Designed & Developed by Glory</p>
                </div>
            </div>
        </article>
    )
}