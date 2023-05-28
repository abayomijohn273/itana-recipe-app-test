import React from 'react'
import Footer from './footer'
import Header from './header'
import { Outlet } from 'react-router-dom'

const MainWrapper = () => {
    return (
        <div>
            <Header />
            <section className="relative">
                <div className="container mx-auto px-4 lg:px-8 xl:px-4 pt-12 pb-12">
                    <Outlet />
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default MainWrapper