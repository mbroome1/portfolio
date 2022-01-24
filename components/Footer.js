function Footer() {
    return (
        <footer className="p-3 text-center text-gray-200 border-t bg-gray-500">
            <p className="mt-2">Website created by Michael Broome - &copy; 2022</p>
            <div className="m-4 flex space-x-6 justify-center">
                    <a className="text-4xl text-gray-300" href="https://www.linkedin.com/in/michael-broome-3373b9a7/" target={"_blank"} rel="noreferrer">
                        <ion-icon name="logo-linkedin"></ion-icon>
                    </a>
                    <a className="text-4xl text-gray-300" href="https://github.com/mbroome1" target={"_blank"} rel="noreferrer">
                        <ion-icon name="logo-github"></ion-icon>
                    </a>
                </div>
        </footer>
    )
}

export default Footer
