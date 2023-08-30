import { Dispatch, Fragment, SetStateAction, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import CreateForm from '../forms/create-campaign'
import { TableData } from '../table/types'

interface ModalProps {
    setModal: Dispatch<SetStateAction<boolean>>
    tableData: Array<TableData>
}


export default function Modal({ setModal, tableData }: ModalProps) {
    const [open, setOpen] = useState(true)
    setModal(open);

    const cancelButtonRef = useRef(null)

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-[#F3F4F666] backdrop-blur-sm bg-opacity-25 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h- items-end mx-auto justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-white px-6 pb-4 pt-5 sm:p-6 sm:pb-4">
                                    <div className="sm:flex flex items-center sm:mx-10">

                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.0968 13.5195H7.08017" stroke="#00100B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M13.0968 10.0308H7.08017" stroke="#00100B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M9.37609 6.55009H7.08026" stroke="#00100B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M13.2572 2.2915C13.2572 2.2915 6.85967 2.29484 6.84967 2.29484C4.54967 2.309 3.1255 3.82234 3.1255 6.13067V13.794C3.1255 16.114 4.5605 17.6332 6.8805 17.6332C6.8805 17.6332 13.2772 17.6307 13.288 17.6307C15.588 17.6165 17.013 16.1023 17.013 13.794V6.13067C17.013 3.81067 15.5772 2.2915 13.2572 2.2915Z" stroke="#00100B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>


                                        <div className=" text-center sm:ml-2 sm:mt-0 sm:text-left">
                                            <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                Create a campaign
                                            </Dialog.Title>
                                            <div className="mt-2">

                                            </div>
                                        </div>
                                    </div>

                                    <CreateForm tabledata={tableData} open={open} setModal={setModal} />
                                </div>

                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
