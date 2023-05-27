import React, { useState } from 'react'
import RecipeCard from '../../../../components/blocks/recipeCard'
import RecipeDetailsModal from '../../../../components/modal/recipeDetailsModal'

const RecipeListingSection = ({recipes}) => {
    const [showDetailsModal, setShowDetailsModal] = useState(false)
    const [selectedDetails, setSelectedDetails] = useState({})

    const handleShowModal = (data) => {
        setShowDetailsModal(!showDetailsModal);
        setSelectedDetails(data)
    }

    const handleCloseModal = () => {
        setShowDetailsModal(false)
        setSelectedDetails({})
    }

    return (
        <>
            <div className="mt-8 lg:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    recipes?.map(recipe => <RecipeCard 
                        key={recipe.id}
                        title={recipe.title}
                        summary={recipe.summary}
                        image={recipe.image}
                        handleShowModal={() => handleShowModal(recipe)}
                    />)
                }
            </div>


            <RecipeDetailsModal
                open={showDetailsModal}
                title={"Recipe Details"}
                selectedDetails={selectedDetails}
                handleClose={() => handleCloseModal()}
            />
        </>


    )
}

export default RecipeListingSection