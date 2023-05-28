import React from 'react'
import RecipeImg from "../../../assets/images/recipe.webp"
import style from "./style.module.css"
import { Link } from 'react-router-dom'
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const RecipeCard = ({ id, title, image, summary, handleShowModal }) => {
    const urlTitle = typeof title === "string" && encodeURIComponent(title?.toLowerCase()?.trim())

    return (
        <Link
            to={`/${id}?title=${urlTitle}`}
            onClick={handleShowModal} className={`mb-6 lg:mb-8 cursor-pointer ${style.card}`}
        >
            <div className="h-[17rem] w-full bg-grayColor rounded-2xl object-cover flex justify-center">
                <LazyLoadImage
                    src={image || RecipeImg}
                    alt={`Recipe - ${title}`}
                    className="rounded-2xl h-[17rem] w-full object-cover"
                    effect="blur"
                    width={400}
                    height={100}
                />
            </div>
            <div className="pt-4 pr-3">
                <h3 className="font-bold text-textColor text-lg lg:text-xl line-clamp-1">{title}</h3>
                <p
                    className="mt-2 text-sm-15 text-gray-500 leading-6 line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: summary }}
                />
            </div>
        </Link>
    )
}

export default RecipeCard