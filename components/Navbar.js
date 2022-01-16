export default function Navbar() {
    return (
        <nav className="container md:py-3 mx-auto md:max-w-full flex flex-col items-center md:flex-row md:justify-between md:px-4 md:py-3">
            <div className="font-bold text-blue-700 text-3xl flex-none mx-2 md:mx-0 lg:mx-2 xl:mx-6 font-ephesis tracking-wider dark:text-blue-300">M. Broome</div>
            <ul className="my-2 md:justify-end flex flex-row py-1 space-x-1 md:space-x-2 xl:space-x-4 items-center text-gray-600 font-bold tracking-wider text-md md:text-lg font-lato md:mx-0 lg:mr-6 dark:text-gray-200">
                <li className="">
                    <a className="nav-link" href="#home">Home</a>
                </li>
                <li className="">
                    <a className="nav-link" href="#about">About</a>
                </li>
                <li className="">
                    <a className="nav-link" href="#about">Interests </a>
                </li>
                <li className="">
                    <a className="nav-link" href="#experience">Experience</a>
                </li>
                <li className="">
                    <a className="nav-link" href="#projects">Projects</a>
                </li>
            </ul>
        </nav>
    )
}