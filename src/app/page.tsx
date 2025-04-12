"use client";

import Image from "next/image";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import DocumentsByType from "./components/DocumentType";
import PriceCalculator from "./components/PriceCalculator";
import CustomOrderForm from "./components/CustomOrderForm";
import { useState } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <Hero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="px-24">
        <Cards searchQuery={searchQuery} />
        <PriceCalculator />
        <DocumentsByType />
        <CustomOrderForm />
      </div>
    </div>
  );
}
