import React from 'react'

const DetailTitle = ({title}) => {
    return (
        <h3 className="text-lg md:text:lg lg:text-xl xl:text-2xl font-bold leading-6 text-primary">
            {title}
        </h3>
    )
}

export default DetailTitle