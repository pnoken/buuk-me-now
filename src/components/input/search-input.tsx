import { useState } from "react"

export const SearchInput = ({ tableData, setFilteredItems }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const search = (query) => {
        const filtered = tableData.filter((info) => info.title.toLowerCase().includes(query.toLowerCase()) || info.description.toLowerCase().includes(query.toLowerCase()) || info.target.toLowerCase().includes(query.toLowerCase()));
        setFilteredItems(filtered);
    }
    return (
        <div className="my-4">
            <div className="relative bg-white mb-4 flex w-full flex-wrap items-stretch shadow-md">
                <input
                    type="search"
                    className="relative m-0 -mr-0.5 block min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                    placeholder="Search"
                    aria-label="Search"
                    value={searchTerm}
                    onChange={e => {
                        setSearchTerm(e.target.value);
                        search(e.target.value);
                    }}
                    aria-describedby="button-addon1" />


                <button
                    className="relative flex items-center px-6 font-medium  border-none leading-tight transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                    type="button"
                    id="button-addon1"
                    data-te-ripple-init
                    data-te-ripple-color="light">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="9.80553" cy="9.8055" r="7.49047" stroke="#808885" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M15.0153 15.4043L17.9519 18.3333" stroke="#808885" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
    )
}