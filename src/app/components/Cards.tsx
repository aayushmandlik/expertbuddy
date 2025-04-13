import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import DocumentView from "./DocumentView";
import Pagination from "./Pagination";


interface CardsProps {
  searchQuery: string;
  onDocumentSelect: (document: Document) => void;
}

// Define types for our data
interface DocumentMetadata {
  contentType: string;
  level: string;
  language: string;
  referenceList: boolean;
  formatting: string;
  uploadedBy: string;
}

interface Document extends DocumentMetadata {
  id: string;
  title: string;
  description: string;
  words: number;
  pages: number;
  projectType: string;
  subject: string;
  academicLevel: string;
  dateAdded: string;
}

// Define project types with proper structure
interface ProjectType {
  id: string;
  name: string;
}

const PROJECT_TYPES: ProjectType[] = [
  { id: "all", name: "All Project Types" },
  { id: "essay", name: "Essay" },
  { id: "research", name: "Research Paper" },
  { id: "case-study", name: "Case Study" },
  { id: "report", name: "Report" },
  { id: "thesis", name: "Thesis" },
  { id: "dissertation", name: "Dissertation" },
];

// Define academic levels with proper structure
interface AcademicLevel {
  id: string;
  name: string;
}

const ACADEMIC_LEVELS: AcademicLevel[] = [
  { id: "any", name: "Any Academic Level" },
  { id: "high-school", name: "High School" },
  { id: "undergraduate", name: "Undergraduate" },
  { id: "masters", name: "Master's" },
  { id: "phd", name: "Ph.D." },
];

// Define subjects
interface Subject {
  id: string;
  name: string;
}

const SUBJECTS: Subject[] = [
  { id: "accounting", name: "Accounting" },
  { id: "finance", name: "Finance" },
  { id: "economics", name: "Economics" },
  { id: "business", name: "Business" },
];

