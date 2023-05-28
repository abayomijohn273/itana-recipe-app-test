import React, { useState } from 'react'
import IngredientListing from './ingredientListing'
import InstructionsListing from './instructionsListing'

const TabItem = ({ tab, selectedTab, active, onClick, selectedDetails }) => {
    return <div className='relative block'>
        <button type='button' onClick={onClick} className='flex flex-row text-base md:text-lg items-center py-3 text-primary '>
            <p className='text-xl font-bold'>{selectedTab === tab && active ? "-" : "+"}</p>
            <p className='pl-4 font-bold'>{tab}</p>
        </button>

        {selectedTab === tab && active && <div className='pl-4 lg:pl-6 pb-6 text-sm-15 lg:text-base'>
            {selectedTab === "Ingredient" ?
                <IngredientListing ingredients={selectedDetails?.extendedIngredients} /> :
                <InstructionsListing instructions={selectedDetails?.analyzedInstructions} />}
        </div>}
    </div>
}

const TabsSection = ({ selectedDetails }) => {
    const tabList = ["Ingredient", "Instructions"];
    const [selectedTab, setSelectedTab] = useState("");
    const [active, setActive] = useState(false);

    const handleSelectedTab = (data) => {
        setSelectedTab(data)
        setActive(data === selectedTab ? !active : true)
    }

    return (
        <div className='divide-y divide-gray-300'>
            {tabList.map(tab => <TabItem
                key={tab}
                tab={tab}
                active={active}
                selectedTab={selectedTab}
                onClick={() => handleSelectedTab(tab)}
                selectedDetails={selectedDetails}
            />)}
        </div>
    )
}

export default TabsSection