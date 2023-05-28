import React, { useState } from 'react'
import SearchForm from '../../components/blocks/searchForm'
import RecipeListingSection from './components/recipeListingSection'
import { clearRecipes, selectRecipes, selectRecipesLoading } from '../../redux/slices/recipeSlice'
import { getRandomRecipesAction, getRecipesByIngredientsAction } from '../../redux/actions/recipeAction'
import { useDispatch, useSelector } from 'react-redux'
import TopSection from './components/topSection'
import EmptyListSection from './components/emptyListSection'
import FilterSection from './components/filterSection'

const Home = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectRecipesLoading)
    const recipes = useSelector(selectRecipes)
    const [search, setSearch] = useState("");
    const [hasMore, setHasMore] = useState(true)

    const fetchRandomRecipes = async () => {
        await dispatch(getRandomRecipesAction());
    }

    const handleChangeSearchValue = (e) => {
        setSearch(e.target.value);
    }

    const processSearch = async (e) => {
        e.preventDefault();

        const params = {
            ingredients: search?.trim(),
        }

        await dispatch(clearRecipes());
        await dispatch(getRecipesByIngredientsAction(params))
    }


    const fetchMoreData = async () => {
        if (recipes?.length >= 500) {
            setHasMore(false);
            return;
        }

        if (search) {
            const params = {
                ingredients: search?.trim(),
            }
            await dispatch(getRecipesByIngredientsAction(params))
        } else {
            await fetchRandomRecipes();
        }
    }

    return (
        <div>
            <div className="w-full md:w-8/12 lg:w-7/12 xl:w-6/12 mx-auto">
                <SearchForm
                    search={search}
                    handleChangeSearchValue={handleChangeSearchValue}
                    handleSubmit={processSearch}
                />
            </div>

            <div className=''>
                <TopSection recipes={recipes} />

                <FilterSection />

                <RecipeListingSection
                    recipes={recipes}
                    fetchMoreData={fetchMoreData}
                    hasMore={hasMore}
                />

                <EmptyListSection
                    recipes={recipes}
                    loading={loading}
                />
            </div>
        </div>
    )
}

export default Home