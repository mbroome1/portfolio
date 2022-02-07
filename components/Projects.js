// import Image from "next/image";

export default function Projects() {
    return (
        <div className="wrapper bg-white">
            <a id="projects" className="absolute -mt-30"></a>
            <div className="my-12">
                <h1 className="text-3xl text-gray-700 text-center">Projects</h1>

                <div className="mt-12 container mx-auto lg:flex justify-center">


                    {/* Project 1` */}
                    <div className="sm:basis-1/2 xl:basis-1/3 shadow m-2 mb-8 md:m-4 md:mb-12">
                        <div className="relative w-46 h-96">
                            {/* <Image 
                                src={"/images/store-catalogue.jpg"} 
                                alt="Profile picture" 
                                layout="fill" 
                                objectFit="cover"
                                objectPosition="top"
                                className="relative"
                            /> */}
                            <img 
                                src={"/images/store-catalogue.jpg"} 
                                alt="Project picture" 
                                className="relative object-cover object-top w-full h-full"
                            />
                        </div>
                        <div className="p-2">
                            <div className="mt-12 flex items-center justify-between">
                                <h2 className="text-xl text-gray-700 uppercase">E-commerce store</h2>
                                <a href="https://www.mbroome.nz/store/" target={"_blank"} rel="noreferrer" className="code-btn">View Demo</a>
                            </div>
                            <div>
                                <p className="text-gray-400 text-left mt-4">Login: test // test</p>
                            </div>
                            <div className="mt-6">
                                <div className="flex justify-between">
                                    <h4 className="text-gray-600 font-semibold text-lg">Frontend:</h4>
                                    <a href="https://github.com/mbroome1/ecommerce-store-client" target={"_blank"} rel="noreferrer" className="code-link">
                                        <ion-icon name="logo-github"></ion-icon>
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
                                    <a href="https://github.com/mbroome1/ecommerce-store-server" target={"_blank"} rel="noreferrer" className="code-link">
                                        <ion-icon name="logo-github"></ion-icon>
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

                    {/* Project 2` */}
                    <div className="sm:basis-1/2 xl:basis-1/3 shadow  m-2 mb-8 md:m-4 md:mb-12">
                        <div className="relative w-46 h-96">
                            {/* <Image 
                                src={"/images/store-catalogue.jpg"} 
                                alt="Profile picture" 
                                layout="fill" 
                                objectFit="cover"
                                objectPosition="top"
                                className="relative"
                            /> */}
                            <img 
                                src={"/images/redux-cart.jpg"} 
                                alt="Project picture" 
                                className="relative object-cover object-top w-full h-full"
                            />
                        </div>
                        <div className="p-2">
                            <div className="mt-12 flex items-center justify-between">
                                <h2 className="text-xl text-gray-700 uppercase">Redux Cart</h2>
                                <a href="https://www.mbroome.nz/cart/" target={"_blank"} rel="noreferrer" className="code-btn" >View Demo</a>
                            </div>
                            <div>
                                <p className="text-gray-500 text-left mt-4">My first react app, created for the purpose of learning react with redux state management.</p>
                            </div>
                            <div className="mt-6">
                                <div className="flex justify-between">
                                    <h4 className="text-gray-600 font-semibold text-lg">Frontend:</h4>
                                    <a href="https://github.com/mbroome1/shopping-cart-redux/" target={"_blank"} rel="noreferrer" className="code-link">
                                        <ion-icon name="logo-github"></ion-icon>
                                        <span className="pl-2">View code </span>
                                    </a>
                                </div>

                                <ul className="skills-list">
                                    <li>React</li>
                                    <li>Redux</li>
                                    <li>React Router</li>
                                    <li>Javascript</li>
                                    <li>CSS</li>
                                    <li>SCSS</li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>
            </div> 
        </div>
    )
}
