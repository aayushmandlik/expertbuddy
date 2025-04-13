import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { useAuth } from "../context/AuthContext"; // adjust the path accordingly
import { Button, Menu } from "@headlessui/react"; // optional, but helps for dropdown UI
import { UserCircleIcon } from "@heroicons/react/24/solid"; // or any icon you want
import { useState } from "react";
import AuthModal from "./AuthModal";

interface HeroProps {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  selectedDocument: Document | null;
}

interface Document {
  id: string;
  title: string;
  description: string;
  projectType: string;
  subject: string;
}

export default function Hero({
  searchQuery,
  setSearchQuery,
  selectedDocument,
}: HeroProps) {
  // Common navigation bar component
  const NavigationBar = () => {
      const [showAuthModal, setShowAuthModal] = useState(false);
    const { user, logout, isAuthenticated } = useAuth();
    const handleUnlockClick = () => {
      if (!isAuthenticated) {
        setShowAuthModal(true);
      }
    };
  
    return (
      <div className="bg-white rounded-full py-3 px-6 flex items-center justify-between mb-16">
        <div className="flex items-center">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="logo" width={30} height={30} />
            <span className="text-[#A414D5] font-extrabold text-2xl">BUDDY</span>
          </div>
        </div>
  
        <div className="flex items-center lg:gap-6 gap-0">
          {!user ? (
            <>
              <Link href="#" className="text-gray-700 hover:text-purple-600 hidden lg:block">
                Find Tutor
              </Link>
              <Link href="#" className="text-gray-700 hover:text-purple-600 hidden lg:block">
                Become Tutor
              </Link>
              <Button onClick={handleUnlockClick} className="text-gray-700 hover:text-purple-600">
                Sign In
              </Button>
              <Link
                href="#"
                className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors hidden lg:block"
              >
                Get Started For Free
              </Link>
            </>
          ) : (
            <>
                    {/* Navigation Links */}
      <div className="flex items-center space-x-6">
        <a href="#" className="text-gray-600 hover:text-gray-800 hidden lg:block">StudyBank</a>
        <a href="#" className="text-gray-600 hover:text-gray-800 hidden lg:block">Find Tutor</a>
        <a href="#" className="text-gray-600 hover:text-gray-800 hidden lg:block">Homework</a>
        <div className="flex items-center text-gray-400 border border-gray-300 rounded-md px-2 py-1 hidden lg:block">
          <span className="text-orange-500">$</span>
          <span className="ml-1">0 USD</span>
        </div>
      </div>
      
      {/* Right Section */}
      <div className="flex items-center gap-10">
        <button className="bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm font-medium hidden lg:block">
          Refer a Friend
        </button>
        
        <div className="flex items-center space-x-1 text-gray-600 hidden lg:block">
          <span>English, USD</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <div className="relative group">
              <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold cursor-pointer">
                {user.name.charAt(0)}
              </div>
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                <button
                  onClick={logout}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            </div>
      </div>            
            </>
          )}
        </div>
        <AuthModal
                isOpen={showAuthModal}
                onClose={() => setShowAuthModal(false)}
              />
      </div>
    );
  };
  

  if (selectedDocument) {
    return (
      <div className="relative bg-[#A414D5] bg-[url('/your-pattern.png')] bg-blend-multiply bg-no-repeat bg-cover bg-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 relative">
          <NavigationBar />

          <div className="py-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-4xl">
              {selectedDocument.title}
            </h1>
            <div className="flex items-center gap-8 text-purple-100">
              <div className="flex items-center gap-2">
                <span className="opacity-80">Document Type:</span>
                <span className="font-medium capitalize">
                  {selectedDocument.projectType}
                </span>
              </div>
              <div className="w-2 h-2 bg-purple-300 rounded-full opacity-50" />
              <div className="flex items-center gap-2">
                <span className="opacity-80">Subject Area:</span>
                <span className="font-medium capitalize">
                  {selectedDocument.subject}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#A414D5] bg-[url('/pattern.png')] bg-blend-multiply bg-no-repeat bg-cover bg-center bg-gradient-to-r from-[#ffffff] to-[#ffffff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <NavigationBar />

        {/* Main Content */}
        <div className="flex justify-between md:flex-row flex-col gap-8 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Accounting Homework
              <br />
              Samples & Study Documents
            </h1>
            <p className="text-xl mb-8">
              Get Access To Our Online Database Of Accounting Writing Samples.
            </p>

            {/* Search Bar */}
<div className="relative">
  <div className="bg-white rounded-full flex items-center overflow-hidden">
    
    {/* Icon and Input Container */}
    <div className="flex-grow ml-5 p-2 relative">
      {/* Pure Tailwind Search Icon */}
      <div className="absolute left-2 top-1/2 transform -translate-y-1/2 pointer-events-none flex items-center justify-center">
        <div className="w-4 h-4 border-2 border-gray-400 rounded-full"></div>
        <div className="w-2 h-0.5 bg-gray-400 rotate-35 origin-top-left mt-[10px] ml-[0px]"></div>
      </div>

      <input
        type="text"
        placeholder="Find any type of work, topic, etc."
        className="w-full py-4 pl-10 pr-2 focus:outline-none text-gray-700 placeholder-gray-400"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>

    <button className="bg-gray-900 text-white px-8 py-4 mr-2 rounded-full hover:bg-gray-800 transition-colors">
      Search
    </button>
  </div>
</div>

          </div>

          <div className="flex justify-center md:justify-end">
            <Image
              src="/girls.png"
              alt="Students looking at laptop"
              width={500}
              height={400}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
