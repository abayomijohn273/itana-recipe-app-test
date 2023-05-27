import React from 'react'
import { useRef } from "react";
import { Dialog } from "@headlessui/react";
import CloseButton from './components/closeButton';
import ModalWrapper from './components/modalWrapper';
import DetailSummary from './components/detailSummary';
import DetailImage from './components/detailImage';
import DetailTitle from './components/detailTitle';
import TabsSection from './components/tabsSection';
import CookingDuration from './components/cookingDuration';


const RecipeDetailsModal = ({ title, open, handleClose, selectedDetails }) => {
    const cancelButtonRef = useRef(null);

    return (
        <ModalWrapper
            cancelButtonRef={cancelButtonRef}
            open={open}
            handleClose={handleClose}
        >
            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl">
                <CloseButton cancelButtonRef={cancelButtonRef} handleClose={handleClose} />
                <div className="px-4 md:px-6 lg:px-8 pb-12">
                    <div className="">
                        <DetailImage image={selectedDetails?.image} title={selectedDetails?.title} />
                        <CookingDuration readyInMinutes={selectedDetails?.readyInMinutes} />
                        <DetailTitle title={selectedDetails?.title} />
                        <DetailSummary summary={selectedDetails?.summary} />
                    </div>
                    <div className='mt-6'>
                        <TabsSection selectedDetails={selectedDetails}/>
                    </div>
                </div>
            </Dialog.Panel>
        </ModalWrapper>

    );
};

export default RecipeDetailsModal;
