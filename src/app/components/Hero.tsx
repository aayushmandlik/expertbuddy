import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function Hero({ searchQuery, setSearchQuery }: HeroProps) {
  return (
    <div className="bg-[#A414D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        {/* Navigation Bar */}
        <div className="bg-white rounded-full py-3 px-6 flex items-center justify-between mb-16">
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zm-1 14h2v-3.34l.59.34c.37.21.78.34 1.21.4.01 0 .01-.01.02-.01.13.02.26.03.39.03.53 0 1.04-.11 1.53-.3.58-.23 1.1-.62 1.53-1.12.52-.62.85-1.39.93-2.2.02-.2.03-.4.03-.6 0-.92-.23-1.78-.64-2.53-.38-.7-.92-1.29-1.58-1.71-.6-.38-1.28-.63-2.01-.71-.23-.03-.47-.04-.71-.04-.24 0-.48.01-.71.04-.73.08-1.41.33-2.01.71-.66.42-1.2 1.01-1.58 1.71-.41.75-.64 1.61-.64 2.53 0 .2.01.4.03.6.08.81.41 1.58.93 2.2.43.5.95.89 1.53 1.12.49.19 1 .3 1.53.3.13 0 .26-.01.39-.03.01 0 .01.01.02.01.43-.06.84-.19 1.21-.4l.59-.34V16z" />
                </svg>
              </div>
              <span className="text-purple-600 font-bold text-2xl">BUDDY</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-gray-700 hover:text-purple-600">
              Find Tutor
            </Link>
            <Link href="#" className="text-gray-700 hover:text-purple-600">
              Become Tutor
            </Link>
            <Link href="#" className="text-gray-700 hover:text-purple-600">
              Sign In
            </Link>
            <Link
              href="#"
              className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
            >
              Get Started For Free
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
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
                <div className="flex-grow ml-5 p-2">
                  <input
                    type="text"
                    placeholder="Find any type of work, topic, etc."
                    className="w-full py-4 focus:outline-none text-gray-700"
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
