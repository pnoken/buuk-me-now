import { Dispatch, SetStateAction, useState } from 'react';
import { TableData } from '../table/types';

interface CreateFormProps {
    tabledata: Array<TableData>
    open: boolean
    setModal: Dispatch<SetStateAction<boolean>>
}

export default function CreateForm({ tabledata, open, setModal }: CreateFormProps) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [target, setTarget] = useState("");

    function createCampaign() {
        tabledata.push({
            title: title,
            description: description,
            target: target,
            status: "Active"
        });
        setTitle("");
        setDescription("");
        setTarget("");
        console.log("tab data", tabledata)
        setTimeout(() => setModal(!open), 1000);
    }
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center lg:px-8">
                <div className="my-3 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Campaign Title
                            </label>
                            <div className="mt-2">
                                <input
                                    id="title"
                                    name="title"
                                    type="text"
                                    autoComplete="title"
                                    onChange={(e) => setTitle(e.target.value)}
                                    required
                                    className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                                Description
                            </label>
                            <div className="mt-2">
                                <textarea
                                    id="about"
                                    name="about"
                                    onChange={(e) => setDescription(e.target.value)}
                                    rows={6}
                                    required
                                    className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={''}
                                />
                            </div>
                            <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                Target group
                            </label>
                            <div className="mt-2">
                                <select
                                    id="target-group"
                                    name="target-group"
                                    required
                                    onChange={(e) => setTarget(e.target.value)}
                                    autoComplete="target-group"
                                    className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6"
                                >
                                    <option>Select your target group</option>
                                    <option>All customers</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <button
                                type="button"
                                className="flex w-full justify-center rounded-md bg-[#004741]  py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                onClick={() => createCampaign()}
                                disabled={!title && !description && !target}
                            >
                                Submit your comment
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}