import React, { useEffect } from 'react'
import DetailImage from './components/detailImage'
import CookingDuration from './components/cookingDuration'
import DetailTitle from './components/detailTitle'
import DetailSummary from './components/detailSummary'
import TabsSection from './components/tabsSection'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getRecipeInformationAction } from '../../redux/actions/recipeAction'
import { selectRecipe, selectRecipeLoading } from '../../redux/slices/recipeSlice'
import LoadingSpinner from '../../components/blocks/loadingSpinner'
import GoBackButton from '../../components/blocks/goBackButton'
import DetailShare from './components/detailsShare'

const RecipeDetails = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const loading = useSelector(selectRecipeLoading);
    const recipeDetails = useSelector(selectRecipe);

    const fetchData = async (id) => {
        await dispatch(getRecipeInformationAction(id))
    }

    useEffect(() => {
        console.log(location);
        const pathName = location?.pathname?.slice(1);
        fetchData(pathName)
    }, [location?.pathname])

    return (
        <div>
            {
                loading ?
                    <div className='pt-40 pb-80 mx-auto flex justify-center'>
                        <LoadingSpinner />
                    </div> :
                    <div className="w-full md:w-10/12 lg:w-9/12 xl:w-8/12 mx-auto pb-12">
                        <div className="">
                            <div className='mb-6 lg:mb-8'>
                                <GoBackButton />
                            </div>
                            <DetailImage image={recipeDetails?.image} title={recipeDetails?.title} />
                            <CookingDuration readyInMinutes={recipeDetails?.readyInMinutes} />
                            <DetailTitle title={recipeDetails?.title} />
                            <DetailSummary summary={recipeDetails?.summary} />

                            <DetailShare title={recipeDetails?.title} pathname={location?.pathname} />
                        </div>
                        <div className='mt-6'>
                            <TabsSection selectedDetails={recipeDetails} />
                        </div>
                    </div>
            }
        </div>
    )
}

export default RecipeDetails