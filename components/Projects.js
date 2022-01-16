import Image from "next/image";

export default function Projects() {
    return (
        <div className="wrapper bg-gray-50">
            <div className="my-12">
                <h1 className="text-3xl text-gray-700 text-center">Projects</h1>

                <div className="mt-12 container mx-auto lg:flex justify-center">
                    {/* Project 1` */}
                    <div className="sm:basis-1/2 xl:basis-1/3 shadow">
                        <div className="relative w-46 h-96">
                            <Image 
                                src={"/images/store-catalogue.jpg"} 
                                alt="Profile picture" 
                                layout="fill" 
                                objectFit="cover"
                                objectPosition="top"
                                className="relative"
                            />
                        </div>
                        <div className="p-2 bg-white">
                            <div className="mt-12 flex items-center justify-between">
                                <h2 className="text-xl text-gray-700 uppercase">E-commerce store</h2>
                                <a href="" className="code-btn">View Demo</a>
                            </div>
                            <div>
                                <p className="text-gray-400 text-left mt-2">Login: test // test</p>
                            </div>
                            <div className="mt-6">
                                <div className="flex justify-between">
                                    <h4 className="text-gray-600 font-semibold text-lg">Frontend:</h4>
                                    <a href="" className="code-link">
                                        <Image src={"/images/svg/github-icon.svg"} width={18} height={18} alt="html 5" objectFit="contain" />
                                        <span className="pl-2">View code </span>
                                    </a>
                                </div>

                                <ul className="skills-list">
                                    <li>React</li>
                                    <li>Redux Toolkit</li>
                                    <li>Javascript</li>
                                    <li>Axios</li>
                                    <li>Material UI</li>
                                </ul>
                            </div>
                            <div className="mt-8">
                                <div className="flex justify-between">
                                    <h4 className="text-gray-600 font-semibold text-lg">Backend:</h4>
                                    <a href="" className="code-link">
                                        <Image src={"/images/svg/github-icon.svg"} width={18} height={18} alt="html 5" objectFit="contain" />
                                        <span className="pl-2">View code </span>
                                    </a>
                                </div>
                                <ul className="skills-list">
                                    <li>Node.js</li>
                                    <li>Javascript</li>
                                    <li>Sequelize ORM</li>
                                    <li>PostgreSQL</li>
                                    <li>JWT Authentication</li>
                                    <li>Passport</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    {/* <div className="basis-1/3 p-1">
                        <h2 className="text-xl text-blue-700">project 1</h2>
                        <div className="relative w-46 h-72">
                            <Image 
                                src={"/images/store-catalogue.jpg"} 
                                alt="Profile picture" 
                                layout="fill" 
                                objectFit="contain"
                                className="relative"
                            />
                        </div>
                        <h3>Hello there</h3>
                    </div> */}

                </div>
            </div> 
        </div>
    )
}
