import React from 'react'

const IngredientListing = ({ ingredients }) => {
    return <div className=''>
        {ingredients?.map((ingredient, index) => <div
            key={index}
            className='text-primary text-sm-15 leading-7'
        >
            <p className=''>{ingredient.original}</p>
        </div>)}
    </div>
}

export default IngredientListing