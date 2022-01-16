import Image from 'next/image'

export default function Hero() {
    return (
        <div className="bg-gray-50">
            <div className="hero text-center container py-12 mx-auto md:flex md:text-left md:justify-center">
                <div className="flex items-center md:pr-12">
                    <div className="container flex justify-center">
                        <div className="relative w-32 h-32 md:w-48 md:h-48 border border-white rounded-full shadow-2xl shadow-gray-500">
                            <img 
                                src={"/images/profile.jpg"} 
                                alt="Profile picture" 
                                className="relative rounded-full object-cover w-full h-full"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="container">
                        <p className="text-gray-800 text-3xl mt-10">Hello, I{'\''}m</p>
                        <h1 className="text-blue-700 text-5xl sm:text-6xl my-4 ">Michael Broome</h1>
                        <h2 className="text-gray-700 text-3xl font-semibold mb-4">Web Developer & IT Support</h2>
                        <h3 className="text-gray-700 text-xl mb-4">Wellington, New Zealand</h3>

                        
                        <p className="py-12 text-2xl text-gray-700 ">Welcome to my newly created website!</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
