import { Star } from 'lucide-react';

// Opportunity Card Component
const OpportunityCard = ({ type, title, description, price, rating, reviews, poster, category }) => {
  const badgeStyles = {
    gig: "bg-orange-100 text-orange-600",
    contract: "bg-blue-100 text-blue-600"
  };
  
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
      <div className="p-5">
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${badgeStyles[type]}`}>
          {type === 'gig' ? 'One-Time Gig' : 'Contract'}
        </span>
        <h3 className="text-xl font-bold mt-4 mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{description}</p>
        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <span className="text-2xl font-bold text-orange-600">{price}</span>
          <span className="text-yellow-500 flex items-center gap-1">
            <Star size={16} fill="currentColor" />
            <span className="text-gray-700 font-medium">{rating}</span>
            <span className="text-gray-400 text-sm">({reviews})</span>
          </span>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <small className="text-gray-500">By {poster}</small>
        </div>
      </div>
    </div>
  );
};
export default OpportunityCard;