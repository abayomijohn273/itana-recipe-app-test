import React from 'react'
import RecipeCard from '../../../../components/blocks/recipeCard'

const RecipeListingSection = () => {
    return (
        <div className="mt-8 lg:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
        </div>

    )
}

export default RecipeListingSection