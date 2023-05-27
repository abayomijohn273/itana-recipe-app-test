import React from 'react'
import Footer from './footer'
import Header from './header'

const MainWrapper = ({children}) => {
    return (
        <div>
            <Header />
            <section className="relative">
                <div className="container mx-auto px-4 lg:px-8 xl:px-4 pt-12 pb-12">
                    {children}
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default MainWrapper