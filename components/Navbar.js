import { useEffect, useState } from 'react';

const Navbar = () => {
    const [isDark, setTheme] = useState(false);

    const useDarkTheme = () => {
        const root = document.documentElement;
        root.classList.add('dark')
        setTheme(true);
        localStorage.setItem('theme', JSON.stringify('dark'));
    }

    const useLightTheme = () => {
        const root = document.documentElement;

        root.classList.remove('dark');
        setTheme(false);
        localStorage.setItem('theme', JSON.stringify('light'));

    }

    const handleToggleMode = () => {
        const root = document.documentElement;
        if (root.classList.contains('dark')) {
            useLightTheme();
        }
        else {
            useDarkTheme();
        }

    }

    useEffect(()=> {
        const getLocalTheme = localStorage.getItem('theme');
        const localTheme = JSON.parse(getLocalTheme);
        localTheme === 'dark' ? useDarkTheme() : useLightTheme()
    },[])


    return (
        <nav className="container pt-2 pb-1 md:py-3 mx-auto md:max-w-full flex flex-col items-center md:flex-row md:justify-between md:px-4 md:py-3">
            <div className="font-bold text-blue-400 text-3xl flex-none mx-2 md:mx-0 lg:mx-2 xl:mx-6 font-ephesis tracking-wider dark:text-blue-300">M. Broome</div>
            <ul className="md:justify-end flex flex-row py-1 space-x-6 md:space-x-12 items-center text-gray-600 font-bold tracking-wider text-lg font-lato md:mx-0 lg:mr-6 dark:text-gray-200">
                <li className="">
                    <a className="hover:text-blue-400 dark:hover:text-blue-300" href="#home">Home</a>
                </li>
                <li className="">
                    <a className="hover:text-blue-400 dark:hover:text-blue-300" href="#about">About</a>
                </li>
                <li className="">
                    <a className="hover:text-blue-400 dark:hover:text-blue-300" href="#experience">Experience</a>
                </li>
                <li className="">
                    <a className="hover:text-blue-400 dark:hover:text-blue-300" href="#projects">Projects</a>
                </li>
                <li className="">
                    <button className="btn-transparent" onClick={handleToggleMode}>
                        {
                        !isDark 
                            ? <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg> 
                            : <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      }
                    </button>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;