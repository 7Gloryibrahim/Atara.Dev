import { motion } from "framer-motion";

export default function AboutMe(){
    return(
        <article className="  mt-32 text-[#493426] ">
             <div className="w-full flex justify-around  flex-col   items-center mb-28">
                <motion.p 
                 initial={{scale:0, opacity:0}}
                    whileInView={{  scale:1, opacity:1}}
                    transition={{duration:0.8}}
                className="playwrite-us-trad-regular text-5xl">About Me</motion.p>
                <div className="bg-[#646637] w-52 h-1"></div>
            </div>
             <div className="bg-[#646637] w-[42em]  lg:w-5xl ml-39 lg:ml-28  h-1"></div>
            <div className="flex flex-col lg:flex-row w-full justify-between px-8 items-center lg:items-start     lg"> 
              <div className="h-[55em] w-full">  <img src="/AboutMe.png" alt="Atara about me image" className="w-full h-full object-cover"/></div>
            <div className="bg-[#493426] text-white h-full w-fit text-3xl  lg:w-full p-4 text-left lg:text-xl ">
                <p className="playwrite-us-trad-regular text-5xl">A little about me</p>
                  <div className="bg-red-700 w-40 h-1"></div>
                    <div className="gap-y-6 p-5 flex flex-col mt-6">
                  <p>I'm a Front-End Developer passionate about building thoughtful, functional, and user-friendly digital experiences.</p>
                  <p>My journey into web development started with an interest in how websites work and how technology can transform ideas into something people can interact with. Over time, that curiosity grew into a genuine passion for creating digital experiences that combine clean design with meaningful functionality.</p>

                  <p>I work primarily with <b> HTML</b>, <b>CSS</b>, <b>JavaScript</b>, <b>React</b>, and <b>Tailwind </b><b>CSS</b>, with experience building responsive interfaces, interactive components, and multi-page web applications.</p>
                  <p>Beyond writing code, I enjoy understanding the problems a website is meant to solve. I pay attention to the details, from layout and typography to responsiveness and usability, because I believe a good website should not only look appealing but also serve its purpose effectively.</p>
                  
                  <p>I'm continuously learning, exploring new technologies, and challenging myself through practical projects. My goal is to create digital solutions that help businesses establish their online presence, communicate their value, and connect better with their audiences.</p>

                  <p>For me every project is an opportunity to promote another business</p>
                  </div>
            </div>
           </div>
        </article>
    )
}