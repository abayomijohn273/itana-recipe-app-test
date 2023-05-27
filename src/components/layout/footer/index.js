import React from 'react'

const Footer = () => {
    return (
        <footer className="relative">
            <div className="container mx-auto px-4 lg:px-8 xl:px-4 pt-12 pb-12">
                <p className="text-textColor text-sm-15 lg:text-base text-center">
                    &copy; {new Date().getFullYear()}. Made with ❤️ by Abayomi.
                </p>
            </div>
        </footer>
    )
}

export default Footer