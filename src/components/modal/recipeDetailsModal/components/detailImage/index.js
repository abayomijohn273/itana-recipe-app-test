import React from 'react'

const DetailImage = ({ image, title }) => {
    return (
        <div className='mb-6 h-24 w-36 rounded-lg object-cover'>
            <img src={image} alt={title} className='h-24 w-36 rounded-lg object-cover' />
        </div>
    )
}

export default DetailImage