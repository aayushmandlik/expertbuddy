import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"

export default function WritingInspirationDatabase() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center">
          <div className="text-purple-600 mr-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5Z"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Find Writing Inspiration in Our Data Base</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Document Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:w-2/3">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-2">Lorem ipsum dolor sit amet consectetur.</h2>
                <p className="text-sm text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet consectetur. Morbi integer tempus odio ut lacus pulvinar. Purus in eget
                  vitae placerat lorem nam. Maecenas incidunt aliquam pretium eu ornare. At ultricies porttitor massa
                  sem. Mauris leo venenatis.
                </p>
                <div className="flex justify-between text-sm">
                  <div className="flex items-center text-purple-600">
                    <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M19.5 3H4.5C3.4 3 2.5 3.9 2.5 5V19C2.5 20.1 3.4 21 4.5 21H19.5C20.6 21 21.5 20.1 21.5 19V5C21.5 3.9 20.6 3 19.5 3ZM19.5 19H4.5V5H19.5V19Z"
                        fill="currentColor"
                      />
                      <path
                        d="M6.5 7H17.5V9H6.5V7ZM6.5 11H17.5V13H6.5V11ZM6.5 15H13.5V17H6.5V15Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span>Words: 514</span>
                  </div>
                  <div className="flex items-center text-purple-600">
                    <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z"
                        fill="currentColor"
                      />
                      <path d="M7 7H17V9H7V7ZM7 11H17V13H7V11ZM7 15H13V17H7V15Z" fill="currentColor" />
                    </svg>
                    <span>Pages: 02</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Filter Panel */}
          <div className="bg-white rounded-lg shadow-sm p-6 lg:w-1/3">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Type of work</label>
                <div className="relative">
                  <select
                    className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 rounded-md appearance-none"
                    defaultValue="all"
                  >
                    <option value="all">All Project Types</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <div className="relative">
                  <select
                    className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 rounded-md appearance-none"
                    defaultValue="accounting"
                  >
                    <option value="accounting">Accounting</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Type of work</label>
                <div className="relative">
                  <select
                    className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 rounded-md appearance-none"
                    defaultValue="any"
                  >
                    <option value="any">Any Academic Level</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Words</label>
                <div className="mt-2">
                  <input
                    type="range"
                    min="275"
                    max="550000"
                    defaultValue="275"
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>From 275</span>
                    <span>To 550,000</span>
                  </div>
                </div>
              </div>

              <div className="text-sm text-gray-600">1 Page = 275 Words</div>

              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-full transition duration-150 ease-in-out">
                Apply
              </button>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center">
          <nav className="inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">First</span>
              <ChevronLeft className="h-4 w-4 mr-1" />
              First
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Back</span>
              <ChevronLeft className="h-4 w-4" />
              Back
            </a>
            <a
              href="#"
              aria-current="page"
              className="relative inline-flex items-center px-4 py-2 border border-purple-500 bg-purple-600 text-sm font-medium text-white"
            >
              1
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              2
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              3
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              4
            </a>
            <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
              ...
            </span>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              25
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Next</span>
              Next
              <ChevronRight className="h-4 w-4 ml-1" />
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Last</span>
              Last
              <ChevronRight className="h-4 w-4 ml-1" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}
