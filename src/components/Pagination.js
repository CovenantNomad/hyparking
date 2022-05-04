import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { useState } from 'react'

export default function Pagination({ page, setPage, totalPage, totalResults, limit }) {
  const maxArrayNumber = Math.ceil(totalPage / 5)
  const [ arrayNumber, setArrayNumber ] = useState(1)
  const currentArray = Array(Math.min(5, totalPage)).fill().map((_, i) => (((arrayNumber - 1) * 5) + 1 + i))


  return (
    <div className="bg-white py-3 flex items-center justify-between mt-6 border-t border-gray-200 sm:px-6">
      <div className="flex-1 flex justify-between sm:hidden">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Previous
        </button>
        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPage}
          className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Next
        </button>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{((page - 1) * limit) + 1}</span> to <span className="font-medium">{Math.min(((page - 1) * limit) + limit, totalResults)}</span> of{' '}
            <span className="font-medium">{totalResults}</span> results
          </p>
        </div>
        <div>
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <button
              onClick={() => setArrayNumber(arrayNumber - 1)}
              disabled={arrayNumber === 1}
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            
            {currentArray.map((item) => 
              <button 
                key={item}
                onClick={() => {
                  setPage(item)
                }}
                className={item === page ? `z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium`: `bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium`}
              >
                {item}
              </button>
            )}

            <button
              onClick={() => setArrayNumber(arrayNumber + 1)}
              disabled={arrayNumber === maxArrayNumber}
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  )
}