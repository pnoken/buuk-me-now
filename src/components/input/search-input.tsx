import React from "react"

export const SearchInput = () => {
    return (<div className="relative mr-6 my-2">
        <div className="absolute pin-r pin-t mt-3 mr-4 text-purple-lighter">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="9.80553" cy="9.8055" r="7.49047" stroke="#808885" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M15.0153 15.4043L17.9519 18.3333" stroke="#808885" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </div><input type="search" className="bg-purple-white shadow rounded border-0 p-4" placeholder="Search customer log by customer name, email address & phone number" />

    </div>)
}