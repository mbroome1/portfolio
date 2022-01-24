export default function Experience() {
    return (
        <div className="wrapper bg-white">
            <a id="experience" className="absolute -mt-30"></a>
            <div className="my-12 max-w-4xl mx-auto">
                
                <h1 className="text-3xl text-gray-700 text-center">Experience</h1>
                <div className="mt-6">
                    {/* Job */}
                    <div className="job">
                        <h3 className="text-xl text-gray-600 py-2">Booker~Spalding Ltd</h3>
                        <h4 className="text-lg text-blue-700">Web Developer | IT Support</h4>
                        <p className="text-gray-500 text mt-1">2015 - Current</p>
                        <ul className="list-outside list-disc ml-4 my-4 text-gray-700">
                            <li className="pb-1">Provide support to the IT team by maintaining and updating client ordering websites.</li>
                            <li className="pb-1">Updating and modernising older website templates to provide a better client experience.</li>
                            <li className="pb-1">Providing IT support to office staff and assisting with IT related issues.</li>
                        </ul>
                        <div>
                            <ul className="experience-skills-list">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Javascript</li>
                                <li>PHP</li>
                                <li>SQL</li>
                            </ul>
                        </div>
                    </div>

                    {/* Job */}
                    <div className="job mt-12">
                        <h3 className="text-2xl text-gray-600 py-2">The Uniform Centre</h3>
                        <h4 className="text-lg text-blue-700 mt-1">Accounting Reconciliation</h4>
                        <p className="text-gray-500">January 2020 - Current</p>

                        <ul className="list-outside list-disc ml-4 my-4 text-gray-700">
                            <li className="pb-1">Balancing the financial bank accounts against incoming orders and refunds using the companies accounting software.</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}
