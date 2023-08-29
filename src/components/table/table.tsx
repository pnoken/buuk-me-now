import React from "react";
import { SearchInput } from "../input/search-input";
import Modal from "../modal/create-modal";
import { useState } from 'react';
import Pagination from '@/components/layout/pagination'

const TABLE_HEAD = ["Campaign Title", "Description", "Target Group", "Campaign Status"];

const TABLE_ROWS = [
    {
        title: "Mobile app coming soon",
        description: "Lorem ipsum dolor sit amet consectetur. Diam phasellus ut nisl dol...",
        target: "All customers",
        status: "Active"
    },
    {
        title: "Mobile app coming soon",
        description: "Lorem ipsum dolor sit amet consectetur. Diam phasellus ut nisl dol...",
        target: "All customers",
        status: "Active"
    },
    {
        title: "Mobile app coming soon",
        description: "Lorem ipsum dolor sit amet consectetur. Diam phasellus ut nisl dol...",
        target: "All customers",
        status: "Active"
    },
    {
        title: "Mobile app coming soon",
        description: "Lorem ipsum dolor sit amet consectetur. Diam phasellus ut nisl dol...",
        target: "All customers",
        status: "Active"
    },
    {
        title: "Mobile app coming soon",
        description: "Lorem ipsum dolor sit amet consectetur. Diam phasellus ut nisl dol...",
        target: "All customers",
        status: "Active"
    },
    {
        title: "Mobile app coming soon",
        description: "Lorem ipsum dolor sit amet consectetur. Diam phasellus ut nisl dol...",
        target: "All customers",
        status: "Active"
    },
];


export const Table = () => {

    const [modal, setModal] = useState(false);
    const [filteredItems, setFilteredItems] = useState([]);


    interface Campaign {
        title: string;
        description: string;
        target: string;
        status: string;
    }

    return (
        <div className="h-full w-full">
            <div className="flex justify-between ">
                <SearchInput tableData={TABLE_ROWS} setFilteredItems={setFilteredItems} />
                <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-[#004741] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    onClick={() => setModal(true)}
                >

                    Create a campaign
                </button>

            </div>

            <table className="w-full min-w-max table-auto text-left rounded-t-lg shadow-md mt-3">
                <thead className="bg-[#F3F3F4] border-[#ECECEB] ">
                    <tr>
                        {filteredItems ? filteredItems.map((head) => (
                            <th
                                key={head}
                                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                            >

                                {head}

                            </th>
                        )) : (
                            TABLE_HEAD.map((head) => (
                                <th
                                    key={head}
                                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                                >

                                    {head}

                                </th>
                            ))
                        )}
                    </tr>
                </thead>
                <tbody className="bg-[#FFFFFF]">
                    {TABLE_ROWS.map(({ title, description, target, status }, index) => {
                        const isLast = index === TABLE_ROWS.length - 1;
                        const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                        return (
                            <tr key={index + 1}>
                                <td className={classes}>

                                    {title}

                                </td>
                                <td className={classes}>

                                    {description}

                                </td>
                                <td className={classes}>

                                    {target}

                                </td>
                                <td className={classes}>

                                    {status}

                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            {modal && <Modal setModal={setModal} tableData={TABLE_ROWS} />}
            <Pagination />
        </div>
    );
}