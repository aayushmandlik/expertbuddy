"use client"

import { ChevronDown, Calendar, Minus, Plus } from "lucide-react"
import { useState } from "react"

export default function PriceCalculator() {
  const [pages, setPages] = useState(1)
  const [price, setPrice] = useState(19.5)
  const [discountedPrice, setDiscountedPrice] = useState(19.0)

  const decrementPages = () => {
    if (pages > 1) {
      setPages(pages - 1)
      updatePrices(pages - 1)
    }
  }

  const incrementPages = () => {
    setPages(pages + 1)
    updatePrices(pages + 1)
  }

  const updatePrices = (newPages: number) => {
    const basePrice = 19.5 * newPages
    const discount = basePrice * 0.025 // 2.5% discount
    setPrice(basePrice)
    setDiscountedPrice(basePrice - discount)
  }

  return (
    <div className="bg-gray-100 flex justify-start items-start max-w-[50%] lg:ml-5 ml-1.5">
      <div className="rounded-3xl px-10 py-10 shadow-lg min-w-screen md:min-w-[720px] mx-auto bg-[#A414D5] bg-[url('/pattern.png')] bg-blend-multiply bg-no-repeat bg-cover bg-center">
        <h2 className="text-white text-4xl font-bold mb-4">Calculate Price and Order a <br /> Custom Work</h2>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-white text-sm mb-1">Type of Work</label>
            <div className="relative">
              <select
                className="w-full bg-white rounded-lg py-3 px-3 pr-8 appearance-none focus:outline-none"
                defaultValue="application-essay"
              >
                <option value="application-essay">Application Essay</option>
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
            <label className="block text-white text-sm mb-1">Academic Level</label>
            <div className="relative">
              <select
                className="w-full bg-white rounded-lg py-3 px-3 pr-8 appearance-none focus:outline-none"
                defaultValue="undergraduate"
              >
                <option value="high-school">High School</option>
                <option value="undergraduate">Undergraduate/Bachelor</option>
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
                className="w-full bg-white rounded-lg py-3 px-3 pr-8 appearance-none focus:outline-none"
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
            <div className="flex items-center bg-white rounded-md">
              <button onClick={decrementPages} className="p-2 text-gray-500 hover:text-gray-700 focus:outline-none">
                <Minus className="h-4 w-4" />
              </button>
              <div className="flex-1 text-center p-3 rounded-lg">
                {pages} page/{pages * 275} words
              </div>
              <button onClick={incrementPages} className="p-2 text-gray-500 hover:text-gray-700 focus:outline-none">
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-black bg-white flex justify-between gap-5 md:gap-72 px-3 py-3 rounded-lg">
            <div>Your Price</div>
            <div>
              <span className="text-sm line-through mr-1">${price.toFixed(2)}</span>
              <span className="font-bold">${discountedPrice.toFixed(2)}</span>
            </div>
          </div>
          <button className="bg-gray-900 hover:bg-black text-white font-medium py-3 px-6 rounded-full transition-colors">
            Order Now
          </button>
        </div>
      </div>
    </div>
  )
}
