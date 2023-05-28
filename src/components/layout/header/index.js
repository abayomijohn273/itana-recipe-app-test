import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="relative">
            <nav className="container mx-auto px-4 lg:px-8 xl:px-4 py-6">
                <Link to={"/"} className="font-bold text-lg lg:text-xl ">
                    <span className="text-primary">Recipe</span>
                    <span className="text-secondary">Finder</span>
                </Link>
            </nav>
        </header>
    )
}

export default Header