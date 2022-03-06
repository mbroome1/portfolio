import Link from 'next/link';

export default function Work() {
    return (
        <div className="wrapper bg-gray-100">
            <a id="workexperience" className="absolute -mt-30"></a>
            <div className="my-12 max-w-4xl mx-auto">
                <h1 className="text-3xl text-gray-700 text-center">Work Experience</h1>

                <div className="my-12 container mx-auto">   
                    <div className="flex">
                        <div className="basis-2/3">
                            <div>
                                <h2 className="text-2xl text-gray-700">The Uniform Centre</h2>
                                <a href="https://www.uniform-centre.co.nz" target="_blank" class="code-link mt-3">View Website</a>

                                <div className="mt-12">
                                    <p class="mt-3">Description goes here</p>
                                </div>
                            </div>
                        </div>
                        <div className="basis-1/3 p-2 bg-gray-500 rounded shadow-lg">
                            <img src={"/images/uniform-centre_home.jpg"}  alt="" className="relative object-cover object-top w-full h-full" />
                        </div>
                    </div>


                    <div className="flex flex-row mt-24">
                        <div className="basis-2/3">
                            <div>
                                <h2 className="text-2xl text-gray-700">New Zealand Meatboard</h2>
                                <h3 className="text-lg text-gray-600 mt-1">Meeting Change - Book</h3>
                                <a href="https://www.meetingchange.nz" target="_blank" class="code-link mt-3">View Website</a>
                               
                                <div className="mt-12">
                                    <p class="mt-3">Desciption goes here</p>
                                </div>
                            </div>
                        </div>
                        <div className="basis-1/3 p-2 bg-gray-500 rounded shadow-lg">
                            <img src={"/images/meeting-change_home.jpg"}  alt="" className="relative object-cover object-top w-full h-full" />
                        </div>
                    </div>

                </div>
            </div>

            {/* <div className="container mx-auto mt-6">
                <Link href="/workexperience">
                    <a className="code-link">View All</a>
                </Link>
            </div> */}

        </div>
    )
}
