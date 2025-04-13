"use client";

import Image from "next/image";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import DocumentsByType from "./components/DocumentType";
import PriceCalculator from "./components/PriceCalculator";
import CustomOrderForm from "./components/CustomOrderForm";
import { useState } from "react";
import DocumentView from "./components/DocumentView";

// Define the Document interface
interface Document {
  id: string;
  title: string;
  description: string;
  words: number;
  pages: number;
  projectType: string;
  subject: string;
  academicLevel: string;
  dateAdded: string;
  contentType: string;
  level: string;
  language: string;
  referenceList: boolean;
  formatting: string;
  uploadedBy: string;
}

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(
    null
  );

  const handleDocumentSelect = (document: Document) => {
    setSelectedDocument(document);
  };

  const handleBackToList = () => {
    setSelectedDocument(null);
  };

  return (
    <div>
      <Hero
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedDocument={selectedDocument}
      />
      <div className="lg:px-24 px-0">
        {selectedDocument ? (
          <DocumentView document={selectedDocument} onBack={handleBackToList} searchQuery={searchQuery}
          onDocumentSelect={handleDocumentSelect} />
        ) : (
          <>
            <Cards
              searchQuery={searchQuery}
              onDocumentSelect={handleDocumentSelect}
            />
            <PriceCalculator />
            <DocumentsByType />
            <CustomOrderForm />
          </>
        )}
      </div>
    </div>
  );
}
