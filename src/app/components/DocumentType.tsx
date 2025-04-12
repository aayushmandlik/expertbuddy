"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

export default function DocumentsByType() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 3 // Assuming we have 3 pages of document types

  const categories = [
    "Accounting",
    "Algebra",
    "Analysis",
    "Anthropology",
    "Archaeology",
    "Chemistry Tutors",
    "Coding Tutors",
    "Computer Science",
    "Elementary Tutors",
    "French Tutors",
    "Geometry Tutors",
    "Writing Tutor",
    "Geometry Tutors",
    "German Tutors",
    "GMAT Tutors",
  ]

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1))
  }

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
  }

  return (
    <div className="bg-gray-100 py-8 px-4 rounded-lg">
      <div className="mb-6 flex items-center">
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
        <h2 className="text-xl font-bold text-gray-900">Documents by Type</h2>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {categories.map((category, index) => (
          <button
            key={index}
            className="bg-white rounded-lg py-3 px-4 text-center text-sm font-medium text-gray-800 hover:bg-gray-50 transition-colors shadow-sm"
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-6 flex justify-center items-center">
        <button
          onClick={handlePrevPage}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-sm mr-2"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <div className="flex space-x-1 mx-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${currentPage === index + 1 ? "bg-gray-800" : "bg-gray-300"}`}
            />
          ))}
        </div>

        <button
          onClick={handleNextPage}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-sm ml-2"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
