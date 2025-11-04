import { MapPin, Search } from "lucide-react";

export default function SearchBar ({ userType }) {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-2 flex flex-col md:flex-row gap-2">
      <div className="flex-1 flex items-center px-4 border-r border-gray-200">
        <Search className="text-gray-400 mr-2" size={20} />
        <input
          type="text"
          placeholder={userType === 'client' ? "Search for services..." : "Search for jobs..."}
          className="w-full outline-none text-gray-700"
        />
      </div>
      <div className="flex-1 flex items-center px-4 border-r border-gray-200">
        <MapPin className="text-gray-400 mr-2" size={20} />
        <input
          type="text"
          placeholder="Location"
          className="w-full outline-none text-gray-700"
        />
      </div>
      <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-medium">
        Search
      </button>
    </div>
  );
};