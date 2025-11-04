import { Star } from 'lucide-react';
// ============= TESTIMONIAL CARD COMPONENT =============
const TestimonialCard = ({ name, role, rating, comment, avatar }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
          />
        ))}
      </div>
      <p className="text-gray-700 mb-4 italic">"{comment}"</p>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
          {avatar}
        </div>
        <div>
          <h4 className="font-bold text-gray-900">{name}</h4>
          <p className="text-gray-600 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};
export default TestimonialCard;