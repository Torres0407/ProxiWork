import { DollarSign, MapPin, Users } from "lucide-react";

export default function JobCard({ title, category, budget, location, postedTime, proposals, description, skills }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
      <div className="flex justify-between items-start mb-4">
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
          category === 'Digital' 
            ? 'bg-purple-100 text-purple-700' 
            : 'bg-green-100 text-green-700'
        }`}>
          {category}
        </span>
        <span className="text-gray-500 text-sm">{postedTime}</span>
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {skills.map((skill, index) => (
          <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
            {skill}
          </span>
        ))}
      </div>

      <div className="border-t pt-4 space-y-2">
        <div className="flex items-center text-gray-700">
          <DollarSign size={16} className="mr-2 text-gray-400" />
          <span className="font-semibold">{budget}</span>
        </div>
        <div className="flex items-center text-gray-700">
          <MapPin size={16} className="mr-2 text-gray-400" />
          <span>{location}</span>
        </div>
        <div className="flex items-center text-gray-700">
          <Users size={16} className="mr-2 text-gray-400" />
          <span>{proposals} proposals</span>
        </div>
      </div>

      <button className="w-full mt-4 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-medium">
        Apply Now
      </button>
    </div>
  );
};
