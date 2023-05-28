import React from 'react'

const Card = () => {
    return <div className='mb-6 lg:mb-8 cursor-pointer animate-pulse'>
        <div className='h-[17rem] bg-grayColor rounded-2xl object-contain flex justify-center' />
        <div className="pt-4 px-3">
            <div className="h-6 w-8/12 bg-grayColor" />
            <div className="mt-3 h-3 w-10/12 bg-grayColor" />
            <div className="mt-1 h-3 w-10/12 bg-grayColor" />
        </div>
    </div>
}

const RecipesLoading = () => {
    return (
        <div className='mt-8 lg:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default RecipesLoading