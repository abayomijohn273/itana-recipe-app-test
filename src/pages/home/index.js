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

    const fetchRandomRecipes = async (params = {}) => {
        await dispatch(getRandomRecipesAction(params));
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

    const [filterDiets, setFilterDiets] = useState([])

    const handleFilterChange = (e) => {
        if (e.target.checked) {
            setFilterDiets([...filterDiets, e.target.value]);
        } else {
            setFilterDiets(filterDiets.filter(diet => diet !== e.target.value));
        }
    }

    // NOTE: Filter only works on GET Random API
    // Does not work with Search by Ingredient API
    const processFilter = async () => {
        setSearch(""); // clear search value

        const tags = filterDiets?.length > 0 ? filterDiets?.toString().toLowerCase() : undefined;

        const params = {
            tags
        }

        await dispatch(clearRecipes());
        await fetchRandomRecipes(params);
    }

    const fetchData = async (params) => {
        if (recipes?.length >= 500) {
            setHasMore(false);
            return;
        }

        if (search) {
            const searchParams = {
                ingredients: search?.trim(),
            }
            await dispatch(getRecipesByIngredientsAction(searchParams))
        } else if (filterDiets?.length > 0) {
            await processFilter();
        } else {
            await fetchRandomRecipes(params);
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

                <FilterSection
                    filterDiets={filterDiets}
                    handleFilterChange={handleFilterChange}
                    processFilter={processFilter}
                />

                <RecipeListingSection
                    recipes={recipes}
                    fetchMoreData={fetchData}
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