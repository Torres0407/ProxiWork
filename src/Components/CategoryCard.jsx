// Category Card Component
const CategoryCard = ({ icon: Icon, name, gradient }) => {
  return (
    <div 
      className={`${gradient} text-white p-8 rounded-xl text-center cursor-pointer transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl`}
    >
      <Icon size={32} className="mx-auto mb-3" />
      <p className="font-semibold">{name}</p>
    </div>
  );
};
export default CategoryCard;