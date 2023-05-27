import React, { useEffect, useState } from 'react'
import MainWrapper from '../../components/layout/mainWrapper'
import SearchForm from '../../components/blocks/searchForm'
import RecipeListingSection from './components/recipeListingSection'
import RecipeLoading from '../../components/blocks/recipeLoading'
import { selectRecipes, selectRecipesLoading } from '../../redux/slices/recipeSlice'
import { getRandomRecipesAction, getRecipesByIngredientsAction } from '../../redux/actions/recipeAction'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectRecipesLoading);
    const recipes = useSelector(selectRecipes)
        const [search, setSearch] = useState("");

    const fetchRandomRecipes = async () => {
        await dispatch(getRandomRecipesAction());
    }

    useEffect(() => {
        fetchRandomRecipes();
    }, []);

    const handleChangeSearchValue = (e) => {
        setSearch(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const params = {
            ingredients: search?.trim(),
        }
        await dispatch(getRecipesByIngredientsAction(params))
    }

    return (
        <MainWrapper>
            <div className="w-full md:w-8/12 lg:w-7/12 xl:w-6/12 mx-auto">
                <SearchForm
                    search={search}
                    handleChangeSearchValue={handleChangeSearchValue}
                    handleSubmit={handleSubmit}
                />
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
                        recipes?.length > 0 ?
                            <RecipeListingSection recipes={recipes} />
                            : <div className='pt-20 pb-24'>
                                <p className='text-center text-2xl font-bold'>No record returned.</p>
                            </div>
                }
            </div>
        </MainWrapper>
    )
}

export default Home