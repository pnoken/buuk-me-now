import React from "react";
import Modal from "../modal/create-modal";
import { useState } from 'react';
import Pagination from '@/components/layout/pagination'
import { TableData } from './types'

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
    const [filteredItems, setFilteredItems] = useState<Array<TableData>>([])
    const [page, setPage] = React.useState(0);
    const rowsPerPage = 10;

    const handleChangePage = (pageNumber: number) => {
        setPage(pageNumber - 1);
    };

    const search = (event: React.ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value;
        const filtered = TABLE_ROWS.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()) || item.description.toLowerCase().includes(query.toLowerCase()) || item.target.toLowerCase().includes(query.toLowerCase()));
        query.length > 0 ? setFilteredItems(filtered) : setFilteredItems([])
    }

    console.log("filtered data", filteredItems)

    return (
        <div className="h-full w-full">
            <div className="flex h-12 justify-between my-4">
                <div className="relative mr-6 my-2 w-full">
                    <div className="absolute pin-r pin-t m-3 text-purple-lighter">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="9.80553" cy="9.8055" r="7.49047" stroke="#808885" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M15.0153 15.4043L17.9519 18.3333" stroke="#808885" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div><input type="search" onChange={search} className="bg-white shadow rounded-md w-2/3 border-1 border-[#CCCFCE66] py-3.5 px-12" placeholder="Search customer log by customer name, email address & phone number" />
                    <button className="border-2 text-[#004741] border-[#004741] rounded-md bg-[#FFFFFF] p-3 ml-4">
                        Search
                    </button>

                </div>

                <button
                    type="button"
                    className="rounded-md flex w-1/6 px-2 bg-[#004741] items-center justify-between text-white shadow-sm"
                    onClick={() => setModal(true)}
                >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Iconly/Light/Document">
                            <g id="Document">
                                <path id="Stroke 1" d="M13.0969 13.5195H7.0802" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path id="Stroke 2" d="M13.0969 10.0308H7.0802" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path id="Stroke 3" d="M9.37603 6.55009H7.0802" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path id="Stroke 4" fillRule="evenodd" clipRule="evenodd" d="M13.2572 2.2915C13.2572 2.2915 6.85965 2.29484 6.84965 2.29484C4.54965 2.309 3.12549 3.82234 3.12549 6.13067V13.794C3.12549 16.114 4.56049 17.6332 6.88049 17.6332C6.88049 17.6332 13.2772 17.6307 13.288 17.6307C15.588 17.6165 17.013 16.1023 17.013 13.794V6.13067C17.013 3.81067 15.5772 2.2915 13.2572 2.2915Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                        </g>
                    </svg>

                    <span>Create a campaign</span>
                </button>

            </div>

            <table className="w-full text-left mt-6 overflow-x-auto">
                <thead className="bg-[#F3F3F4] border-2 border-[#ECECEB] md:rounded-t-lg shadow-md">
                    <tr>
                        {
                            TABLE_HEAD.map((head) => (
                                <th
                                    key={head}
                                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                                >

                                    {head}

                                </th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody className="bg-[#FFFFFF]">
                    {filteredItems.length > 0 ? (filteredItems.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(({ title, description, target, status }, index) => {
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
                    })) : (TABLE_ROWS?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(({ title, description, target, status }, index) => {
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
                    }))}
                </tbody>
            </table>
            {modal && <Modal setModal={setModal} tableData={TABLE_ROWS} />}
            <Pagination itemsPerPage={rowsPerPage} totalItems={TABLE_ROWS.length} currentPage={page} onPageChange={handleChangePage} />
        </div>
    );
}