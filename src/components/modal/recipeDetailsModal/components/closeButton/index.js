import React from 'react'

const CloseButton = ({handleClose, cancelButtonRef}) => {
    return (
        <div className="bg-white px-4 md:px-6 lg:px-8 py-4 md:py-6 rounded-t-lg flex flex-row justify-end items-center">

            <button
                type="button"
                className=""
                onClick={handleClose}
                ref={cancelButtonRef}
            >
                <svg
                    width="22"
                    height="21"
                    viewBox="0 0 22 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M1.80762 19.3848L20.1924 0.999998"
                        stroke="red"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <path
                        d="M20.1924 19.3848L1.80761 0.999999"
                        stroke="red"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                </svg>
            </button>
        </div>
    )
}

export default CloseButton