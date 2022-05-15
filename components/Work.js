import Link from 'next/link';

export default function Work() {
    return (
        <div className="wrapper bg-gray-100">
            <a id="workexperience" className="absolute -mt-30"></a>
            <div className="my-12 max-w-4xl mx-auto">
                <h1 className="text-3xl text-gray-700 text-center">Work Experience</h1>

                <div className="my-12 container mx-auto text-gray-700"> 

                    <div className="flex flex-col md:flex-row">
                        <div className="basis-2/3">
                            <div>
                                <h2 className="text-2xl text-gray-700">The Uniform Centre</h2>
                                <div className="mt-3">
                                    <a href="https://www.uniform-centre.co.nz" target="_blank" rel="noreferrer" className="code-link mt-3">View Website</a>
                                </div>

                                <div className="my-12 pr-4 lg:pr-24">
                                    <p className="mt-3">Creating a fresh new look using modern html,css and javascript to compliment a major backend overhaul.</p>
                                </div>
                            </div>
                        </div>
                        <div className="basis-1/3 rounded shadow-lg shadow-gray-400">
                            <img src={"/images/uniform-centre_home.jpg"}  alt="" className="relative object-cover object-top w-full h-full" />
                        </div>
                    </div>


                    <div className="flex flex-col md:flex-row mt-24">
                        <div className="basis-2/3">
                            <div>
                                <h2 className="text-2xl text-gray-700">New Zealand Meatboard</h2>
                                <h3 className="text-lg text-gray-600 mt-1">Meeting Change - Book</h3>

                                <div className="mt-3">
                                    <a href="https://www.meetingchange.nz" target="_blank" rel="noreferrer" className="code-link mt-3">View Website</a>
                                </div>

                                <div className="my-12 pr-4 lg:pr-24">
                                    <p className="mt-3 text-g">Creating a single page website for ordering a newly released book on behalf of New Zealand Meatboard.</p>
                                </div>
                            </div>
                        </div>
                        <div className="basis-1/3 rounded shadow-lg shadow-gray-400">
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
