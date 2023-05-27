import React from 'react'
import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";


const RecipeDetailsModal = ({ title, open, handleClose, selectedDetails }) => {
    const cancelButtonRef = useRef(null);
    console.log(JSON.stringify(selectedDetails))

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog
                as="div"
                className="relative z-10"
                initialFocus={cancelButtonRef}
                onClose={handleClose}
            >
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl">
                                <div className="bg-white px-4 md:px-6 lg:px-8 py-4 md:py-6 rounded-t-lg">
                                    <div className="flex flex-row justify-end items-center">
                                        <div className="">
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
                                    </div>
                                </div>
                                <div className="px-4 md:px-6 lg:px-8 pb-12">
                                    <div className="">
                                        <div className='mb-6  h-32 w-40 rounded-lg object-cover'>
                                            <img src={selectedDetails.image} alt={selectedDetails?.title} className='h-32 w-40 rounded-lg object-cover' />
                                        </div>
                                        <h3 className="text-lg md:text:xl lg:text-2xl font-bold leading-6 text-primary">
                                            {selectedDetails?.title}
                                        </h3>
                                        <p
                                            className="mt-2 text-sm-15 text-gray-500 leading-6"
                                            dangerouslySetInnerHTML={{ __html: selectedDetails?.summary }}
                                        />

                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
};

export default RecipeDetailsModal;
