"use client"

import { ChevronDown, Calendar, Minus, Plus } from "lucide-react"
import { useState } from "react"

export default function CustomOrderForm() {
  const [pages, setPages] = useState(1)

  const decrementPages = () => {
    if (pages > 1) {
      setPages(pages - 1)
    }
  }

  const incrementPages = () => {
    setPages(pages + 1)
  }

  return (
    <div className="bg-gray-100 flex justify-start items-start max-w-[50%] lg:ml-5 ml-1.5 mb-20">
    <div className="rounded-3xl px-10 py-10 shadow-lg min-w-screen lg:min-w-[720px] mx-auto bg-[#A414D5] bg-[url('/pattern.png')] bg-blend-multiply bg-no-repeat bg-cover bg-center">
      <h2 className="text-white text-4xl font-bold mb-4">
        Can't find the right project for <br /> you? Place a custom order right <br /> now!
      </h2>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-white text-sm mb-1">Project Type</label>
          <div className="relative">
            <select
              className="w-full bg-white rounded-lg py-3 px-3 pr-8 appearance-none focus:outline-none text-gray-500"
              defaultValue=""
            >
              <option value="" disabled>
                Select project type
              </option>
              <option value="essay">Essay</option>
              <option value="research-paper">Research Paper</option>
              <option value="case-study">Case Study</option>
              <option value="term-paper">Term Paper</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-white text-sm mb-1">Education Level</label>
          <div className="relative">
            <select
              className="w-full bg-white rounded-lg py-3 px-3 pr-8 appearance-none focus:outline-none text-gray-500"
              defaultValue=""
            >
              <option value="" disabled>
                Select Education Level
              </option>
              <option value="high-school">High School</option>
              <option value="undergraduate">Undergraduate</option>
              <option value="masters">Master's</option>
              <option value="phd">PhD</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-white text-sm mb-1">Deadline</label>
          <div className="relative">
            <select
              className="w-full bg-white rounded-lg py-3 px-3 pr-8 appearance-none focus:outline-none text-gray-500"
              defaultValue=""
            >
              <option value="" disabled>
                Select Deadline
              </option>
              <option value="6h">6 Hours</option>
              <option value="12h">12 Hours</option>
              <option value="24h">24 Hours</option>
              <option value="48h">2 Days</option>
              <option value="72h">3 Days</option>
              <option value="1w">1 Week</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <Calendar className="h-4 w-4 text-gray-500" />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-white text-sm mb-1">Pages</label>
          <div className="flex items-center bg-white rounded-lg p-2">
            <button
              onClick={decrementPages}
              className="p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
              aria-label="Decrease pages"
            >
              <Minus className="h-4 w-4" />
            </button>
            <div className="flex-1 text-center text-gray-700">
              {pages} page/{pages * 275} words
            </div>
            <button
              onClick={incrementPages}
              className="p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
              aria-label="Increase pages"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="bg-white text-gray-400 rounded-lg py-3 px-4 flex-grow mr-4">
          Please fill up the form to find out the price
        </div>
        <button className="bg-gray-900 hover:bg-black text-white font-medium py-3 px-6 rounded-full transition-colors">
          Get It Done
        </button>
      </div>
    </div>
    </div>
  )
}
