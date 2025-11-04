export default function CategoryCard() {
// ============= CATEGORY CARD COMPONEN =============
const CategoryCard = ({ name, count, icon: Icon }) => {
  return (
    <button className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center group">
      <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition">
        <Icon className="text-blue-600 group-hover:text-white transition" size={28} />
      </div>
      <h3 className="font-bold text-gray-900 mb-1">{name}</h3>
      <p className="text-gray-600 text-sm">{count} jobs</p>
    </button>
  );
};
}