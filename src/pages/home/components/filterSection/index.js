import React, { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

const FilterSection = () => {
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

    return (
        <div className='flex md:justify-end mt-4 md:-mt-12'>
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="text-textColor bg-[#FFD57D] hover:bg-secondary transition-all ease-in-out focus:outline-none rounded-xl text-xs md:text-sm px-4 py-3 text-center inline-flex items-center font-bold">
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
                    </Menu.Button>
                </div>


                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute left-0 md:right-0 z-10 mt-3 w-56 origin-top-right rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-3">
                            {
                                dietaryPreferences.map((dietaryPreference, index) => {
                                    return (
                                        <Menu.Item key={index}>
                                            <div className="flex items-center px-4 lg:px-5 py-2 md:py-1.5">
                                                <input
                                                    id={dietaryPreference}
                                                    // onClick={ }
                                                    type="checkbox"
                                                    value="" className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded dark:focus: ring-offset-gray-700"
                                                />
                                                <label
                                                    for={dietaryPreference}
                                                    className="ml-2 lg:ml-4 text-xs md:text-sm font-medium text-textColor"
                                                >
                                                    {dietaryPreference}
                                                </label>
                                            </div>
                                        </Menu.Item>
                                    )
                                })
                            }
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>

        </div>
    )
}

export default FilterSection