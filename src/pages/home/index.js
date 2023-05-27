import React from 'react'
import MainWrapper from '../../components/layout/mainWrapper'
import SearchForm from '../../components/blocks/searchForm'
import RecipeListingSection from './components/recipeListingSection'
import RecipeLoading from '../../components/blocks/recipeLoading'

const Home = () => {
    return (
        <MainWrapper>
            <div className="w-full md:w-8/12 lg:w-7/12 xl:w-6/12 mx-auto">
                <SearchForm />
            </div>

            <div className=''>
                <div className="mt-8">
                    <h2 className="text-xl lg:text-2xl font-bold text-primary">
                        Recipes Results
                    </h2>
                    <p className="mt-2 text-gray-500 text-sm-15 lg:text-vase">
                        326 recipes found
                    </p>
                </div>
                {/* <RecipeLoading /> */}
                <RecipeListingSection />
            </div>
        </MainWrapper>
    )
}

export default Home