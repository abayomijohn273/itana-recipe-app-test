import React from 'react'
import { useNavigate } from 'react-router-dom';

const GoBackButton = () => {
    const navigate = useNavigate();
    return (
        <button
            onClick={() => navigate(-1)}
            type="button"
            className="flex flex-row items-center flex-wrap"
        >
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 4.16667H2.97889L5.76333 1.175L4.66667 0L0 5L4.66667 10L5.76333 8.825L2.97889 5.83333H14V4.16667Z" fill="#FE823E" />
            </svg>

            <p className='pl-4 text-sm-15 lg:text-base text-[#FE823E] font-semibold'>Go Back</p>
        </button>
    )
}

export default GoBackButton