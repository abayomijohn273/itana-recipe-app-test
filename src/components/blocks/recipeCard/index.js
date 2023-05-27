import React from 'react'
import RecipeImg from "../../../assets/images/recipe.webp"
import style from "./style.module.css"

const RecipeCard = ({ title, image, summary, handleShowModal }) => {
    return (
        <div onClick={handleShowModal} className={`mb-6 lg:mb-8 cursor-pointer ${style.card}`}>
            <div className="h-[17rem] w-full bg-grayColor rounded-2xl object-cover flex justify-center">
                <img src={image || RecipeImg} alt={`Recipe - ${title}`} className="rounded-2xl h-[17rem] w-full object-cover" />

                <button type='button' className='absolute top-4 right-4 bg-[#4C4A4B] px-3 py-3 rounded-xl flex justify-center items-center z-10'>
                    <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.6667 10.6024C11.0756 10.6024 10.5467 10.8283 10.1422 11.1822L4.59667 8.05723C4.63556 7.88404 4.66667 7.71084 4.66667 7.53012C4.66667 7.3494 4.63556 7.17621 4.59667 7.00301L10.08 3.90813C10.5 4.28464 11.0522 4.51807 11.6667 4.51807C12.9578 4.51807 14 3.50904 14 2.25904C14 1.00904 12.9578 0 11.6667 0C10.3756 0 9.33333 1.00904 9.33333 2.25904C9.33333 2.43976 9.36444 2.61295 9.40333 2.78614L3.92 5.88102C3.5 5.50452 2.94778 5.27108 2.33333 5.27108C1.04222 5.27108 0 6.28012 0 7.53012C0 8.78012 1.04222 9.78916 2.33333 9.78916C2.94778 9.78916 3.5 9.55572 3.92 9.17922L9.45778 12.3117C9.41889 12.4699 9.39556 12.6355 9.39556 12.8012C9.39556 14.0136 10.4144 15 11.6667 15C12.9189 15 13.9378 14.0136 13.9378 12.8012C13.9378 11.5889 12.9189 10.6024 11.6667 10.6024ZM11.6667 1.50602C12.0944 1.50602 12.4444 1.84488 12.4444 2.25904C12.4444 2.67319 12.0944 3.01205 11.6667 3.01205C11.2389 3.01205 10.8889 2.67319 10.8889 2.25904C10.8889 1.84488 11.2389 1.50602 11.6667 1.50602ZM2.33333 8.28313C1.90556 8.28313 1.55556 7.94428 1.55556 7.53012C1.55556 7.11596 1.90556 6.77711 2.33333 6.77711C2.76111 6.77711 3.11111 7.11596 3.11111 7.53012C3.11111 7.94428 2.76111 8.28313 2.33333 8.28313ZM11.6667 13.5693C11.2389 13.5693 10.8889 13.2304 10.8889 12.8163C10.8889 12.4021 11.2389 12.0633 11.6667 12.0633C12.0944 12.0633 12.4444 12.4021 12.4444 12.8163C12.4444 13.2304 12.0944 13.5693 11.6667 13.5693Z" fill="white" />
                    </svg>
                </button>
            </div>
            <div className="pt-4 pr-3">
                <h3 className="font-bold text-textColor text-lg lg:text-xl line-clamp-1">{title}</h3>
                <p
                    className="mt-2 text-sm-15 text-gray-500 leading-6 line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: summary }}
                />
            </div>
        </div>
    )
}

export default RecipeCard