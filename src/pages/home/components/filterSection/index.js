import React, { useState } from 'react'

const FilterSection = ({ filterDiets, handleFilterChange, processFilter }) => {
    const dietaryPreferences = [
        "Gluten Free",
        "Ketogenic",
        "Vegetarian",
        "Lacto-Vegetarian",
        "Ovo-Vegetarian",
        "Vegan",
        "Pescetarian",
        "Paleo",
        "Primal",
        "Low FODMAP",
        "Whole30"
    ]

    const [showMenu, setShowMenu] = useState(false);

    const handleFilter = async () => {
        setShowMenu(!showMenu);
        await processFilter();
    }

    return (
        <div className='flex md:justify-end mt-4 md:-mt-12'>
            <div className='relative inline-block text-left'>
                <button type="button"
                    onClick={() => setShowMenu(!showMenu)}
                    className="text-textColor bg-[#FFD57D] hover:bg-secondary transition-all ease-in-out focus:outline-none rounded-xl text-xs md:text-sm px-4 py-3 text-center inline-flex items-center font-bold"
                >
                    Filter Data
                    <svg
                        className="w-4 h-4 ml-4"
                        aria-hidden="true"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2" d="M19 9l-7 7-7-7"
                        >
                        </path>
                    </svg>
                </button>

                {
                    showMenu && <div
                        onMouseLeave={() => setShowMenu(false)}
                        className="absolute left-0 md:right-0 z-10 mt-3 w-56 origin-top-right rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"                >
                        <div className='py-3 px-4 lg:px-5'>
                            {
                                dietaryPreferences.map((dietaryPreference, index) => {
                                    return (
                                        <div key={index}>
                                            <div className="flex items-center py-2 md:py-1.5">
                                                <input
                                                    id={dietaryPreference}
                                                    onChange={handleFilterChange}
                                                    name="diets"
                                                    value={dietaryPreference}
                                                    type="checkbox"
                                                    checked={filterDiets?.includes(dietaryPreference)}
                                                    className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded dark:focus: ring-offset-gray-700"
                                                />
                                                <label
                                                    htmlFor={dietaryPreference}
                                                    className="ml-2 lg:ml-4 text-xs md:text-sm font-medium text-textColor"
                                                >
                                                    {dietaryPreference}
                                                </label>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                            <button
                                type='button'
                                className='mt-3 mb-2 w-full mx-auto px-4 py-2 rounded-md bg-secondary text-white text-center text-xs md:text-sm font-semibold'
                                onClick={handleFilter}
                            >
                                Filter
                            </button>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default FilterSection