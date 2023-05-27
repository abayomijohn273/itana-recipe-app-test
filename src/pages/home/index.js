import React, { useEffect, useState } from 'react'
import MainWrapper from '../../components/layout/mainWrapper'
import SearchForm from '../../components/blocks/searchForm'
import RecipeListingSection from './components/recipeListingSection'
import RecipeLoading from '../../components/blocks/recipeLoading'
import { selectRecipes, selectRecipesLoading } from '../../redux/slices/recipeSlice'
import { getRandomRecipesAction } from '../../redux/actions/recipeAction'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectRecipesLoading);
    const recipes = useSelector(selectRecipes)

    const fetchRandomRecipes = async () => {
        await dispatch(getRandomRecipesAction());
    }

    useEffect(() => {
        fetchRandomRecipes();
    }, []);

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
                        {recipes?.length || 0} recipes found
                    </p>
                </div>
                {
                    loading ?
                        <RecipeLoading /> :
                        <RecipeListingSection recipes={recipes} />
                }
            </div>
        </MainWrapper>
    )
}

export default Home