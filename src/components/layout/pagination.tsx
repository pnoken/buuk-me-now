interface PaginationProps {
    itemsPerPage: number
    totalItems: number
    currentPage: number
    onPageChange: (pageNumber: number) => void
}

export default function Pagination({ itemsPerPage, totalItems, currentPage, onPageChange }: PaginationProps) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <div className="flex flex-1 justify-between sm:hidden">
                <button
                    disabled={currentPage === 0}
                    onClick={() => onPageChange(currentPage - 1)}
                    className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Previous
                </button>
                <button
                    disabled={currentPage + 1 === totalItems}
                    onClick={() => onPageChange(currentPage + 1)}
                    className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Next
                </button>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-end">

                <div>
                    <nav className="isolate inline-flex gap-4 -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                        <button
                            disabled={currentPage === 0}
                            onClick={() => onPageChange(currentPage - 1)}
                            className={`${currentPage + 1 === totalPages ? 'disabled' : 'hover:bg-gray-50 focus:z-20 focus:outline-offset-0'} relative inline rounded-full -flex items-center px-2 py-2 text-gray-400`}
                        >
                            <span className="sr-only">Previous</span>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8334 16.1829L20.8334 16.1829" stroke="#AAAFAE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M14.8666 20.1991L10.8332 16.1831L14.8666 12.1665" stroke="#AAAFAE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                        {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
                        {pageNumbers.map((pageNumber, index) => (
                            <li key={pageNumber} className="flex gap-4"><a
                                href="#"
                                onClick={() => onPageChange(pageNumber)}
                                aria-current="page"
                                className={`relative z-10 inline-flex items-center ${currentPage + 1 === pageNumber ? `bg-[#004741] text-white` : `text-[#004741] bg-white`} px-5 text-sm font-semibol rounded-full  focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                            >
                                {pageNumber}
                            </a>{
                                    index !== pageNumbers.length - 1 && <span className="rounded-full inline-flex items-center px-3 text-[#004741] bg-white text-sm font-semibold hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                                        ...
                                    </span>
                                }</li>))}

                        <button
                            disabled={currentPage + 1 === totalPages}
                            onClick={() => onPageChange(currentPage + 1)}
                            className={`${currentPage + 1 === totalPages ? 'disabled' : 'hover:bg-gray-50 focus:z-20 focus:outline-offset-0'} relative rounded-full inline-flex items-center rounded mx-4 px-2 py-2 text-gray-400`}
                        >
                            <span className="sr-only">Next</span>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.1666 16.1829L11.1666 16.1829" stroke="#004741" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M17.1334 20.1991L21.1668 16.1831L17.1334 12.1665" stroke="#004741" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </button>
                    </nav>
                </div>
            </div>
        </div>
    )
}