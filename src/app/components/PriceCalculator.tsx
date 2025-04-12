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
    <div className="bg-gray-100 flex justify-center max-w-[70%]">
      <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-3xl p-6 shadow-lg max-w-xl mx-auto">
        <h2 className="text-white text-2xl font-bold mb-4">Calculate Price and Order a Custom Work</h2>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-white text-sm mb-1">Type of Work</label>
            <div className="relative">
              <select
                className="w-full bg-white rounded-md py-2 px-3 pr-8 appearance-none focus:outline-none"
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
                className="w-full bg-white rounded-md py-2 px-3 pr-8 appearance-none focus:outline-none"
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
                className="w-full bg-white rounded-md py-2 px-3 pr-8 appearance-none focus:outline-none"
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
              <div className="flex-1 text-center">
                {pages} page/{pages * 275} words
              </div>
              <button onClick={incrementPages} className="p-2 text-gray-500 hover:text-gray-700 focus:outline-none">
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <div className="text-white text-sm">Your Price</div>
            <div className="text-white">
              <span className="text-sm line-through mr-1">${price.toFixed(2)}</span>
              <span className="font-bold">${discountedPrice.toFixed(2)}</span>
            </div>
          </div>
          <button className="bg-gray-900 hover:bg-black text-white font-medium py-2 px-6 rounded-md transition-colors">
            Order Now
          </button>
        </div>
      </div>
    </div>
  )
}
