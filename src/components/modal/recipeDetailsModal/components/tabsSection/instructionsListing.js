import React from 'react'

const InstructionsListing = ({ instructions }) => {
    return <div className=''>
        {instructions?.map((instruction, index) => <div
            key={index}
            className='text-primary text-sm-15 leading-7'
        >
            {instruction?.steps?.map((step, index) => {
                const ingredients = step?.ingredients?.map((ingredient) => ingredient?.name);
                const ingredientToString = ingredients?.join(', ');

                const equipment = step?.equipment?.map((item) => item?.name);
                const equipmentToString = equipment?.join(', ');

                return <div key={index} className='flex flex-row items-start pb-6'>
                    <div className='w-2 h-2 rounded-full bg-secondary' />
                    <div className='-mt-2 px-3 flex-1'>
                        <p className='font-medium'>{step?.step}</p>

                        {/* Ingredients */}
                        {ingredients?.length > 0 && <p className='mt-2 text-sm text-gray-600'>
                            <span className='font-semibold'>Ingredients:</span> {" "}
                            {ingredientToString}
                        </p>}

                        {/* Equipments */}
                        {equipment?.length > 0 && <p className='mt-2 text-sm text-gray-600'>
                            <span className='font-semibold'>Equipment:</span> {" "}
                            {equipmentToString}
                        </p>}
                    </div>
                </div>
            })}
        </div>
        )}
    </div>
}

export default InstructionsListing