import React from 'react'
import RecipeCard from '../../../../components/blocks/recipeCard'
import InfiniteScroll from "react-infinite-scroll-component";
import RecipesLoading from '../../../../components/blocks/recipesLoading';

const RecipeListingSection = ({ recipes, hasMore, fetchMoreData }) => {
    return (
        <>
            <InfiniteScroll
                dataLength={recipes.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={<RecipesLoading />}
                endMessage={<></>}
            >
                <div className="mt-8 lg:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        recipes?.map(recipe => <RecipeCard
                            key={recipe.id}
                            id={recipe.id}
                            title={recipe.title}
                            summary={recipe.summary}
                            image={recipe.image}
                        />)
                    }
                </div>
            </InfiniteScroll>
        </>


    )
}

export default RecipeListingSection