import SearchBar from "../Components/SearchBar";

export default function HeroSection({ userType, onUserTypeChange }) {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Connect, Work, and Grow
            <span className="block text-blue-600">Locally & Digitally</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Nigeria's premier marketplace for freelancers and local service providers. 
            Find opportunities or hire talent for your next project.
          </p>

          {/* User Type Toggle */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg p-1 shadow-md inline-flex">
              <button
                onClick={() => onUserTypeChange('client')}
                className={`px-6 py-3 rounded-lg font-medium transition ${
                  userType === 'client' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                I'm Hiring
              </button>
              <button
                onClick={() => onUserTypeChange('provider')}
                className={`px-6 py-3 rounded-lg font-medium transition ${
                  userType === 'provider' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                I'm Working
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <SearchBar usertype={userType} />
        </div>
      </div>
    </section>
  );
};
