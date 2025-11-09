import { BarChart3, Code, Headset, Paintbrush, PenTool, Video } from 'lucide-react';
import CategoryCard from '../Components/CategoryCard';
// Categories Section Component
const CategoriesSection = () => {
  const categories = [
    { icon: Code, name: 'Web Development', gradient: 'bg-gradient-to-br from-orange-600 to-orange-500' },
    { icon: Paintbrush, name: 'Design', gradient: 'bg-gradient-to-br from-blue-900 to-blue-700' },
    { icon: PenTool, name: 'Writing', gradient: 'bg-gradient-to-br from-green-600 to-green-500' },
    { icon: Video, name: 'Video & Media', gradient: 'bg-gradient-to-br from-purple-600 to-purple-500' },
    { icon: BarChart3, name: 'Marketing', gradient: 'bg-gradient-to-br from-yellow-600 to-yellow-500' },
    { icon: Headset, name: 'Virtual Assistant', gradient: 'bg-gradient-to-br from-pink-600 to-pink-500' }
  ];

  return (
    <section id="categories" className="py-20 px-4 bg-white">
      <h2 className="text-4xl font-extrabold text-center mb-16 text-gray-900">
        Popular <span className="text-orange-600">Categories</span>
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map((category, index) => (
          <CategoryCard 
            key={index}
            icon={category.icon}
            name={category.name}
            gradient={category.gradient}
          />
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;