export default function WritingInspirationDatabase({
  searchQuery,
  onDocumentSelect,
}: CardsProps) {
  // Filter states with proper typing
  const [projectType, setProjectType] = useState<string>("all");
  const [subject, setSubject] = useState<string>("accounting");
  const [academicLevel, setAcademicLevel] = useState<string>("any");
  const [wordCount, setWordCount] = useState<number>(275);
  const [isFiltering, setIsFiltering] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
const totalPages = 25;

const handlePageChange = (page: number) => {
  setCurrentPage(page);

  // Optionally, scroll to top after page change
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // If you're fetching new data, call your fetch function here
  // fetchData(page);
};

  const isDefaultFilters =
  projectType === "all" &&
  subject === "accounting" &&
  academicLevel === "any";


  // View state management
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(
    null
  );

  // Enhanced sample data with all required properties
  const sampleData: Document[] = [
    {
      id: "1",
      title: "Financial Accounting Principles",
      description:
        "A comprehensive study of financial accounting principles and their application in modern business.",
      words: 514,
      pages: 2,
      projectType: "thesis",
      subject: "management",
      academicLevel: "undergraduate",
      dateAdded: "2024-03-10",
      contentType: "User generated",
      level: "High School",
      language: "English",
      referenceList: true,
      formatting: "AMA",
      uploadedBy: "Brandon Veteres",
    },
    {
      id: "2",
      title: "Managerial Accounting Research Analysis",
      description:
        "Analysis of managerial accounting techniques used in decision-making processes.",
      words: 750,
      pages: 3,
      projectType: "research",
      subject: "accounting",
      academicLevel: "masters",
      dateAdded: "2024-03-09",
      contentType: "User generated",
      level: "Master's",
      language: "English",
      referenceList: true,
      formatting: "APA",
      uploadedBy: "Jane Doe",
    },
    {
      id: "3",
      title: "Tax Accounting Case Study",
      description:
        "Understanding the fundamental principles of tax accounting and compliance.",
      words: 1025,
      pages: 4,
      projectType: "case-study",
      subject: "accounting",
      academicLevel: "undergraduate",
      dateAdded: "2024-03-08",
      contentType: "User generated",
      level: "High School",
      language: "English",
      referenceList: false,
      formatting: "MLA",
      uploadedBy: "John Smith",
    },
    {
      id: "4",
      title: "Cost Accounting Methods Report",
      description:
        "Detailed examination of various cost accounting methods and their implementation.",
      words: 825,
      pages: 3,
      projectType: "report",
      subject: "accounting",
      academicLevel: "masters",
      dateAdded: "2024-03-07",
      contentType: "User generated",
      level: "Master's",
      language: "English",
      referenceList: true,
      formatting: "Harvard",
      uploadedBy: "Emily Johnson",
    },
    {
      id: "5",
      title: "Advanced Auditing Standards Thesis",
      description:
        "Study of auditing standards and best practices in the accounting profession.",
      words: 950,
      pages: 4,
      projectType: "thesis",
      subject: "accounting",
      academicLevel: "phd",
      dateAdded: "2024-03-06",
      contentType: "User generated",
      level: "Ph.D.",
      language: "English",
      referenceList: true,
      formatting: "Chicago",
      uploadedBy: "Michael Brown",
    },
    {
      id: "6",
      title: "International Accounting Standards Dissertation",
      description:
        "Overview of international accounting standards and their global impact.",
      words: 1100,
      pages: 4,
      projectType: "dissertation",
      subject: "accounting",
      academicLevel: "phd",
      dateAdded: "2024-03-05",
      contentType: "User generated",
      level: "Ph.D.",
      language: "English",
      referenceList: true,
      formatting: "Oxford",
      uploadedBy: "Sophia Davis",
    },
    {
      id: "7",
      title: "Corporate Financial Reporting Essay",
      description:
        "Analysis of corporate financial reporting requirements and practices.",
      words: 675,
      pages: 3,
      projectType: "essay",
      subject: "accounting",
      academicLevel: "high-school",
      dateAdded: "2024-03-04",
      contentType: "User generated",
      level: "High School",
      language: "English",
      referenceList: false,
      formatting: "MLA",
      uploadedBy: "James Wilson",
    },
    {
      id: "8",
      title: "Accounting Information Systems Research",
      description:
        "Understanding the role of information systems in modern accounting.",
      words: 900,
      pages: 4,
      projectType: "research",
      subject: "accounting",
      academicLevel: "masters",
      dateAdded: "2024-03-03",
      contentType: "User generated",
      level: "Master's",
      language: "English",
      referenceList: true,
      formatting: "Harvard",
      uploadedBy: "Isabella Thompson",
    },
  ];

  // Enhanced filter logic with proper type checking and debounce
  const filteredData = sampleData.filter((item) => {
    // Search query filter
    const matchesSearch =
      !searchQuery ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());

    // Project type filter
    const matchesProjectType =
      projectType === "all" || item.projectType === projectType;

    // Subject filter
    const matchesSubject = item.subject === subject;

    // Word count filter
    const matchesWordCount = item.words >= wordCount;

    // Academic level filter
    const matchesAcademicLevel =
      academicLevel === "any" || item.academicLevel === academicLevel;

    return (
      matchesSearch &&
      matchesProjectType &&
      matchesSubject &&
      matchesWordCount &&
      matchesAcademicLevel
    );
  });

  // Handle filter changes with animation
  const handleFilterChange = (
    type: "project" | "subject" | "academic" | "words",
    value: string | number
  ) => {
    setIsFiltering(true);

    switch (type) {
      case "project":
        setProjectType(value as string);
        break;
      case "subject":
        setSubject(value as string);
        break;
      case "academic":
        setAcademicLevel(value as string);
        break;
      case "words":
        setWordCount(value as number);
        break;
    }

    // Reset filtering state after a short delay
    setTimeout(() => setIsFiltering(false), 300);
  };

  // Reset all filters
  const handleResetFilters = () => {
    setIsFiltering(true);
    setProjectType("all");
    setAcademicLevel("any");
    setWordCount(275);
    setSubject("accounting");
    setTimeout(() => setIsFiltering(false), 300);
  };

  const handleViewDocument = (document: Document) => {
    onDocumentSelect(document);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Search Results Header */}
        {searchQuery && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Result for "{searchQuery}"
            </h2>
            <p className="text-purple-600 font-medium">
              {filteredData.length} results
            </p>
          </div>
        )}

        {/* Header */}
        {!searchQuery && (
          <div className="mb-8 flex justify-center items-center">
            <div className="text-purple-600 mr-2">
              <Image
                src="/Vector.png"
                alt="crown vector"
                width={50}
                height={50}
              />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">
              Find Writing Inspiration in Our Data Base
            </h1>
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Document Grid */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredData.map((item) => (
                <div
                  key={item.id}
                  className={`bg-white rounded-2xl shadow-sm p-6 transition-all duration-300 ${
                    isFiltering
                      ? "opacity-50 scale-95"
                      : "opacity-100 scale-100"
                  }`}
                >
                  <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
                  <p className="text-sm text-gray-600 mb-4">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
                      {
                        PROJECT_TYPES.find((pt) => pt.id === item.projectType)
                          ?.name
                      }
                    </span>
                    <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
                      {
                        ACADEMIC_LEVELS.find(
                          (al) => al.id === item.academicLevel
                        )?.name
                      }
                    </span>
                  </div>
                  <hr className="mb-4" />
                  <div className="flex justify-between items-center">
                    <div className="flex gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M19.5 3H4.5C3.4 3 2.5 3.9 2.5 5V19C2.5 20.1 3.4 21 4.5 21H19.5C20.6 21 21.5 20.1 21.5 19V5C21.5 3.9 20.6 3 19.5 3ZM19.5 19H4.5V5H19.5V19Z"
                            fill="currentColor"
                          />
                          <path
                            d="M6.5 7H17.5V9H6.5V7ZM6.5 11H17.5V13H6.5V11ZM6.5 15H13.5V17H6.5V15Z"
                            fill="currentColor"
                          />
                        </svg>
                        <span>Words: {item.words}</span>
                      </div>
                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z"
                            fill="currentColor"
                          />
                          <path
                            d="M7 7H17V9H7V7ZM7 11H17V13H7V11ZM7 15H13V17H7V15Z"
                            fill="currentColor"
                          />
                        </svg>
                        <span>Pages: {item.pages}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => {handleViewDocument(item)
                        window.scrollTo({
                          top: 0,
                          behavior: 'smooth',
                        })
                      }}
                      className="text-purple-600 hover:text-purple-700 font-medium"
                    >
                      View Document
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {filteredData.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  No results match your filters
                </p>
                <button
                  onClick={handleResetFilters}
                  className="mt-4 text-purple-600 hover:text-purple-700 font-medium"
                >
                  Reset all filters
                </button>
              </div>
            )}
          </div>

          {/* Filter Panel */}
          <div className="lg:w-1/3 bg-white p-6 border-l border-gray-200 max-h-fit rounded-2xl">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Type of work
                </label>
                <div className="relative">
                  <select
                    className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 rounded-md appearance-none"
                    value={projectType}
                    onChange={(e) =>
                      handleFilterChange("project", e.target.value)
                    }
                  >
                    {PROJECT_TYPES.map((type) => (
                      <option key={type.id} value={type.id}>
                        {type.name}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <div className="relative">
                  <select
                    className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 rounded-md appearance-none"
                    value={subject}
                    onChange={(e) =>
                      handleFilterChange("subject", e.target.value)
                    }
                  >
                    {SUBJECTS.map((subj) => (
                      <option key={subj.id} value={subj.id}>
                        {subj.name}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Academic Level
                </label>
                <div className="relative">
                  <select
                    className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 rounded-md appearance-none"
                    value={academicLevel}
                    onChange={(e) =>
                      handleFilterChange("academic", e.target.value)
                    }
                  >
                    {ACADEMIC_LEVELS.map((level) => (
                      <option key={level.id} value={level.id}>
                        {level.name}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Words
                </label>
                <div className="mt-2">
                  <input
                    type="range"
                    min="275"
                    max="550000"
                    value={wordCount}
                    onChange={(e) =>
                      handleFilterChange("words", Number(e.target.value))
                    }
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>From {wordCount}</span>
                    <span>To 550,000</span>
                  </div>
                </div>
              </div>

              <div className="text-sm text-gray-600">1 Page = 275 Words</div>

              <button
                  onClick={() => {
                    if (!isDefaultFilters) {
                      // Reset filters
                      setProjectType("all");
                      setSubject("accounting");
                      setAcademicLevel("any");
                    }
                    // If it's Apply, you could trigger filter logic here too (optional)
                  }}
                className="w-full bg-[#A414D5] hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-full transition duration-150 ease-in-out"
              >
               
                {isDefaultFilters ? "Apply" : "Reset Filters"}
              </button>

            </div>
          </div>
        </div>
        <Pagination  currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange} />
      </div>
    </div>
  );
}
