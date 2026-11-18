


export default function Projects(){
    return(
        <article className="mt-33">
            <div className="flex w-full justify-center text-[#493426] playwrite-us-trad-regular mb-14 text-4xl">
                <p> PROJECTS</p>
            </div>
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 
                border border-[#646637] rounded-2xl 
                p-4 lg:p-6 ml-5 mr-5">

    {/* Project Image */}
    <div className="w-full lg:w-1/2 overflow-hidden rounded-xl">
        <img
            src="/logistic screenshot.PNG"
            alt="Logistiq website preview"
            className="w-full h-64 lg:h-80 object-cover 
                       rounded-xl transition-transform 
                       duration-500 hover:scale-105"
        />
    </div>

    {/* Project Details */}
    <div className="w-full lg:w-1/2 flex flex-col 
                    justify-center gap-5">

        <span className="text-sm text-[#D49569]">
            Featured Project
        </span>

        <h3 className="text-3xl font-semibold text-[#493426]">
            Logistiq
        </h3>

        <p className="text-[#493426] leading-relaxed">
            A modern logistics website designed to simplify
            the way customers explore delivery and transportation
            services. Built with a focus on responsiveness,
            usability and interactive experiences.
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-3 text-[#493426]">
            <span>React</span>
            <span>Tailwind CSS</span>
            <span>JavaScript</span>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">
            <a href="https://logistic-project-three.vercel.app/"
               className="bg-[#493426] text-white px-6 py-3 
                          rounded-lg hover:bg-[#646637] 
                          transition-colors">
                Live Preview
            </a>

            <a href="https://github.com/7Gloryibrahim/Logistic-Project"
               className="border border-[#493426] 
                          text-[#493426] px-6 py-3 rounded-lg 
                          hover:bg-[#493426] hover:text-white 
                          transition-colors">
                Source Code
            </a>
        </div>

    </div>
</div>
        </article>
    )
}