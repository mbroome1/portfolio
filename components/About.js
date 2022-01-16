function About() {
    return (
        <div className="wrapper">
            <div className="my-12 max-w-4xl mx-auto">
                <h1 className="text-3xl text-gray-700 text-center ">About</h1>

                <div className="mt-6 flex space-x-6 justify-center">
                    <a className="text-4xl text-blue-700" href="">
                        <ion-icon name="logo-linkedin"></ion-icon>
                    </a>
                    <a className="text-4xl text-gray-700" href="">
                        <ion-icon name="logo-github"></ion-icon>
                    </a>
                </div>
                
                <div className="mt-6 container mx-auto text-gray-600 text-md md:text-lg">
                    <p className="py-2 leading-normal">A <span className="font-semibold">Full Stack Web Developer</span> with working experience in supporting and creating websites.</p>
                    <p className="py-2 leading-normal">I am passionate about learning new technologies. In my free time I have been learning how to create backend web APIs while using frontend clients for interaction.</p>
                    <p className="py-2 leading-normal">
                        Recent skills acquired include: <span className="font-semibold">Node.js</span>, <span className="font-semibold">React + Redux</span>, modern <span className="font-semibold">Javascript</span>, <span className="font-semibold">REST APIs</span>, and setting up a cloud environment in <span className="font-semibold">Microsoft Azure</span> for my code to live. Next I will be focusing on creating APIs with <span className="font-semibold">.NET Core</span> using <span className="font-semibold">C#</span>.</p>
                    <p className="py-2 leading-normal">I hold a <span className="font-semibold">Bachelor{'\''}s Degree in Commerce and Administration</span> with majors in <span className="font-semibold">Information Systems</span> and <span className="font-semibold">E-Commerce</span> from <span className="font-semibold">Victoria University of Wellington</span>.</p>
                    <p className="py-4 leading-normal">I am eager to pursue the next stage in my career as a developer!</p>
                </div>
            </div>
            
        </div>
    )
}

export default About
