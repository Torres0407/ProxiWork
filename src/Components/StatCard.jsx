// ============= STAT CARD COMPONENT =============
const StatCard = ({ icon: Icon, value, label }) => {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-3">
        <div className="bg-blue-100 p-3 rounded-full">
          <Icon className="text-blue-600" size={24} />
        </div>
      </div>
      <h3 className="text-3xl font-bold text-gray-900 mb-1">{value}</h3>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};
export default StatCard;