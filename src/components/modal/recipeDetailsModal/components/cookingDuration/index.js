import React from 'react'

const CookingDuration = ({ readyInMinutes }) => {
    return (
        <div className='mb-4 flex flex-row items-center'>
            <div>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.4521 5.51857H8.09443V10.8678L12.3937 13.4086L13.0726 12.312L9.4521 10.1991V5.51857ZM13.8301 0L18 3.42793L16.8415 4.79643L12.6689 1.37028L13.8301 0ZM4.16895 0L5.32931 1.36939L1.15855 4.79643L0 3.42704L4.16895 0ZM8.99955 1.95245C4.50113 1.95245 0.853522 5.54532 0.853522 9.97623C0.853522 14.4071 4.50113 18 8.99955 18C13.498 18 17.1456 14.4071 17.1456 9.97623C17.1456 5.54532 13.498 1.95245 8.99955 1.95245ZM8.99955 16.2169C5.50581 16.2169 2.66375 13.4175 2.66375 9.97623C2.66375 6.53492 5.50581 3.73551 8.99955 3.73551C12.4933 3.73551 15.3353 6.53492 15.3353 9.97623C15.3353 13.4175 12.4933 16.2169 8.99955 16.2169Z" fill="#FE823E" />
                </svg>
            </div>
            <p className='pl-2 text-sm font-semibold text-[#FE823E]'>Ready in {readyInMinutes || "1"} minute</p>
        </div>
    )
}

export default CookingDuration