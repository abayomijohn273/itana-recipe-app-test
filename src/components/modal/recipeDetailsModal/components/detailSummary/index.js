import React, { useState } from 'react'

const DetailSummary = ({ summary }) => {
    const [showMore, setShowMore] = useState(false);

    return (
        <>
            {
                summary && <>
                    <p
                        className={`mt-2 text-sm-15 text-gray-500 leading-6 ${!showMore && "line-clamp-3"}`}
                        dangerouslySetInnerHTML={{ __html: summary }}
                    />

                    <button
                        type="button" onClick={() => setShowMore(!showMore)}
                        className='text-sm mt-3 text-secondary'>
                        {showMore ? "Hide more..." : "Show more..."}
                    </button>
                </>
            }
        </>

    )
}

export default DetailSummary