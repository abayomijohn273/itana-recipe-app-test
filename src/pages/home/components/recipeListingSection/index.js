import React, { useState } from 'react'
import RecipeCard from '../../../../components/blocks/recipeCard'
import RecipeDetailsModal from '../../../../components/modal/recipeDetailsModal'

const RecipeListingSection = () => {
    const [showDetailsModal, setShowDetailsModal] = useState(false)
    const [selectedDetails, setSelectedDetails] = useState({})

    const handleShowModal = (data) => {
        setShowDetailsModal(true);
        setSelectedDetails(data)
    }

    const handleCloseModal = () => {
        setShowDetailsModal(false)
        setSelectedDetails({})
    }

    return (
        <>
            <div className="mt-8 lg:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
            </div>


            <RecipeDetailsModal
                open={showDetailsModal}
                title={"Recipe Details"}
                handleClose={() => handleCloseModal()}
            />
        </>


    )
}

export default RecipeListingSection