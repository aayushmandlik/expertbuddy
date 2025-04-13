import { ChevronDown, ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import AuthModal from "./AuthModal";
import Image from "next/image";
import Cards from "./Cards"

interface DocumentViewProps {
  document: Document;
  onBack: () => void;
  searchQuery: string;
  onDocumentSelect: (doc: Document) => void;
}

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

export default function DocumentView({ document, onBack, searchQuery, onDocumentSelect }: DocumentViewProps) {
  const [showAnswers, setShowAnswers] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { isAuthenticated, user } = useAuth();

  const handleUnlockClick = () => {
    if (!isAuthenticated) {
      setShowAuthModal(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8 relative">
      {/* Blurred Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm opacity-10"
        style={{ backgroundImage: "url(/document-bg.jpg)" }}
      />

      <div className="max-w-7xl mx-auto relative">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center text-purple-600 mb-6 hover:text-purple-700 transition-colors"
        >
          <ChevronLeft className="h-5 w-5" />
          <span>Back to Results</span>
        </button>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Document Content */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Document Header */}
              <div className="bg-[#A414D5] p-8 text-white">
                <h1 className="text-2xl font-bold mb-2">{document.title}</h1>
                <p className="text-purple-100">{document.description}</p>
              </div>

              {/* Document Content */}
              <div className="p-8">
                {/* Document Preview */}
                <div className="relative mb-8">
                  <div className="aspect-[3/4] bg-gray-50 rounded-lg p-6 relative overflow-hidden">
                    {!isAuthenticated && (
                      <div className="absolute inset-0 backdrop-blur-md bg-white/30 flex flex-col items-center justify-center z-10">
                        <div className="bg-white flex flex-col gap-5 justify-center items-center p-5 rounded-2xl">
                        <div>
                          <Image src="/doc.png" alt="doc" width={60} height={60} />
                        </div>
                        <h3 className="text-xl font-bold">
                          Sign Up To View The Full Document!
                        </h3>
                        <p className="text-gray-600 text-center max-w-sm px-4">
                          Get instant access to this document and thousands more
                          when you sign up
                        </p>
                        <button
                          onClick={handleUnlockClick}
                          className="bg-[#A414D5] text-white max-w-full px-24 py-3 rounded-full hover:bg-purple-700 transition-colors flex items-center gap-2"
                        >
                           <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                          Sign Up
                        </button>
                        </div>
                      </div>
                    )}
                    {/* Sample Document Content */}
                    <div className="h-full space-y-2">
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos nostrum maxime cum ipsum ex, fugit ad? Eos exercitationem asperiores autem sint enim. Sed neque voluptate ut dolor tempore quasi unde, iure magni maxime nesciunt accusantium sunt, id assumenda. At architecto ad nulla, ducimus harum itaque et necessitatibus. Totam corrupti nemo obcaecati perspiciatis dignissimos quia modi. Delectus neque, explicabo aut dicta cumque dolorum, eaque nostrum ab tenetur tempore rerum est! Maxime voluptatem quae suscipit exercitationem praesentium omnis tempore a, dolorem similique error eius deleniti nisi fuga illum adipisci harum sapiente porro nihil vitae cum quia? Dolor assumenda beatae tempora pariatur labore ipsam quia eius, animi fuga quasi. Doloribus, numquam consequuntur unde delectus iusto pariatur provident consequatur est sequi ea obcaecati commodi quam aspernatur? Animi mollitia vel corporis consectetur sunt. Deserunt omnis delectus veritatis error minima perferendis ex voluptas. Laboriosam, labore dignissimos debitis dolorum nemo consectetur neque fugiat quibusdam assumenda quas, sit saepe ipsam consequuntur amet officia iste maiores minus doloremque recusandae esse, sint inventore hic sunt. Ipsam, voluptate accusantium ut id quaerat dolores eum fugit unde hic! Accusamus quod temporibus laudantium totam placeat. Cumque qui dolorum excepturi, odit porro totam inventore amet odio harum, nesciunt rem! Molestiae, molestias. Qui animi reiciendis sunt, officiis quo nostrum voluptates enim odio dolorum, minus aliquam magni atque deserunt eveniet? Tempore cumque perspiciatis et consectetur hic ut odit necessitatibus iste porro accusantium! Qui veniam odio quisquam hic magnam dolor numquam? Nihil ab cumque sed aliquid rem recusandae, quibusdam deserunt. Ipsa facere animi minus recusandae incidunt vel earum, quasi delectus numquam. Sed iure reprehenderit odit. Vel, labore incidunt rerum commodi minima quis assumenda. Dolorem cupiditate sequi, sunt tempora officia maiores exercitationem quas corrupti, in tempore pariatur saepe voluptatum ipsum quaerat quis laborum magnam fugit est molestiae! Reiciendis, velit odio ipsa at animi expedita tempore minus placeat tenetur officiis repudiandae eaque harum distinctio commodi iusto deserunt? Pariatur, vero quisquam provident praesentium veritatis esse sint natus velit necessitatibus quam ipsa, nostrum, labore consectetur. </p>
                    </div>
                  </div>
                </div>

                {/* Answer Section */}
                <div className="border-t border-gray-200 pt-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold">Answers (2)</h2>
                    <button
                      onClick={() =>
                        isAuthenticated && setShowAnswers(!showAnswers)
                      }
                      className={`text-purple-600 ${
                        !isAuthenticated && "opacity-50 cursor-not-allowed"
                      }`}
                    >
                      <ChevronDown
                        className={`h-5 w-5 transform transition-transform ${
                          showAnswers ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {showAnswers && isAuthenticated && (
                    <div className="space-y-6">
                      {[1, 2].map((answer) => (
                        <div key={answer} className="bg-gray-50 rounded-lg p-6">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-purple-100" />
                              <div>
                                <h3 className="font-medium">Corey Stanton</h3>
                                <p className="text-sm text-gray-500">
                                  3 years ago
                                </p>
                              </div>
                            </div>
                            <button className="text-purple-600 border border-purple-600 px-4 py-1 rounded-full text-sm hover:bg-purple-50 transition-colors">
                              Chat
                            </button>
                          </div>
                          <div className="bg-white rounded-lg p-4 mb-4">
                            <p className="text-gray-600">
                              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est minima ratione, corrupti cupiditate quasi aliquid tempora nesciunt, voluptatum exercitationem eos rem ex dolor dolorum odio aspernatur quisquam suscipit! Rem, officiis?
                            </p>
                          </div>
                          <div className="flex gap-2">
                            <button className="bg-[#A414D5] text-white px-4 py-2 rounded-full text-sm hover:bg-purple-700 transition-colors">
                              Plagiarism Check
                            </button>
                            <button className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 transition-colors">
                              Purchase $50
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {!isAuthenticated && (
                    <div className="text-center py-8">
                      <p className="text-gray-500 mb-4">
                        Sign in to view answers
                      </p>
                      <button
                        onClick={handleUnlockClick}
                        className="text-purple-600 font-medium hover:text-purple-700"
                      >
                        Sign In Now
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Metadata Panel */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-8">
              {/* Unlock Button */}
              <button
                onClick={handleUnlockClick}
                className="w-full bg-[#A414D5] text-white py-3 rounded-full hover:bg-purple-700 transition-colors mb-6 flex items-center justify-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {isAuthenticated ? "Unlocked" : "Unlock"}
              </button>

              {/* Features */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-gray-700">
                  <svg
                    className="w-5 h-5 text-purple-600"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 2L2 7L12 12L22 7L12 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 17L12 22L22 17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 12L12 17L22 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Only on Studyloop</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <svg
                    className="w-5 h-5 text-purple-600"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M9 12L11 14L15 10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                  <span>Original Template</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <svg
                    className="w-5 h-5 text-purple-600"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M4 17V19C4 19.5304 4.21071 20.0391 4.58579 20.4142C4.96086 20.7893 5.46957 21 6 21H18C18.5304 21 19.0391 20.7893 19.4142 20.4142C19.7893 20.0391 20 19.5304 20 19V17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 11L12 16L17 11"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 4V16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Downloadable</span>
                </div>
              </div>

              {/* Document Metadata */}
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Content Type:</span>
                  <span className="font-medium">{document.contentType}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Words:</span>
                  <span className="font-medium">{document.words}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Pages:</span>
                  <span className="font-medium">{document.pages}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Level:</span>
                  <span className="font-medium">{document.level}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Language:</span>
                  <span className="font-medium">{document.language}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Reference List:</span>
                  <span className="font-medium">
                    {document.referenceList ? "Yes" : "No"}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Formatting:</span>
                  <span className="font-medium">{document.formatting}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Uploaded by:</span>
                  <span className="font-medium">{document.uploadedBy}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
           <div className="mt-10 mb-10 flex justify-center items-center">
              <div className="text-purple-600 mr-2">
                     <Image src="/Vector.png" alt="crown vector" width={50} height={50}/>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Documents by Type</h2>
            </div>
            <Cards searchQuery={searchQuery}
              onDocumentSelect={onDocumentSelect} />
        </div>
      </div>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />
    </div>
  );
}
