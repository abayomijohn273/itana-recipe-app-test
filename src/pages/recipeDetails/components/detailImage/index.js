import React from 'react'

const DetailImage = ({ image, title }) => {
    return (
        <div className='mb-6 h-64 md:h-72 w-full rounded-lg object-cover'>
            <img src={image} alt={title} className='h-64 md:h-72 w-full rounded-lg object-cover' />
        </div>
    )
}

export default DetailImage